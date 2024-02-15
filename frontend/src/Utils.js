import _ from "lodash";

const Utils = {
  siteCookieName: `${process.env.REACT_APP_APPNAME}-userData`,
  apiUrl: (path) => {
    console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
    return process.env.REACT_APP_API_URL + "/" + path;
  },
  getCookieOptions: () => {
    let co = { secure: false, path: "/" };
    if (process.env.REACT_APP_COOKIE_DOMAIN !== "localhost") {
      co["domain"] = process.env.REACT_APP_COOKIE_DOMAIN;
    }
    return co;
  },
  initialCustomizerData: {
    ProductDetails: {
      productId: "4",
      productName: "Dummy Product",
      productImg:
        "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
    },
    ThemeType: {
      ThemeSelect: "Theme 1",
    },
    CustomizerTitle: {
      CustomizerTitleBackgroundColor: "#ffff",
      CustomizerTitleFontFamily: "",
      CustomizerTitleFontSize: "32px",
      CustomizerTitleFontSizeMobile: "",
      CustomizerTitleFontColor: "#000000",       
      CustomizerTitleFontColorMobile: "#ffff",
      CustomizerTitleDividerColor: "#000000",
      CustomizerTitleDividerThickness: "0px",
    },
    LayersPanel: {
      LayersPanelPosition: "",
      LayersPanelBackgroundColor: "#ffff",
      LayersPanelBorderColor: "#ffff",
      LayersPanelBorderThickness: "",
      LayersPanelErrorColor: "#ffff",
    },
    LayersList: {
      LayersListFontColor: "#ffff",
      LayersListFontSize: "",
      LayersListFontFamily: "",
      LayersListDiscriptionFontColor: "#ffff",
      LayersListDiscriptionFontSize: "",
      LayersListDiscriptionFontFamily: "",
      LayersListDividerColor: "#ffff",
      LayersListDividerThickness: "",
    },
    LayersSettings: {
      LayersSettingsBorderColor: "#ffff",
      LayersSettingsSelectedBorderColor: "#ffff",
      LayersSettingsBorderThickness: "",
      LayersSettingsSelectedBorderThickness: "",
      LayersSettingsFontColor: "#ffff",
      LayersSettingsFontSize: "",
      LayersSettingsFontFamily: "",
      LayersSettingsPopUpBackgroundColor: "#ffff",
      LayersSettingsPopUpBackgroundRounding: "",
      LayersSettingsDescriptionFontColor: "#ffff",
      LayersSettingsDescriptionFontSize: "",
      LayersSettingsDescriptionFontFamily: "",
    },
    ThumbnailButton: {
      ThumbnailButtonRoundings: "",
      ThumbnailButtonColoumn: "#ffff",
      ThumbnailButtonWidth: "#ffff",
      ThumbnailButtonHeight: "",
      ThumbnailButtonVerticalMargin: "",
      ThumbnailButtonRoundingMobile: "",
      ThumbnailButtonWidthMobile: "",
      ThumbnailButtonHeightMobile:"",
      ThumbnailButtonMargintMobile:""
    },
    Customizer: {
      CustomizerLoadingIconColor: "#ffff",
      CustomizerBackgroundColor: "#ffff",
    },
    StepTitle: {
      StepTitleBackgroundColor: "#ffff",
      StepTitleSwitchStepsArrows: "#ffff",
    },
    SummaryTitle: {
      SummaryTitleFontFamily: "",
      SummaryTitleFontColor: "#ffff",
      SummaryTitleFontSize: "",
    },
    AddToCart: {
      BorderColor: "#ffff",
      BorderThickness: "0px",
      BorderRounding: "5px",
      FontFamily: "Arial",
      FontColor: "#ffff",
      BackgroundColor: "#000000",
      HoverBackgroundColor: "#ffff",
      FontSize: "16px",
    },
    ConfirmButtonMobile: {
      ConfirmButtonMobileFontColor: "#ffff",
      ConfirmButtonMobileBackgroundColor: "#ffff",
    },
    Price: {
      PricePosition: "",
      PriceFontFamily: "",
      PriceFontSize: "",
      PriceFontSizeMobile: "",
      PriceFontColour: "#ffff",
      PriceShowExtraPrice: "",
      PriceExtraPriceFontColor: "#ffff",
      PriceExtraPriceBorderColor: "#ffff",
      PriceExtraPriceBackgroundColor: "#ffff",
    },
    SwitchViewArrows: {
      SwitchViewArrowsColor: "#ffff",
    },
    SwitchViewDots: {
      SwitchViewDotsColour: "#ffff",
      SwitchViewDotsSelectColour: "#ffff",
    },
    Zoom: {
      ZoomColor: "#ffff",
    },
    ShareButton: {
      ShareButtonDisplayButtonYN: "true",
      ShareButtonIconButton: "false",
      ShareButtonColor: "#ffff",
      ShareButtonTextButtonRounding: "",
      ShareButtonTextButtonLength: "",
    },
    DescriptionMobile: {
      DescriptionMobileColor: "#ffff",
      DescriptionMobileBackgroundColor: "#ffff",
      DescriptionMobileFontFamily: "Arial",
      DescriptionMobileFontSize: "",
    },
    OutOfStock: {
      OutOfStockBadgeIconColor: "#ffff",
      OutOfStockBadgeBackgroundColor: "#ffff",
      OutOfStockBadgeBorderWidth: "",
      OutOfStockBadgeBorderColor: "#ffff",
      OutOfStockBannerTextColor: "#ffff",
      OutOfStockBannerBackgroundColor: "#ffff",
    },
  },
};

export default Utils;
