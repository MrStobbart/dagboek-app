import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useState } from "react";
import "./App.css";
import EditEntry from "./EditEntry";
import Entries from "./Entries";
import Navigation, { Page } from "./Navigation";

function App() {
  const [activePage, setActivePage] = useState<Page>("today");

  console.log("re-render");

  return (
    <Layout>
      <Header>
        <Navigation activePage={activePage} setActivePage={setActivePage} />
      </Header>
      <Content>
        {activePage === "today" && <EditEntry />}
        {activePage === "all-days" && <Entries />}
      </Content>
    </Layout>
  );
}

export default App;
