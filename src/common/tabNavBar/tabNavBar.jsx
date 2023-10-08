import React, { useState } from "react";
import "./style.css";

function Tab(props) {
  return (
    <div className={`tabs__content`}>
      {props.tab.children}
      {/* <p>{props.tab.text}</p> */}
    </div>
  );
}

function Navigation(props) {
  return (
    <ul className={`tabs__nav`}>
      {props.tabs.map((item) => (
        <li key={item.id} className={`tabs__item`}>
          <button
            className={`tabs__button ${
              props.activeTabId === item.id ? "active" : ""
            }`}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Tabs(props) {
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

  const activeTab = React.useMemo(
    () => props.tabs.find((tab) => tab.id === activeTabId),
    [activeTabId, props.tabs]
  );

  return (
    <div className={`tabs`}>
      <Navigation
        tabs={props.tabs}
        onNavClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <Tab tab={activeTab} />
    </div>
  );
}

export default Tabs;
