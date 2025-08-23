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
      columnNumber: 1,
      itemCount:0,
      color:'#b235ecff',
      url:'/teachers',
      visible:true
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 2,
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
      itemName:'Users',
      columnNumber: 2,
      itemCount: 0,
      color:'#1bbcc2ff',
      url:'/users',
      visible:true
    },
]