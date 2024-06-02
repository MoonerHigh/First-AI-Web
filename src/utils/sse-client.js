import { createParser } from "eventsource-parser";

/**
 * Connects to the Server-Sent Events (SSE) endpoint and handles the received events.
 * @param {string} url - The URL of the SSE endpoint.
 * @param {string} userInput - The user input to send to the SSE endpoint.
 * @param {Object} handlers - Object containing event handlers for different SSE events.
 * @param {Function} handlers.onStart - Event handler for the "start" event.
 * @param {Function} handlers.onChar - Event handler for the "message" event.
 * @param {Function} handlers.onDone - Event handler for the "done" event.
 * @param {Function} handlers.onError - Event handler for the "error" event.
 */
export function connectToSSE(url, userInput, handlers) {
  const { onStart, onChar, onDone, onError } = handlers;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userInput }),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const parser = createParser((event) => {
        if (event.type === "event") {
          const data = event.data;
          switch (event.event) {
            case "start":
              onStart && onStart(data);
              break;
            case "message":
              onChar && onChar(data);
              break;
            case "done":
              onDone && onDone(data);
              break;
            case "error":
              onError && onError(data);
              break;
            default:
              console.log("Unknown event type:", event.event);
          }
        }
      });

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        parser.feed(chunk);
      }
    })
    .catch((error) => {
      onError && onError(error.message);
    });
}
