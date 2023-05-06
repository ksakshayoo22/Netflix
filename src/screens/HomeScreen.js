import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} isLargeRow />

      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />

      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
