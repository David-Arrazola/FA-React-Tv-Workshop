/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { tvShows } from "./shows/data";
import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows[0]);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={tvShows}
          setSelectedShow={setSelectedShow}
        ></ShowSelection>
      </header>
      <main>
        <ShowDetails show={selectedShow}></ShowDetails>
      </main>
    </>
  );
}
