// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

/**
 * This function handles the mobile hamburger menu
 * When you click the hamburger icon, it shows/hides the mobile menu
 */
function setupMobileMenu(): void {
  // 'const' creates a variable that won't change
  // 'querySelector' finds an element in the HTML by its CSS selector
  // The '!' tells TypeScript "I'm sure this element exists"
  const mobileMenuButton = document.querySelector('.md\\:hidden button')!;
  const mobileMenu = document.querySelector('.hidden.md\\:flex')!;
  
  // 'addEventListener' makes something happen when you click
  // 'click' is the event (when someone clicks)
  // The arrow function '=>' says what to do when clicked
  mobileMenuButton.addEventListener('click', () => {
    // 'classList.toggle' switches a class on/off
    // If it's hidden, it shows. If it's showing, it hides.
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('flex-col');
    mobileMenu.classList.toggle('absolute');
    mobileMenu.classList.toggle('top-16');
    mobileMenu.classList.toggle('left-0');
    mobileMenu.classList.toggle('w-full');
    mobileMenu.classList.toggle('bg-white');
    mobileMenu.classList.toggle('shadow-lg');
    mobileMenu.classList.toggle('p-4');
  });
}

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

/**
 * This makes the page scroll smoothly when you click navigation links
 * Instead of jumping instantly, it glides smoothly to the section
 */
function setupSmoothScrolling(): void {
  // 'querySelectorAll' finds ALL elements that match
  // 'a[href^="#"]' finds all links that start with #
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  // 'forEach' does something for each link we found
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // 'preventDefault' stops the normal jump behavior
      event.preventDefault();
      
      // Get the href attribute (like "#home", "#services")
      const targetId = link.getAttribute('href');
      
      // If we found a valid ID
      if (targetId && targetId !== '#') {
        // Find the section with that ID
        const targetSection = document.querySelector(targetId);
        
        // If the section exists, scroll to it smoothly
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth', // Makes it glide instead of jump
            block: 'start'      // Scroll to the top of the section
          });
        }
      }
    });
  });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

/**
 * This handles what happens when someone submits the contact form
 * In a real website, you'd send this to a server
 * For now, we'll just show an alert message
 */
function setupContactForm(): void {
  // Find the form element
  const form = document.querySelector('form');
  
  // If the form exists
  if (form) {
    form.addEventListener('submit', (event) => {
      // Stop the form from actually submitting (which would reload the page)
      event.preventDefault();
      
      // Get all the input values from the form
      // 'as HTMLInputElement' tells TypeScript what type of element it is
      const nameInput = form.querySelector('input[placeholder="Your Name"]') as HTMLInputElement;
      const emailInput = form.querySelector('input[placeholder="Your Email"]') as HTMLInputElement;
      const subjectInput = form.querySelector('input[placeholder="Subject"]') as HTMLInputElement;
      const messageInput = form.querySelector('textarea') as HTMLTextAreaElement;
      
      // Get the actual text/values from the inputs
      const name = nameInput?.value;
      const email = emailInput?.value;
      const subject = subjectInput?.value;
      const message = messageInput?.value;
      
      // Check if all fields have something in them
      if (name && email && subject && message) {
        // Show a success message
        alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon!`);
        
        // Clear the form (reset all fields to empty)
        form.reset();
      } else {
        // If something is missing, show an error
        alert('Please fill in all fields before submitting.');
      }
    });
  }
}

// ============================================
// BUTTON CLICK HANDLERS
// ============================================

/**
 * This makes the "Get Started" and other buttons do something when clicked
 */
function setupButtons(): void {
  // Find all buttons with specific text
  const getStartedButtons = document.querySelectorAll('button');
  
  getStartedButtons.forEach((button) => {
    // Get the text inside the button
    const buttonText = button.textContent?.trim();
    
    // Only add click handler if it's one of these buttons
    if (buttonText === 'Get Started' || buttonText === 'Get a Quote') {
      button.addEventListener('click', () => {
        // Scroll to the contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else if (buttonText === 'View Work') {
      button.addEventListener('click', () => {
        // Scroll to the portfolio section
        const portfolioSection = document.querySelector('#portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================

/**
 * This is the main function that runs when the page loads
 * It calls all the setup functions we created above
 */
function init(): void {
  // Wait until the entire page is loaded
  // 'DOMContentLoaded' means all the HTML is ready
  document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Website initialized with TypeScript!');
    
    // Run all our setup functions
    setupMobileMenu();
    setupSmoothScrolling();
    setupContactForm();
    setupButtons();
    
    console.log('✅ All functionality is now active!');
  });
}

// Start everything!
init();
