import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./BrickLayout.module.css";

const BrickLayout = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  useEffect(() => {
    const floatingSpeed = 0.001;

    const animateFloat = () => {
      gsap.set(plane1.current, {
        x: Math.sin(Date.now() * floatingSpeed) * 15,
        y: Math.cos(Date.now() * floatingSpeed) * 15,
      });

      gsap.set(plane2.current, {
        x: Math.sin(Date.now() * floatingSpeed * 0.8) * 10,
        y: Math.cos(Date.now() * floatingSpeed * 0.8) * 10,
      });

      gsap.set(plane3.current, {
        x: Math.sin(Date.now() * floatingSpeed * 1.2) * 5,
        y: Math.cos(Date.now() * floatingSpeed * 1.2) * 5,
      });

      requestAnimationFrame(animateFloat);
    };

    animateFloat();

    return () => cancelAnimationFrame(animateFloat);
  }, []);

  return (
    <div>
      <div className={styles["brick-layout"]}>
        <div className={styles["brick-column"]} ref={plane1}>
          <img src="img/dummy_image/1.jpg" alt="" />
          <img src="img/dummy_image/2.jpg" alt="" />
          <img src="img/dummy_image/3.jpg" alt="" />
        </div>
        <div className={styles["brick-column"]} ref={plane2}>
          <img src="img/dummy_image/4.jpg" alt="" />
          <img src="img/dummy_image/5.jpg" alt="" />
          <img src="img/dummy_image/6.jpg" alt="" />
        </div>
        <div className={styles["brick-column"]} ref={plane3}>
          <img src="img/dummy_image/7.jpg" alt="" />
          <img src="img/dummy_image/8.jpg" alt="" />
          <img src="img/dummy_image/9.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrickLayout;
