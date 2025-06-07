import { useEffect, useRef } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext';
import { navigationItems } from '../routes/navigationConfig';

// Helper function to get all scrollTo values from navigation items
const getAllScrollToValues = (items: typeof navigationItems): string[] => {
  const values: string[] = [];
  items.forEach((item) => {
    if (item.scrollTo) {
      values.push(item.scrollTo);
    }
    if (item.children) {
      values.push(...getAllScrollToValues(item.children));
    }
  });
  return values;
};

export const useIntersectionObserver = () => {
  const { setActiveSection } = useActiveSection();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the most visible section
      let maxVisibility = 0;
      let mostVisibleSection = '';

      entries.forEach((entry) => {
        const visibilityRatio = entry.intersectionRatio;
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection) {
        console.log('Most visible section:', mostVisibleSection, 'Visibility:', maxVisibility);
        setActiveSection(mostVisibleSection);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1], // Track multiple thresholds for better accuracy
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    const observer = observerRef.current;

    const validSectionIds = getAllScrollToValues(navigationItems);
    console.log('Valid section IDs:', validSectionIds);

    // Only observe elements that match our navigation sections
    validSectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        console.log('Observing section:', sectionId);
      } else {
        console.warn('Section not found:', sectionId);
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [setActiveSection]);
};
