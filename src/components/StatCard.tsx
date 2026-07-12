



interface StatCardProps{
    title: string;
    value: number | string;
    icon: React.ReactNode;

}

function StatCard({
    title,
    value,
    icon,

}: StatCardProps){
    return(

        <div className= "stat-card">
            {icon}

            <h3>{title}</h3>

            <span> {value}</span>





        </div>

    );
}

export default StatCard;