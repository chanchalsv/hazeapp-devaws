import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const SwitchViewArrows = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        SwitchViewArrows: {
          Color: "#ffff",
        },
      }
    );
  });
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const colorPickerRef = useRef();

  useEffect(() => {
    localStorage.setItem("customizerData", JSON.stringify(customizerData));
  }, [customizerData]);

  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);

    if (newColor && newColor.hex && elementId) {
      setCustomizerData((prevData) => ({
        ...prevData,
        SwitchViewArrows: {
          ...prevData.SwitchViewArrows,
          [elementId === "SwitchViewArrowClr"
            ? "Color"
            : ""]: newColor.hex,
        },
      }));
    }
  };
  const handleColorPickerClick = (e) => {
    e.stopPropagation();
    const elementId = e.target.closest("span")?.getAttribute("data-element");
    setShowElement(elementId);
  };

  const handlePickerClose = () => {
    setShowPicker(false);
    setShowElement("");
  };

  useEffect(() => {
    document.addEventListener("click", handlePickerClose);
    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);
  return (
    <>
      <div className="right_wrapper_title">Switch View Arrows</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.SwitchViewArrows.Color}
                  />
                  <span
                    data-element="SwitchViewArrowClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.SwitchViewArrows.Color },
                        "SwitchViewArrowClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData.SwitchViewArrows.Color,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "SwitchViewArrowClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.SwitchViewArrows.Color }}
              onChange={(color) => handleColorChange(color, "SwitchViewArrowClr")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SwitchViewArrows;