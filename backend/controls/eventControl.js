import Event from "../models/eventModel.js";

//@desc Create new events
//@route POST /api/events
//@access Public
const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    if (!title || !description || !date) {
      return res.status(400).json({ message: `All fields are required` });
    }
    const eventDate = new Date(date);
    if (isNaN(eventDate.getTime())) {
      return res.status(400).json({ message: `Invalid date format` });
    }

    if (eventDate.getTime() < Date.now()) {
      return res.status(400).json({ message: `Event date must be in future` });
    }

    const event = new Event({ title, description, date: eventDate });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc get all events
//@route POST /api/events
//@access Public
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc get  event by id
//@route POST /api/events/:id
//@access Public
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createEvent, getEvents, getEventById };
