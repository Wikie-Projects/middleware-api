import { assert } from "console";
// import * as eventsJson from "../events.json" assert { type: "json" };

// console.log(eventsJson);
// // const events = [JSON.parse(eventsJson)];

const events = [
	{
		id: 1,
		name: "Event-1",
		location: "Accra",
	},
];

export function getEvents() {
	return events;
}

export function getEvent(id) {
	return events.find((event) => event.id === parseInt(id));
}

export function createEvent(event) {
	try {
		events.push(event);
		return event;
	} catch (error) {
		throw new Error("Event not added");
	}
}

export function updateEventUsingId(id, event) {
	const eventId = parseInt(id);
	const oldEvent = event.find((event) => event.id === id);
	if (oldEvent) {
		const eventIndex = events.findIndex((event) => event.id === id);
		events[eventIndex] = event;
	}
}

export function updateEventUsingEvent(event) {
	try {
		const oldEvent = event.find((event) => event.id === id);
		if (oldEvent) {
			const eventIndex = events.findIndex((event) => event.id === id);
			events[eventIndex] = event;
		}
	} catch (error) {
		throw new Error(`Failed to update: ${error.meesage}`);
	}
}

export function deleteEvent(id) {
	try {
		const eventIndex = events.findIndex((event) => event.id === id);
		const result = events.pop(id);
		return result;
	} catch (error) {
		throw new Error(`Failed to delete event ${error.meesage}`);
	}
}
