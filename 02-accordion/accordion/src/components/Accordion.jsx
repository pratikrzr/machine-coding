import React, { useState } from "react";
import { panelsData } from "../Utils/data";

import ArrowDown from "../assets/icons/arrow-big-down-dash.svg";
import ArrowUp from "../assets/icons/arrow-big-up-dash.svg";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onShow = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  return (
    <>
      <h2>Accordion</h2>
      {panelsData.map((panels, index) => {
        return (
          <Panel
            title={panels.title}
            active={activeIndex === index}
            onShow={() => onShow(index)}
          >
            {panels.content}
          </Panel>
        );
      })}
    </>
  );
};

export default Accordion;

const Panel = ({ children, title, active, onShow }) => {
  return (
    <>
      <div className="accordion-container">
        <div className="accordion-header">
          <h3>{title}</h3>
          <button onClick={onShow} className="accordion-btn">
            <img src={active ? ArrowUp : ArrowDown} />
            {/* {active ? ">" : "v"} */}
          </button>
        </div>
        <div className="accordion-content">{active && <p>{children}</p>}</div>
      </div>
    </>
  );
};
