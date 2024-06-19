import { useRef, useState } from "react";
import { SEATING_CHART } from "./seatingObject";

export function Body() {
  const searchRef = useRef(null);
  const [typeahead, setTypeahead] = useState("");

  const partyIDs = SEATING_CHART.filter((person) =>
    [person.firstName, person.lastName]
      .join("\n")
      .toUpperCase()
      .includes(typeahead)
  ).map((person) => person.partyID);

  const people = SEATING_CHART.filter(
    (person) => partyIDs.findIndex((partyID) => person.partyID === partyID) >= 0
  );

  return (
    <div>
      <h1 className="heading">SEATING</h1>
      <h2 className="heading chinese-seat">座</h2>
      <div ref={searchRef}>
        <input
          className="search-bar list-container"
          onClick={() => {
            searchRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          onChange={(event) => {
            console.log(event.target.value);
            setTypeahead(String(event.target.value).toUpperCase());
          }}
          placeholder="Search"
        ></input>
      </div>
      <div className="chart-table list-container">
        {people
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .flatMap((person) => [
            <div>{person.firstName}</div>,
            <div>{person.lastName}</div>,
            <div className="table-number">{person.table}</div>,
          ])}
      </div>
    </div>
  );
}
