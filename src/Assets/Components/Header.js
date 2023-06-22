import { useEffect, useState } from "react";
import logo from "../Img/logo.png";
import bar from "../Img/bars-solid.svg";
import "../CSS/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [mobileNavStyle, setMobileNavStyle] = useState({ top: "130px" });
  const [HeaderClass, setHeaderClass] = useState("Header");
  const [fullHeaderClass, setFullHeaderClass] = useState("full-header");
  let p=window.scrollY;
  let handleScroll = () => {
    if (window.scrollY > 1) {
      setHeaderClass("Header white-header");
      setMobileNavStyle({ top: "130px" });
    } else {
      setHeaderClass("Header");
      setMobileNavStyle({ top: "150px" });
    }
    if(window.scrollY>p) {
      setFullHeaderClass("full-header full-header2");
    }
    else {
      setFullHeaderClass("full-header");
    }
    p=window.scrollY
  };
  window.addEventListener('scroll', handleScroll);
  

  var [barClass, setBarClass] = useState("mobile-nav");
  let handleBar = () => {
    if (barClass === "mobile-nav") {
      setBarClass("mobile-nav active-nav");
    } else setBarClass("mobile-nav");
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
      setBarClass("mobile-nav");
    }
  });
  const CurrLink = useLocation();

  const [link1, setLink1] = useState(
    "/" === window.location.pathname ? "curr-page" : ""
  );
  const [link2, setLink2] = useState(
    window.location.pathname.includes("/News") ? "curr-page" : ""
  );
  const [link3, setLink3] = useState(
    window.location.pathname.includes("/Report") ? "curr-page" : ""
  );
  const [link4, setLink4] = useState(
    window.location.pathname.includes("/about-us") ? "curr-page" : ""
  );
  useEffect(() => {
    setLink1("/" === window.location.pathname ? "curr-page" : "");
    setLink2(window.location.pathname.includes("/News") ? "curr-page" : "");
    setLink3(window.location.pathname.includes("/Report") ? "curr-page" : "");
    setLink4(window.location.pathname.includes("/about-us") ? "curr-page" : "");
    window.scrollTo(0, 0);
  }, [CurrLink]);
  return (
    <div className={fullHeaderClass}>
      <div className="contact-header">

      </div>
      <div className={HeaderClass}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="navbar">
          <li key="1">
            <Link to="/" className={link1}>
              Trang chủ
            </Link>
          </li>
          <li key="2">
            <Link to="/News" className={link2}>
              Thông tin
            </Link>
          </li>
          <li key="3">
            <Link to="/Report" className={link3}>
              Báo cáo
            </Link>
          </li>
          <li key="4">
            <Link to="/about-us" className={link4}>
              Về chúng tôi
            </Link>
          </li>
        </ul>

        <Link to="/fundaraising" className="fundaraising">Đóng góp</Link>
        <img src={bar} alt="bar" className="bar-icon" onClick={handleBar} />
        <ul className={barClass} style={mobileNavStyle}>
          <li key="1" onClick={handleBar}>
            <Link to="/" className={link1}>
              Trang chủ
            </Link>
          </li>
          <li key="2" onClick={handleBar}>
            <Link to="/News" className={link2}>
              Thông tin
            </Link>
          </li>
          <li key="3" onClick={handleBar}>
            <Link to="/Report" className={link3}>
              Báo cáo
            </Link>
          </li>
          <li key="4" onClick={handleBar}>
            <Link to="/about-us" className={link4}>
              Về chúng tôi
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
