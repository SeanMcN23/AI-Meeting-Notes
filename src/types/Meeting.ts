export interface MeetingSumary{
    id: number,
    title: string,
    date: string,
    participantCount: number,
    actionItemCount: number,
    status: "upcoming" | "processing"| "completed"|"cancelled";


}

export interface Meeting{
    id: number;
    title: string;
    date: string
    time: string;
    participants: string[];
    description: string;
    status: "upcoming" | "processing"| "completed"|"cancelled";



}
