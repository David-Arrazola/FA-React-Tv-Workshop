import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  const showHandler = (currShow) => {
    return (
      <a
        key={currShow.name}
        className="show"
        onClick={() => setSelectedShow(currShow)}
      >
        {currShow.name}
      </a>
    );
  };

  return <nav className="shows">{shows.map(showHandler)}</nav>;
}
