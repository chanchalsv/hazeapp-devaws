import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const Price = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        Price: {
          PricePosition: "",
          PriceFont: "",
          FontSize: "",
          FontSizeMb: "",
          FontColour: "#ffff",
          ShowExtraPrice: "",
          ExtraPriceFontClr: "#ffff",
          ExtraPriceBrClr: "#ffff",
          ExtraPriceBgClr: "#ffff",
        },
      }
    );
  });
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const colorPickerRef = useRef();
  return (
    <>
      <div className="right_wrapper_title">Price</div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Price position</div>
        <div className="custom-select">
          <select>
            <option value="none" selected disabled hidden>
              Center
            </option>
            <option value="0">Center</option>
            <option value="1">Center</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Price font</div>
        <div className="custom-select">
          <select>
            <option value="none" selected disabled hidden>
              Poppins
            </option>
            <option value="0">Poppins</option>
            <option value="1">Poppins</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size (mobile)</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#9C9C9C" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Show extra price</div>
          <div className="right_property_value">
            <div className="switch_button_row">
              <label className="printing_methods_switch_button">
                <input type="checkbox" checked />
                <span className="printing_methods_switch_slider printing_methods_switch_round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Extra price font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#D9D9D9" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Extra price border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#737373" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Extra price background colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;