import styles from '../styles/banner.module.css';
import SearchInput from './searchInput';

export default function Banner() {
    return (
      <section id={styles.banner}>
        <div id={styles.bannerOverlay}>
          <h1 id={styles.slogan}>Cheche atis ou moun prefere paw la</h1>
          <SearchInput />
        </div>
      </section>
    );
}