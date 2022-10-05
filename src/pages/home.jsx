import React from "react";
import AdsList from "../components/SearchBar";

import Advertisements from "../components/AdsGrid";


const Home = () => {
  
  return (
    <div>
      <AdsList />
      <Advertisements/>
    </div>
  );
};

export default Home;