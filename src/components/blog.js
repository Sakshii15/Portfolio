import { BlogData } from "@/Shared/Data";
import styles from "@/styles/Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <h1 data-aos="fade-up">Experience</h1>
      <div className={styles.blogGrid}>
        {BlogData.map((blog) => {
          return (
            <div
              className={styles.blogContainer}
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.blogHeader}>
                <h3>{blog.title}</h3>
                <p className={styles.role}>{blog.role}</p>
                <p className={styles.meta}>{blog.period} &bull; {blog.location}</p>
              </div>
              <ul className={styles.blogBullets}>
                {blog.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
