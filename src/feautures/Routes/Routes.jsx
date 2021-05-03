import React from "react";
import { Route, Switch } from "react-router";
import LoginEmailForm from "../../components/Login/LoginEmailForm";
import LoginEmailSuccess from "../../components/Login/LoginEmailSuccess";
import EmailFail from "../../components/Login/EmailFail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login_email_form" component={LoginEmailForm} />
      <Route exact path="/login_email_success" component={LoginEmailSuccess} />
      <Route exact path="/login_email_fail" component={EmailFail} />
    </Switch>
  );
};

export default Routes;
