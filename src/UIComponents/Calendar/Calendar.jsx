import React, { useState, useEffect } from "react";

const Calendar = ({ onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
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

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Sample events - in a real app, you would fetch these from an API
  useEffect(() => {
    // This is just for demonstration
    const sampleEvents = {
      "2023-11-15": "Meeting with team",
      "2023-11-20": "Doctor appointment",
      [`${currentYear}-${currentMonth + 1}-10`]: "Monthly review",
    };
    setEvents(sampleEvents);
  }, [currentYear, currentMonth]);

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
    setSelectedDate(null);
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    const newSelectedDate = day;
    setSelectedDate(newSelectedDate);

    if (onDateSelect) {
      const selectedDateObj = new Date(currentYear, currentMonth, day);
      onDateSelect(selectedDateObj);
    }
  };

  const handleTodayClick = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today.getDate());
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startDay = getStartDayOfMonth(currentYear, currentMonth);

  const todayDate = today.getDate();
  const isCurrentMonth =
    today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const calendarCells = [];

  // Empty cells for days before the start of the month
  for (let i = 0; i < startDay; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="p-2 h-12"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDate === day;
    const isToday = isCurrentMonth && todayDate === day;
    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
    const hasEvent = events[dateKey];

    calendarCells.push(
      <div
        key={day}
        className={`p-2 h-12 flex flex-col items-center justify-start cursor-pointer rounded-lg transition-all 
          ${isToday ? "border-2 border-blue-500" : ""}
          ${isSelected ? "bg-green-100 text-green-800" : "hover:bg-gray-100"}
          ${hasEvent ? "relative" : ""}`}
        onClick={() => handleDateClick(day)}
      >
        <span className={`text-sm ${isSelected ? "font-bold" : ""}`}>
          {day}
        </span>
        {hasEvent && (
          <span className="w-1 h-1 bg-red-500 rounded-full absolute bottom-1"></span>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={handleTodayClick}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
          >
            Today
          </button>
          <h2 className="text-lg font-bold">
            {months[currentMonth]} {currentYear}
          </h2>
        </div>
        <button
          onClick={handleNext}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
        >
          →
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-500 mb-2">
        {weekdays.map((day) => (
          <div key={day} className="py-1 text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-sm">{calendarCells}</div>

      {/* Selected date info */}
      {selectedDate && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h3 className="font-medium">
            Selected: {months[currentMonth]} {selectedDate}, {currentYear}
          </h3>
          {events[`${currentYear}-${currentMonth + 1}-${selectedDate}`] && (
            <p className="text-sm mt-1">
              Event:{" "}
              {events[`${currentYear}-${currentMonth + 1}-${selectedDate}`]}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;

// import React, { useState } from "react";

// const Calendar = () => {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [selectedDate, setSelectedDate] = useState(null);

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getStartDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const handlePrev = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   const daysInMonth = getDaysInMonth(currentYear, currentMonth);
//   const startDay = getStartDayOfMonth(currentYear, currentMonth);

//   const todayDate = today.getDate();
//   const isCurrentMonth =
//     today.getMonth() === currentMonth && today.getFullYear() === currentYear;

//   const calendarCells = [];
//   for (let i = 0; i < startDay; i++) {
//     calendarCells.push(<div key={`empty-${i}`} className="p-2"></div>);
//   }

//   for (let day = 1; day <= daysInMonth; day++) {
//     const isSelected = selectedDate === day;
//     const isToday = isCurrentMonth && todayDate === day;

//     calendarCells.push(
//       <div
//         key={day}
//         className={`p-2 text-center cursor-pointer rounded-full transition-all
//           ${isToday ? "bg-blue-500 text-white" : ""}
//           ${isSelected ? "bg-green-500 text-white" : ""}
//           hover:bg-gray-200 hover:text-black`}
//         onClick={() => setSelectedDate(day)}
//       >
//         {day}
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={handlePrev} className="px-2 py-1 bg-gray-200 rounded">
//           ←
//         </button>
//         <h2 className="text-lg font-bold">
//           {months[currentMonth]} {currentYear}
//         </h2>
//         <button onClick={handleNext} className="px-2 py-1 bg-gray-200 rounded">
//           →
//         </button>
//       </div>

//       {/* Weekdays */}
//       <div className="grid grid-cols-7 text-center font-medium text-gray-500 mb-2">
//         <div>Su</div>
//         <div>Mo</div>
//         <div>Tu</div>
//         <div>We</div>
//         <div>Th</div>
//         <div>Fr</div>
//         <div>Sa</div>
//       </div>

//       {/* Days */}
//       <div className="grid grid-cols-7 gap-1 text-sm">{calendarCells}</div>
//     </div>
//   );
// };

// export default Calendar;
