export const pageTitle = document.querySelector('title');

// Loading/Error Message
const overlay = document.getElementById('overlay');
const openCloseOverlay = () => {
    overlay.classList.add('active');
    document.querySelector('.overlay-close-btn').addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}
export const showLoading = () => {
    openCloseOverlay();
    overlay.querySelector('p').textContent = 'Loading...';
};
export const hideLoading = () => {
    overlay.classList.remove('active');
};
export const showMessage = (message) => {
    openCloseOverlay();
    overlay.querySelector('p').textContent = `${message}`;
};