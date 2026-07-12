
import {
    CalendarDays,
    CheckCircle, 
    Clock3,
    ListTodo,

} from "lucide-react";

import StatCard from "../components/StatCard";

function DashboardPage(){

    return(
        <div>
            <h2>DashBoard Overview</h2>

            <div className= "stats-grid">
                <StatCard 
                title="Total Meetings"
                value={42}
                icon={<CalendarDays/>}/>

                <StatCard 
                title="Upcoming Meetings"
                value={6}
                icon={<Clock3/>}/>

                <StatCard 
                title="Open Action Items"
                value={15}
                icon={<ListTodo/>}/>

                <StatCard 
                title="Completed Task"
                value={28}
                icon={<CheckCircle/>}/>
           

            </div>


        </div>


    );


}

export default DashboardPage;
