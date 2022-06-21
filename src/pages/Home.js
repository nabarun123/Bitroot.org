import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import loader from "../components/loader.gif";

function Home() {
  const [cardsData, setCardsData] = useState([]);
  //fetch data
  const fetchData = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then((res) => {
        setCardsData(res.data);
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center min-vh-100 my-5">
      {!cardsData ? (
        <img src={loader} />
      ) : (
        cardsData?.map((cardData, index) => (
          <div key={index}>
            <Cards cardData={cardData} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
