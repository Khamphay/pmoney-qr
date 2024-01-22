export interface Playload {
  mccCode: string;
  billId: string;
  amount: number;
  expired: string;
}

export interface Data {
  detail: {
    amount: number;
    balance: number;
    billid: string;
    cur: string;
    date: number;
    detail?: string | null;
    from: {
      acc: string;
      pid: string;
      uid: string;
      wallet: string;
      firstname: string;
      lastname: string;
      gender: string;
      pf: string;
      pname: string;
      plogo: string;
      type: string;
    };
    mpid: string;
    to: {
      acc: string;
      pid: string;
      uid: string;
      wallet: string;
      poin_main: boolean;
      department: string;
      mlogo: string;
      firstname: string;
      lastname: string;
      gender: string;
      pname: string;
      plogo: string;
      type: string;
    };
    tsgroup: string;
    tst: string;
  };
  tsid: string;
}
