import express from "express";
import { createEvent } from "../controls/eventControl.js";

const router = express.Router();

router.post("/", createEvent);

export default router;
