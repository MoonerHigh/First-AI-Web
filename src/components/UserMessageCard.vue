<template>
  <div>
    <!-- Chat Bubble -->
    <li class="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
      <div class="grow text-end space-y-3">
        <!-- Card -->
        <div class="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
          <p class="text-sm text-white">
            {{ message }}
          </p>
        </div>
        <!-- End Card -->
      </div>

      <div class="relative inline-block">
        <img
          class="inline-block size-[38px] rounded-lg"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <span
          class="absolute bottom-4 end-0 block size-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-teal-400 dark:ring-neutral-900"
        ></span>
      </div>
    </li>
    <!-- End Chat Bubble -->
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>