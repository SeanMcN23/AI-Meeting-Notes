import { useState } from "react";
import type { FormEvent } from "react";
import type { Meeting, MeetingSumary } from "../types/Meeting";

interface NewMeetingFormProps {
  onAddMeeting: (meeting: MeetingSumary) => void;
}

function NewMeetingForm({
  onAddMeeting,
}: NewMeetingFormProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] =
    useState<Meeting["status"]>("upcoming");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const participantList = participants
    .split(",")
    .map((participant) => participant.trim())
    .filter((participant) => participant.length > 0);

  const newMeeting: MeetingSumary = {
    id: Date.now(),
    title: title.trim(),
    date,
    participantCount: participantList.length,
    actionItemCount: 0,
    status,
  };

  onAddMeeting(newMeeting);

  setTitle("");
  setDate("");
  setTime("");
  setParticipants("");
  setDescription("");
  setStatus("upcoming");
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Meeting Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        required
      />

      <label htmlFor="time">Time</label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />

      <label htmlFor="participants">Participants</label>
      <input
        id="participants"
        type="text"
        value={participants}
        onChange={(event) => setParticipants(event.target.value)}
        placeholder="Sean, Maria, David"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(event) =>
          setStatus(event.target.value as Meeting["status"])
        }
      >
        <option value="upcoming">Upcoming</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <button type="submit">this button ehre! Meeting</button>
    </form>
  );
}

export default NewMeetingForm;