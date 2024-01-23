export interface Playload {
  mccCode: string;
  billId: string;
  amount: number;
  expired: string;
}

export interface Data {
  amount: number;
  billid: string;
  cur: string;
  date: number;
  detail?: string | null;
  from: {
    acc: string;
    firstname: string;
    lastname: string;
    gender: string;
    pname: string;
  };
  mpid: string;
  to: {
    acc: string;
    poin_main: boolean;
    department: string;
    firstname: string;
    lastname: string;
    gender: string;
    pname: string;
  };
  tst: string;
  tsid: string;
}
