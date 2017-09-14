import { h } from "preact";
import { Header } from "src/components/Header";
import { Page, Main } from "src/components/Page";
import LoadingBox from "../components/LoadingBox";

const InboxPage = () => {
  return (
    <Page>
      <Header>
        <h1>Mobile Portal</h1>
      </Header>
      {
        <Main>
          <LoadingBox />
        </Main>
      }
    </Page>
  );
};

export default InboxPage;
