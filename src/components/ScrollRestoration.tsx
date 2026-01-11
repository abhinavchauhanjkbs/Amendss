import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type ScrollPositions = Record<string, number>;

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const positionsRef = useRef<ScrollPositions>({});

  // Save the scroll position of the current route before navigating away.
  useEffect(() => {
    return () => {
      positionsRef.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  // When the route changes, restore the previous scroll position (or jump to top on first visit).
  useLayoutEffect(() => {
    const savedPosition = positionsRef.current[pathname] ?? 0;
    window.scrollTo(0, savedPosition);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
