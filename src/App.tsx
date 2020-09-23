import * as React from "react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './components/Home';

interface Props {}

const App: React.FC<Props> = (props) => {
  const [navIsOpen, setNavIsOpen]: any = React.useState(
    JSON.parse(String(localStorage.getItem("navIsDocked"))) || false
  );
  const [navIsDocked, setNavIsDocked]: any = React.useState(
    JSON.parse(String(localStorage.getItem("navIsDocked"))) || false
  );

  return (
    <div className="App">
      <Route>
        <Switch>
          <Route>
            <SideNav
              setNavIsOpen={(isOpen: boolean) => setNavIsOpen(isOpen)}
              setNavIsDocked={(isDocked: boolean) => setNavIsDocked(isDocked)}
              navIsDocked={navIsDocked}
              navIsOpen={navIsOpen}
            />
            <TopNav
              setNavIsOpen={(isOpen: boolean) => setNavIsOpen(isOpen)}
              setNavIsDocked={(isDocked: boolean) => setNavIsDocked(isDocked)}
              navIsDocked={navIsDocked}
              navIsOpen={navIsOpen}
            />

            <Route exact component={Home} path="/home" />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Route>
        </Switch>
      </Route>
    </div>
  );
};

export default App;
