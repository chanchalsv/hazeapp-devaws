import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const LayerPanelList = () => {
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

  const handleAdditionalDataChange = ({ name, value }) => {
    updateCustomizerData((prevData) => ({
      ...prevData,
      LayersPanel: {
        ...prevData?.LayersPanel, // Added optional chaining here
        [name]: value,
      },
    }));
  };
   
  useEffect(() => {
    document.addEventListener("click", handlePickerClose);

    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);

  return (
    <>
      <div className="right_wrapper_title">Layers Panel</div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Panel Position</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="LayerPanelPosition"
            value={customizerData?.LayersPanel?.LayerPanelPos || ""}
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "LayerPanelPos",
                value: e.target.value,
              })
            }
          >
            <option value="">Select Layer Position</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.LayersPanel?.LaPnbgColor || ""}
                  />
                  <span
                    data-element="layerPanelBgClr"
                    onClick={(e) =>
                      handleColorPickerClick(e, "layerPanelBgClr")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersPanel?.LaPnbgColor || "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerPanelBgClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.LayersPanel?.LaPnbgColor || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "layerPanelBgClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.LayersPanel?.LaPnbrdColor || ""}
                  />
                  <span
                    data-element="layerPanelBrdClr"
                    onClick={(e) =>
                      handleColorPickerClick(e, "layerPanelBrdClr")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersPanel?.LaPnbrdColor || "#ffff",
                    }}
                    value={customizerData?.LayersPanel?.LaPnbrdColor || ""}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerPanelBrdClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersPanel.LaPnbrdColor }}
              onChange={(color) => handleColorChange(color, "layerPanelBrdClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.LayersPanel?.borderThickness || ""}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "borderThickness",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Error colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.LayersPanel?.errorClr || ""}
                  />
                  <span
                    data-element="layerPanelErrorClr"
                    onClick={(e) =>
                      handleColorPickerClick(e, "layerPanelErrorClr")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersPanel?.errorClr || "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerPanelErrorClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersPanel.errorClr }}
              onChange={(color) =>
                handleColorChange(color, "layerPanelErrorClr")
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LayerPanelList;