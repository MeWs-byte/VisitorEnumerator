document.addEventListener('DOMContentLoaded', () => {
    // Track key presses
    document.addEventListener('keydown', (event) => {
        logUserAction('Key Pressed', event.key);
    });

    // Track button clicks
    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            logUserAction('Button Clicked', event.target.id);
        }
    });

    // Track mouse movements (can be adjusted for frequency)
    document.addEventListener('mousemove', (event) => {
        // Uncomment below line to log mouse moves, note this will generate a lot of data
        // logUserAction('Mouse Moved', 'X: ' + event.clientX + ', Y: ' + event.clientY);
    });

    // Track double clicks
    document.addEventListener('dblclick', (event) => {
        logUserAction('Double Clicked', 'X: ' + event.clientX + ', Y: ' + event.clientY);
    });

    // Track right clicks (context menu)
    document.addEventListener('contextmenu', (event) => {
        logUserAction('Right Click', 'X: ' + event.clientX + ', Y: ' + event.clientY);
        event.preventDefault(); // Optional: Prevent the context menu from opening
    });

    // Track mouse wheel scroll
    document.addEventListener('wheel', (event) => {
        logUserAction('Mouse Wheel Scroll', 'Delta: ' + event.deltaY);
    });

    // Track window resize
    window.addEventListener('resize', () => {
        logUserAction('Window Resized', 'Width: ' + window.innerWidth + ', Height: ' + window.innerHeight);
    });

    // Track focus and blur on all input fields
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', () => {
            logUserAction('Input Focus', input.id || 'Unnamed Input');
        });
        input.addEventListener('blur', () => {
            logUserAction('Input Blur', input.id || 'Unnamed Input');
        });
    });

    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (event) => {
            logUserAction('Form Submitted', form.id || 'Unnamed Form');
            event.preventDefault(); // Optional: Prevent the form from submitting
        });
    });

    // Track touch events (for touch-enabled devices)
    document.addEventListener('touchstart', (event) => {
        logUserAction('Touch Start', 'Touches: ' + event.touches.length);
    });
    document.addEventListener('touchmove', (event) => {
        logUserAction('Touch Move', 'Touches: ' + event.touches.length);
    });
    document.addEventListener('touchend', (event) => {
        logUserAction('Touch End', 'Touches: ' + event.touches.length);
    });
});

function logUserAction(action, detail) {
    const secondInfoBox = document.getElementById('secondInfoBox');
    const newContent = '<p>' + action + ': ' + detail + '</p>';
    secondInfoBox.innerHTML = newContent + secondInfoBox.innerHTML;
}

