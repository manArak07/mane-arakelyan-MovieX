import React from "react";
import Layout from "./components/layout";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "./providers/context";


function App({ routes = [] }) {
  return (
    // creating routes for every page and checking if they have to be with layout or no and applying
    // to them theme provider for theme change
    <Routes>
      {routes.map(({ path, Component, withLayout }) => (
        <Route key={`main-route-[${path}]`} path={path} element={withLayout ? (
          <ThemeProvider >
            <Layout>
              <Component />
            </Layout>
          </ThemeProvider>

        ) : (
          <Component />
        )}>
        
        </Route>
      ))
      }
    </Routes>

  )
}
export default App;
