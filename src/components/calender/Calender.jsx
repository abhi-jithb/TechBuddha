import { useState } from "react";
import CalenderCard from "./CalenderCard";
import CalenderDetailsCard from "./CalenderDetailsCard";

export default function Calendar() {
  const [apiData, setApiData] = useState([
    {
      date: 26,
      month: 2,
      year: 2025,
      mode: ["ideathon", "summit"],
    },
    {
      date: 16,
      month: 2,
      year: 2025,
      mode: ["hackathon", "ideathon", "summit"],
    },
  ]);

  return (
    <>
      {window.innerWidth >= 960 ? (
        window.location.pathname == "/calender" ? (
          <div
            className="flex gap-2 border-2 rounded-xl my-20 mx-20"
            style={
              window.location.pathname === "/calender"
                ? {
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "100vh",
                    minWidth: "60vw",
                  }
                : {}
            }
          >
            <CalenderCard apiData={apiData} />
            <CalenderDetailsCard />
          </div>
        ) : (
          <div className="flex gap-2  border-2 rounded-xl">
            <CalenderCard apiData={apiData} />
            <CalenderDetailsCard />
          </div>
        )
      ) : window.location.pathname == "/calender" ? (
        <div
          style={
            window.location.pathname === "/calender"
              ? {
                  display: "flex",
                  justifyContent: "center",
                  minHeight: "100vh",
                  minWidth: "80vw",
                }
              : {}
          }
        >
          <CalenderCard apiData={apiData} />
        </div>
      ) : (
        <CalenderCard apiData={apiData} />
      )}
    </>
  );
}
