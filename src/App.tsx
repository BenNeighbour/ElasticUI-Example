import * as React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

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
      <SideNav
        setNavIsOpen={(isOpen: boolean) => setNavIsOpen(isOpen)}
        setNavIsDocked={(isDocked: boolean) => setNavIsDocked(isDocked)}
        navIsDocked={navIsDocked}
        navIsOpen={navIsOpen}
      />
      <div>
        <TopNav
          setNavIsOpen={(isOpen: boolean) => setNavIsOpen(isOpen)}
          setNavIsDocked={(isDocked: boolean) => setNavIsDocked(isDocked)}
          navIsDocked={navIsDocked}
          navIsOpen={navIsOpen}
        />
      </div>
    </div>
  );
};

export default App;
