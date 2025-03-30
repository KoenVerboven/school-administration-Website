import {DashboardItem} from '../models/dashboardItem.model'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Students',
      itemCount:506,
      columnNumber: 1,
      url:'/students',
      visible:true
    },
    {
      id:2,
      itemName:'Teachers',
      columnNumber: 1,
      itemCount:56,
      color:'red',
      url:'/teachers',
      visible:true
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 3,
      itemCount:99,
      color:'green',
      url:'/courses',
      visible:true
    },
    {
      id:4,
      itemName:'Exams',
      columnNumber: 2,
      itemCount:20,
      color:'blue',
      url:'/exams',
      visible:true
    },
    {
      id:5,
      itemName:'ExamResults',
      columnNumber: 2,
      itemCount: 4,
      color:'blue',
      url:'/examresults',
      visible:true
    },
]