import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const AddToCart = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        AddToCart: {
          BorderClr: "#ffff",
          BorderThickness: "",
          Rounding:"",
          FontFamily:"",
          FontColor:"#ffff",
          BackgroundClr:"#ffff",
          HoverBkgColor:"#ffff",
          FontSize:"",
        },
      }
    );
  });
  return (
    <>
    <div className="right_wrapper_title">Add To Cart & Buttons</div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Border colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Border thickness</div>
                <div className="right_property_value">
                  <input
                    type="text"
                    className="right_wrapper_input"
                    id="name"
                  />
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Rounding</div>
                <div className="right_property_value">
                  <input
                    type="text"
                    className="right_wrapper_input"
                    id="name"
                  />
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_property_name">Font family</div>
              <div className="custom-select">
                <select>
                  <option value="none" selected disabled hidden>
                    Poppins
                  </option>
                  <option value="0">Poppins</option>
                  <option value="1">Poppins:</option>
                </select>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Font colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Background colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#2D2D2D" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">
                  Hover Background colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#2D2D2D" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Font size</div>
                <div className="right_property_value">
                  <input
                    type="text"
                    className="right_wrapper_input"
                    id="name"
                  />
                </div>
              </div>
            </div>
    </>
  )
}

export default AddToCart
