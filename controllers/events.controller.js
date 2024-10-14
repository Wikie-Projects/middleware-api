import * as eventService from "../services/events.service.js";

export const getEvents = (req, res) => {
	// if using database, you would call the service here
	const events = eventService.getEvents();
	res.status(200).json(events);
};

export const getEvent = (req, res) => {
	const { id } = req.params;
	const event = eventService.getEvent(id);
	if (event) {
		res.status(200).json(event);
	} else {
		res.status(404).json({ message: `Event with id ${id} not found` });
	}
};

export const createEvent = (req, res) => {
	const event = req.body;
	const result = eventService.createEvent(event);
	res.status(201).json(result);
};

export const updateEvent = (req, res) => {
	const id = req.params.id;
	const event = req.body;
	const result = eventService.updateEventUsingId(id, event);
	res.status(200).json(result);
};

export const removeEvent = (req, res) => {
	const id = req.params.id;
	const result = eventService.deleteEvent(id);
	res.status(204).json(result);
};
