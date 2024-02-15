import React, { useEffect, createContext, useState } from "react";
import Utils from "../Utils";
const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [fontList, setFontList] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return storedData || Utils.initialCustomizerData;
  });
  const updateCustomizerData = (newValue) => {
    setCustomizerData(newValue);
  };
  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);
    if (newColor && newColor.hex && elementId) {
      setCustomizerData((prevData) => ({
        ...prevData,
        CustomizerTitle: {
          ...prevData.CustomizerTitle,
          [elementId === "CustomizerTitleBackgroundColor"
            ? "CustomizerTitleBackgroundColor"
            : elementId === "CustomizerTitleFontColor"
            ? "CustomizerTitleFontColor"
            : elementId === "CustomizerTitleFontColorMobile"
            ? "CustomizerTitleFontColorMobile"
            : elementId === "CustomizerTitleDividerColor"
            ? "CustomizerTitleDividerColor"
            : ""]: newColor.hex,
        },
        LayersPanel: {
          ...prevData.LayersPanel,
          [elementId === "LayersPanelBackgroundColor"
            ? "LayersPanelBackgroundColor"
            : elementId === "LayersPanelBorderColor"
            ? "LayersPanelBorderColor"
            : elementId === "LayersPanelErrorColor"
            ? "LayersPanelErrorColor"
            : ""]: newColor.hex,
        },
        LayersList: {
          ...prevData.LayersList,
          [elementId === "LayersListFontColor"
            ? "LayersListFontColor"
            : elementId === "LayersListDiscriptionFontColor"
            ? "LayersListDiscriptionFontColor"
            : elementId === "LayersListDividerColor"
            ? "LayersListDividerColor"
            : ""]: newColor.hex,
        },
        LayersSettings: {
          ...prevData.LayersSettings,
          [elementId === "LayersSettingsBorderColor"
            ? "LayersSettingsBorderColor"
            : elementId === "LayersSettingsSelectedBorderColor"
            ? "LayersSettingsSelectedBorderColor"
            : elementId === "LayersSettingsFontColor"
            ? "LayersSettingsFontColor"
            : elementId === "LayersSettingsPopUpBackgroundColor"
            ? "LayersSettingsPopUpBackgroundColor"
            : elementId === "LayersSettingsDescriptionFontColor"
            ? "LayersSettingsDescriptionFontColor"
            : ""]: newColor.hex,
        },
        Customizer: {
          ...prevData.Customizer,
          [elementId === "CustomizerLoadingIconColor"
            ? "CustomizerLoadingIconColor"
            : elementId === "CustomizerBackgroundColor"
            ? "CustomizerBackgroundColor"
            : ""]: newColor.hex,
        },
        StepTitle: {
          ...prevData.StepTitle,
          [elementId === "StepTitleBackgroundColor"
            ? "StepTitleBackgroundColor"
            : elementId === "StepTitleSwitchStepsArrows"
            ? "StepTitleSwitchStepsArrows"
            : ""]: newColor.hex,
        },
        SummaryTitle: {
          ...prevData.SummaryTitle,
          [elementId === "SummaryTitleFontColor"
            ? "SummaryTitleFontColor"
            : ""]: newColor.hex,
        },
        AddToCart: {
          ...prevData.AddToCart,
          [elementId === "AddToCartBorderColor"
            ? "BorderColor"
            : elementId === "AddToCartFontColor"
            ? "FontColor"
            : elementId === "AddToCartBackgroundColor"
            ? "BackgroundColor"
            : elementId === "AddToCartHoverBkgColor"
            ? "HoverBackgroundColor"
            : ""]: newColor.hex,
        },
        ConfirmButtonMobile: {
          ...prevData.ConfirmButtonMobile,
          [elementId === "ConfirmButtonMobileFontColor"
            ? "ConfirmButtonMobileFontColor"
            : elementId === "ConfirmButtonMobileBackgroundColor"
            ? "ConfirmButtonMobileBackgroundColor"
            : ""]: newColor.hex,
        },
        Price: {
          ...prevData.Price,
          [elementId === "PriceFontColour"
            ? "PriceFontColour"
            : elementId === "PriceExtraPriceFontColor"
            ? "PriceExtraPriceFontColor"
            : elementId === "PriceExtraPriceBorderColor"
            ? "PriceExtraPriceBorderColor"
            : elementId === "PriceExtraPriceBackgroundColor"
            ? "PriceExtraPriceBackgroundColor"
            : ""]: newColor.hex,
        },
        SwitchViewArrows: {
          ...prevData.SwitchViewArrows,
          [elementId === "SwitchViewArrowsColor"
            ? "SwitchViewArrowsColor"
            : ""]: newColor.hex,
        },
        SwitchViewDots: {
          ...prevData.SwitchViewDots,
          [elementId === "SwitchViewDotsColour"
            ? "SwitchViewDotsColour"
            : elementId === "SwitchViewDotsSelectColour"
            ? "SwitchViewDotsSelectColour"
            : ""]: newColor.hex,
        },
        Zoom: {
          ...prevData.Zoom,
          [elementId === "ZoomColor" ? "ZoomColor" : ""]: newColor.hex,
        },
        ShareButton: {
          ...prevData.ShareButton,
          [elementId === "ShareButtonColor"
            ? "ShareButtonColor"
            : elementId === "DescriptionMobileBackgroundColor"
            ? "DescriptionMobileBackgroundColor"
            : ""]: newColor.hex,
        },
        DescriptionMobile: {
          ...prevData.DescriptionMobile,
          [elementId === "DescriptionMobileColor"
            ? "DescriptionMobileColor"
            : elementId === "DescriptionMobileBackgroundColor"
            ? "DescriptionMobileBackgroundColor"
            : ""]: newColor.hex,
        },
        OutOfStock: {
          ...prevData.OutOfStock,
          [elementId === "OutOfStockBadgeIconColor"
            ? "OutOfStockBadgeIconColor"
            : elementId === "OutOfStockBadgeBackgroundColor"
            ? "OutOfStockBadgeBackgroundColor"
            : elementId === "OutOfStockBadgeBorderColor"
            ? "OutOfStockBadgeBorderColor"
            : elementId === "OutOfStockBadgeBannerTextColor"
            ? "OutOfStockBannerTextColor"
            : elementId === "OutOfStockBadgeBannerBkgColor"
            ? "OutOfStockBannerBackgroundColor"
            : ""]: newColor.hex,
        },
      }));
    }
  };
  const handleInputChange = ({ name, value }) => {
    setCustomizerData((prevData) => ({
      ...prevData,
      CustomizerTitle: {
        ...prevData.CustomizerTitle,
        [name]: value,
      },
      LayersPanel: {
        ...prevData.LayersPanel,
        [name]: value,
      },
      LayersList: {
        ...prevData.LayersList,
        [name]: value,
      },
      LayersSettings: {
        ...prevData.LayersSettings,
        [name]: value,
      },
      SummaryTitle: {
        ...prevData.SummaryTitle,
        [name]: value,
      },
      AddToCart: {
        ...prevData.AddToCart,
        [name]: value,
      },
      Price: {
        ...prevData.Price,
        [name]: value,
      },
      ShareButton: {
        ...prevData.ShareButton,
        [name]: value,
      },
      DescriptionMobile: {
        ...prevData.DescriptionMobile,
        [name]: value,
      },
      OutOfStock: {
        ...prevData.OutOfStock,
        [name]: value,
      },
    }));
  };
  const handleColorPickerClick = (e, elementId) => {
    e.stopPropagation();
    setShowPicker(true);
    setShowElement(elementId);
  };
  const handlePickerClose = () => {
    setShowPicker(false);
    setShowElement("");
  };
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

    localStorage.setItem("customizerData", JSON.stringify(customizerData));
  }, []);
  console.log("contextPage", customizerData);

  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          CustomizerTitle: {
            ...customizerData.CustomizerTitle,
            ...customizerData.CustomizerTitle,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.CustomizerTitle]);

  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          LayersPanel: {
            ...customizerData.LayersPanel,
            ...customizerData.LayersPanel,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersPanel]);

  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          LayersList: {
            ...customizerData.LayersList,
            ...customizerData.LayersList, 
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersList]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          LayersSettings: {
            ...customizerData.LayersSettings,
            ...customizerData.LayersSettings, 
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersSettings]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          Customizer: {
            ...customizerData.Customizer,
            ...customizerData.Customizer, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.Customizer]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          StepTitle: {
            ...customizerData.StepTitle,
            ...customizerData.StepTitle, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.StepTitle]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          SummaryTitle: {
            ...customizerData.SummaryTitle,
            ...customizerData.SummaryTitle, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.SummaryTitle]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          AddToCart: {
            ...customizerData.AddToCart,
            ...customizerData.AddToCart, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.AddToCart]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          ConfirmButtonMobile: {
            ...customizerData.ConfirmButtonMobile,
            ...customizerData.ConfirmButtonMobile,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.ConfirmButtonMobile]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          Price: {
            ...customizerData.Price,
            ...customizerData.Price,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.Price]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          SwitchViewArrows: {
            ...customizerData.SwitchViewArrows,
            ...customizerData.SwitchViewArrows,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.SwitchViewArrows]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          SwitchViewDots: {
            ...customizerData.SwitchViewDots,
            ...customizerData.SwitchViewDots,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.SwitchViewDots]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          Zoom: {
            ...customizerData.Zoom,
            ...customizerData.Zoom,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.Zoom]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          ShareButton: {
            ...customizerData.ShareButton,
            ...customizerData.ShareButton, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.ShareButton]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          DescriptionMobile: {
            ...customizerData.DescriptionMobile,
            ...customizerData.DescriptionMobile, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.DescriptionMobile]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          OutOfStock: {
            ...customizerData.OutOfStock,
            ...customizerData.OutOfStock, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.OutOfStock]);

  useEffect(() => {
    const linkElement = document.createElement("link");
    linkElement.href = `https://fonts.googleapis.com/css2?family=${customizerData.CustomizerTitle.CustomizerTitleFontFamily.replace(
      /\s/g,
      "+"
    )}:wght@400;700&display=swap`;
    linkElement.rel = "stylesheet";
    const head = document.head || document.getElementsByTagName("head")[0];
    const existingLink = document.getElementById("font-link");
    if (existingLink) {
      head.removeChild(existingLink);
    }
    linkElement.id = "font-link";
    head.appendChild(linkElement);
  }, [customizerData?.CustomizerTitle?.CustomizerTitleFontFamily]);

  return (
    <ThemeContext.Provider
      value={{
        customizerData,
        updateCustomizerData,
        fontList,
        showPicker,
        showElement,
        handleColorChange,
        handleInputChange,
        handleColorPickerClick,
        handlePickerClose,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { ThemeProvider };
