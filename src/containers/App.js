import { h } from "preact";
import { Router as PreactRouter } from "preact-router";

import { history } from "src/support/history";
import { augmentRouter } from "src/support/pageTransitionSupport";
import InboxPage from "src/modules/portal/containers/InboxPage";
import LoginPage from "src/modules/portal/containers/LoginPage";

const Router = augmentRouter(PreactRouter);

export default () => (
  <Router history={history}>
    <InboxPage default />
    <LoginPage path="/login" />
  </Router>
);
