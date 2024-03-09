import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function CardsFetch(props) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/Kanban/Projects/");
      const resJson = await response.json();
      setData(resJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { statusName, searchQuery } = props;

  const filteredData = data.filter((card) => {
    return card.status === statusName && card.proj_name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div
        style={{
          background: "#ffffff",
          width: "112%",
          marginTop: "-11px",
          marginLeft: "-11px",
          height: "27px",
        }}
      >
        {statusName}({filteredData.length})
      </div>
      <div>
        {filteredData.map((card) => (
          <Cards
            key={card.proj_id}
            proj_id={card.proj_id}
            proj_name={card.proj_name}
            proirity={card.proirity}
            descript={card.descript}
            emp={card.emp}
            mang_id={card.mang_id}
            status={card.status}
            start_date={card.start_date}
            end_date={card.end_date}
          />
        ))}
      </div>
    </>
  );
}

export default CardsFetch;
