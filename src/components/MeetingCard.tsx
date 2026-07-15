interface MeetingCardProps{
    title: string;
    date: string;
    participantCount: number;
    actionItemCount: number;
    status: "upcoming" | "processing"| "completed"|"cancelled";

}

function MeetingCard({
    title,
    date,
    participantCount,
    actionItemCount,
    status

}: MeetingCardProps){
    return(
        <article className= "meeting-card">
            <div>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>

            <div>

                <span>{participantCount} Participants</span>
                <span>{actionItemCount} Action Items</span>

            </div>

             <span className={`meeting-card__status meeting-card__status--${status}`}>
                {status}
            </span>

         

        </article>

        
    );
}
export default MeetingCard



