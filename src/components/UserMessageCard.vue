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

      <span
        class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600"
      >
        <span class="text-sm font-medium text-white leading-none">U</span>
      </span>
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