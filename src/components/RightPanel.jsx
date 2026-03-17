import { Calendar, Computer, MoreHorizontal, Notebook } from "lucide-react"
import ProfileAvatar from "./UI/ProfileAvatar"
import CalendarDay from "./UI/CalendarDay"
import EventCard from "./UI/EventCard"
import { BsPeople } from "react-icons/bs"


const RightPanel = () => {
  return (
    <div className="space-y-8">
      {/* Profile Card */}
      <div className="bg-transparent p-6">
        <div className="mb-4 flex justify-end">
          <MoreHorizontal size={20} className="text-zinc-500 cursor-pointer" />
        </div>
        <ProfileAvatar src="/user-1.png" name="John Doe" title="Software Engineer"/>

      </div>
      {/* Financial Calender */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-zinc-900">
            My Agenda
          </h3>
          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>

        {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1 text-center mb-6">
        <CalendarDay day="Mon" date="16"/>
        <CalendarDay day="Tue" date="17" isActive={true}/>
        <CalendarDay day="Wed" date="18"/>
        <CalendarDay day="Thu" date="19"/>
        <CalendarDay day="Fri" date="20"/>
        <CalendarDay day="Sat" date="21"/>
        <CalendarDay day="Sun" date="22"/>
      </div>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <EventCard time="19:00-21:00" title="Team Meeting" participants={3} icon={Calendar}/>
        <EventCard time="20:00-22:00" title="Project Review" participants={5} icon={BsPeople}/>
        <EventCard time="08:00-10:00" title="Product Planning"  icon={Notebook}/>
        <EventCard time="13:00-15:00" title="Product Demo"  icon={Computer}/>
      </div>

      <button className="w-full mt-6 bg-zinc-50 border border-zinc-300 text-zinc-800 cursor-pointer duration-100 ease-in hover:shadow-xl text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors">
        View Full Calendar
      </button>
      
    </div>
  )
}

export default RightPanel
