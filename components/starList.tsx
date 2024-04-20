import styles from "../styles/starList.module.css";
import Star from "./star";
import { IStar } from "@/utils/interfaces";

interface Props {
  stars: IStar[]
}

export default function StarList(props: Readonly<Props>) {
  return (
    <section className={styles.sectionContainer}>
      <div className="content">
        <div className={styles.sectionHeader}>
          <h1>Atis</h1>
          <a href="#">montre plis</a>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.peopleContainer}>
            {props.stars.map((star: IStar) => <Star key={star._id} star={star}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}