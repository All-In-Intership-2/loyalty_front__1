import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginEmailForm from "../../components/Login/loginEmailForm/LoginEmailForm";
import LoginEmailSuccess from "../../components/Login/loginEmailSuccess/LoginEmailSuccess";
import EmailFail from "../../components/Login/emailFail/EmailFail";
import PasswordRecovery from "../../components/Login/PasswordRecovery";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login_email_form" component={LoginEmailForm} />
      <Route exact path="/login_email_success" component={LoginEmailSuccess} />
      <Route exact path="/login_email_fail" component={EmailFail} />
      <Route exact path="/password_recovery" component={PasswordRecovery} />
    </Switch>
  );
};

export default Routes;
