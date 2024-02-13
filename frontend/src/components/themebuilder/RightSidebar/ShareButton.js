import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const ShareButton = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        ShareButton: {
          DisplayShrBtn: "",
          IconOrTxtButton: "text-btn",
          ShrBtnClr: "#ffff",
          TextBtnRnd: "",
          TextBtnLnth: "",
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
  const handleAdditionalDataChange = ({ name, value }) => {
    setCustomizerData((prevData) => ({
      ...prevData,
      ShareButton: {
        ...prevData.ShareButton,
        [name]: value,
      },
    }));
  };
  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);

    if (newColor && newColor.hex && elementId) {
      setCustomizerData((prevData) => ({
        ...prevData,
        ShareButton: {
          ...prevData.ShareButton,
          [elementId === "ShareBTNClr" ? "ShrBtnClr" : ""]: newColor.hex,
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
      <div className="right_wrapper_title">Share Button</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Display Share Button</div>
          <div className="right_property_value">
            <div className="switch_button_row">
              <label className="printing_methods_switch_button">
                <input
                  type="checkbox"
                  value="1"
                  checked={customizerData.ShareButton.DisplayShrBtn === "1"}
                  onChange={(e) =>
                    handleAdditionalDataChange({
                      name: "DisplayShrBtn",
                      value: e.target.value,
                    })
                  }
                />
                <span className="printing_methods_switch_slider printing_methods_switch_round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Icon Button</div>
          <div className="right_property_value">
            <label className="theme_check_button">
              <input
                type="radio"
                value="icon-btn"
                checked={
                  customizerData.ShareButton.IconOrTxtButton === "icon-btn"
                }
                onChange={(e) =>
                  handleAdditionalDataChange({
                    name: "IconOrTxtButton",
                    value: e.target.value,
                  })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Text Button</div>
          <div className="right_property_value">
            <label className="theme_check_button">
              <input
                type="radio"
                value="text-btn"
                checked={
                  customizerData.ShareButton.IconOrTxtButton === "text-btn"
                }
                onChange={(e) =>
                  handleAdditionalDataChange({
                    name: "IconOrTxtButton",
                    value: e.target.value,
                  })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.ShareButton.ShrBtnClr}
                  />
                  <span
                    data-element="ShareBTNClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.ShareButton.ShrBtnClr },
                        "ShareBTNClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.ShareButton.ShrBtnClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "ShareBTNClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.ShareButton.ShrBtnClr }}
              onChange={(color) => handleColorChange(color, "ShareBTNClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Text button rounding</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.ShareButton.TextBtnRnd}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "TextBtnRnd",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Text button length</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="TextBtnLnth"
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "TextBtnLnth",
                value: e.target.value,
              })
            }
          >
            <option value="">Select Text Button Length</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ShareButton;