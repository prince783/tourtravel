"use client";

import { useState } from "react";

const calendarMonths = [
  { name: "January", short: "JAN", festivals: ["Makar Sankranti", "Vasant Panchami"] },
  { name: "February", short: "FEB", festivals: ["Maha Shivratri", "Phulera Dooj"] },
  { name: "March", short: "MAR", festivals: ["Holi", "Chaitra Navratri"] },
  { name: "April", short: "APR", festivals: ["Ram Navami", "Hanuman Jayanti"] },
  { name: "May", short: "MAY", festivals: ["Akshaya Tritiya", "Buddha Purnima"] },
  { name: "June", short: "JUN", festivals: ["Ganga Dussehra", "Jagannath Rath Yatra"] },
  { name: "July", short: "JUL", festivals: ["Guru Purnima", "Sawan Somwar"] },
  { name: "August", short: "AUG", festivals: ["Janmashtami", "Raksha Bandhan"] },
  { name: "September", short: "SEP", festivals: ["Ganesh Chaturthi", "Navratri preparations"] },
  { name: "October", short: "OCT", festivals: ["Navratri", "Diwali"] },
  { name: "November", short: "NOV", festivals: ["Dev Deepawali", "Kartik Purnima"] },
  { name: "December", short: "DEC", festivals: ["Gita Jayanti", "Dattatreya Jayanti"] },
];

export function YatraCalendar() {
  const [monthIndex, setMonthIndex] = useState(0);
  const month = calendarMonths[monthIndex];

  return (
    <section className="home-section-motion yatra-calendar relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Plan your yatra</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#8d071c] md:text-5xl">Festival &amp; Yatra Calendar</h2>
          <div className="mx-auto mt-5 h-0.5 w-20 bg-amber-500" />
          <p className="mt-5 text-base leading-7 text-[#b34a55] md:text-lg">Time your pilgrimage with sacred festivals and temple opening seasons.</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Showing month</p>
              <p className="mt-2 text-base text-[#b34a55]">View one month at a time and switch anytime.</p>
            </div>
            <label className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm font-semibold text-[#8d071c] shadow-sm">
              <span className="uppercase tracking-wider">Month</span>
              <select
                value={monthIndex}
                onChange={(event) => setMonthIndex(Number(event.target.value))}
                className="cursor-pointer bg-transparent font-bold outline-none"
                aria-label="Choose calendar month"
              >
                {calendarMonths.map((item, index) => (
                  <option key={item.name} value={index}>{item.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(93,29,41,0.08)]">
            <div className="bg-[#faf7f8] px-7 py-6">
              <p className="text-sm font-bold tracking-[0.2em] text-[#8d071c]">{month.short}</p>
              <h3 className="mt-2 text-3xl font-bold text-[#8d071c]">{month.name}</h3>
            </div>
            <div className="space-y-4 p-6 md:p-7">
              {month.festivals.map((festival) => (
                <div key={festival} className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-[#fffdfa] px-4 py-4 text-[#8d071c]">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#dcaeb4]" aria-hidden="true" />
                  <span>{festival}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
