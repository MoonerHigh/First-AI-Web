// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    messages: [],
    nextMessageId: 1,
  },
  mutations: {
    addUserMessage(state, content) {
      const message = {
        id: state.nextMessageId++,
        content,
        type: "user",
      };
      state.messages.push(message);
    },
    addSystemMessage(state, content) {
      const message = {
        id: state.nextMessageId++,
        content,
        type: "system",
      };
      state.messages.push(message);
    },
    updateSystemMessageContent(state, char) {
      const lastMessage = state.messages[state.messages.length - 1];
      if (lastMessage && lastMessage.type === "system") {
        lastMessage.content += char;
      } else {
        const message = {
          id: state.nextMessageId++,
          content: char,
          type: "system",
        };
        state.messages.push(message);
      }
    },
  },
  actions: {},
  modules: {},
});
