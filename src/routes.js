// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./App";
import Home from "./Home";
import Contact from "./Contact";
import Error404 from "./Error404";
/* El componente Switch se encarga de hacer el transpasa para cada router*/

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contacto" component={Contact} exact />
      <Route component={Error404} />
      {/*
            La pagina de Error debe de ir al final
      */}
    </Switch>
  </App>
);

export default AppRoutes;
