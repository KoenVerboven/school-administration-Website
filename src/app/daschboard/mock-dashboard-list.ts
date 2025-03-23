import {DashboardItem} from '../../models/dashboardItem'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Students',
      columnNumber: 1,
      itemCount:577,
      color:'red',
      url:'/students'
    },
    {
      id:2,
      itemName:'Teachers',
      columnNumber: 1,
      itemCount:56,
      color:'red',
      url:'/teachers'
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 3,
      itemCount:99,
      color:'green',
      url:'/courses'
    },
    {
      id:4,
      itemName:'Exams',
      columnNumber: 2,
      itemCount:180,
      color:'blue',
      url:'/exams'
    },
    {
      id:5,
      itemName:'ExamResults',
      columnNumber: 2,
      itemCount:180,
      color:'blue',
      url:'/examresults'
    },
]