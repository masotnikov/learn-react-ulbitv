import {Route, Routes} from "react-router-dom";import {privateRoutes, publicRoutes} from "../router";
import {useContext} from "react";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <Loader/>
  }
  const renderRoutes = (routes) => {
    return routes.map(({path, element}) =>
      <Route key={path} path={path} element={element}/>
    )
  }

  return (
    <Routes>
      {isAuth ? renderRoutes(privateRoutes) : renderRoutes(publicRoutes)}
    </Routes>
  );
}

export default AppRouter;