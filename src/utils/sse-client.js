// src/sse-client.js
import { createParser } from "eventsource-parser";

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
