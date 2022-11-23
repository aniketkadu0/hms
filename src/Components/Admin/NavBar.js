import { useState } from "react";
import { CustomSidenav } from "./CustomSidenav";

export default function Navbar() {

  const [activeKey, setActiveKey] = useState("1");
  const [openKeys, setOpenKeys] = useState(["3", "4"]);
  const [expanded, setExpand] = useState(true);

  return (
    <CustomSidenav
      activeKey={activeKey}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      onSelect={setActiveKey}
      expanded={expanded}
      onExpand={setExpand}
      appearance="inverse"
    />
  );
}
