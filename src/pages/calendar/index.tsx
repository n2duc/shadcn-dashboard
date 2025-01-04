const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Mon", "Wed", "Fri"];

export default function CalendarPage() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        {DAYS.map((day) => (
          <span>{day}</span>
        ))}
      </div>
      <div>
        <div className="flex items-center">
          {MONTHS.map((month) => (
            <span>{month}</span>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  )
}
