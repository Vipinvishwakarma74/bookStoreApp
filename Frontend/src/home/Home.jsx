import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Banner />
      <Freebook search={search} />
      <Footer />
    </>
  );
}

export default Home;