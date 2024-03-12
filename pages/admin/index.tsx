"use client";

import { FormEvent, useState } from "react";
import styles from "../../styles/admin.module.css";

function AuthenticateAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle the login action of the login form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/api/login", { username, password });
      // console.log(res.data); // Handle successful login
    } catch (err) {
      // setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default function AdminPage() {
  return <AuthenticateAdmin />;
}
