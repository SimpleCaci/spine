// Optional: Fun alert when the page loads
window.onload = () => {
    alert("Hey silly! I made this just for you ♥");
};

// Select the cursor image element
const customCursor = document.getElementById('customCursor');




// Add event listener to track mouse movement
document.addEventListener('mousemove', function(event) {
    const x = event.clientX; // Mouse X position
    const y = event.clientY + window.scrollY;

    // Update the position of the cursor image
    customCursor.style.left = x + 'px';
    customCursor.style.top = y + 'px';
});