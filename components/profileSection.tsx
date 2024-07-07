import { IStar } from "@/utils/interfaces";
import styles from "@/styles/profile.module.css";

interface Props {
  star: IStar;
}

export default function ProfileSection(props: Readonly<Props>) {
  const star: IStar = props.star;

  return (
    <section id={styles.detailsPage}>
      <div id={styles.profilePic} style={{backgroundImage: `url('${star.imageUrl}')`}}></div>
      <div id={styles.info}>
        <div id={styles.geneInfo}>
          <div id={styles.name}>
            <h1>{star.starName}</h1>
          </div>
          <div id={styles.titles}>
            <h3>{star.occupations.toString().replaceAll(",", " - ")}</h3>
          </div>
          <div id={styles.socials}>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div id={styles.persInfo}>
          <p>
            <span className={styles.infoBold}>First name:</span> {star.fname}
          </p>
          <p>
            <span className={styles.infoBold}>Last name:</span> {star.lname}
          </p>
          <p>
            <span className={styles.infoBold}>Born:</span> {star.birthDate.toString()}
          </p>
          <p>
            <span className={styles.infoBold}>Death:</span> {star.deathDate?.toString()}
          </p>
          <p>
            <span className={styles.infoBold}>Birth Place:</span> {star.birthPlace.city}
          </p>
        </div>
      </div>
      <div id={styles.bio}>
        <h1>Biography</h1>
        <p>
          {star.bio}
        </p>
      </div>
    </section>
  );
}
