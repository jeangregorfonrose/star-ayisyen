import { useState } from "react";
import UpdateAuthentication from "@/components/updateAuthentication";

export default function UpdatePage() {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticationCallback = (authenticated: boolean) => {
    setAuthenticated(authenticated);
  };

  return authenticated ? (
    <div>Authenticated</div>
  ) : (
    <UpdateAuthentication authCallback={authenticationCallback}/>
  );
}
