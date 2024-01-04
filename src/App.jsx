import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { Router } from "./Router";
import { SearchPage } from "./SearchPage";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  );
}

export default App;
