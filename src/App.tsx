import { useState } from "react";
import "./App.css";
import EditEntry from "./EditEntry";
import Entries from "./Entries";
import Navigation, { Page } from "./Navigation";

function App() {
  const [activePage, setActivePage] = useState<Page>("today");

  return (
    <div className="App">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      {activePage === "today" && <EditEntry />}
      {activePage === "all-days" && <Entries />}
    </div>
  );
}

export default App;
