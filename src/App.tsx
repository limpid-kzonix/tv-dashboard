import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-react-location";
import dataProvider from "@pankod/refine-simple-rest";
import { ColorModeContextProvider } from "contexts";
import { PostList, PostCreate, PostEdit } from "pages/posts";
import { Title, Sider, Layout, Header } from "components/layout";

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          routerProvider={routerProvider}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          resources={[
            {
              name: "posts",
              list: PostList,
              create: PostCreate,
              edit: PostEdit,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
