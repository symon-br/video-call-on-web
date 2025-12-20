const cameraFeed = document.getElementById('cameraFeed');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let stream = null;

startButton.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraFeed.srcObject = stream;

        await cameraFeed.play(); //  THIS LINE FIXES IT

        startButton.disabled = true;
        stopButton.disabled = false;
    } catch (err) {
        console.error("Error accessing camera:", err);
    }
});

stopButton.addEventListener('click', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        cameraFeed.srcObject = null;
        stream = null;

        startButton.disabled = false;
        stopButton.disabled = true;
    }
});
