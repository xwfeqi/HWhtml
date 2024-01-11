import { useContext, useEffect, useState } from "react";
import { MONTHS } from "../shared/months";
import "./style.css";
import CalendarContext from "../../context/calendar.context";
import { logDOM } from "@testing-library/react";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const MonthComponent = () => {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysCount = getDaysInMonth(currentYear, currentMonth);

  const click = (day) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(day);
      return newDate;
    });
  };

  // const dayComponents = [];
  // for (let i = 1; i <= daysCount; i += 1) {
  //   const date = new Date(currentDate);
  //   date.setDate(i);
  //   const dayOfWeek = date.getDay();
  //   dayComponents.push(
  //     <div
  //       style={{ "--day-col-start": dayOfWeek }}
  //       className='content-item day'
  //     >{i}</div>
  //   );
  // }
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("events")) {
      let a = JSON.parse(localStorage.getItem("events"));
      let keysMassive = [];
      for (let i = 0; i < Object.keys(a).length; i++) {
        keysMassive.push(Object.keys(a)[i].split("-"));
      }
      setKeys(keysMassive);
    }
  }, []);

  let datesMass = [];
  const checker = (i) => {
    keys.map((numb) => {
      if (
        numb[2] - 1 === i &&
        parseInt(numb[1]) === currentDate.getMonth() &&
        parseInt(numb[0]) === currentDate.getFullYear()
      ) {
        return datesMass.push(numb[2] - 1);
      }
    });
  };

  return (
    <div className="content-wrapper month-wrapper">
      <div className="header">{MONTHS[currentMonth]}</div>
      {WEEK_DAYS.map((dayName) => (
        <div className="day-name">{dayName}</div>
      ))}
      {/* {dayComponents} */}
      {Array(daysCount)
        .fill(null)
        .map((el, i) => {
          // console.log(el)
          const date = new Date(currentDate);
          date.setDate(i + 1);
          const dayOfWeek = date.getDay();

          checker(i);

          return (
            <div
              onClick={() => {
                click(i + 1);
              }}
              key={i}
              style={{ "--day-col-start": dayOfWeek }}
              className={
                datesMass.includes(i)
                  ? "content-item day green"
                  : "content-item day"
              }
            >
              {i + 1}
            </div>
          );
        })}
    </div>
  );
};

export default MonthComponent;
