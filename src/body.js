import { useEffect, useState } from "react";
import { SEATING_CHART } from "./seatingObject";

export function Body() {
  const [typeahead, setTypeahead] = useState("");
  const [isEng, setEnglish] = useState(true);

  return (
    <div>
      <button className="language-button" onClick={() => setEnglish(!isEng)}>
        {isEng ? "中文" : "Eng"}
      </button>
      <h2 className="heading">{isEng ? "Seating" : "座"}</h2>

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
        <h4>{isEng ? "First Name" : "名"}</h4>
        <h4>{isEng ? "Last Name" : "姓"}</h4>
        <h4>{isEng ? "Table #" : "桌號"}</h4>

        {SEATING_CHART.filter((person) =>
          [person.firstName, person.lastName]
            .join("^")
            .toUpperCase()
            .includes(typeahead)
        )
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .flatMap((person) => [
            <div>{person.firstName}</div>,
            <div>{person.lastName}</div>,
            <div>{person.table}</div>,
          ])}
      </div>
    </div>
  );
}
