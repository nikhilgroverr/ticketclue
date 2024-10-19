
// Left Side and Right Side Image Will Come from their Sides (Travel Inspiration & Tips)
const travelInspirationSection = document.querySelector('.travel-inspiration');
const travelImages = document.querySelectorAll('.inspiration-image');

const checkTravelInspirationScroll = () => {
    const sectionRect = travelInspirationSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the section is in view
    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        // Set container opacity to 1 to fade in
        const container = travelInspirationSection.querySelector('.inspiration-container');
        container.style.opacity = '1'; // Ensure container is visible

        travelImages.forEach((image) => {
            if (image.classList.contains('left-image')) {
                image.classList.add('show'); // Slide in from left
            } else if (image.classList.contains('right-image')) {
                setTimeout(() => {
                    image.classList.add('show'); // Slide in from right
                }, 200); // Optional: Add stagger for the right image
            }
        });
    } else {
        // Optionally remove the 'show' class when the section is out of view
        travelImages.forEach((image) => {
            image.classList.remove('show'); // Reset the animation
        });
    }
};

// Attach scroll event listener for travel inspiration
window.addEventListener('scroll', checkTravelInspirationScroll);
checkTravelInspirationScroll(); // Initial check on page load



// Web Check-in Cards

    // JavaScript for Airline Web Check-in functionality
    document.addEventListener("DOMContentLoaded", function() {
        const internationalButton = document.querySelector("button.bg-blue-500");
        const domesticButton = document.querySelector("button.bg-green-500");
        const airlineCards = document.querySelectorAll(".grid > div"); // Select all airline cards

        // Function to show only international airline cards
        function showInternational() {
            airlineCards.forEach(card => {
                // You can add a specific class for international cards if needed
                if (card.classList.contains("international")) {
                    card.style.display = "flex"; // Show card
                } else {
                    card.style.display = "none"; // Hide card
                }
            });
        }

        // Function to show only domestic airline cards
        function showDomestic() {
            airlineCards.forEach(card => {
                // You can add a specific class for domestic cards if needed
                if (card.classList.contains("domestic")) {
                    card.style.display = "flex"; // Show card
                } else {
                    card.style.display = "none"; // Hide card
                }
            });
        }

        // Event listeners for the buttons
        internationalButton.addEventListener("click", () => {
            showInternational();
        });

        domesticButton.addEventListener("click", () => {
            showDomestic();
        });

        // Initial state (Show international by default)
        showInternational();
    });

