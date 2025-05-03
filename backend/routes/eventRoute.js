import express from "express";
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEvents,
  updateEvent,
} from "../controls/eventControl.js";

const router = express.Router();

router.route("/").post(createEvent).get(getEvents);

router.route("/:id").get(getEventById).put(updateEvent).delete(deleteEvent);

export default router;
