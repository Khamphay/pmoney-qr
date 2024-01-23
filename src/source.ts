import { crc16xmodem } from "crc";
import { Playload } from "./model";
/**
 *
 * @param targetCode Your can get the taget code from pmoney merchant webhook
 * @param payload Include:
 *  { @mccCode Get the mccCode from pmoney merchant webhook
 *    @billId Is bill id of this QR or Transaction generate by user
 *    @amount Is amount of transfer
 *    @expired Is the time of this QR has expired. 1 Hour = ```'1h'``` or 10 Minutes= ```'10m'```
 *  }
 * @returns qrcode as type string
 *
 * @Example 
 *
 * ```ts
  import {genQRCode} from 'pmoney-qr'

  const result = await genQRCode("McTagget1234", {
      mccCode: "1234",
      billId: Date.now().toString(),
      amount: 1000,
      expired: "10m"
  };

  console.log(result);
 * ```
 */

function genQRCode(targetCode: string, payload: Playload): string | null {
  try {
    const amount = payload.amount ? payload.amount.toString() : null;
    let qr_expired: string = "";
    const now = new Date();
    const leg = payload.expired.length;
    const exp = parseInt(payload.expired.substring(0, leg - 1));
    const unit = payload.expired.substring(leg - 1, leg).toLowerCase();
    if (unit === "h") {
      qr_expired = now.setHours(now.getHours() + exp).toString();
    } else if (unit === "m") {
      qr_expired = now.setMinutes(now.getMinutes() + exp).toString();
    } else {
      throw new Error("Expired must include only `h` or `m`.");
    }
    const billId = payload.billId;
    const aid = "A005266284662577";
    const iin = "12345678";

    var data = [
      f("00", "01"),
      f("01", amount ? "12" : "11"),
      f(
        "38",
        serialize([
          f("00", aid),
          f("01", iin),
          f("02", "002"),
          f("03", targetCode),
          qr_expired && f("04", qr_expired),
        ])
      ),
      payload.mccCode && f("52", payload.mccCode),
      f("53", "418"),
      amount && f("54", amount),
      billId && f("62", serialize([f("01", billId)])),

      f("58", "LA"),
    ];
    var dataToCrc = serialize(data) + "63" + "04";
    data.push(f("63", formatCrc(crc16xmodem(dataToCrc, 0xffff))));
    return serialize(data);
  } catch (error) {
    throw error as Error;
  }
}

function f(id: string, value: any) {
  return [id, ("00" + value.length).slice(-2), value].join("");
}

function serialize(xs: any): string | null {
  return xs
    .filter(function (x: any) {
      return x;
    })
    .join("");
}

function formatCrc(crcValue: any) {
  return ("0000" + crcValue.toString(16).toUpperCase()).slice(-4);
}

export { genQRCode };
