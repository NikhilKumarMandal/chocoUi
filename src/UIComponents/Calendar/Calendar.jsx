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

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

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
          (isToday ? "bg-[#C59D5F] text-white " : "") +
          (isSelected ? "bg-[#6D9773] text-white " : "") +
          "hover:bg-[#5D3A2F] hover:text-[#FBEEDC]"
        }
        onClick={() => setSelectedDate(day)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-[#2D1B0E] text-[#FBEEDC] rounded-lg shadow p-4 w-full max-w-sm mx-auto m-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className="px-2 py-1 bg-[#FBEEDC] text-[#2D1B0E] rounded hover:bg-[#EEDFC7]"
        >
          ←
        </button>
        <h2 className="text-lg font-bold">
          {months[currentMonth] + " " + currentYear}
        </h2>
        <button
          onClick={handleNext}
          className="px-2 py-1 bg-[#FBEEDC] text-[#2D1B0E] rounded hover:bg-[#EEDFC7]"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-medium text-[#EEDFC7] mb-2">
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
