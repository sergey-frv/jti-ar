document.querySelectorAll('.preview').forEach(preview => {
    preview.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video');
        const video = document.getElementById(videoId);
        document.querySelectorAll('.video-container').forEach(v => {
            v.style.display = 'none';
        });
        // Добавляем задержку для показа анимации кнопки
        setTimeout(() => {
            video.parentElement.style.display = 'block';
            document.getElementById("menu").style.display = 'none';
            video.play();
        }, 700); // Задержка в 700 миллисекунд
    });
});