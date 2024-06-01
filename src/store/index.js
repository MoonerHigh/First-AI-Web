// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    messages: [],
    responseText: "",
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
    updateSystemMessage(state, char) {
      state.responseText += char;
      const systemMessage = {
        id: state.messages.length + 1,
        content: state.responseText,
        type: "system",
      };
      const index = state.messages.findIndex((msg) => msg.type === "system");
      if (index !== -1) {
        state.messages.splice(index, 1, systemMessage);
      } else {
        state.messages.push(systemMessage);
      }
    },
  },
  actions: {},
  modules: {},
});
