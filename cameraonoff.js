const videoElement = document.getElementById('cameraFeed');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
let mediaStream = null; // Variable to store the stream

startButton.addEventListener('click', startCamera);

async function startCamera() {
    try {
        // Request access to video (camera)
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        // Attach the stream to the video element
        videoElement.srcObject = mediaStream;
        // Update button states
        startButton.disabled = true;
        stopButton.disabled = false;
    } catch (err) {
        console.error('Error accessing camera:', err);
        alert('Could not access the camera. Please check permissions.');
    }
}

stopButton.addEventListener('click', stopCamera);

function stopCamera() {
    if (mediaStream) {
        // Get all tracks (video and audio, though we only have video here)
        const tracks = mediaStream.getTracks();

        // Stop each track
        tracks.forEach(track => {
            track.stop();
        });

        // Detach the stream from the video element
        videoElement.srcObject = null;
        mediaStream = null; // Clear the stream variable

        // Update button states
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}


