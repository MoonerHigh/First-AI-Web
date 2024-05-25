// hooks/use-scroll-bottom.js
import throttle from "lodash.throttle";
import { useEffect } from "react";

/**
 * Custom hook that scrolls to the bottom of the page when new child elements are added to the specified scrollable element.
 * @param {Object} options - The options for the hook.
 * @param {React.RefObject} options.scrollRef - The ref object of the scrollable element.
 */
const useScrollBottom = ({ scrollRef }) => {
  useEffect(() => {
    const scrollingElement = scrollRef.current;

    const callback = function (mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
    };
    const throttleCallback = throttle(callback, 1000 / 16);

    const observer = new MutationObserver(throttleCallback);
    if (scrollingElement) {
      observer.observe(scrollingElement, {
        subtree: true,
        childList: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollBottom;
