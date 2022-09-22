import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import InfoRow from "../components/InfoRow";
import styles from "../styles/Event.module.css";
import Header from "../components/Header";
import Subtitle from "../components/Subtitle";

const formatDate = (dateAsString) => {
  try {
    console.log(dateAsString);
    const parsedDate = new Date(dateAsString);
    const formattedDate = format(parsedDate, "dd MMMM h:m bbb");
    return formattedDate;
  } catch (e) {
    return "";
  }
};

const event = () => {
  const router = useRouter();
  const eventParams = router.query;

  console.log("eventparams", eventParams);

  const startTime = formatDate(eventParams.startTime);
  const endTime = formatDate(eventParams.endTime);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="/event-image.png"
          alt="Screenshot of app"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.eventDetails}>
        <Header>{eventParams.eventName}</Header>
        <Subtitle>Hosted by {eventParams.hostName}</Subtitle>
        <InfoRow
          title={startTime}
          subtitle={`to ${endTime}`}
          icon="/calendar-icon.svg"
        />
        <InfoRow
          title={eventParams.location}
          subtitle={"Modbury, SA, 5097"}
          icon="/location-icon.svg"
        />
      </div>
    </div>
  );
};

export default event;
