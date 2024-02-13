import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const CustomizerTitle = () => {
  const {
    customizerData,
    updateCustomizerData,
    fontList,
    showPicker,
    showElement,
    handleColorChange,
    handleInputChange,
    handleColorPickerClick,
    handlePickerClose,
  } = useContext(ThemeContext);

  const colorPickerRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handlePickerClose);
    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);

  return (
    <>
      <div className="right_wrapper_title">Customizer Title</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.CustomizerTitle?.bgColor || ""}
                  />
                  <span
                    data-element="custTleBgClr"
                    onClick={(e) => handleColorPickerClick(e, "custTleBgClr")}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle?.bgColor || "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "custTleBgClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle?.bgColor || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "custTleBgClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_property_name">Font</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="font"
            value={customizerData?.CustomizerTitle?.font || ""}
            onChange={(e) =>
              handleInputChange({
                name: "font",
                value: e.target.value,
              })
            }
          >
            <option value="">Select a Font</option>
            {fontList.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.CustomizerTitle?.fontSize || ""}
              onChange={(e) =>
                handleInputChange({
                  name: "fontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size (mobile)</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.CustomizerTitle?.fontSizeMobile || ""}
              onChange={(e) =>
                handleInputChange({
                  name: "fontSizeMobile",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.CustomizerTitle?.ftColor || ""}
                  />
                  <span
                    data-element="custTleFtClr"
                    onClick={(e) => handleColorPickerClick(e, "custTleFtClr")}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle?.ftColor || "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "custTleFtClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle?.ftColor || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "custTleFtClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour (mobile)</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.CustomizerTitle?.ftColorMobile || ""}
                  />
                  <span
                    data-element="custTleFtClrMb"
                    onClick={(e) => handleColorPickerClick(e, "custTleFtClrMb")}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle?.ftColorMobile ||
                        "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "custTleFtClrMb" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle?.ftColorMobile || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "custTleFtClrMb")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Divider colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.CustomizerTitle?.dividerColor || ""}
                  />
                  <span
                    data-element="custTleDivClr"
                    onClick={(e) => handleColorPickerClick(e, "custTleDivClr")}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle?.dividerColor ||
                        "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "custTleDivClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle?.dividerColor || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "custTleDivClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Divider thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.CustomizerTitle?.dividerThickness || ""}
              onChange={(e) =>
                handleInputChange({
                  name: "dividerThickness",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizerTitle;