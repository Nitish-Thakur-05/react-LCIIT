import { useEffect } from "react";
import styles from "./SkletonModal.module.css";

const SkletonModal = () => {
  useEffect(() => {
    document.body.classList.add(styles.bodyLock);
    return () => {
      document.body.classList.remove(styles.bodyLock);
    };
  }, []);

  return (
    <div className={styles.skleton}>
      <div className={styles.modalSkeleton}>
        {/* Header */}
        <div className={styles.skeletonHeader}></div>

        {/* Body */}
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLineShort}></div>

        {/* Footer (buttons) */}
        <div className={styles.skeletonFooter}>
          <div className={styles.skeletonBtn}></div>
          <div className={styles.skeletonBtn}></div>
        </div>
      </div>
    </div>
  );
};

export default SkletonModal;
