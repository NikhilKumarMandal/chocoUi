import React, { useState } from 'react';

const NeoCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
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
  const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const calendarCells = [];
  for (let i = 0; i < startDay; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDate === day;
    const isToday = isCurrentMonth && todayDate === day;

    calendarCells.push(
      <div
        key={day}
        onClick={() => setSelectedDate(day)}
        className={`
          h-10 w-10 flex items-center justify-center font-bold cursor-pointer border-2 border-black transition-all
          ${isSelected 
            ? 'bg-[#FF90E8] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]' 
            : isToday 
              ? 'bg-[#23A094] text-white' 
              : 'bg-white hover:bg-[#FFC900]'}
        `}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="font-mono p-8 bg-[#f0f0f0] flex justify-center">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all font-black text-xl"
          >
            &lt;
          </button>
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            {months[currentMonth]} {currentYear}
          </h2>
          <button 
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all font-black text-xl"
          >
            &gt;
          </button>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 gap-2 mb-2 text-center font-black">
          {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => (
            <div key={day} className="text-sm">{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarCells}
        </div>
        
        {/* Footer Info */}
        {selectedDate && (
          <div className="mt-6 p-3 bg-[#FFC900] border-2 border-black font-bold text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            SELECTED: {months[currentMonth]} {selectedDate}, {currentYear}
          </div>
        )}
      </div>
    </div>
  );
};

export default NeoCalendar;
