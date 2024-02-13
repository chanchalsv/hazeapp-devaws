import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const LayersSettingsList = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        LayersSettings: {
          LayerSetBrdClr: "#ffff",
          LayerSetSelBrdClr: "#ffff",
          LayerSetBrdThick: "",
          LayerSetSelBrdThick: "",
          LayerSetFtClr: "#ffff",
          LayerSetFtSize: "",
          LayerSetFtFmly: "",
          LayerSetPopUpBkgClr: "#ffff",
          LayerSetPopUpBkgRound: "",
          LayerSetDescFtClr: "#ffff",
          LayerSetDescFtSize: "",
          LayerSetDescFtFmly: "",
        },
      }
    );
  });
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const colorPickerRef = useRef();
  const [fontList, setFontList] = useState([]);

  useEffect(() => {
    localStorage.setItem("customizerData", JSON.stringify(customizerData));
  }, [customizerData]);

  // Function to handle changes to additionalData
  const handleAdditionalDataChange = ({ name, value }) => {
    setCustomizerData((prevData) => ({
      ...prevData,
      LayersList: {
        ...prevData.LayersList,
        [name]: value,
      },
    }));
  };
  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);

    if (newColor && newColor.hex && elementId) {
      setCustomizerData((prevData) => ({
        ...prevData,
        LayersList: {
          ...prevData.LayersList,
          [elementId === "layerSettBrdClr"
            ? "LayerSetBrdClr"
            : elementId === "layerSettSelBrdClr"
            ? "LayerSetSelBrdClr"
            : elementId === "layerPanelErrorClr"
            ? "errorClr"
            : ""]: newColor.hex,
        },
      }));
    }
  };
  const handleColorPickerClick = (e) => {
    e.stopPropagation();
    // Get the data-element attribute from the closest span element
    const elementId = e.target.closest("span")?.getAttribute("data-element");
    setShowElement(elementId);
  };

  // Close color picker when clicking outside of it
  const handlePickerClose = () => {
    setShowPicker(false);
    setShowElement("");
  };
  useEffect(() => {
    document.addEventListener("click", handlePickerClose);

    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);
  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const apiKey = "AIzaSyDPyvFifV-x5WCx4vma2j-s49nqgrD2smo";
        const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFontList(data.items.map((font) => font.family));
      } catch (error) {
        console.error("Error fetching fonts:", error);
      }
    };

    fetchFonts();
  }, []);

  return (
    <>
      <div className="right_wrapper_title">Layer Settings</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.LayersSettings.LayerSetBrdClr}
                  />
                  <span
                    data-element="layerSettBrdClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.LayersSettings.LayerSetBrdClr },
                        "layerSettBrdClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData.LayersSettings.LayerSetBrdClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerSettBrdClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayerSetBrdClr }}
              onChange={(color) => handleColorChange(color, "layerSettBrdClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Selected border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.LayersSettings.LayerSetSelBrdClr}
                  />
                  <span
                    data-element="layerSettSelBrdClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        {
                          hex: customizerData.LayersSettings.LayerSetSelBrdClr,
                        },
                        "layerSettSelBrdClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData.LayersSettings.LayerSetSelBrdClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerSettSelBrdClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayerSetSelBrdClr }}
              onChange={(color) =>
                handleColorChange(color, "layerSettSelBrdClr")
              }
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
              value={customizerData.LayersSettings.LayerSetBrdThick}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerSetBrdThick",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Selected border thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.LayersSettings.LayerSetSelBrdThick}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerSetSelBrdThick",
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
                    value={customizerData.LayersSettings.LayerSetFtClr}
                  />
                  <span
                    data-element="layerSettFtClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.LayersSettings.LayerSetFtClr },
                        "layerSettFtClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData.LayersSettings.LayerSetFtClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerSettFtClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayerSetFtClr }}
              onChange={(color) => handleColorChange(color, "layerSettFtClr")}
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
              value={customizerData.LayersSettings.LayerSetFtSize}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerSetFtSize",
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
            name="LayerSetFtFmly"
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "LayerSetFtFmly",
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
          <div className="right_property_name">Pop-up background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <input
                    type="hidden"
                    value={customizerData.LayersList.LayerSetPopUpBkgClr}
                  />
                  <span
                    data-element="layerSettPopUpBkgClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.LayersList.LayerSetPopUpBkgClr },
                        "layerSettPopUpBkgClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.LayersList.LayerSetPopUpBkgClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerSettPopUpBkgClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersList.LayerSetPopUpBkgClr }}
              onChange={(color) => handleColorChange(color, "layerSettPopUpBkgClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Pop-up background rounding</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.LayersList.LayerSetPopUpBkgRound}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerSetPopUpBkgRound",
                  value: e.target.value,
                })
              }
            />
          </div>
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
                    value={customizerData.LayersList.LayerSetDescFtClr}
                  />
                  <span
                    data-element="layerSettDescFtClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.LayersList.LayerSetDescFtClr },
                        "layerSettDescFtClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.LayersList.LayerSetDescFtClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "layerSettDescFtClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersList.LayerSetDescFtClr }}
              onChange={(color) => handleColorChange(color, "layerSettDescFtClr")}
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
              value={customizerData.LayersList.LayerSetDescFtSize}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "LayerSetDescFtSize",
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
            name="LayerSetDescFtFmly"
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "LayerSetDescFtFmly",
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
    </>
  );
};

export default LayersSettingsList;
