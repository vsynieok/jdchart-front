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
        <p className={styles.title}>Oops!...404</p>
        <p className={styles.description}>
          You've found something you weren't supposed to find.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img
          alt="Where Are You Now coaches"
          className={styles.coaches}
          src="/404/coaches.png"
        />
      </div>
    </div>
  );
};

export default NotFound;
