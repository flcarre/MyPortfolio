import "tailwindcss/tailwind.css";

import { FunctionComponent } from "react";

import Layout from "../components/Layout/Layout";

const IndexPage: FunctionComponent = () => {
  return (
    <div className=" h-screen w-screen">
      <Layout>Layout</Layout>
    </div>
  );
};

export default IndexPage;
