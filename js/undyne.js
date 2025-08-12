// Array of audio file paths
const audioFiles = [
	'audio/sfx/index2.mp3',
	'audio/sfx/index2.mp3',
	'audio/sfx/index2.mp3',
	'audio/sfx/index2.mp3',
	'audio/sfx/index2.mp3',
	'audio/sfx/index2.mp3'
];

// Reference to the <audio> element using its ID
const audioPlayer = document.getElementById('myAudio');

// Random index within the range of the audioFiles array's length
function playRandomAudio() {
	const randomIndex = Math.floor(Math.random() * audioFiles.length);
	audioPlayer.src = audioFiles[randomIndex];
	audioPlayer.play();
}

// Random sound every 2 seconds
setInterval(playRandomAudio, 2000);