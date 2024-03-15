import React from "react";
import Index from './Pages/Index';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Subjects from './Pages/Subjects';
import Dbms from './Pages/Dbms';
import Answerdbms from './Pages/Answerdbms';
import Daa from './Pages/Daa';
import Answerdaa from './Pages/Answerdaa';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {path:'/',element:<Index/>},
    {path:'/Register',element:<Register/>},
    {path:'/Login',element:<Login/>},
    {path:'/Subjects',element:<Subjects/>},
    {path:'/Dbms',element:<Dbms/>},
    {path:'/Answerdbms',element:<Answerdbms/>},
    {path:'/Daa',element:<Daa/>},
    {path:'/Answerdaa',element:<Answerdaa/>}
])
function App() {
     return <RouterProvider router={router} />
}
export default App;