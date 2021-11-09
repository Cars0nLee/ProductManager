import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./views/Main"
import Detail from "./Components/Detail"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {

  return (
          <BrowserRouter>
          <Switch>
            <div className="App">
                <h2>Product Manager</h2>
            <br></br>
              <Route exact path="/api/product/:_id" component={Detail}/>
              <Route exact path="/" component={Main}/>
            </div>
            </Switch>
          </BrowserRouter>
  );
}

export default App;
