import "./css/bootstrap.min.css";
import "./css/bootstrap.css";
// import "./css/mdb.css";
import "./css/style.css";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Header, Footer, Home } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
