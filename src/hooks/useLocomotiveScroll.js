// src/hooks/useLocomotiveScroll.js
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function useLocomotiveScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector('[data-scroll-container]');
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.8,
      class: 'is-inview',
      smartphone: {
        smooth: false
      },
      tablet: {
        smooth: false
      }
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);
}