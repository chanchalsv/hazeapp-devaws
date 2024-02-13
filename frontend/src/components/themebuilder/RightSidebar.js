import React from "react";
import "../themebuilder/ThemeBuilder.css";
import CustomizerTitle from "./RightSidebar/CustomizerTitle";
import LayerPanelList from "./RightSidebar/LayerPanelList";
import LayersList from "./RightSidebar/LayersList";
import LayersSettingsList from "./RightSidebar/LayersSettingsList";
import ThumbnailsButtonList from "./RightSidebar/ThumbnailsButtonList";
import InputTextDrpDown from "./RightSidebar/InputTextDrpDown";
import FileUpload from "./RightSidebar/FileUpload";
import PrintReady from "./RightSidebar/PrintReady";
import Customizer from "./RightSidebar/Customizer";
import StepTitle from "./RightSidebar/StepTitle";
import SummaryTitle from "./RightSidebar/SummaryTitle";
import AddToCart from "./RightSidebar/AddToCart";
import ConfirmButton from "./RightSidebar/ConfirmButton";
import Price from "./RightSidebar/Price";
import SwitchViewArrows from "./RightSidebar/SwitchViewArrows";
import SwitchViewDots from "./RightSidebar/SwitchViewDots";
import Zoom from "./RightSidebar/Zoom";
import ShareButton from "./RightSidebar/ShareButton";
import DescriptionMobile from "./RightSidebar/DescriptionMobile";
import OutOfStock from "./RightSidebar/OutOfStock";

const RightSidebar = ({ visibleItem }) => {  
  
  return (
    <>
      <div className="right_wrapper">
        {visibleItem === "Customizer_Title_list" && (
          <div className="right_wrapper_conntaine" id="Customizer_Title_list">
            <CustomizerTitle />
          </div>
        )}
        {visibleItem === "Layers_Panel_list" && (
          <div className="right_wrapper_conntaine" id="Layers_Panel_list">
            <LayerPanelList />
          </div>
        )}
        {visibleItem === "Layers_list" && (
          <div className="right_wrapper_conntaine" id="Layers_list">
            <LayersList />
          </div>
        )}
        {visibleItem === "Layer_Settings_list" && (
          <div className="right_wrapper_conntaine" id="Layer_Settings_list">
            <LayersSettingsList />
          </div>
        )}
        {visibleItem === "Thumbnails_Button_list" && (
          <div className="right_wrapper_conntaine" id="Thumbnails_Button_list">
            <ThumbnailsButtonList />
          </div>
        )}
        {visibleItem === "Text_Inpu_Dropdown_list" && (
          <div className="right_wrapper_conntaine" id="Text_Inpu_Dropdown_list">
            <InputTextDrpDown />
          </div>
        )}
        {visibleItem === "File_Upload_list" && (
          <div className="right_wrapper_conntaine" id="File_Upload_list">
            <FileUpload />
          </div>
        )}
        {visibleItem === "Print_Ready_list" && (
          <div className="right_wrapper_conntaine" id="Print_Ready_list">
            <PrintReady />
          </div>
        )}
        {visibleItem === "Customizer_list" && (
          <div className="right_wrapper_conntaine" id="Customizer_list">
            <Customizer />
          </div>
        )}
        {visibleItem === "Step_Title_list" && (
          <div className="right_wrapper_conntaine" id="Step_Title_list">
            <StepTitle />
          </div>
        )}
        {visibleItem === "Summary_Title_list" && (
          <div className="right_wrapper_conntaine" id="Summary_Title_list">
            <SummaryTitle />
          </div>
        )}
        {visibleItem === "Cart_button_list" && (
          <div className="right_wrapper_conntaine" id="Cart_button_list">
            <AddToCart />
          </div>
        )}
        {visibleItem === "Confirm_Button_list" && (
          <div className="right_wrapper_conntaine" id="Confirm_Button_list">
            <ConfirmButton />
          </div>
        )}
        {visibleItem === "Price_list" && (
          <div className="right_wrapper_conntaine" id="Price_list">
            <Price />
          </div>
        )}
        {visibleItem === "Switch_View_Arrows_list" && (
          <div className="right_wrapper_conntaine" id="Switch_View_Arrows_list">
            <SwitchViewArrows />
          </div>
        )}
        {visibleItem === "Switch_View_Dots_list" && (
          <div className="right_wrapper_conntaine" id="Switch_View_Dots_list">
            <SwitchViewDots />
          </div>
        )}
        {visibleItem === "Zoom_list" && (
          <div className="right_wrapper_conntaine" id="Zoom_list">
            <Zoom />
          </div>
        )}
        {visibleItem === "Share_Button_list" && (
          <div className="right_wrapper_conntaine" id="Share_Button_list">
            <ShareButton />
          </div>
        )}
        {visibleItem === "Description_list" && (
          <div className="right_wrapper_conntaine" id="Description_list">
            <DescriptionMobile />
          </div>
        )}
        {visibleItem === "Out_of_Stock_list" && (
          <div className="right_wrapper_conntaine" id="Out_of_Stock_list">
            <OutOfStock />
          </div>
        )}
      </div>
    </>
  );
};

export default RightSidebar;