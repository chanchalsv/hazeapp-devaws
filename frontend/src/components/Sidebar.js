import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/dashboard');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleUserDropdown = () => {
    var userDropdownOptions = document.getElementById("userDropdownOptions");
    userDropdownOptions.style.display = (userDropdownOptions.style.display === "block") ? "none" : "block";
  }
  return (
    <>
      <div className="sider_baar">
        <div className="sidebar_menu_section">
          <ul className="sidebar_menu">
            <li className="sidebar_list ">
              <a href="/dashboard">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/home.svg" />
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/dashboard' ? 'active_list' : ''}`}>Dashboard</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/orders">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Orders.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/orders' ? 'active_list active' : ''}`}>Orders</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/my-products">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/My Products.svg" />
                </span>

                <span className={`sidebar_menu_name ${activeLink === '/my-products' ? 'active_list active' : ''}`}>Products</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/pricing-rules">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Pricing Rules.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/pricing-rules' ? 'active_list active' : ''}`}>Pricing Rules</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/theme-selector">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Theme Builder.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/theme-selector' ? 'active_list active' : ''}`}>Theme Builder</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/printing-methods">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/Printing Methods.svg" />
                </span>

                <span className={`sidebar_menu_name ${activeLink === '/printing-methods' ? 'active_list active' : ''}`}>Printing Methods</span>
              </a>
            </li>       

            <li className="sidebar_list">
              <a href="/saved-designs">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Saved Designs.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/saved-designs' ? 'active_list active' : ''}`}>Saved Designs</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/settings">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Settings.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/settings' ? 'active_list active' : ''}`}>Settings</span>
              </a>
            </li>
          </ul>
          <div className="user_profile_sectiion">
            <div className="user_profile">
              <div className="custom-user-dropdown">
                <img className="user-avatar" src="assets/Image/Avatar.png" alt="User Avatar" />
                <div className="user_profile">
                  <div className="user-name">Myles Dickinson</div>
                  <div className="user_roll">Admin</div>
                </div>
                <div className="custom-user-dropdown-toggle" onClick={toggleUserDropdown}>
                    <img src="assets/Image/Dropdown.svg" />
                </div>
                <div className="custom-user-dropdown-options" id="userDropdownOptions">
                  <a href="#"><img src='assets/Image/profile.svg'/>Your Profile</a>
                  <a href="#"><img src='assets/Image/help-centre.svg'/>Help Center</a>
                  <a href="#"><img src="assets/Image/logout.svg" />Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
