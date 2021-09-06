const express = require("express");
const router = express.Router();
const {
  getEvents,
  getEventById,
  deleteEvent,
  updateEvent,
  createEvent,
  createEventReview,
  getTopEvents,
} = require("../controllers/eventController");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").get(getEvents);
// router.route("/").get(getEvents).post(protect, admin, createEvent);

// router.route("/:id/reviews").post(protect, createEventReview);
// router.get("/top", getTopEvents);
// router
//   .route("/:id")
//   .get(getEventById)
//   .delete(protect, admin, deleteEvent)
//   .put(protect, admin, updateEvent);

module.exports = router;
