"use client"
import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar as C2 } from "react-modern-calendar-datepicker"

function CalendarComp() {
  const [value, setValue] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<any>()
  console.log(selectedDay)

  return (
    <div>
      <Calendar
        onChange={(date: any) => setValue(date)}
        value={value}
        className="text-black rounded-lg"
      />
      date is : {value.toDateString()}
      <C2
        value={selectedDay}
        onChange={(e: any) => setSelectedDay(e)}
        shouldHighlightWeekends
      />
      date is {JSON.stringify(selectedDay)}
    </div>
  )
}
export default CalendarComp
