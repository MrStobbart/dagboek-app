import { Menu } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";

export type Page = "today" | "all-days";

const items: ItemType[] = [
  { label: "Today", key: "today" },
  { label: "All days", key: "all-days" },
];

export type NavigationProps = {
  activePage: Page;
  setActivePage: (page: Page) => void;
};

export default function Navigation({
  activePage,
  setActivePage,
}: NavigationProps) {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={[activePage]}
      items={items}
      onSelect={({ key }) => {
        setActivePage(key as Page);
      }}
    />
  );
}
