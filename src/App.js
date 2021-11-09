import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./views/Main"
import Detail from "./Components/Detail"
import Update from "./Components/Update"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
          <BrowserRouter>
            <Switch>
              <div className="App">
                <Route exact path="/api/product/:_id" component={Detail}/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/api/edit/:_id" component={Update}/>
              </div>
            </Switch>
          </BrowserRouter>
  );
}

export default App;
