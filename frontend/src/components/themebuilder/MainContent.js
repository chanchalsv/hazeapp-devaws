import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ThemeContext from "../../contexts/ThemeContext";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM42 13.5H2V10.5H42V13.5Z"
          fill="#2D2D2D"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z"
          fill="#2D2D2D"
        />
      </svg>
    </div>
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MainContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { customizerData } = useContext(ThemeContext);
  const [customizerTitleStyle, setCustomizerTitleStyle] = useState({});
  const [customizerLayerPanel, setCustomizerLayerPanel] = useState({});
  const [customizerAddToCartBtn, setCustomizerAddToCartBtn] = useState({});
  const [customizerPrice, setCustomizerPrice] = useState({});

  const [accordionOneOpen, setAccordionOneOpen] = useState(false);
  const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
  const [accordionThreeOpen, setAccordionThreeOpen] = useState(false);

  const toggleAccordionOne = () => {
    setAccordionOneOpen((prev) => !prev);
    setAccordionTwoOpen(false);
    setAccordionThreeOpen(false);
  };

  const toggleAccordionTwo = () => {
    setAccordionTwoOpen((prev) => !prev);
    setAccordionOneOpen(false);
    setAccordionThreeOpen(false);
  };

  const toggleAccordionThree = () => {
    setAccordionThreeOpen((prev) => !prev);
    setAccordionOneOpen(false);
    setAccordionTwoOpen(false);
  };

  useEffect(() => {
    setCustomizerTitleStyle({
      backgroundColor:
        customizerData?.CustomizerTitle?.CustomizerTitleBackgroundColor,
      fontFamily:
        customizerData?.CustomizerTitle?.CustomizerTitleFontFamily || "Arial",
      fontSize: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontSizeMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontSize,
      color: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontColorMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontColor,
      borderBottom:
        customizerData?.CustomizerTitle?.CustomizerTitleDividerThickness +
        " solid " +
        customizerData?.CustomizerTitle?.CustomizerTitleDividerColor,
    });
    setCustomizerLayerPanel({
      textAlign: customizerData?.LayersPanel?.textAlignment || "left",
    });
    setCustomizerAddToCartBtn({
      border:
        customizerData?.AddToCart?.BorderThickness +
        " solid " +
        customizerData?.AddToCart?.BorderColor,
      borderRadius: customizerData?.AddToCart?.BorderRounding,
      fontFamily: customizerData?.AddToCart?.FontFamily,
      color: customizerData?.AddToCart?.FontColor,
      backgroundColor: isHovered
        ? customizerData?.AddToCart?.HoverBackgroundColor
        : customizerData?.AddToCart?.BackgroundColor,
      fontSize: customizerData?.AddToCart?.FontSize,
    });
    setCustomizerPrice({});
  }, [customizerData, isMobile]);
  const images = [
    "assets/Image/product/Mug handle 1.svg",
    "assets/Image/product/Mug handle 1.svg",
    "assets/Image/product/Mug handle 1.svg",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="center_wrapper">
        <>
          {customizerData?.ThemeType?.ThemeSelect === "Theme 1" && (
            <div class="products_wrapper">
              <div class="products_col">
                <div
                  class="products_wrapper_tile caption-top  col_padding"
                  style={customizerTitleStyle}
                >
                  Product 1
                </div>
                <div
                  class="products_wrapper_tag  col_padding"
                  style={customizerLayerPanel}
                >
                  Mug
                </div>
                <div class="products_wrapper_row">
                  <div class="products_wrapper_col">
                    <div class="products-active products_wrapper_image">
                      <img src="/assets/Image/product/mug.svg" />
                    </div>
                  </div>
                  <div class="products_wrapper_tag">Mug Colour</div>
                </div>
                <div class="products_wrapper_row">
                  <div class="products_wrapper_col">
                    <div class="products_colour_section">
                      <span class="products-active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="products_wrapper_tag">Handle</div>
                </div>
                <div class="products_wrapper_row">
                  <div class="products_wrapper_col">
                    <div class="products-active products_wrapper_image">
                      <img src="/assets/Image/product/mug-handle.svg" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="products_col">
                <div class="products_top_section">
                  <div class="products_top_section_row">
                    <div class="products_amount">
                      <span class="currency_symbol">$</span>
                      <span class="currency_value">24</span>
                    </div>
                    <div class="products_button">
                      <button class="products_zomm_button">
                        <img src="assets/image/them/zoom.png" />
                      </button>
                      <button class="share_button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M19.2785 16.8161C18.0807 16.8161 17.0015 17.3334 16.2525 18.1562L9.51555 13.9837C9.69542 13.5233 9.79517 13.0232 9.79517 12.5C9.79517 11.9766 9.69542 11.4765 9.51555 11.0162L16.2525 6.84355C17.0015 7.66638 18.0807 8.18384 19.2785 8.18384C21.5349 8.18384 23.3705 6.34822 23.3705 4.09183C23.3705 1.83544 21.5349 0 19.2785 0C17.0221 0 15.1865 1.83563 15.1865 4.09202C15.1865 4.6152 15.2864 5.11531 15.4661 5.57574L8.72935 9.74825C7.98033 8.92542 6.90116 8.40796 5.70335 8.40796C3.44696 8.40796 1.61133 10.2438 1.61133 12.5C1.61133 14.7564 3.44696 16.592 5.70335 16.592C6.90116 16.592 7.98033 16.0747 8.72935 15.2517L15.4661 19.4242C15.2864 19.8846 15.1865 20.3847 15.1865 20.9081C15.1865 23.1643 17.0221 24.9999 19.2785 24.9999C21.5349 24.9999 23.3705 23.1643 23.3705 20.9081C23.3705 18.6517 21.5349 16.8161 19.2785 16.8161ZM16.6786 4.09202C16.6786 2.65846 17.8449 1.49212 19.2785 1.49212C20.712 1.49212 21.8784 2.65846 21.8784 4.09202C21.8784 5.52558 20.712 6.69192 19.2785 6.69192C17.8449 6.69192 16.6786 5.52558 16.6786 4.09202ZM5.70335 15.0999C4.26959 15.0999 3.10325 13.9335 3.10325 12.5C3.10325 11.0664 4.26959 9.90007 5.70335 9.90007C7.13691 9.90007 8.30306 11.0664 8.30306 12.5C8.30306 13.9335 7.13691 15.0999 5.70335 15.0999ZM16.6786 20.9079C16.6786 19.4744 17.8449 18.308 19.2785 18.308C20.712 18.308 21.8784 19.4744 21.8784 20.9079C21.8784 22.3415 20.712 23.5078 19.2785 23.5078C17.8449 23.5078 16.6786 22.3415 16.6786 20.9079Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="products_slid">
                  <Slider {...settings}>
                    <div>
                      <img src="/assets/Image/product/mug.png" />
                    </div>
                    <div>
                      <img src="/assets/Image/product/mug.png" />
                    </div>
                  </Slider>
                </div>
                <div
                  class="products_add_button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <button class="add_button" style={customizerAddToCartBtn}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
        {customizerData?.ThemeType?.ThemeSelect === "Theme 2" && (
          <div className="products_wrapper">
            <div className="products_col">
              <div className="products_top_section">
                <div className="products_top_section_row">
                  <div class="products_button">
                    <button class="products_zomm_button">
                      <img src="assets/image/them/zoom.png" />
                    </button>
                    <button class="share_button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M19.2785 16.8161C18.0807 16.8161 17.0015 17.3334 16.2525 18.1562L9.51555 13.9837C9.69542 13.5233 9.79517 13.0232 9.79517 12.5C9.79517 11.9766 9.69542 11.4765 9.51555 11.0162L16.2525 6.84355C17.0015 7.66638 18.0807 8.18384 19.2785 8.18384C21.5349 8.18384 23.3705 6.34822 23.3705 4.09183C23.3705 1.83544 21.5349 0 19.2785 0C17.0221 0 15.1865 1.83563 15.1865 4.09202C15.1865 4.6152 15.2864 5.11531 15.4661 5.57574L8.72935 9.74825C7.98033 8.92542 6.90116 8.40796 5.70335 8.40796C3.44696 8.40796 1.61133 10.2438 1.61133 12.5C1.61133 14.7564 3.44696 16.592 5.70335 16.592C6.90116 16.592 7.98033 16.0747 8.72935 15.2517L15.4661 19.4242C15.2864 19.8846 15.1865 20.3847 15.1865 20.9081C15.1865 23.1643 17.0221 24.9999 19.2785 24.9999C21.5349 24.9999 23.3705 23.1643 23.3705 20.9081C23.3705 18.6517 21.5349 16.8161 19.2785 16.8161ZM16.6786 4.09202C16.6786 2.65846 17.8449 1.49212 19.2785 1.49212C20.712 1.49212 21.8784 2.65846 21.8784 4.09202C21.8784 5.52558 20.712 6.69192 19.2785 6.69192C17.8449 6.69192 16.6786 5.52558 16.6786 4.09202ZM5.70335 15.0999C4.26959 15.0999 3.10325 13.9335 3.10325 12.5C3.10325 11.0664 4.26959 9.90007 5.70335 9.90007C7.13691 9.90007 8.30306 11.0664 8.30306 12.5C8.30306 13.9335 7.13691 15.0999 5.70335 15.0999ZM16.6786 20.9079C16.6786 19.4744 17.8449 18.308 19.2785 18.308C20.712 18.308 21.8784 19.4744 21.8784 20.9079C21.8784 22.3415 20.712 23.5078 19.2785 23.5078C17.8449 23.5078 16.6786 22.3415 16.6786 20.9079Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="products_amount">
                    <span className="currency_symbol">$</span>
                    <span className="currency_value">24</span>
                  </div>
                </div>
              </div>
              <div class="products_slid">
                <Slider {...settings}>
                  <div>
                    <img src="/assets/Image/product/mug.png" />
                  </div>
                  <div>
                    <img src="/assets/Image/product/mug.png" />
                  </div>
                </Slider>
              </div>
              <div className="products_add_button">
                <button
                  className="add_button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={customizerAddToCartBtn}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="products_col">
              <div
                className="products_wrapper_tile caption-top  col_padding"
                style={customizerTitleStyle}
              >
                Product 1
              </div>
              <div className="products_wrapper_tag__main">
                <div className="products__cont__three">
                  <div className="br__bttotom">
                    <div
                      onClick={toggleAccordionOne}
                      className={`accordion-title ${
                        accordionOneOpen ? "open" : ""
                      }`}
                    >
                      <h2 className="products_wrapper_tag ">Mug Colour</h2>
                    </div>
                    <div
                      className={`accordion-content ${
                        accordionOneOpen ? "open" : ""
                      }`}
                    >
                      <div className="colors__box">
                        <div class="products_colour_section">
                          <span class="products-active"></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="br__bttotom">
                    <div
                      onClick={toggleAccordionTwo}
                      className={`accordion-title ${
                        accordionTwoOpen ? "open" : ""
                      }`}
                    >
                      <h2 className="products_wrapper_tag ">Handle Colour</h2>
                    </div>
                    <div
                      className={`accordion-content ${
                        accordionTwoOpen ? "open" : ""
                      }`}
                    >
                      <div className="colors__box">
                        <div class="products_colour_section">
                          <span class="products-active"></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="br__bttotom">
                    <div
                      onClick={toggleAccordionThree}
                      className={`accordion-title ${
                        accordionThreeOpen ? "open" : ""
                      }`}
                    >
                      <h2 className="products_wrapper_tag ">Enter Text</h2>
                    </div>
                    <div
                      className={`accordion-content ${
                        accordionThreeOpen ? "open" : ""
                      }`}
                    >
                      <h4 class="text__printed__acc">
                        Enter Text to be Printed
                      </h4>
                      <input
                        placeholder="Your Text"
                        class="input__text__field__acc"
                      />
                    </div>
                  </div>
                </div>

                <div className="products_wrapper_row">
                  <div className="products_wrapper_col"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainContent;
