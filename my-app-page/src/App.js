import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import Protect from "./Components/Protected";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) =>
            route.protected ? (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Protect
                    CMP={route.component}
                    isadmin={route.is_admin}
                    protected={route.protected}
                  />
                }
              />
            ) : (
              <Route path={route.path} element={<route.component />} />
            )
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
