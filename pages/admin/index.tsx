"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import styles from "../../styles/admin.module.css";
import { useRouter } from "next/router";

function AuthenticateAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle the login action of the login form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false, // Prevent NextAuth.js from redirecting after authentication
      });

      if (!result || result.error) {
        setError(result!.error!); // Display error message
      } else {
        router.replace("/admin/dashboard"); // Redirect to dashboard
      }
    } catch (err) {
      console.error(err);
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
          <input
            className={styles.input}
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </>
  );
}

export default function AdminPage() {
  return <AuthenticateAdmin />;
}
