import { Collapse } from "antd";
import React from "react";
import { mockDiaryEntries } from "./mockDiaryEntries";

const { Panel } = Collapse;

export default function Entries() {
  const entries = mockDiaryEntries;
  return (
    <Collapse defaultActiveKey={["1"]}>
      {entries.map((entry, index) => (
        <Panel header={entry.title} key={index}>
          <p>{entry.content}</p>
        </Panel>
      ))}
    </Collapse>
  );
}
