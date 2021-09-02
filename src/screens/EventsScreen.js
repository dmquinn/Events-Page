import React, { useEffect } from "react";
import { listEvents } from "../actions/eventActions";
import { useDispatch, useSelector } from "react-redux";

const EventsScreen = () => {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events, page, pages } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);
  return (
    <div
      style={{
        height: "400px",
        width: "100vw",
        backgroundColor: "slategrey",
        marginTop: "-100px",
      }}
    >
      {events.map((event, i) => (
        <div>
          <div key={i} event={event}></div>
        </div>
      ))}{" "}
    </div>
  );
};

export default EventsScreen;
