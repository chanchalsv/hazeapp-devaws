import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const Zoom = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        zoom: {
          ZoomClr: "#ffff",
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
        zoom: {
          ...prevData.zoom,
          [elementId === "ZoomColor" ? "ZoomClr" : ""]: newColor.hex,
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
      <div className="right_wrapper_title">Zoom</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <input
                    type="hidden"
                    value={customizerData.zoom.ZoomClr}
                  />
                  <span
                    data-element="ZoomColor"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.zoom.ZoomClr },
                        "ZoomColor"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.zoom.ZoomClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "ZoomColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.zoom.ZoomClr }}
              onChange={(color) => handleColorChange(color, "ZoomColor")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Zoom;