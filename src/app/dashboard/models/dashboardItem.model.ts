export interface DashboardItem{
    id: number;
    itemName: string;
    columnNumber: number;
    itemCount?: number;
    color?:string;
    url:string;
    icon:string;
    visible:boolean;
}