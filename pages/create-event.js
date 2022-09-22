import React from "react";
import { useState } from "react";
import styles from "../styles/CreateEvent.module.css";
import Button from "../components/Button";
import { useRouter } from "next/router";
import Header from "../components/Header";

const CreateEvent = () => {
  const router = useRouter();

  // Here we set two state variables for firstName and lastName using `useState`

  const [formState, setFormState] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    location: "",
    photo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Submission to api would happen here.
    // For now we're just passing the data to the next page;
    router.push({
      pathname: "/event",
      query: formState,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Header>Create an event</Header>
      <label htmlFor="eventName">Event Name</label>
      <input
        value={formState.eventName}
        name="eventName"
        id="eventName"
        onChange={handleInputChange}
        type="text"
        placeholder="Event Name"
      />
      <label htmlFor="hostName">Host Name</label>
      <input
        value={formState.hostName}
        name="hostName"
        onChange={handleInputChange}
        type="text"
        id="hostName"
        placeholder="Host Name"
      />
      <label htmlFor="eventName">Start Time</label>
      <input
        value={formState.startTime}
        name="startTime"
        onChange={handleInputChange}
        type="datetime-local"
        placeholder="Start Time"
      />
      <label htmlFor="eventName">End Time</label>
      <input
        value={formState.endTime}
        name="endTime"
        onChange={handleInputChange}
        type="datetime-local"
        placeholder="End Time"
      />
      <label htmlFor="eventName">Location</label>
      <input
        value={formState.location}
        name="location"
        onChange={handleInputChange}
        type="text"
        placeholder="Location"
      />
      <label htmlFor="photo">Photo</label>
      <input
        type="file"
        onChange={handleInputChange}
        id="photo"
        name="photo"
        placeholder="photo"
        accept="image/png, image/jpeg"
      />

      <Button type="submit">🎉 Create my event</Button>
    </form>
  );
};

export default CreateEvent;
