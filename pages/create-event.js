import React from "react";
import { useState } from "react";
import styles from "../styles/Form.module.css";
import Button from "../components/Button";

const CreateEvent = () => {
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

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(formState);
  };

  return (
    <fieldset className={styles.field}>
      <form className={styles.form}>
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
          type="text"
          placeholder="Start Time"
        />
        <label htmlFor="eventName">End Time</label>
        <input
          value={formState.endTime}
          name="endTime"
          onChange={handleInputChange}
          type="text"
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
          value={formState.photo}
          name="photo"
          onChange={handleInputChange}
          type="text"
          placeholder="photo"
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </form>
    </fieldset>
  );
};

export default CreateEvent;
