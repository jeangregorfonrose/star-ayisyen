import { IStar } from "@/utils/interfaces";
import styles from "../styles/star.module.css";

interface Props {
    star: IStar
}

export default function Star (props: Readonly<Props>) {

    const star = props.star;
    
    return (
      <a key={star.starName} className={styles.star} href={`/star/${star.starName}`}>
        <div className={styles.name}>
          <h4>{star.starName}</h4>
        </div>
      </a>
    );
}