import { CalendarDays, LayoutDashboard, Plus } from "lucide-react";

function Sidebar(){
    return(
        <aside className= "sidebar">
            <div className= "sidebar__brand">

                <h2> MeetingAI</h2>

            </div>

            <nav className="sidebar__brand">
                <a href= "#">
                    <LayoutDashboard size = {20} />
                    Dashboard
                </a>

                <a href= "#">
                    <CalendarDays size= {20} />
                    Meetings

                </a>

                <a href= "#">
                    <Plus size= {20} />
                    New Meeting

                </a>

            </nav>

        </aside>

    );
}
export default Sidebar;
