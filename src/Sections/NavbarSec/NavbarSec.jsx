import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Headroom from 'react-headroom';
import { useTheme } from '../../Components/ThemeProvider/ThemeProvider';
import {  CartLink, LangBtn, NavBtn, NavLinks, ProfileLink, Search } from '../../Components';
import { MdSearchOff, MdSearch } from "react-icons/md";
import { FaBell, FaHeart, FaList, FaMoon, FaSun } from 'react-icons/fa6';
import './NavbarSec.css';

const NavbarSec = ({ isLoading, setIsLoading, toggleSidebar, setIsLoadingSec }) => {
  const [openNav, setOpenNav] = useState(false);
  const [mobMedia, setMobMedia] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navBtnRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const searchIconRef = useRef(null);

  const handleOpenNav = () => {
    setSearchValue("");
    setOpenNav(!openNav);
  };

  const handleOpenSearch = () => {
    setSearchValue("");
    setSearch(!search);

    // setTimeout to make sure the input is rendered
    setTimeout(() => {
      const searchPC = document.querySelector('#pcSearch');
      if (searchPC) {
        searchPC.focus();
      }
    }, 100);
  };

  useEffect(() => { // Close Links when click a (navLink) and (outside navbar)
    const handleClickOutside = (event) => {
      const NestedLink = document.querySelector(".NestedLink");
      const navLinks = document.querySelector('.navMob');
      if (
        openNav &&
        navLinks &&
        !navLinks.contains(event.target) &&
        !navBtnRef.current.contains(event.target) &&
        !NestedLink.contains(event.target)
      ) {
        setOpenNav(false);
        setSearchValue("");
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    let NavLinks = document.querySelectorAll(".clsLink");
    let clsNav = () => {
      setOpenNav(false);
      setSearchValue("");
    };
    NavLinks.forEach(NavLink => {
      NavLink.addEventListener('click', clsNav);
    });

    return () => {
      NavLinks.forEach(NavLink => {
        NavLink.removeEventListener('click', clsNav);
      });
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openNav]);

  useEffect(() => { // Close Search Box when clicking outside
    const handleClickOutside = (event) => {
      let searchIcn = document.querySelector(".icnWrapperSrch ");
      let searchPc = document.querySelector(".pcSearch ");
      if (search && searchPc && !searchPc.contains(event.target) && !searchIcn.contains(event.target)) {
        setSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [search]);

  useEffect(() => { // Control Media From Here
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobMedia(true);
      } else {
        setMobMedia(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setMobMedia]);

  return (
    <Headroom>
      <nav className='navbarSec'>
        <div className="navContainer">

          {/*SideBtn & NavBtn & LangBtn & LOGO & Search-Icon */}
          <div
            className="logoBX d-flex"
            style={{ alignItems: "center", gap: "5px" }}
          >
            <div
              className="sideBtn"
              onClick={toggleSidebar}
            >
              <FaList />
            </div>

            <NavLink to='/' className="logo clsLink">
              <span>LOGO</span>
            </NavLink>

            <LangBtn
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setIsLoadingSec={setIsLoadingSec}
            />
            {mobMedia && (
              <div className="icnWrapperSrch themWrapper">
                <label className='theWrapper' style={{cursor:"pointer"}}>
                  <input
                    style={{ opacity: "0", width: "0", height: "0" }}
                    type="checkbox"
                    id="mainTheme2"
                    checked={theme === 'light'} // Reflect current theme state
                    onChange={toggleTheme}
                  />
                  <span className="theIcn" >
                    {theme === 'light'
                      ? <FaMoon style={{position:"relative", top:"-1px"}} 
                        data-aos="fade" data-aos-duration="500"
                      />
                      : <FaSun  style={{position:"relative", top:"-1px"}} 
                        data-aos="fade" data-aos-duration="500"
                      />
                    }
                  </span>
                </label>
              </div>
            )}

            <div
              className={search ? "icnWrapperSrch active" : "icnWrapperSrch"}
              onClick={handleOpenSearch}
              ref={searchIconRef}
            >
              {search
                ? <MdSearchOff />
                : <MdSearch />
              }
            </div>
          </div>

          {!mobMedia && ( // Nav Links
            <ul className="navLinks">
              <NavLinks />
            </ul>
          )}

          {/* Profile-Link & Notifications & Shope-cart & Favorites & Search-Icon */}
          <div
            className="navIcnWrapper"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div className="icnWrapperSrch">
              <label className='theWrapper' style={{cursor:"pointer"}}>
                <input
                  style={{ opacity: "0", width: "0", height: "0" }}
                  type="checkbox"
                  id="mainTheme"
                  checked={theme === 'light'} // Reflect current theme state
                  onChange={toggleTheme}
                />
                <span className="theIcn" >
                  {theme === 'light'
                    ? <FaMoon style={{position:"relative", top:"-1px"}} 
                      data-aos="fade" data-aos-duration="500"
                    />
                    : <FaSun  style={{position:"relative", top:"-1px"}} 
                      data-aos="fade" data-aos-duration="500"
                    />
                  }
                </span>
              </label>
            </div>

            <NavLink
              className="navProfIcon HeartIcn"
              to={"/Favorites"}
            >
              <FaHeart />
            </NavLink>

            <CartLink />

            <NavLink
              className="navProfIcon NotifyIcn"
              to={"/Notifications"}
            >
              <FaBell />
            </NavLink>

            <ProfileLink setIsLoadingSec={setIsLoadingSec} />

            {mobMedia && (
              <NavBtn
                ref={navBtnRef}
                openNav={openNav}
                setOpenNav={setOpenNav}
                handleOpenNav={handleOpenNav}
              />
            )}
          </div>
        </div>

        <div className="searchPcWrapper">
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            cla={search
              ? 'search pcSearch opened'
              : 'search pcSearch'
            }
            id={"pcSearch"}
          />
        </div>

        {mobMedia && ( // Mobile NavLinks
          <ul className={openNav ? ("navLinks navMob opened") : ("navLinks")}>
            <NavLinks />
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              cla={"search mobSearch"}
              id={"mbSearch"}
            />
          </ul>
        )}
      </nav>
    </Headroom>
  );
};

export default NavbarSec;
