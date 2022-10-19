// import "./css/bootstrap.min.css";
// import "./css/bootstrap.css";

import "./css/style.css";
import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Header, Footer, Home, Login } from "./components";
const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      {user && <Header />}

      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
