/**
 * Fetches the answer from the AI server based on the user input.
 * @param {string} userInput - The user input to generate the answer.
 * @returns {Promise<string>} - A promise that resolves to the generated answer.
 */
export async function getAnswer(userInput) {
  const response = await fetch(
    `https://http://localhost:8080/ai/generate?message=${userInput}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      const decoder = new TextDecoder();
      const pump = () =>
        reader.read().then(({ done, value }) => {
          if (done) {
            controller.close();
            return;
          }
          controller.enqueue(value);
          pump();
        });
      pump();
    },
  });
  return new Response(stream).text();
}
