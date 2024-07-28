import styles from "@/styles/updateProfile.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

interface Iprops {
  authCallback: Function;
}

export default function UpdateAuthentication(props: Readonly<Iprops>) {
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);
  const router = useRouter();

  const authenticate = async (passcodeEntered: string) => {
    if (!passcode || passcode.length < 6) setPasscodeError(true);

    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/updateauth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          starId: router.query.id,
          starName: router.query.starName,
          passcode: passcodeEntered,
        }),
      });

      const response = await res.json();

      if (!response.success) setPasscodeError(true);
      else props.authCallback(true, response.data);
    } catch (error) {
        console.log(`Error! ${error}`);
        setPasscodeError(true);
    }
  };

  return (
    <section className={styles.authSection}>
      <div className="content">
        <div id={styles.authContainer}>
          <h1>
            Hello {router.query.starName}! Welcome to the update profile page.
          </h1>
          <h3 id={styles.error}>
            {passcodeError && "Invalid passcode entered!"}
          </h3>
          <h3>Please enter your passcode to be authenticated</h3>
          <input
            className={styles.input}
            type="number"
            placeholder="Passcode"
            onChange={(e) => setPasscode(e.target.value)}
          />
          <button
            id={styles.authButton}
            className="button"
            onClick={() => authenticate(passcode)}
          >
            Authenticate
          </button>
        </div>
      </div>
    </section>
  );
}
