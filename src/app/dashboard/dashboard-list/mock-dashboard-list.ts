import {DashboardItem} from '../models/dashboardItem.model'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Students',
      itemCount:0,
      columnNumber: 1,
      url:'/students',
      visible:true
    },
    {
      id:2,
      itemName:'Teachers',
      columnNumber: 1,
      itemCount:0,
      color:'red',
      url:'/teachers',
      visible:true
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 2,
      itemCount:0,
      color:'green',
      url:'/courses',
      visible:true
    },
    {
      id:4,
      itemName:'Exams',
      columnNumber: 3,
      itemCount: 0,
      color:'blue',
      url:'/exams',
      visible:true
    },
    {
      id:5,
      itemName:'ExamResults',
      columnNumber: 3,
      itemCount: 0,
      color:'blue',
      url:'/examresults',
      visible:true
    },
    {
      id:6,
      itemName:'Users',
      columnNumber: 1,
      itemCount: 0,
      color:'red',
      url:'/users',
      visible:true
    },
]