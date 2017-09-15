import { h } from "preact";
import { Header } from "src/components/Header";
import { Page, Main } from "src/components/Page";
import LoadingBox from "../components/LoadingBox";
import NotificationBox from "../components/NotificationBox";

const InboxPage = () => {
  return (
    <Page>
      <Header>
        <h1>Mobile Portal</h1>
      </Header>
      {
        <Main>
          <LoadingBox
            headerText="Er zijn geen nieuwe berichten."
            loaderText="CONNECTED!"
          />
        </Main>
      }
      <NotificationBox />
    </Page>
  );
};

export default InboxPage;
