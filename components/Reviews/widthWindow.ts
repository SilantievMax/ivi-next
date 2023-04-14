// import { useEffect, useState } from 'react';
// function getWindowDimensions() {
//   if (typeof window !== 'undefined') {
//     // Client-side-only code
//     const { innerWidth: width, innerHeight: height } = window
//     return {
//       width,
//       height
//     }
//   }
// }
// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions())
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])
//   return windowDimensions
// }
import { useEffect, useState } from 'react';

// Hook
export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(
       window.innerWidth,
        // height: window.innerHeight,
      );
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}