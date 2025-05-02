import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Optional: if you want elements to hide again when scrolled away
          // entry.target.classList.remove('active');
        }
      });
    };

    const options = {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Adjust the trigger point (negative value means "above the bottom edge")
    };

    const observer = new IntersectionObserver(revealCallback, options);
    
    // Target all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      // Reset any previously applied 'active' class
      element.classList.remove('active');
      observer.observe(element);
    });

    // Cleanup
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, [location.pathname]); // Re-run when the path changes

  return null; // This is a behavior-only component, no rendering
};

export default ScrollReveal;
