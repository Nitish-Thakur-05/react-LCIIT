import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../button/Button";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SchoolIcon from "@mui/icons-material/School";
import LaptopIcon from "@mui/icons-material/Laptop";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "../button/Button.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "motion/react";

const Header = ({showLinks, setShowLinks}) => {
  const naviagte = useNavigate()

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      naviagte('/')
    }
  };

  return (
    <motion.header
      initial={{ transform: "translateY(-50%) translateX(-50%)", opacity: 0 }}
      whileInView={{ transform: "translateY(0) translateX(-50%)", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`${styles.header} container position-fixed top-0 z-3 d-flex justify-content-between align-items-center py-3`}
    >
      <Button
        className1={style.btn}
        buttonName="Home"
        icon={<HomeIcon />}
        link="/"
        target="_self"
      />

      <div
        className={`${styles.headerItems} justify-content-around align-items-center rounded-pill`}
      >
        <div className={`${styles.links} ${showLinks ? styles.show : ""}`}>
          <Link
            href="#courses"
            className={`${styles.link} align-items-center`}
            onClick={(e) => handleScroll(e, "courses")}
          >
            <SchoolIcon />
            <span className="ms-1">Courses</span>
          </Link>
          <a
            href="#onlineCourses"
            className={`${styles.link} align-items-center`}
            onClick={(e) => handleScroll(e, "onlineCourses")}
          >
            <LaptopIcon />
            <span className="ms-1">Online Courses</span>
          </a>
          <a
            href="#appCourses"
            className={`${styles.link} align-items-center`}
            onClick={(e) => handleScroll(e, "appCourses")}
          >
            <SmartphoneIcon />
            <span className="ms-1">App Courses</span>
          </a>
          <Link to="/contact" className={`${styles.link} align-items-center`}>
            <SupportAgentIcon />
            <span className="ms-1">Contact Us</span>
          </Link>
          <a
            href="#gallery"
            className={`${styles.link} align-items-center`}
            onClick={(e) => handleScroll(e, "gallery")}
          >
            <PhotoLibraryIcon />
            <span className="ms-1">Gallery</span>
          </a>
        </div>
        <div
          className={`${styles.mobileHeaderTool}`}
          onClick={() => setShowLinks((prev) => !prev)}
        >
          <p className="fw-bold m-0">Menu</p>
          {showLinks ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>

      <Button
        className1={style.btn1}
        buttonName="Buy Now"
        icon={<ShoppingCartIcon />}
        link="https://bmbby.courses.store/"
      />
      <Button
        className1={style.btn2}
        buttonName="Download"
        icon={<DownloadIcon />}
        link="https://play.google.com/store/search?q=lciit&c=apps&hl=en_IN"
      />
    </motion.header>
  );
};

export default Header;
