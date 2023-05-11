"use client"
import React, { FC, useState } from "react"
import { Calendar } from "react-modern-calendar-datepicker"
import "react-modern-calendar-datepicker/lib/DatePicker.css"

const CalendarComp: FC = () => {
  const [selectedDay, setSelectedDay] = useState<any>([])

  return (
    <>
      <Calendar
        value={selectedDay}
        onChange={(e: any) => setSelectedDay(e)}
        shouldHighlightWeekends
      />
      date is <pre>{JSON.stringify(selectedDay)}</pre>
    </>
  )
}

export default CalendarComp
