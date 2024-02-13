import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThemeSelector.css";

const ThemeSelector = () => {
  const navigate = useNavigate();

  const handleThemeSelect = (theme) => {
    navigate(`/theme-builder?selectedTheme=${theme}`);
  };

  return (
    <>
      <div className="container-fluid Haze_header">
        <a href="/dashboard">
          <img src="assets/Image/close.png" alt="Close" />
        </a>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p className="text-wrapper-themebuilder headingtag">Themes</p>
              <p>
                Choose a theme that fits your needs and tweak it to reflect your
                brand.
              </p>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="row">
            <div className="col-sm-5">
              <p className="text-wrapper-themebuilder headingTheme1">Theme 1</p>
              <p>
                This theme is great for products with few questions. The user
                can easily customize the product by scrolling through the
                choices
              </p>
              <div className="row ms-1">
                <div className="preview">
                  <a className="previewAnch">Preview</a>
                </div>
                <div className="select">
                  <a
                    onClick={() => handleThemeSelect("Theme 1")}
                    className="selectAnch"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="themeImgPrev">
                <p>Customer Preview Img Desktop version</p>
              </div>
            </div>
            <div className="col-sm-2 col_margin">
              <div className="themeImgPrev">
                <p>Customer Preview Img Mobile version</p>
              </div>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="row">
            <div className="col-sm-5">
              <p className="text-wrapper-themebuilder headingTheme1">Theme 2</p>
              <p>
                This theme is great for products with few questions. The user
                can easily customize the product by scrolling through the
                choices
              </p>
              <div className="row ms-1">
                <div className="preview">
                  <a className="previewAnch">Preview</a>
                </div>
                <div className="select">
                  <a
                    onClick={() => handleThemeSelect("Theme 2")}
                    className="selectAnch"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="themeImgPrev">
                <p>Customer Preview Img Desktop version</p>
              </div>
            </div>
            <div className="col-sm-2 col_margin">
              <div className="themeImgPrev">
                <p>Customer Preview Img Mobile version</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSelector;