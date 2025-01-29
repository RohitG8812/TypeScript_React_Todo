import {  NavLink, useSearchParams } from "react-router-dom";

function TabNavigation() {
  const [searchParams] = useSearchParams();
  const todosFilter = searchParams.get("todos");
  return (
    <div className="tabs">
      <NavLink to={"/"} className={!todosFilter ? "activeTab" : "nonActive"}>
        All
      </NavLink>
      <NavLink
        to={"/?todos=active"}
        className={todosFilter === "active" ? "activeTab" : "nonActive"}
      >
        Active
      </NavLink>
      <NavLink
        to={"/?todos=completed"}
        className={todosFilter === "completed" ? "activeTab" : "nonActive"}
      >
        Completed
      </NavLink>
    </div>
  );
}

export default TabNavigation;
