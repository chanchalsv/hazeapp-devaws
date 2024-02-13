import React, { useEffect, createContext, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [fontList, setFontList] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        ThemeType: {
          ThemeSelect: "Theme 1",
        },
        CustomizerTitle: {
          bgColor: "#ffff",
          ftColor: "#ffff",
          font: "",
          fontSize: "",
          fontSizeMobile: "",
          ftColorMobile: "#ffff",
          dividerColor: "#ffff",
          dividerThickness: "",
        },
        LayersPanel: {
          LayerPanelPos: "",
          LaPnbgColor: "#ffff",
          LaPnbrdColor: "#ffff",
          borderThickness: "",
          errorClr: "#ffff",
        },
        LayersList: {
          LayerFtClr: "#ffff",
          LayerFntSize: "",
          LayerFntFmly: "",
          LayerDscFntClr: "#ffff",
          LayerDscFntSize: "",
          LayerDscFntFmly: "",
          LayerDivClr: "#ffff",
          LayerDivThick: "",
        },
      }
    );
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
          [elementId === "custTleBgClr"
            ? "bgColor"
            : elementId === "custTleFtClr"
            ? "ftColor"
            : elementId === "custTleFtClrMb"
            ? "ftColorMobile"
            : elementId === "custTleDivClr"
            ? "dividerColor"
            : ""]: newColor.hex,
        },
        LayersPanel: {
          ...prevData.LayersPanel, // Added optional chaining here
          [elementId === "layerPanelBgClr"
            ? "LaPnbgColor"
            : elementId === "layerPanelBrdClr"
            ? "LaPnbrdColor"
            : elementId === "layerPanelErrorClr"
            ? "errorClr"
            : ""]: newColor.hex,
        },
        LayersList: {
          ...prevData.LayersList,
          [elementId === "layerFontClr"
            ? "LayerFtClr"
            : elementId === "layerDiscFntClr"
            ? "LayerDscFntClr"
            : elementId === "LayerDivClr"
            ? "errorClr"
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
            ...customizerData.LayersPanelss,
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
            ...customizerData.LayersList, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersList]);

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
