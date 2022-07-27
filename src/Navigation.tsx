import { Button, Space } from "antd";

export type Page = "today" | "all-days";

export type NavigationProps = {
  activePage: Page;
  setActivePage: (page: Page) => void;
};

export default function Navigation({
  activePage,
  setActivePage,
}: NavigationProps) {
  return (
    <Space>
      <Button
        type={activePage === "today" ? "primary" : "default"}
        onClick={() => {
          setActivePage("today");
        }}
      >
        Today
      </Button>
      <Button
        type={activePage === "all-days" ? "primary" : "default"}
        onClick={() => {
          setActivePage("all-days");
        }}
      >
        All days
      </Button>
    </Space>
  );
}
