import styles from "../../styles/admin.module.css";

function AuthenticateAdmin() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input className={styles.input} type="text" placeholder="Username" />
          <input
            className={styles.input}
            type="password"
            placeholder="password"
          />
        </form>
      </div>
    </>
  );
}

export default function AdminPage() {
  return <AuthenticateAdmin />;
}
