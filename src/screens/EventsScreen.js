import React, { useEffect } from "react";
import { listEvents } from "../actions/eventActions";
import { useDispatch, useSelector } from "react-redux";

const EventsScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);

  const { loading, error, events, page, pages } = eventList;
  window.addEventListener("scroll", function () {
    const target = document.querySelectorAll(".albumImage");
    // const text = document.querySelectorAll("p")
    var i = 0,
      length = target.length;
    for (i; i < length; i++) {
      var pos = window.pageYOffset * target[i].dataset.rate;

      target[i].style.transform = "translate3d(0px, " + pos + "px, 9px)";
    }
  });

  useEffect(() => {
    dispatch(listEvents(keyword, pageNumber));
    console.log("events", events);
  }, [dispatch, keyword, pageNumber]);
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
          <h1
            key={i}
            event={event}
            style={{ color: "black", marginTop: "500px" }}
          >
            {event.name}
          </h1>
        </div>
      ))}{" "}
    </div>
  );
};

export default EventsScreen;
