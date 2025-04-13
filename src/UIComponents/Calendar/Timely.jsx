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

  // Sample events data
  useEffect(() => {
    const sampleEvents = {
      [`${currentYear}-${currentMonth + 1}-15`]: "Team meeting",
      [`${currentYear}-${currentMonth + 1}-20`]: "Doctor appointment",
      [`${currentYear}-${currentMonth + 1}-8`]: "Project deadline",
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
  const isCurrentMonth =
    today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  // Generate calendar cells
  const calendarCells = [];

  // Empty cells for days before the start of the month
  for (let i = 0; i < startDay; i++) {
    calendarCells.push(
      <div key={`empty-${i}`} className="aspect-square p-2 opacity-0"></div>
    );
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDate === day;
    const isToday = isCurrentMonth && todayDate === day;
    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
    const hasEvent = events[dateKey];

    calendarCells.push(
      <button
        key={day}
        className={`aspect-square flex flex-col items-center justify-center rounded-full transition-all
          ${isToday && !isSelected ? "border-2 border-blue-500" : ""}
          ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
          ${hasEvent ? "relative" : ""}
          focus:outline-none focus:ring-2 focus:ring-blue-300`}
        onClick={() => handleDateClick(day)}
      >
        <span className={`text-sm ${isSelected ? "font-bold" : ""}`}>
          {day}
        </span>
        {hasEvent && (
          <span className="absolute bottom-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        )}
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous month"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={goToToday}
            className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
          >
            Today
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            {months[currentMonth]} {currentYear}
          </h2>
        </div>

        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next month"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 mb-3">
        {weekdays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1">{calendarCells}</div>

      {/* Selected date info */}
      {selectedDate && (
        <div className="mt-6 p-3 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700">Selected date</h3>
          <p className="text-lg font-semibold text-gray-900 mt-1">
            {
              weekdays[
                new Date(currentYear, currentMonth, selectedDate).getDay()
              ]
            }
            ,{months[currentMonth]} {selectedDate}, {currentYear}
          </p>
          {events[`${currentYear}-${currentMonth + 1}-${selectedDate}`] && (
            <div className="mt-2 flex items-start">
              <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full mr-2"></span>
              <p className="text-sm text-gray-600">
                {events[`${currentYear}-${currentMonth + 1}-${selectedDate}`]}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
