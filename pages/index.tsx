import { FunctionComponent } from "react";

import Layout from "../components/Layout/Layout";

const IndexPage: FunctionComponent = () => {
  return (
    <div>
      <Layout>Layout</Layout>
      <style jsx>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
