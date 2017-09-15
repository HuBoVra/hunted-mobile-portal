import { h } from "preact";
import { connect } from "preact-redux";

import { Header } from "src/components/Header";
import { Page, Main } from "src/components/Page";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Page>
      <Header>
        <h1>Login</h1>
      </Header>
      <Main>
        <LoginForm />
      </Main>
    </Page>
  );
};

export default LoginPage;
