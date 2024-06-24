import { useRef, useState } from "react";
import { SEATING_CHART } from "./seatingObject";

export function Body() {
  const searchRef = useRef(null);
  const [typeahead, setTypeahead] = useState("");

  const people =
    typeahead === ""
      ? SEATING_CHART.sort((a, b) => a.lastName.localeCompare(b.lastName))
      : (() => {
          const partyIDs = SEATING_CHART.filter((person) =>
            [person.firstName, person.lastName]
              .join("\n")
              .toUpperCase()
              .includes(typeahead)
          ).map((person) => person.partyID);

          return SEATING_CHART.filter(
            (person) =>
              partyIDs.findIndex((partyID) => person.partyID === partyID) >= 0
          ).sort((a, b) =>
            a.partyID.localeCompare(b.partyID) === 0
              ? a.lastName.localeCompare(b.lastName)
              : a.partyID.localeCompare(b.partyID)
          );
        })();

  return (
    <div>
      <h1 className="heading">SEATING</h1>
      <h2 className="heading chinese-seat">座</h2>
      <div ref={searchRef}>
        <input
          className="search-bar list-container"
          on
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
        {people.flatMap((person) => [
          <div>{person.firstName}</div>,
          <div>{person.lastName}</div>,
          <div className="table-number">{person.table}</div>,
        ])}
      </div>
    </div>
  );
}
