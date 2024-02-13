import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const DescriptionMobile = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        DescriptionMobile: {
          DescMbClr: "#ffff",
          DescMbBkgClr: "#ffff",
          DescMbFontFmly: "",
          DescMbFontSize: "",
        },
      }
    );
  });
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const [fontList, setFontList] = useState([]);
  const colorPickerRef = useRef();
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
  useEffect(() => {
    localStorage.setItem("customizerData", JSON.stringify(customizerData));
  }, [customizerData]);

  const handleAdditionalDataChange = ({ name, value }) => {
    setCustomizerData((prevData) => ({
      ...prevData,
      DescriptionMobile: {
        ...prevData.DescriptionMobile,
        [name]: value,
      },
    }));
  };
  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);

    if (newColor && newColor.hex && elementId) {
      setCustomizerData((prevData) => ({
        ...prevData,
        DescriptionMobile: {
          ...prevData.DescriptionMobile,
          [elementId === "DescMbClr"
            ? "DescMbClr"
            : elementId === "DescMbBkgClr"
            ? "DescMbBkgClr"
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
      <div className="right_wrapper_title">Description (mobile)</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.DescriptionMobile.DescMbClr}
                  />
                  <span
                    data-element="DescMbClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.DescriptionMobile.DescMbClr },
                        "DescMbClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData.DescriptionMobile.DescMbClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "DescMbClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.DescriptionMobile.DescMbClr }}
              onChange={(color) => handleColorChange(color, "DescMbClr")}
            />
          </div>
        )}
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
                    value={customizerData.DescriptionMobile.DescMbBkgClr}
                  />
                  <span
                    data-element="DescMbBkgClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.DescriptionMobile.DescMbBkgClr },
                        "DescMbBkgClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData.DescriptionMobile.DescMbBkgClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "DescMbBkgClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.DescriptionMobile.DescMbBkgClr }}
              onChange={(color) => handleColorChange(color, "DescMbBkgClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_property_name">Font</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="DescMbFontFmly"
            onChange={(e) =>
              handleAdditionalDataChange({
                name: "DescMbFontFmly",
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
              value={customizerData.DescriptionMobile.DescMbFontSize}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "DescMbFontSize",
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

export default DescriptionMobile;