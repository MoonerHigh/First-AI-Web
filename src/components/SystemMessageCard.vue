<template>
  <!-- Chat Bubble -->
  <li class="flex gap-x-2 sm:gap-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 512.000000 512.000000"
    >
    <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />

      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3654 4717 l-219 -402 -370 -203 c-204 -111 -385 -211 -403 -220
l-32 -18 402 -220 402 -220 220 -402 220 -402 18 32 c11 18 110 199 221 403
l202 369 403 220 403 220 -33 18 c-18 9 -199 109 -403 220 l-370 203 -195 356
c-107 196 -206 377 -220 402 l-26 47 -220 -403z"
        />
        <path
          d="M919 3479 c-154 -13 -328 -74 -466 -166 -89 -58 -218 -188 -279 -279
-68 -102 -109 -193 -143 -314 l-26 -95 -3 -1312 -2 -1313 340 0 340 0 0 520 0
520 340 0 340 0 0 -520 0 -520 335 0 335 0 -2 1323 -3 1322 -23 80 c-34 119
-120 288 -195 380 -217 268 -536 402 -888 374z m240 -705 c72 -32 143 -108
173 -182 22 -55 23 -68 26 -464 l3 -408 -341 0 -341 0 3 423 3 422 24 45 c37
70 61 98 115 135 101 69 225 80 335 29z"
        />
        <path
          d="M2337 3313 c-4 -3 -7 -750 -7 -1660 l0 -1653 340 0 340 0 0 1660 0
1660 -333 0 c-184 0 -337 -3 -340 -7z"
        />
      </g>
    </svg>

    <div class="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
      <!-- Card -->
      <div
        class="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700"
      >
        <p class="text-sm text-gray-800 dark:text-white">
          {{ message }}
        </p>
      </div>
      <!-- End Card -->

      <!-- Button Group -->
      <div>
        <div class="sm:flex sm:justify-between">
          <div>
            <div
              class="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700"
            >
              <button
                type="button"
                class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"
              >
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
                  <path d="M7 10v12" />
                  <path
                    d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"
              >
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
                  <path d="M17 14V2" />
                  <path
                    d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
                  />
                </svg>
              </button>
            </div>
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>

              Copy
            </button>
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
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
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              Share
            </button>
          </div>

          <div class="mt-1 sm:mt-0">
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
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
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
              New answer
            </button>
          </div>
        </div>
      </div>
      <!-- End Button Group -->
    </div>
  </li>
  <!-- End Chat Bubble -->
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
</style>