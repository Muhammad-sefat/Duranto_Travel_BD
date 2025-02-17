import React from "react";
import Banner from "../component/Banner";
import CardSection from "../component/CardSection";
import Table from "../component/Table";
import ImageDiv from "../component/ImageDiv";
import FAQ from "../component/FAQ";
const Home = () => {
  return (
    <div>
      <Banner />
      <CardSection />
      <Table />
      <ImageDiv />
      <FAQ />
    </div>
  );
};

export default Home;
