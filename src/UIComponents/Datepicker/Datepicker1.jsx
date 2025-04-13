import { useState, useEffect, useRef } from "react";

export default function DatePicker({ onChange, value, className = "" }) {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || null);

  const monthDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

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

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target)
      ) {
        setShowMonthDropdown(false);
      }

      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target)
      ) {
        setShowYearDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  const handleMonthSelect = (monthIndex) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(monthIndex);
      return newDate;
    });
    setShowMonthDropdown(false);
  };

  const handleYearSelect = (year) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(year);
      return newDate;
    });
    setShowYearDropdown(false);
  };

  const handleDateSelect = (day, isCurrentMonth) => {
    const newDate = new Date(currentDate);

    if (!isCurrentMonth) {
      if (day > 20) {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
    }

    newDate.setDate(day);
    setSelectedDate(newDate);

    if (onChange) {
      onChange(newDate);
    }
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = daysInPrevMonth - firstDayOfMonth + i + 1;
      days.push(
        <div
          key={`prev-${day}`}
          className="flex items-center justify-center w-10 h-10 text-gray-300"
          onClick={() => handleDateSelect(day, false)}
        >
          {day}
        </div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <div
          key={`current-${day}`}
          className={`flex items-center justify-center w-10 h-10 cursor-pointer rounded-md
            ${isSelected ? "bg-pink-100 relative" : "hover:bg-gray-100"}`}
          onClick={() => handleDateSelect(day, true)}
        >
          {day}
          {isSelected && (
            <div className="absolute w-10 h-10 rounded-full bg-pink-100 -z-10"></div>
          )}
        </div>
      );
    }

    const totalCells = 42; // 6 rows of 7 days
    const remainingCells = totalCells - days.length;

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="flex items-center justify-center w-10 h-10 text-gray-300"
          onClick={() => handleDateSelect(day, false)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-lg ${className} max-w-2xs`}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={handlePrevMonth}
        >
          &lt;
        </button>

        <div className="flex items-center">
          <div className="relative" ref={monthDropdownRef}>
            <button
              className="px-4 py-2 border border-blue-500 rounded-md text-lg font-medium mr-2 flex items-center"
              onClick={() => setShowMonthDropdown(!showMonthDropdown)}
            >
              {months[currentDate.getMonth()]}
              <span className="ml-1 text-blue-500">▼</span>
            </button>

            {showMonthDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-40 max-h-60 overflow-y-auto">
                {months.map((month, index) => (
                  <div
                    key={month}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 
                      ${index === currentDate.getMonth() ? "text-blue-500" : ""}`}
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={yearDropdownRef}>
            <button
              className="px-4 py-2 text-lg font-medium flex items-center"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              {currentDate.getFullYear()}
              <span className="ml-1 text-blue-500">▼</span>
            </button>

            {showYearDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-24 max-h-60 overflow-y-auto">
                {Array.from(
                  { length: 20 },
                  (_, i) => currentDate.getFullYear() - 10 + i
                ).map((year) => (
                  <div
                    key={year}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 
                      ${year === currentDate.getFullYear() ? "text-blue-500" : ""}`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={handleNextMonth}
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="flex items-center justify-center h-10 font-medium"
          >
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
}
