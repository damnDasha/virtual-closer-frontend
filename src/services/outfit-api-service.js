import TokenService from "../services/token-service";
import config from "../config";

const EventsApiService = {
  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getEventOutfits(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/outfits`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postOutfit(eventId, text) {
    return fetch(`${config.API_ENDPOINT}/outfits`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        event_id: eventId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default EventsApiService;
