import type { NextPage } from "next";
import { Layout } from "components/layout";
import {
  AllInOne,
  Company,
  Integrations,
  News,
  OurFeatures,
  WhatIsSkilline,
  YouCanDoWithSkilline,
} from "module/main";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Company></Company>
        <AllInOne></AllInOne>
        <WhatIsSkilline></WhatIsSkilline>
        <YouCanDoWithSkilline></YouCanDoWithSkilline>
        <OurFeatures></OurFeatures>
        <Integrations></Integrations>
        <News></News>
      </Layout>
    </>
  );
};

export default Home;
