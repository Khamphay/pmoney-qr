// import jwt from "jsonwebtoken";
// import { Data } from "./model";
// /**
//  * 
//  * @param code Is code for verify payload, get from pmoney after registed wehook.
//  * @param payload Is the request data from pmoney to your webhook
//  * @returns Object
//  */
// function verifyPayload(code: string, payload: string): Data {
//   try {
//     const decode = jwt.verify(payload, code);
//     return decode as Data;
//   } catch (error) {
//     throw error as Error;
//   }
// }

// export { verifyPayload };
