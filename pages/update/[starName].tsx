import { useState } from "react";
import UpdateAuthentication from "@/components/updateAuthentication";
import UpdateProfile from "@/components/updateProfile";
import { IStar } from "@/utils/interfaces";

export default function UpdatePage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [star, setStar] = useState<IStar>();

  const authenticationCallback = (authenticated: boolean, star: IStar) => {
    setAuthenticated(authenticated);
    setStar(star);
  };

  return authenticated ? (
    <UpdateProfile star={star as IStar} />
  ) : (
    <UpdateAuthentication authCallback={authenticationCallback}/>
  );
}
