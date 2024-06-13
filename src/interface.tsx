export interface IFormInput {
  id : number ;
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  address1: string;
  address2: string;
  relation: string;
  state: string;
  gender: string;
  city: string;
  phone: string;
  zipcode: string;
  sscBoard: string;
  sscYear: number;
  sscPer: number;
  hscBoard: string;
  hscYear: number;
  hscPer: number;
  bacBoard: string;
  bacYear: string;
  bacUni: string;
  bacPer: number;
  masBoard: string;
  masYear: string;
  masUni: string;
  masPer: number;
  ectc : number ;
  cctc : number ;
  notice : number ;
  location : string ;
  department : string ;
  hindi : boolean ;
  hread : boolean ;
  hwrite : boolean ;
  hspeak : boolean
  gujarati : boolean ;
  gread : boolean ;
  gwrite : boolean ;
  gspeak : boolean ;
  english : boolean ;
  eread : boolean ;
  espeak : boolean ;
  ewrite : boolean ;
  php : boolean ;
  php_lev : string ;
  oracle : boolean ;
  oracle_lev : string ;
  mysql : boolean ;
  mysql_lev : string ;
  laravel : boolean ;
  laravel_lev : string ;
  experience : {
    name : string,
    desig : string,
    fromdate : any,
    todate : any
  }[],
  reference : {
    relation : string,
    name : string ,
    phone : string
  }[]
}