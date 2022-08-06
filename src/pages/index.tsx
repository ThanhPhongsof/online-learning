import type { NextPage } from "next";
import { Layout } from "components/layout";
import {
  AllInOne,
  Company,
  Integrations,
  News,
  OurFeatures,
  Testimonials,
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
        <Testimonials></Testimonials>
        <News></News>
      </Layout>
    </>
  );
};

export default Home;
