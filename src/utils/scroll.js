export function animate() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } 
        });
      },
      {
        root: null, // Watch for intersection changes in relation to the viewport
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((el) => observer.observe(el));
    const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show2');
            } else {
              entry.target.classList.remove('show2');
            }
          });
        },
        {
          root: null, // Watch for intersection changes in relation to the viewport
          threshold: 0.5, // Trigger when 50% of the element is visible
        }
      );
    
      const hiddenElements2 = document.querySelectorAll('.hidden2');
      hiddenElements2.forEach((el) => observer2.observe(el));
  }
