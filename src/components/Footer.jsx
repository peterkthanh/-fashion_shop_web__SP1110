import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import Logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/about",
  },
  {
    display: "Liên Hệ",
    path: "/about",
  },
  {
    display: "Tin Tuyển Dụng",
    path: "/about",
  },
  {
    display: "Tin Tức",
    path: "/about",
  },
  {
    display: "Hệ Thống Cửa Hàng",
    path: "/about",
  },
];
const footerCustomerLinks = [
  {
    display: "Chính Sách Đổi Trả",
    path: "/about",
  },
  {
    display: "Chính Sách bảo Hành",
    path: "/about",
  },
  {
    display: "Chính Sách Hoàn Tiền",
    path: "/about",
  },
];
function Footer() {
  return (
    <footer>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={2} gap={10}>
          <div>
            <div className="footer__title">
              Tổng đài hỗ trợ
            </div>
            <div className="footer__content">
              <p> Liên hệ Đặt hàng <strong>0123456789</strong></p>
              <p> Thắc mắc đơn hàng <strong>0123456789</strong></p>
              <p> Góp ý khiêu nại <strong>0123456789</strong></p>
            </div>
          </div>
          <div>
            <div className="footer__title">
              Về Yolo
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>

                  </p>
                ))
              }


            </div>
          </div>
          <div>
            <div className="footer__title">
              Chăm Sóc Khách Hàng
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>

                  </p>
                ))
              }


            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to='/'>
                <img src={Logo} className="footer__logo" alt="logo" />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu
              người tiêu dùng việt. Hãy cũng Yolo hướng đến một cuộc sống năng động,
              tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
