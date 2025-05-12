export interface Permission{
   id:number;
   subject:string;
   role:string;
   readRights:boolean,
   createRigthst:boolean,
   updateRights:boolean,
   deleteRights:boolean
}