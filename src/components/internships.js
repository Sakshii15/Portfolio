import { InternshipData } from "@/Shared/Data";
import styles from "@/styles/Internships.module.scss";
import Image from "next/image";

const Internships = () => {
  return (
    <div className={styles.internships}>
      <h2 data-aos="fade-up">Internships</h2>
      <div className={styles.grid}>
        {InternshipData.map((item) => (
          <div
            className={styles.card}
            key={item.id}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.cardImage}>
              <Image src={item.image} alt={item.title} />
            </div>
            <div className={styles.cardInfo}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
