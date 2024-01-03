import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
  {path: '/about', element: <About/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostIdPage/>},
  {path: '/login', element: <Navigate to="/posts" replace />},
  {path: '*', element: <Error/>},
]

export const publicRoutes = [
  {path: '/login', element: <Login/>},
  {path: '*', element: <Navigate to="/login" replace />},
]