import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const OutOfStock = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        OutOfStock: {
          badgeIconClr: "#ffff",
          badgeBkgClr: "#ffff",
          badgeBrWidth: "",
          badgeBrClr: "#ffff",
          BannerTextClr: "#ffff",
          BannerBgClr: "#ffff",
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
      OutOfStock: {
        ...prevData.OutOfStock,
        [name]: value,
      },
    }));
  };
  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);

    if (newColor && newColor.hex && elementId) {
      setCustomizerData((prevData) => ({
        ...prevData,
        OutOfStock: {
          ...prevData.OutOfStock,
          [elementId === "BadgeIconClr"
            ? "badgeIconClr"
            : elementId === "BadgeBkgClr"
            ? "badgeBkgClr"
            : elementId === "BadgeBrClr"
            ? "badgeBrClr"
            : elementId === "BannerTextClr"
            ? "BannerTextClr"
            : elementId === "BannerBgClr"
            ? "BannerBgClr"
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
      <div className="right_wrapper_title">Out of Stock</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Badge icon colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.OutOfStock.badgeIconClr}
                  />
                  <span
                    data-element="BadgeIconClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.OutOfStock.badgeIconClr },
                        "BadgeIconClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.OutOfStock.badgeIconClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "BadgeIconClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.OutOfStock.badgeIconClr }}
              onChange={(color) => handleColorChange(color, "BadgeIconClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Badge background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.OutOfStock.badgeBkgClr}
                  />
                  <span
                    data-element="BadgeBkgClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.OutOfStock.badgeBkgClr },
                        "BadgeBkgClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.OutOfStock.badgeBkgClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "BadgeBkgClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.OutOfStock.badgeBkgClr }}
              onChange={(color) => handleColorChange(color, "BadgeBkgClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Badge border width</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.OutOfStock.badgeBrWidth}
              onChange={(e) =>
                handleAdditionalDataChange({
                  name: "badgeBrWidth",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Badge border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.OutOfStock.badgeBrClr}
                  />
                  <span
                    data-element="BadgeBrClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.OutOfStock.badgeBrClr },
                        "BadgeBrClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.OutOfStock.badgeBrClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "BadgeBrClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.OutOfStock.badgeBrClr }}
              onChange={(color) => handleColorChange(color, "BadgeBrClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Banner text colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.OutOfStock.BannerTextClr}
                  />
                  <span
                    data-element="BannerTextClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.OutOfStock.BannerTextClr },
                        "BannerTextClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.OutOfStock.BannerTextClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "BannerTextClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.OutOfStock.BannerTextClr }}
              onChange={(color) => handleColorChange(color, "BannerTextClr")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Banner background colour</div>

          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <input
                    type="hidden"
                    value={customizerData.OutOfStock.BannerBgClr}
                  />
                  <span
                    data-element="BannerBgClr"
                    onClick={(e) => {
                      handleColorPickerClick(e);
                      handleColorChange(
                        { hex: customizerData.OutOfStock.BannerBgClr },
                        "BannerBgClr"
                      );
                    }}
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData.OutOfStock.BannerBgClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "BannerBgClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.OutOfStock.BannerBgClr }}
              onChange={(color) => handleColorChange(color, "BannerBgClr")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default OutOfStock;