import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import { signOut } from "next-auth/react";

export default function NavBar() {
  const router = useRouter()

  // get path
  const currentPath = router.pathname

  return (
    <nav className={styles.nav}>
      <h1>Star Ayisyen</h1>
      {
        currentPath == "/admin/dashboard" &&
        <button onClick={() => signOut({callbackUrl: "/admin"})}>logout</button>
      }
    </nav>
  );
}
