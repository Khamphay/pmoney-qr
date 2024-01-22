import {genQRCode} from 'pmoney-qr'

const result= genQRCode("ywo9N8g9BOjJ4UbFkim8o4UU9", {
    mccCode: "5221",
    billId: Date.now().toString(),
    amount: 1000,
    expired: "10m",
  });

  console.log(result);