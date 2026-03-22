import React from "react";
import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p>Hi! I&#39;m Sakshi, I love</p>
          <h1>
            building{" "}
            <span className={styles.heroColor}>scalable backend systems</span>{" "}
            and{" "}
            <span className={styles.heroColor2}>
              high-impact automation frameworks
            </span>
            .
          </h1>
          <div className={styles.heroShortIntro}>
            <p>
              Software Engineer at Delhivery, engineering high-scale automation
              for Transportation Management Systems. I&#39;ve scaled test
              coverage from 7% to 100% for core logistics microservices,
              optimized AWS performance by 30%, and streamlined deployments via
              Jenkins CI/CD pipelines. Passionate about solving complex backend
              challenges and Data Structures.
            </p>
          </div>
        </div>
        <div className={styles.heroCta}>
          <Link to="uiux" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check out my works!</button>
          </Link>
          <a
            href="/SDET_resume.pdf"
            download="Sakshi_Sahu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
