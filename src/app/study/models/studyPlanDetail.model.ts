export interface StudyPlanDetail{
    id:number;
    start:Date;
    end:Date;
    goalDescription:string;
    status:number;
    remarks:string;
    studyObjectiveArchievedInProcent:number;
    studyPlanId:number;
    courseId:number;
}

//studyplan kan ook linken bevatten naar paginas met lessen of oefeninge of huiswerk
//meerdere taken zijn per dag of week of moeten voor een bepaalde tijd af zijn.
//instelbaar voor een ganse klas