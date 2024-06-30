// page.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  MdArrowLeft,
  MdOutlineEmojiTransportation,
  MdFastfood,
} from "react-icons/md";
import { BsWater } from "react-icons/bs";
import { GiNuclearWaste } from "react-icons/gi";
import { LiaBlogSolid } from "react-icons/lia";
import { TfiControlEject } from "react-icons/tfi";
import { SlEnergy } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Carousel from "../components/elements/carousel";
import Card from "../components/elements/card";
import LiveStream from "../components/elements/livestream";
import Footer from "../components/elements/footer";
// import LandingPage from "../components/landingpage"; // Adjust path as per your project structure


const sidebarItems = [
  { name: "Energy Consumption Tracking", href: "/Energy Consumption Tracking", icon: SlEnergy },
  { name: "Transportation Tracking", href: "/Transportation Tracking", icon: MdOutlineEmojiTransportation },
  { name: "Waste Generation Tracking", href: "/Waste Generation Tracking", icon: GiNuclearWaste },
  { name: "Water Usage Tracking", href: "/Water Usage Tracking", icon: BsWater },
  { name: "Food Consumption Tracking", href: "/Food Consumption Tracking", icon: MdFastfood },
  { name: "Blogs", href: "/blogs", icon: LiaBlogSolid },
  { name: "Roles", href: "/roles", icon: TfiControlEject },
];

const apiData = [
  { id: 1, title: "Waste:", content: "Effective sustainable waste management, including reducing, reusing, and recycling, is crucial for environmental protection and resource conservation. Innovations like composting and waste-to-energy technologies convert waste into valuable resources, supporting a greener future. Communities leading zero-waste initiatives demonstrate the collective potential for transformative change. Together, we can harness waste as a catalyst for sustainable development and a healthier planet." },
  { id: 2, title: "Transport:", content: "Today, sustainability calls for a transformative approach to waste and transport. By embracing reduction, reuse, and recycling, we convert waste into valuable resources, fostering community-driven innovation for a cleaner future. Prioritizing electric vehicles, efficient public transit, and walkable cities reduces emissions and promotes healthier lifestyles, paving the way for sustainable transport solutions that harmonize with nature and enhance quality of life for all." },
  { id: 3, title: "Fooding:", content: "In the realm of sustainability, rethinking food choices is pivotal. Opting for local, organic produce reduces carbon footprints and bolsters community resilience. Embracing plant-based diets conserves resources and supports biodiversity. Minimizing food waste through mindful consumption enhances sustainability efforts. Let's cultivate a future where our food choices nourish both people and the planet, fostering a healthier and more sustainable world." },
  { id: 4, title: "Water:", content: "In the pursuit of sustainability, water conservation is paramount. Embracing efficient irrigation and household practices preserves this vital resource. Protecting water bodies from pollution and ensuring universal access to clean water are critical. Investment in water-saving technologies and community awareness fosters environmental resilience. Let's unite to steward water wisely, safeguarding it for future generations and nurturing thriving communities." },
  { id: 5, title: "Electricity:", content: "Cities like Barcelona and Honolulu lead the charge towards a 100% renewable energy future through solar and wind power innovations. Agrivoltaics integrates solar energy with agriculture, optimizing land use and boosting clean energy production. As global fossil fuel electricity peaks, urgent adoption of sustainable practices becomes paramount. Projects like solar panels over aqueducts showcase inventive solutions to environmental challenges. Efficient water usage and watershed protection are crucial for sustainability, supported by resilient water management infrastructure. Let's unite to safeguard water for a flourishing future." },
];

const Sidebar = () => {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [apiCards, setApiCards] = useState([]);
  const [showLandingPage, setShowLandingPage] = useState(true); // State to manage the landing page display
  const [loggedIn, setLoggedIn] = useState(false); // Simulate login status

  useEffect(() => {
    setTimeout(() => {
      setApiCards(apiData);
    }, 1000);
  }, []);

  const toggleSidebarCollapseHandler = () => {
    setIsCollapsedSidebar((prev) => !prev);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".sidebar") && !event.target.closest(".btn") && !event.target.closest(".profile-icon")) {
        setIsCollapsedSidebar(true);
        setIsProfileOpen(false); // Close the profile dropdown when clicking outside
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your navigation logic here
  };

  const handleLoginClick = () => {
    console.log("Login clicked");
    // Add your navigation logic here
  };

  const handleSignupClick = () => {
    console.log("Signup clicked");
    // Add your navigation logic here
  };

  const handleExploreClick = () => {
    setShowLandingPage(false); // Hide landing page and show main content
  };

  // if (showLandingPage) {
  //   return <LandingPage loggedIn={loggedIn} handleExploreClick={handleExploreClick} />;
  // }

  return (
    <div className="flex flex-col h-screen">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/image/ecosynergy.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="navbar-title">EcoSynergy</span>
        </div>
        <div className="flex items-center ml-auto" style={{ position: "absolute", top: "0", right: "0" }}>
          <span>Unite for a Greener Tomorrow</span>
          <div className="relative">
            <CgProfile className="profile-icon text-3xl cursor-pointer" onClick={toggleProfileDropdown} />
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <div className="p-2">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded-lg mb-2"
                    onClick={handleProfileClick}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded-lg mb-2"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded-lg"
                    onClick={handleSignupClick}
                  >
                    Signup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="flex flex-grow mt-16">
        <aside className={`sidebar ${isCollapsedSidebar ? "w-16" : "w-64"} transition-all duration-300`}>
          <button className="btn p-2 text-white bg-gray-800 rounded-full m-2 transition-transform" onClick={toggleSidebarCollapseHandler}>
            <MdArrowLeft className={`${isCollapsedSidebar ? "rotate-180" : ""}`} />
          </button>
          <ul className="sidebar_list">
            {sidebarItems.map(({ name, href, icon: Icon }) => (
              <li className={`sidebar_items ${name === activeItem ? "bg-gray-700" : "bg-gray-800"} hover:bg-gray-700 transition-all duration-300 p-3 rounded-lg flex items-center cursor-pointer`} key={name} onClick={() => handleItemClick(name)}>
                <Link href={href} className="sidebar_link flex items-center w-full text-white no-underline">
                  <Icon className="sidebar_icons text-2xl" />
                  {!isCollapsedSidebar && <span className="sidebar_name ml-3 text-lg">{name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className={`main-content flex-grow transition-all duration-300 ${isCollapsedSidebar ? "ml-20" : "ml-64"} mt-16`}>
          <div className="content_card">
            <div className="carousel-container">
              <Carousel isSidebarCollapsed={isCollapsedSidebar} cards={apiCards.slice(0, 3)} />
            </div>
          </div>
          <div className="card-container-horizontal flex overflow-x-scroll space-x-4 p-4">
            {apiCards.map((card) => (
              <Card key={card.id} title={card.title} content={card.content} />
            ))}
          </div>
          <div className="livestream-container">
            <LiveStream />
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
