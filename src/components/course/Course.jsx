import styles from "./Course.module.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Course = ({ img, text, title, link, onclick, ...props }) => {
  return (
    <div className={`${styles.courseContainer}`} {...props}>
      <img src={img} alt={`${title} img`} loading="lazy" />
      <h4>{title}</h4>
      <p tabIndex={-1}>{text}</p>
      {link ? (
        <a tabIndex={0} href={link} target="_blank" className="text-nowrap">
          Buy Now
          <ArrowRightIcon />
        </a>
      ) : (
        <button className={`${styles.btn}`} onClick={onclick}>
          Know More <ArrowRightIcon />
        </button>
      )}
    </div>
  );
};

export default Course;
