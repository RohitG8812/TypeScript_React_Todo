import React, { SetStateAction } from "react";

interface InputProps {
  activeTab: number;
  setActiveTab: React.Dispatch<SetStateAction<number>>;
}

function TabNavigation({ activeTab, setActiveTab }: InputProps) {
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => handleActiveTab(0)}
          className={activeTab === 0 ? "activeTab" : ""}
        >
          Add
        </button>
        <button
          onClick={() => handleActiveTab(1)}
          className={activeTab === 1 ? "activeTab" : ""}
        >
          Active
        </button>
        <button
          onClick={() => handleActiveTab(2)}
          className={activeTab === 2 ? "activeTab" : ""}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TabNavigation;
