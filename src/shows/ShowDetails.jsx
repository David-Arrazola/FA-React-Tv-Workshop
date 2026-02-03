import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
// import { tvShows } from "./data";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setEpisode] = useState();

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        setSelectedEpisode={setEpisode}
      ></EpisodeList>
      <EpisodeDetails episode={selectedEpisode}></EpisodeDetails>
    </div>
  );
}
