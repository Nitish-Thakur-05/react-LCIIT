import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Footer = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  return (
    <footer className="position-relative w-100 overflow-hidden pt-5 pb-2 bg-dark text-light">
      <motion.div
        initial={{ transform: "translateY(50%)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={`container ${styles.footerGlow}`}
      >
        <div
          className={`${styles.glassBox} p-4 p-md-5 row g-0 align-items-start gap-4`}
        >
          {/* Brand */}
          <div
            className={`${styles.brandSection} col-md-4 text-center text-md-start`}
          >
            <div className="d-flex align-items-center mb-2 justify-content-center justify-content-md-start">
              <div
                className="rounded-circle bg-info d-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h5 className="mb-0 fw-bold">Lciit</h5>
            </div>
            <p className="small m-0">
              LCIIT Delhi is a leading institute for laptop and desktop
              motherboard chip-level repairing, BIOS editing, and hardware
              diagnostics. With hands-on training, industry-grade tools, and
              expert mentorship, we prepare students for real-world hardware
              repair careers.
            </p>
            <div className="d-flex gap-3 fs-5 justify-content-center justify-content-md-start mt-2">
              <a
                href="https://www.facebook.com/laptopchiplevelrepairtraining"
                className={`${styles.socialApp} text-light`}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCLpZ97yUC-EUCoFQKIyKIZA"
                className={`${styles.socialApp} text-light`}
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://api.whatsapp.com/send?text=https://www.lciit.com/"
                className={`${styles.socialApp} text-light`}
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://t.me/rockafellashine?&text=Welcome%2520To%2520LCIIT"
                className={`${styles.socialApp} text-light`}
              >
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-2">
            <h6 className="text-uppercase text-info fw-bold small">Courses</h6>
            <ul className="list-unstyled small">
              <li>
                <span
                  tabIndex={0}
                  className={styles.footerLink}
                  onClick={() => {
                    navigate("/");
                    setIsModalOpen((prev) => ({
                      ...prev,
                      advanceReparing: true,
                    }));
                  }}
                >
                  Laptop Chip Repairing.
                </span>
              </li>
              <li>
                <span
                  tabIndex={0}
                  className={styles.footerLink}
                  onClick={() => {
                    navigate("/");
                    setIsModalOpen((prev) => ({
                      ...prev,
                      fresherReparing: true,
                    }));
                  }}
                >
                  Desktop Chip Reparing
                </span>
              </li>
              <li>
                <span
                  tabIndex={0}
                  className={styles.footerLink}
                  onClick={() => {
                    navigate("/");
                    setIsModalOpen((prev) => ({
                      ...prev,
                      biosEditing: true,
                    }));
                  }}
                >
                  Laptop BIOS Editing
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase text-info fw-bold small">Company</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="/about" className={styles.footerLink}>
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase text-info fw-bold small">
              App Courses
            </h6>
            <ul className="list-unstyled small">
              <li>
                <a
                  href="https://bmbby.courses.store/215868?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className={styles.footerLink}
                >
                  DSO Basic Settings.
                </a>
              </li>
              <li>
                <a
                  href="https://bmbby.courses.store/213190?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className={styles.footerLink}
                >
                  Laptop BIOS Editing.
                </a>
              </li>
              <li>
                <a
                  href="https://bmbby.courses.store/235344?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className={styles.footerLink}
                >
                  Disable Onboard Ram.
                </a>
              </li>
              <li>
                <a
                  href="https://bmbby.courses.store/353745?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className={styles.footerLink}
                >
                  TPM Error Solution.
                </a>
              </li>
              <li>
                <a
                  href="https://bmbby.courses.store/282837?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className={styles.footerLink}
                >
                  8FC8 Password Unlocking.
                </a>
              </li>
              <li>
                <a
                  href="https://bmbby.courses.store/250839?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className={styles.footerLink}
                >
                  BIOS Password Unlocking.
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom text */}
        <div
          className="text-center small mt-2"
          style={{ zIndex: 1, position: "relative" }}
        >
          © 2025 Lciit. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
