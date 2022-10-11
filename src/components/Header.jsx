import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import { useEffect, useRef } from "react";

const mainNav = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  {
    display: "Sản Phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ Kiện",
    path: "/accessories",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bxs-chevron-left"></i>
            </div>
            {mainNav.map((items, index) => (
              <div
                key={index}
                className={`header__menu__item  
                header__menu__left__item ${index === activeNav ? "active" : ""
                  }`}
                onClick={menuToggle}
              >
                <Link to={items.path}>
                  <span>{items.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item  header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item  header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-cart"></i>
              </Link>
            </div>
            <div className="header__menu__item  header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
