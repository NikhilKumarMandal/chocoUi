import React, { useState, useEffect } from "react";

const Calendar = ({ onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [events, setEvents] = useState({});

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
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const makeDateKey = (year, month, day) => `${year}-${month + 1}-${day}`;

  useEffect(() => {
    const sampleEvents = {
      [makeDateKey(currentYear, currentMonth, 15)]: "Team meeting",
      [makeDateKey(currentYear, currentMonth, 20)]: "Doctor appointment",
      [makeDateKey(currentYear, currentMonth, 8)]: "Project deadline",
    };
    setEvents(sampleEvents);
  }, [currentMonth, currentYear]);

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      let newMonth = prev + direction;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    onDateSelect?.(new Date(currentYear, currentMonth, day));
  };

  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today.getDate());
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startDay = getStartDayOfMonth(currentYear, currentMonth);
  const todayDate = today.getDate();
  const isCurrentMonth =
    today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const emptyCellClass = "aspect-square p-2 opacity-0";
  const buttonBaseClass =
    "aspect-square flex flex-col items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#C59D5F]";
  const navButtonClass = "p-2 rounded-full hover:bg-[#5D3A2F] text-[#FBEEDC]";
  const goToTodayButtonClass =
    "px-3 py-1 text-sm bg-[#FBEEDC] text-[#2D1B0E] rounded-full hover:bg-[#EADDC4] transition-colors";
  const monthTitleClass = "text-lg font-semibold text-[#FBEEDC]";
  const weekdayClass = "text-center text-sm font-medium text-[#EEDFC7] py-1";

  const calendarCells = [];

  for (let i = 0; i < startDay; i++) {
    calendarCells.push(
      <div key={"empty-" + i} className={emptyCellClass}></div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDate === day;
    const isToday = isCurrentMonth && todayDate === day;
    const dateKey = makeDateKey(currentYear, currentMonth, day);
    const hasEvent = events[dateKey];
    const todayCellClass =
      isToday && !isSelected ? "border-2 border-[#C59D5F]" : "";
    const selectedCellClass = isSelected
      ? "bg-[#6D9773] text-white"
      : "hover:bg-[#5D3A2F]";
    const eventCellClass = hasEvent ? "relative" : "";

    const combinedCellClass = [
      buttonBaseClass,
      todayCellClass,
      selectedCellClass,
      eventCellClass,
    ]
      .filter(Boolean)
      .join(" ");

    const textSpanClass = "text-sm" + (isSelected ? " font-bold" : "");

    calendarCells.push(
      <button
        key={day}
        className={combinedCellClass}
        onClick={() => handleDateClick(day)}
      >
        <span className={textSpanClass}>{day}</span>
        {hasEvent && (
          <span className="absolute bottom-1 w-1.5 h-1.5 bg-[#C59D5F] rounded-full"></span>
        )}
      </button>
    );
  }

  const selectedDateKey = selectedDate
    ? makeDateKey(currentYear, currentMonth, selectedDate)
    : null;

  return (
    <div className="bg-[#2D1B0E] text-[#FBEEDC] rounded-xl shadow-lg p-4 w-full h-fit max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth(-1)}
          className={navButtonClass}
          aria-label="Previous month"
        >
          ←
        </button>
        <div className="flex items-center gap-4">
          <button onClick={goToToday} className={goToTodayButtonClass}>
            Today
          </button>
          <h2 className={monthTitleClass}>
            {months[currentMonth]} {currentYear}
          </h2>
        </div>
        <button
          onClick={() => navigateMonth(1)}
          className={navButtonClass}
          aria-label="Next month"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-3">
        {weekdays.map((day) => (
          <div key={day} className={weekdayClass}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{calendarCells}</div>
      {selectedDate && (
        <div className="mt-6 p-3 bg-[#5D3A2F] rounded-lg">
          <h3 className="text-sm font-medium text-[#EEDFC7]">Selected date</h3>
          <p className="text-lg font-semibold text-[#FBEEDC] mt-1">
            {
              weekdays[
                new Date(currentYear, currentMonth, selectedDate).getDay()
              ]
            }
            , {months[currentMonth]} {selectedDate}, {currentYear}
          </p>
          {events[selectedDateKey] && (
            <div className="mt-2 flex items-start">
              <span className="w-2 h-2 mt-1.5 bg-[#C59D5F] rounded-full mr-2"></span>
              <p className="text-sm text-[#EEDFC7]">
                {events[selectedDateKey]}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
