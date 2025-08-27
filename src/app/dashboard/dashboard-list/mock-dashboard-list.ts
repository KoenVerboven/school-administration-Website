import {DashboardItem} from '../models/dashboardItem.model'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Students',
      itemCount:0,
      color:'#eb4040ff',
      columnNumber: 1,
      url:'/studentsInfo',
      icon:'bi bi-mortarboard',
      visible:true
    },
    {
      id:2,
      itemName:'Teachers',
      columnNumber: 2,
      itemCount:0,
      color:'#b235ecff',
      url:'/teachers',
      icon:'bi bi-person-workspace',
      visible:true
    },
    {
      id:3,
      itemName:'Courses',
      columnNumber: 3,
      itemCount:0,
      color:'#1eb918ff',
      url:'/courses',
      icon:'bi bi-card-list',
      visible:true
    },
    {
      id:4,
      itemName:'Exams',
      columnNumber: 3,
      itemCount: 0,
      color:'#aaaa47ff',
      url:'/exams',
      icon:'bi bi-card-list',
      visible:true
    },
    {
      id:5,
      itemName:'Teachers Present',
      columnNumber: 2,
      itemCount: 0,
      color:'#b235ecff',
      url:'/teacherpresence',
      icon:'bi bi-person-workspace',
      visible:true
    },
    {
      id:6,
      itemName:'Students Present',
      columnNumber: 1,
      itemCount: 0,
      color:'#eb4040ff',
      url:'/studentpresence',
      icon:'bi bi-mortarboard',
      visible:true
    },
    {
      id:7,
      itemName:'Users',
      columnNumber: 1,
      itemCount: 0,
      color:'#1bbcc2ff',
      url:'/users',
      icon:'bi bi-person-vcard',
      visible:true
    },
    {
      id:8,
      itemName:'Departments',
      columnNumber: 2,
      itemCount: 0,
      color:'#1507dbff',
      url:'/departments',
      icon:'bi bi-building',
      visible:true
    },
    {
      id:9,
      itemName:'Classes',
      columnNumber: 3,
      itemCount: 0,
      color:'#1507dbff',
      url:'/classes',
      icon:'bi bi-book',
      visible:true
    },
    {
      id:10,
      itemName:'Payments',
      columnNumber: 1,
      itemCount: 0,
      color:'#ed7014',
      url:'/payments',
      icon:'bi bi-cash-coin',
      visible:true
    },
]