## Install

```cmd
npm install pmoney-qr
```

## Usage

All functions of package `pmoney-qr`:

1. The ``genQRCode(target_code: string, payload: object)`` use for generate pmoney payment gateway QR.

Example:
```js
// TypeSripte
import { genQRCode } from "pmoney-qr";
// JavaSripte
const { genQRCode } = require("pmoney-qr");

const result = genQRCode("<target_code>", {
  mccCode: "<mcc_code>",
  billId: "<bill_id>",
  amount: 100,
  expired: "10m", // 10 minutes
});

console.log(result);
```

- There agrs: `<target_code>` and `<mcc_code>` are typ you can get it from pmoney merchant webhook after [register](https://app.pmoney.com) completed.
- `billId` is the bill use to reference this transaction, generate by user.
- `amount` is amount of you want to transfer.
- `expired` is the time of QR expired. If set for expire in 10 minutes `expired: "10m"` or two hours `expired: "2h"`


2. ``verifyPayload`` use for verify payload after pmoney hook to your api.

Example:
```js
    // TypeSripte
import { verifyPayload } from "pmoney-qr";
// JavaSripte
const { verifyPayload } = require("pmoney-qr");

const result = verifyPayload("<code>", "<respones_payload>");

console.log(result);

```

- ``code`` is Authorize code of pmoney webhook
- ``payload`` is the data of pmoney hook to your api
