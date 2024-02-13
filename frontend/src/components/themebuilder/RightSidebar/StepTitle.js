import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const StepTitle = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        StepTitle: {
          BkgColor: "#ffff",
          SwitchStepsArrow: "#ffff",
        },
      }
    );
  });
  return (
    <>
    <div className="right_wrapper_title">Step Title (mobile)</div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Background colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Switch Step Arrows</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#737373" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default StepTitle
