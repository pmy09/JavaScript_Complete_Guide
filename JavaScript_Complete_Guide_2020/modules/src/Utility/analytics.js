const timerTime = 2000;

const intervalId = setInterval(() => {
    console.log('Sending analytics data ...')
}, timerTime);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(intervalId);
    // location.href = 'https://academind.com'; // transports you to the new page.
});