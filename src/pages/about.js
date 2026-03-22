import Image from "next/image";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/Tomcy.jpg";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.detailsSection}>
          <div className={styles.about}>
            <h1 data-aos="fade-up">About Me</h1>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutInfo}>
                <p className={styles.highlight} data-aos="fade-up" data-aos-delay="200">
                  Software Engineer at Delhivery Ltd. — architecting high-performance
                  backend systems and automated quality frameworks at the intersection
                  of Backend Development and Distributed Systems Reliability.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  I engineer Java-based automation suites for Transportation Management
                  Systems (TMS), scaling test coverage for core logistics microservices
                  from 7% to 100%. I automate Kafka pipelines and REST APIs, ensuring
                  data integrity and idempotency across distributed environments using
                  PostgreSQL and DynamoDB.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  I&#39;m a performance-focused engineer. I execute load tests on AWS
                  Lambda and API Gateway to improve response times by ~30%, and integrate
                  test suites into Jenkins CI/CD pipelines to cut deployment cycles by 40%.
                </p>
                <div className={styles.statRow} data-aos="fade-up" data-aos-delay="500">
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Test Coverage</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>~30%</span>
                    <span className={styles.statLabel}>Faster Response</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>40%</span>
                    <span className={styles.statLabel}>Shorter Deploys</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>300+</span>
                    <span className={styles.statLabel}>DSA Problems</span>
                  </div>
                </div>
                <p data-aos="fade-up" data-aos-delay="600">
                  I collaborate closely with developers to validate API contracts and
                  edge cases, ensuring stable releases across Angular-based UIs and
                  backend services. My data validation scripts verify integrity and
                  idempotency across distributed TMS environments.
                </p>
                <p data-aos="fade-up" data-aos-delay="700">
                  I hold a B.Tech in Computer Science Engineering from APJ Abdul Kalam
                  University (GPA: 7.90/10.00). Beyond work, I build full-stack projects
                  — from an AI-powered Grocery Price Comparator using Gemini AI to
                  Snapster, a social media platform on the MERN stack with real-time chat.
                </p>
                <p data-aos="fade-up" data-aos-delay="800">
                  I&#39;m an avid problem solver with 300+ DSA challenges solved on
                  LeetCode — across Arrays, Strings, Trees, Graphs, DP, and Sliding
                  Window patterns. Whether optimizing backend logistics or crafting
                  user-facing apps, I&#39;m driven to build software that is as stable as
                  it is scalable.
                </p>
              </div>

              <div className={styles.aboutImage}>
                <Image
                  src={Me}
                  alt="Picture of Sakshi - Developer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>

          <div className={styles.profiles}>
            <h1 data-aos="fade-up">Coding Profiles</h1>
            <div className={styles.profileCards}>
              <a
                href="https://leetcode.com/u/Sakshii15/"
                target="_blank"
                rel="noreferrer"
                className={styles.profileCard}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className={styles.profileBadge}>
                  <span>300+ Problems Solved</span>
                </div>
                <div className={styles.profileImage}>
                  <Image
                    src={require("../../public/images/uiuxProjects/leetcode.png")}
                    alt="LeetCode Profile"
                  />
                </div>
                <div className={styles.profileInfo}>
                  <h3>LeetCode</h3>
                  <p>Arrays, Graphs, DP, Sliding Window, Trees, Strings</p>
                </div>
              </a>
              <a
                href="https://github.com/Sakshii15"
                target="_blank"
                rel="noreferrer"
                className={styles.profileCard}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className={styles.profileBadge}>
                  <span>Open Source Projects</span>
                </div>
                <div className={styles.profileImage}>
                  <Image
                    src={require("../../public/images/uiuxProjects/github.png")}
                    alt="GitHub Profile"
                  />
                </div>
                <div className={styles.profileInfo}>
                  <h3>GitHub</h3>
                  <p>Full-stack projects, automation frameworks, and more</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillsContainer}>
              <h1 data-aos="fade-up">Key Technical Pillars</h1>
              <div className={styles.skillCards}>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#cf92fb" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Languages</h2>
                  <p>C++</p>
                  <p>Java</p>
                  <p>JavaScript</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#b44bff" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2>Backend & Data</h2>
                  <p>Node.js</p>
                  <p>Kafka</p>
                  <p>PostgreSQL</p>
                  <p>DynamoDB</p>
                  <p>REST APIs</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#911ae5" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h2>Infrastructure</h2>
                  <p>AWS Lambda / Gateway</p>
                  <p>Jenkins CI/CD</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#7b0dc4" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Testing / QA</h2>
                  <p>Selenium</p>
                  <p>TestNG</p>
                  <p>Performance Testing</p>
                  <p>API Automation</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#5e00a3" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2>Problem Solving</h2>
                  <p>300+ DSA Problems</p>
                  <p>Arrays, Graphs, DP</p>
                  <p>Sliding Window</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
