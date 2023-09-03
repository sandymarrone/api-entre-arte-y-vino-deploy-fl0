import { Router } from "express";
import { EventController } from "../controllers/events.js";

const router = Router()

router.get('/', EventController.getAll)

router.get('/:id', EventController.getId)

router.post('/', EventController.create)

export default router