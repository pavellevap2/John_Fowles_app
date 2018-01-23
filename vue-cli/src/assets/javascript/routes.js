import About from '../../components/about/About'
import Biography from '../../components/biography/Biography'
import Books from '../../components/books/Books'
import Home from '../../components/home/Home'
import Photo from '../../components/photo/Photo'
import Calendar from '../../components/other/calendar/Calendar'
import Tests from '../../components/other/tests/Tests'
import FirstTest from '../../components/other/tests/FitrstTest'
import SecondTest from '../../components/other/tests/SecondTest'
import NotFound from "../../components/NotFound"

export const routes=[
  {path:'/',component:Home},
  {path:'/biography',component:Biography},
  {path:'/books',component:Books},
  {path:'/about',component:About},
  {path:'/calendar',component:Calendar},
  {path:'/tests',component:Tests},
  {path:'/photo',component:Photo},
  {path:'/tests/1',component:FirstTest},
  {path:'/tests/2',component:SecondTest},
  { path: '*', component: NotFound }

];
