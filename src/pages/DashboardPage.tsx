import {
  CalendarDays,
  CheckCircle,
  Clock3,
  ListTodo,
} from "lucide-react";
import { useState } from "react";

import MeetingCard from "../components/MeetingCard";
import StatCard from "../components/StatCard";
import type { MeetingSumary } from "../types/Meeting";
import type { Meeting } from "../types/Meeting";
import NewMeetingForm from "../components/NewMeetingForm";

const recentMeetings: MeetingSumary[] = [
  {
    id: 1,
    title: "Weekly Engineering Stand-up",
    date: "July 13, 2026",
    participantCount: 5,
    actionItemCount: 3,
    status: "completed",
  },
  {
    id: 2,
    title: "Sprint Planning",
    date: "July 14, 2026",
    participantCount: 7,
    actionItemCount: 6,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Customer Product Review",
    date: "July 11, 2026",
    participantCount: 4,
    actionItemCount: 2,
    status: "processing",
  },
];

function DashboardPage() {
  const [meetings, setMeetings] =
    useState<MeetingSumary[]>(recentMeetings);

  function handleAddMeeting(newMeeting: MeetingSumary) {
    setMeetings((currentMeetings) => [
      ...currentMeetings,
      newMeeting,
    ]);
  }

  return (
    <div>
      <h2>Dashboard Overview</h2>

      <div className="stats-grid">
        <StatCard
          title="Total Meetings"
          value={meetings.length}
          icon={<CalendarDays />}
        />

        <StatCard
          title="Upcoming Meetings"
          value={6}
          icon={<Clock3 />}
        />

        <StatCard
          title="Open Action Items"
          value={15}
          icon={<ListTodo />}
        />

        <StatCard
          title="Completed Tasks"
          value={28}
          icon={<CheckCircle />}
        />
      </div>

      <section className="recent-meetings">
        <h2>Recent Meetings</h2>

        <div className="meeting-list">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              title={meeting.title}
              date={meeting.date}
              participantCount={meeting.participantCount}
              actionItemCount={meeting.actionItemCount}
              status={meeting.status}
            />
          ))}
        </div>
        <NewMeetingForm onAddMeeting={handleAddMeeting} />
        
      </section>
    </div>
  );
}

export default DashboardPage;