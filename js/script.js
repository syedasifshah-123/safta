// for menu

const menu = document.querySelector("[data-menu]");
const menuBtn = document.querySelector("[data-menu-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

menuBtn.addEventListener("click", function () { 
    menu.classList.toggle("active");
});

navLinks.forEach((nav) => { 
    nav.addEventListener("click", function () { 
        menu.classList.remove("active");
    });
});


// for mouse effector

const imagesSection = document.querySelector('.hero-section');

// Add mousemove event listener
imagesSection.addEventListener('mousemove', (event) => {
    const rect = imagesSection.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Mouse X relative to the section
    const mouseY = event.clientY - rect.top;  // Mouse Y relative to the section
    const moveAmount = 50; // Adjust intensity of movement

    // Calculate offsets for images based on mouse position
    const offsetX = ((mouseX / rect.width) - 0.5) * moveAmount;
    const offsetY = ((mouseY / rect.height) - 0.5) * moveAmount;

    // Select images
    const leftImage = document.querySelector('.image-left');
    const rightImage = document.querySelector('.image-right');

    // Ensure the images don't move outside the section
    if (leftImage) {
        leftImage.style.transform = `translate(${Math.min(Math.max(offsetX, -moveAmount), moveAmount)}px, ${Math.min(Math.max(offsetY, -moveAmount), moveAmount)}px)`;
    }
    if (rightImage) {
        rightImage.style.transform = `translate(${Math.min(Math.max(offsetX, -moveAmount), moveAmount)}px, ${Math.min(Math.max(offsetY, -moveAmount), moveAmount)}px)`;
    }
});

// Reset images on mouse leave
imagesSection.addEventListener('mouseleave', () => {
    const leftImage = document.querySelector('.image-left');
    const rightImage = document.querySelector('.image-right');
    if (leftImage) {
        leftImage.style.transform = 'translate(0, 0)';
        // leftImage.style.transition = ".2s";
        leftImage.classList.add("return");
    }
    if (rightImage) {
        rightImage.style.transform = 'translate(0, 0)';
        // rightImage.style.transition = ".2s";
        rightImage.classList.add("return");
    }
});
