<script>
  document.addEventListener('DOMContentLoaded', () => {
    const audioFiles = [
      document.getElementById('audio1'),
      document.getElementById('audio2'),
      document.getElementById('audio3')
    ];
    
    let currentIndex = 0;

    function playNext() {
      // Hentikan audio sebelumnya
      if (audioFiles[currentIndex]) {
        audioFiles[currentIndex].pause();
        audioFiles[currentIndex].currentTime = 0;
      }

      // Pindah ke audio berikutnya
      currentIndex = (currentIndex + 1) % audioFiles.length;

      // Putar audio berikutnya
      audioFiles[currentIndex].play();
    }

    // Event Listener: Mainkan lagu berikutnya saat lagu selesai
    audioFiles.forEach(audio => {
      audio.addEventListener('ended', playNext);
    });

    // Mulai memutar musik pertama
    audioFiles[currentIndex].play();
  });
</script>