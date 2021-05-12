// import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Company from "./pages/CompanyPage/Company";
import Header from "./components/Header/Header";
import People from "./components/People/People";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <People />
      <Switch>
        <Route path="/" component={Company} />
      </Switch>
    </Router>
  );
}

export default App;
