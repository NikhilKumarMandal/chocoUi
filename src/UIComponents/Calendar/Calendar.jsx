import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startDay = getStartDayOfMonth(currentYear, currentMonth);
  const todayDate = today.getDate();
  const isCurrentMonth =
    today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const calendarCells = [];
  for (let i = 0; i < startDay; i++) {
    calendarCells.push(<div key={"empty-" + i} className="p-2"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDate === day;
    const isToday = isCurrentMonth && todayDate === day;

    calendarCells.push(
      <div
        key={day}
        className={
          "p-2 text-center cursor-pointer rounded-full transition-all " +
          (isToday ? "bg-blue-500 text-white " : "") +
          (isSelected ? "bg-green-500 text-white " : "") +
          "hover:bg-gray-200 hover:text-black"
        }
        onClick={() => setSelectedDate(day)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="px-2 py-1 bg-gray-200 rounded">
          ←
        </button>
        <h2 className="text-lg font-bold">
          {months[currentMonth] + " " + currentYear}
        </h2>
        <button onClick={handleNext} className="px-2 py-1 bg-gray-200 rounded">
          →
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-medium text-gray-500 mb-2">
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm">{calendarCells}</div>
    </div>
  );
};

export default Calendar;
