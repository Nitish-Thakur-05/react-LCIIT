import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import styles from "./Social.module.css";
import { motion } from "motion/react";

const Social = () => {
  return (
    <div className={`${styles.socialContainer} d-flex flex-column gap-2`}>
      <motion.a
        initial={{ transform: "TranslateX(100%)", opacity: 0 }}
        whileInView={{ transform: "TranslateX(0)", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }} 
        href="https://www.facebook.com/laptopchiplevelrepairtraining"
        target="_blank"
        className={`${styles.facebook} ${styles.social} rounded-circle`}
      >
        <FacebookIcon />
      </motion.a>
      <motion.a
        initial={{ transform: "TranslateX(50%)", opacity: 0 }}
        whileInView={{ transform: "TranslateX(0)", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }} 
        href="https://www.youtube.com/channel/UCLpZ97yUC-EUCoFQKIyKIZA"
        target="_blank"
        className={`${styles.youtube} ${styles.social} rounded-circle`}
      >
        <YouTubeIcon />
      </motion.a>
      <motion.a
        initial={{ transform: "TranslateX(50%)", opacity: 0 }}
        whileInView={{ transform: "TranslateX(0)", opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }} 
        href="https://t.me/rockafellashine?&text=Welcome%2520To%2520LCIIT"
        target="_blank"
        className={`${styles.telegram} ${styles.social} rounded-circle`}
      >
        <TelegramIcon />
      </motion.a>
      <motion.a
        initial={{ transform: "TranslateX(50%)", opacity: 0 }}
        whileInView={{ transform: "TranslateX(0)", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }} 
        href="tel:+918010708080"
        className={`${styles.call} ${styles.social} rounded-circle`}
      >
        <CallIcon />
      </motion.a>
    </div>
  );
};

export default Social;
