import {DashboardItem} from '../models/dashboardItem.model'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Students',
      itemCount:0,
      color:'#eb4040ff',
      columnNumber: 1,
      url:'/studentsInfo',
      visible:true
    },
    {
      id:2,
      itemName:'Teachers',
      columnNumber: 2,
      itemCount:0,
      color:'#b235ecff',
      url:'/teachers',
      visible:true
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 3,
      itemCount:0,
      color:'#1eb918ff',
      url:'/courses',
      visible:true
    },
    {
      id:4,
      itemName:'Exams',
      columnNumber: 3,
      itemCount: 0,
      color:'#eee460ff',
      url:'/exams',
      visible:true
    },
    {
      id:5,
      itemName:'Teachers Present',
      columnNumber: 2,
      itemCount: 0,
      color:'#b235ecff',
      url:'/users',
      visible:true
    },
     {
      id:6,
      itemName:'Students Present',
      columnNumber: 1,
      itemCount: 0,
      color:'#eb4040ff',
      url:'/studentsPresent',
      visible:true
    },
     {
      id:7,
      itemName:'Users',
      columnNumber: 1,
      itemCount: 0,
      color:'#1bbcc2ff',
      url:'/users',
      visible:true
    },
]