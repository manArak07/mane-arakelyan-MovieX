import React from "react";
// components
import Layout from "./components";
// styles
import "./App.css";
//react router
import { Routes, Route } from 'react-router';

function App({routes = []}) {
  return (
      <Routes>
        {
          routes.map(({path,Component, withLayout}) => (
            <Route key={`main-route-[${path}]`} path={path} element={withLayout ? (
              <Layout>
                <Component />
              </Layout>
            ):(
              <Component />
            )}></Route>
          ))
        }
      </Routes>
  )
}

export default App;