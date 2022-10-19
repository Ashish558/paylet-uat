import "./css/bootstrap.min.css";
import "./css/bootstrap.css";

import "./css/style.css";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch></Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
