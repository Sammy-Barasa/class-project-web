import React from 'react';
import './App.css';
import ClassList from "./Components/ClassList"
import Navigation from "./Components/Navigation"
import RightBar from "./Components/RightBar"
import AddClass from "./Components/AddClass"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation/>
        </div>
        <div className="main">
          <div className="main-left">
          </div>
          <div className="main-center">
            
                <Switch>
                  <Route path="/classes">
                    <ClassList/>
                  </Route>
                  <Route path="/add_class">
                    <AddClass/>
                  </Route>
                  <Route path="/">
                    <ClassList/>
                  </Route>
                </Switch>
            
          </div>
          <div className="main-right">
            <h2>Right Bar</h2>
            <RightBar/>
          </div>
        </div>
     </Router>
    </div>
  );
}

export default App;
