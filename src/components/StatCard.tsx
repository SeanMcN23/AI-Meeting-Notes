
import "../styles/stat-card.css"


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
            <div className= "stat-card__icon">{icon}</div>

            <div>
                <p className="stat-card__tilte">{title}</p>

                <p className= "stat-card__value">{value}</p>




            </div>





        </div>

    );
}

export default StatCard;