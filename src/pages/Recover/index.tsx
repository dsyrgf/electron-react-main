import { SetStateAction, useState } from "react";
import RecoverInformEmail from "../../components/RecoverInformEmail";
import RecoverInformTokenEmail from "../../components/RecoverInformTokenEmail";
import RecoverPassword from "../../components/RecoverPassword";

const Recover = () => {
  const [booleanInformEmail, setBooleanInformEmail] = useState<boolean>(true);
  const [booleanInformTokenEmail, setBooleanInformTokenEmail] =
    useState<boolean>(false);
  const [booleanInformNewPassword, setBooleanInformNewPassword] =
    useState<boolean>(false);

  return (
    <>
      {booleanInformEmail && (
        <RecoverInformEmail
          setBooleanInformEmail={setBooleanInformEmail}
          setBooleanTokenEmail={setBooleanInformTokenEmail}
        />
      )}
      {booleanInformTokenEmail && (
        <RecoverInformTokenEmail
          setBooleanTokenEmail={setBooleanInformTokenEmail}
          setBooleanInformNewPassword={setBooleanInformNewPassword}
        />
      )}
      {booleanInformNewPassword && (
        <RecoverPassword
          setBooleanInformNewPassword={setBooleanInformNewPassword}
          setBooleanInformTokenEmail={setBooleanInformTokenEmail}
          setBooleanInformEmail={setBooleanInformEmail}
        />
      )}
    </>
  );
};

export default Recover;
