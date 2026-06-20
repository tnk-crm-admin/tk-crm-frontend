import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { format, startOfDay, endOfDay, startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, startOfYear, endOfYear, subDays, subMonths } from 'date-fns';

function DateRangeFilter({ dateRange, setDateRange }) {
  const [showCustom, setShowCustom] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(dateRange.startDate);
  const [tempEndDate, setTempEndDate] = useState(dateRange.endDate);

  const presets = [
    {
      label: 'Today',
      getValue: () => ({
        startDate: startOfDay(new Date()),
        endDate: endOfDay(new Date()),
      }),
    },
    {
      label: 'Yesterday',
      getValue: () => ({
        startDate: startOfDay(subDays(new Date(), 1)),
        endDate: endOfDay(subDays(new Date(), 1)),
      }),
    },
    {
      label: 'This Week',
      getValue: () => ({
        startDate: startOfDay(new Date(new Date().setDate(new Date().getDate() - new Date().getDay()))),
        endDate: endOfDay(new Date()),
      }),
    },
    {
      label: 'This Month',
      getValue: () => ({
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth(new Date()),
      }),
    },
    {
      label: 'Last Month',
      getValue: () => {
        const lastMonth = subMonths(new Date(), 1);
        return {
          startDate: startOfMonth(lastMonth),
          endDate: endOfMonth(lastMonth),
        };
      },
    },
    {
      label: 'This Quarter',
      getValue: () => ({
        startDate: startOfQuarter(new Date()),
        endDate: endOfQuarter(new Date()),
      }),
    },
    {
      label: 'This Year',
      getValue: () => ({
        startDate: startOfYear(new Date()),
        endDate: endOfYear(new Date()),
      }),
    },
  ];

  const handlePresetClick = (preset) => {
    const dates = preset.getValue();
    setDateRange(dates);
    setShowCustom(false);
  };

  const handleApplyCustom = () => {
    setDateRange({
      startDate: tempStartDate,
      endDate: tempEndDate,
    });
    setShowCustom(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {format(dateRange.startDate, 'MMM dd, yyyy')} - {format(dateRange.endDate, 'MMM dd, yyyy')}
          </span>
        </div>

        <div className="flex items-center space-x-2 flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => handlePresetClick(preset)}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              {preset.label}
            </button>
          ))}

          {!showCustom ? (
            <button
              onClick={() => setShowCustom(true)}
              className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
            >
              Custom
            </button>
          ) : (
            <button
              onClick={() => setShowCustom(false)}
              className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              Hide
            </button>
          )}
        </div>
      </div>

      {showCustom && (
        <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
              <input
                type="date"
                value={format(tempStartDate, 'yyyy-MM-dd')}
                onChange={(e) => setTempStartDate(new Date(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
              <input
                type="date"
                value={format(tempEndDate, 'yyyy-MM-dd')}
                onChange={(e) => setTempEndDate(new Date(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleApplyCustom}
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DateRangeFilter;
