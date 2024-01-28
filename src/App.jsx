import React from "react";
import Layout from "./components/layout";
import Advertisment from "./components/advertisment";
import info from "./providers";

function App() {
  return (
    <Layout>
      {info.map((info, index) => (
        <Advertisment key={index} heading={info.heading} details={info.details}/>
      ))}
    </Layout>

  );
}

export default App;
