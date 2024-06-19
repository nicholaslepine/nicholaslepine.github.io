import { useState } from "react";
import { SEATING_CHART } from "./seatingObject";

export function Body() {
  const [typeahead, setTypeahead] = useState("");
  const [isEng, setEnglish] = useState(true);

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
      <button className="language-button" onClick={() => setEnglish(!isEng)}>
        {isEng ? "中文" : "Eng"}
      </button>
      <h1 className="heading">SEATING</h1>
      <h2 className="heading chinese-seat">座</h2>
      <div>
        <input
          className="search-bar"
          onChange={(event) => {
            console.log(event.target.value);
            setTypeahead(String(event.target.value).toUpperCase());
          }}
          placeholder={isEng ? "Search" : "搜尋"}
        ></input>
      </div>
      <div className="chart-table">
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
