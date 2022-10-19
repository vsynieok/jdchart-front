import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");
  }, []);

  return (
    <div className={styles.notFound}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Page Not Found</p>
      </div>
      <div className={styles.imgContainer}>
        <img
          alt="Where Are You Now coaches"
          className={styles.coaches}
          src="/404/coaches.png"
        />
        <div id={styles.q1} className={styles.q}>
          ?
        </div>
        <div id={styles.q2} className={styles.q}>
          ?
        </div>
        <div id={styles.q3} className={styles.q}>
          ?
        </div>
      </div>
    </div>
  );
};

export default NotFound;
