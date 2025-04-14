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
    "December"
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const makeDateKey = (year, month, day) => {
    return year + "-" + (month + 1) + "-" + day;
  };

  useEffect(() => {
    const sampleEvents = {
      [makeDateKey(currentYear, currentMonth, 15)]: "Team meeting",
      [makeDateKey(currentYear, currentMonth, 20)]: "Doctor appointment",
      [makeDateKey(currentYear, currentMonth, 8)]: "Project deadline"
    };
    setEvents(sampleEvents);
  }, [currentMonth, currentYear]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      let newMonth = prev + direction;
      if (newMonth < 0) {
        setCurrentYear(prevYear => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setCurrentYear(prevYear => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    if (onDateSelect) {
      onDateSelect(new Date(currentYear, currentMonth, day));
    }
  };

  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today.getDate());
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startDay = getStartDayOfMonth(currentYear, currentMonth);
  const todayDate = today.getDate();
  const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const emptyCellClass = "aspect-square p-2 opacity-0";
  const buttonBaseClass = "aspect-square flex flex-col items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-300";
  const navButtonClass = "p-2 rounded-full hover:bg-gray-100 transition-colors";
  const goToTodayButtonClass = "px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors";
  const monthTitleClass = "text-lg font-semibold text-gray-800";
  const weekdayClass = "text-center text-sm font-medium text-gray-500 py-1";

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
    const todayCellClass = isToday && !isSelected ? "border-2 border-blue-500" : "";
    const selectedCellClass = isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100";
    const eventCellClass = hasEvent ? "relative" : "";
    const combinedCellClass = [buttonBaseClass, todayCellClass, selectedCellClass, eventCellClass].filter(Boolean).join(" ");
    const textSpanClass = "text-sm" + (isSelected ? " font-bold" : "");
    calendarCells.push(
      <button key={day} className={combinedCellClass} onClick={() => handleDateClick(day)}>
        <span className={textSpanClass}>{day}</span>
        {hasEvent && (
          <span className="absolute bottom-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        )}
      </button>
    );
  }

  const selectedDateKey = selectedDate ? makeDateKey(currentYear, currentMonth, selectedDate) : null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full h-fit max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigateMonth(-1)} className={navButtonClass} aria-label="Previous month">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex items-center gap-4">
          <button onClick={goToToday} className={goToTodayButtonClass}>Today</button>
          <h2 className={monthTitleClass}>{months[currentMonth]} {currentYear}</h2>
        </div>
        <button onClick={() => navigateMonth(1)} className={navButtonClass} aria-label="Next month">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-3">
        {weekdays.map(day => (
          <div key={day} className={weekdayClass}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{calendarCells}</div>
      {selectedDate && (
        <div className="mt-6 p-3 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700">Selected date</h3>
          <p className="text-lg font-semibold text-gray-900 mt-1">
            {weekdays[new Date(currentYear, currentMonth, selectedDate).getDay()]}, {months[currentMonth]} {selectedDate}, {currentYear}
          </p>
          {events[selectedDateKey] && (
            <div className="mt-2 flex items-start">
              <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full mr-2"></span>
              <p className="text-sm text-gray-600">
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
