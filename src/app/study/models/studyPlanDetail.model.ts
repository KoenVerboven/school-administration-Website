import { DateSelectionModelChange } from "@angular/material/datepicker";

export interface StudyPlanDetail{
    id:number;
    startDateTime:Date;
    endDateTime:Date;
    studySubject:string;
    status:number;//kan null zijn
}

//studyplan kan ook linken bevatten naar paginas met lessen of oefeninge of huiswerk
//meerdere taken zijn per dag of week of moeten voor een bepaalde tijd af zijn.
//instelbaar voor een ganse klas