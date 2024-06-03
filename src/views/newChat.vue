<template>
  <!-- Sidebar -->
  <div
    id="application-sidebar"
    class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700"
  >
    <nav
      class="hs-accordion-group size-full flex flex-col"
      data-hs-accordion-always-open
    >
      <sidebar></sidebar>

      <!-- Footer -->
      <div class="mt-auto">
        <div class="py-2.5 px-7">
          <p class="inline-flex items-center gap-x-2 text-xs text-green-600">
            <span class="block size-1.5 rounded-full bg-green-600"></span>
            Active 12,320 people
          </p>
        </div>

        <div class="p-4 border-t border-gray-200 dark:border-neutral-700">
          <a
            class="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
            href="#"
          >
            Sign in
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
          </a>
        </div>
      </div>
      <!-- End Footer -->
    </nav>
  </div>
  <!-- End Sidebar -->

  <!-- Content -->
  <div class="relative h-screen">
    <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <AI-Title></AI-Title>
      <ul class="mt-16 space-y-5">
        <template v-for="(message) in messages" :key="message.id">
          <user-message-card
            v-if="message.type === 'user'"
            :message="message.content"
          ></user-message-card>
          <system-message-card
            v-else-if="message.type === 'system'"
            :message="message.content"
          ></system-message-card>
        </template>
      </ul>
    </div>

    <!-- Search -->
    <user-input @send-message="sendMessage"></user-input>
  </div>
  <!-- End Search -->
  <!-- End Content -->
</template>

<script>
import SystemMessageCard from "../components/SystemMessageCard.vue";
import SideBar from "../components/SideBar.vue";
import UserInput from "../components/UserInput.vue";
import UserMessageCard from "../components/UserMessageCard.vue";
import Title from "../components/Title.vue";
import { connectToSSE } from "../utils/sse-client";
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    "system-message-card": SystemMessageCard,
    "user-input": UserInput,
    sidebar: SideBar,
    "user-message-card": UserMessageCard,
    "AI-Title": Title,
  },
  data() {
    return {
      userInput: "",
    };
  },
  computed: {
    ...mapState(["messages"]),
  },
  methods: {
    ...mapMutations(['addUserMessage', 'addSystemMessage', 'updateSystemMessageContent']),
    sendMessage(message) {
      console.log("Sending message:", message);
      this.addUserMessage(message);
      this.startSSE(message);
    },
    startSSE(userMessage) {
      const url = "http://localhost:8080/ai/generateCharacter";
      connectToSSE(url, userMessage, {
        onStart: () => {
          // Optional: Handle SSE connection start
        },
        onChar: (char) => {
          this.updateSystemMessageContent(char);
        },
        onDone: () => {
          // Optional: Handle SSE connection end
        },
        onError: (error) => {
          console.error("SSE error:", error);
        },
      });
    },
  },
  created() {
    this.sendMessage(this.$route.params.message);
  },
};
</script>

<style>
</style>