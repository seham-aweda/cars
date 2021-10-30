import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from "./components/homepage";
import CarsPIc from "./components/cars";
import Employees from"./components/Employees"
function App() {
  const [empl,setEmpl]=React.useState([])
  const GetFromChild=(val)=>{
    setEmpl(val)
    console.log(empl)
  }

  return (
    <div className="App">

      <Router >
        <div className={"father"}>
          <nav style={{top:'0',position:'fixed'}} >
            <ul className={"list"}>
              <li>
                <Link style={{color:"antiquewhite"}} to="/" ><b><i>HomePage</i></b></Link>
              </li>
              <li>
                <Link style={{color:"antiquewhite"}} to="/Employees" ><b><i>Employees</i></b></Link>
              </li>
              <li>
                <Link style={{color:"antiquewhite"}} to="/cars" ><b><i>Cars</i></b></Link>
              </li>
              <li>
                <Link style={{color:"antiquewhite"}} to="/pick-a-car" ><b><i>Pick A Car</i></b></Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/cars">
             <CarsPIc data={empl}/>
            </Route>
            <Route path="/Employees">
            <Employees data={GetFromChild}/>
            </Route>
            <Route path="/pick-a-car">
            kfff
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
      {console.log(empl)}

    </div>

  );
}

export default App;
