import { useRouter } from "next/router";
import styles from "@/styles/NavBar.module.css";
import { signOut } from "next-auth/react";

export default function NavBar() {
  const router = useRouter();

  // get path
  const currentPath = router.pathname;

  return (
    <nav className={styles.nav}>
      <div className="content">
        <div id={styles.navContainer}>
          <a href={process.env.NEXTAUTH_URL}>
            <h1>Star Ayisyen</h1>
          </a>
          {currentPath == "/admin/dashboard" && (
            <button
              className="button"
              onClick={() => signOut({ callbackUrl: "/admin" })}
            >
              logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
