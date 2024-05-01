import { useRouter } from "next/router"
import styles from '@/styles/updateProfile.module.css'

export default function UpdatePage () {
    const router = useRouter();

    return (
      <section className={styles.authSection}>
        <div className="content">
          <div id={styles.authContainer}>
            <h1>
              Hello {router.query.starName}! Welcome to the update profile page.
            </h1>
            <h2>Please enter your passcode to be authenticated</h2>
            <input
              className={styles.input}
              type="number"
              placeholder="Passcode"
            />
            <button id={styles.authButton} className="button">Authenticate</button>
          </div>
        </div>
      </section>
    );
}