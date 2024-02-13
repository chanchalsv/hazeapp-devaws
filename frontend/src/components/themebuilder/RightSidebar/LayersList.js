import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const LayersList = () => {
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
      LayersList: {
        ...prevData.LayersList,
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
      <div className="right_wrapper_title">Layers</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.LayersList?.LayerFtClr || ""}
                  />
                  <span
                    data-element="layerFontClr"
                    onClick={(e) => handleColorPickerClick(e, "layerFontClr")}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersList?.LayerFtClr || "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerFontClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.LayersList?.LayerFtClr || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "layerFontClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.LayersList?.LayerFntSize || ""}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerFntSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="LayerFntFmly"
            value={customizerData?.LayersList?.LayerFntFmly || ""}
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "LayerFntFmly",
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
          <div className="right_property_name">Description font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.LayersList?.LayerDscFntClr || ""}
                  />
                  <span
                    data-element="layerDiscFntClr"
                    onClick={(e) =>
                      handleColorPickerClick(e, "layerDiscFntClr")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersList?.LayerDscFntClr || "#ffff",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerDiscFntClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.LayersList?.LayerDscFntClr || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "layerDiscFntClr")}
            />
          </div>
        )}
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Description font size</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.LayersList?.LayerDscFntSize || ""}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerDscFntSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Description font family</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="custTleFtFm"
            value={customizerData?.LayersList?.LayerDscFntFmly || ""}
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "LayerDscFntFmly",
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
          <div className="right_property_name">Divider colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData?.LayersList?.LayerDivClr || ""}
                  />
                  <span
                    data-element="LayerDivClr"
                    onClick={(e) =>
                      handleColorPickerClick(e, "LayerDivClr")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersList?.LayerDivClr || "#ffff",
                    }}
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
              color={{
                hex: customizerData?.LayersList?.LayerDivClr || "#ffff",
              }} // Added default value
              onChange={(color) => handleColorChange(color, "layerPanelBrdClr")}
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
              value={customizerData?.LayersList?.LayerDivThick || ""}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerDivThick",
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

export default LayersList;