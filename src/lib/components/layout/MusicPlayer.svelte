<script lang="ts">
	let audio: HTMLAudioElement;

	function toggleAudio() {
		if (!audio) {
			audio = new Audio('https://audio.jukehost.co.uk/B3sNbFf7TYhNhZnivtXwh1Yf4fWALrHu');
			audio.volume = 0.5;
		}
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		}
	}
</script>

<button onclick={toggleAudio}>
	<img src="layout/musicplayer.png" alt="Music Player" class="music-player" /></button
>
