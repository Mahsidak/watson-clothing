import React from "react";
import SignIn from "../../compotents/signin/signin.component";
import SignUp from "../../compotents/sign-up/sign-up.component";

import "./signpage.styles.scss";

const SignPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignPage;
