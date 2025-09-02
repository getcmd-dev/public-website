/**
 * Fragment Scroll Utility
 * 
 * Handles reliable scrolling to URL fragments (e.g., #section-id) on page load.
 * Addresses common issues with fragment scrolling in React/SPA applications where
 * content may not be fully rendered or sized when the browser attempts to scroll.
 * 
 * Features:
 * - Waits for all images to load before scrolling (prevents layout shifts)
 * - Handles both fast and slow page loads
 * - Gracefully handles broken images
 * - Uses browser APIs efficiently without arbitrary timeouts
 * - Properly cleans up event listeners
 * 
 * Usage:
 * ```tsx
 * import { useFragmentScroll } from "@/utils/fragmentScroll";
 * 
 * const MyPage = () => {
 *   const initializeFragmentScroll = useFragmentScroll();
 *   
 *   useEffect(() => {
 *     return initializeFragmentScroll();
 *   }, [initializeFragmentScroll]);
 *   
 *   return <div>...</div>;
 * };
 * ```
 */
export const useFragmentScroll = () => {
  /**
   * Attempts to scroll to the current URL fragment
   * @returns {boolean} True if element was found and scrolled to, false otherwise
   */
  const scrollToFragment = () => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView();
        return true;
      }
    }
    return false;
  };

  /**
   * Waits for all images to load, then scrolls to fragment
   * This ensures accurate scroll positioning by waiting for content that affects layout
   */
  const handleFragmentScroll = () => {
    // Wait for images to load and content to be sized
    const images = document.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>(resolve => {
        img.addEventListener('load', () => resolve());
        img.addEventListener('error', () => resolve()); // Handle broken images
      });
    });

    Promise.all(imagePromises).then(() => {
      // Additional frame delay to ensure layout calculations are complete
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToFragment);
      });
    });
  };

  /**
   * Initializes fragment scrolling for the current page
   * Should be called in a useEffect hook
   * @returns {function|undefined} Cleanup function for event listeners, if any
   */
  const initializeFragmentScroll = () => {
    const hash = window.location.hash;
    if (hash) {
      if (document.readyState === 'complete') {
        // Page already loaded, start fragment handling immediately
        handleFragmentScroll();
      } else {
        // Page still loading, wait for load event
        const handleLoad = () => {
          handleFragmentScroll();
          window.removeEventListener('load', handleLoad);
        };
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  };

  return initializeFragmentScroll;
};