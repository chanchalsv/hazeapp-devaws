import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const Customizer = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        Customizer: {
          LoadingIconClr: "#ffff",
          BkgClr: "#ffff",
        },
      }
    );
  });
  return (
    <>
    <div className="right_wrapper_title">Customizer</div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Loading icon colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#2D2D2D" }}>
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
                <div className="right_property_name">Background colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#56AD38" }}>
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

export default Customizer
