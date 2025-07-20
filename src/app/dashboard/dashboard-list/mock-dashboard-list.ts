import {DashboardItem} from '../models/dashboardItem.model'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Students',
      itemCount:0,
      color:'#fff',
      columnNumber: 1,
      url:'/studentsInfo',
      visible:true
    },
    {
      id:2,
      itemName:'Teachers',
      columnNumber: 1,
      itemCount:0,
      color:'#fff',
      url:'/teachers',
      visible:true
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 2,
      itemCount:0,
      color:'#fff',
      url:'/courses',
      visible:true
    },
    {
      id:4,
      itemName:'Exams',
      columnNumber: 3,
      itemCount: 0,
      color:'#fff',
      url:'/exams',
      visible:true
    },
    {
      id:5,
      itemName:'Users',
      columnNumber: 2,
      itemCount: 0,
      color:'#fff',
      url:'/users',
      visible:true
    },
]