export interface MeetingSumary{
    id: number,
    title: string,
    date: string,
    participantCount: number,
    actionItemCount: number,
    status: "upcoming" | "processing"| "completed";


}
