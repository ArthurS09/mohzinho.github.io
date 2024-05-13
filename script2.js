// Função para abrir o lightbox com a imagem
function openLightbox(image) {
  document.getElementById('lightbox-img').src = image;
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-video').style.display = 'none'; // Garante que o vídeo não seja exibido
}

// Função para abrir o lightbox com o vídeo
function openVideo(video) {
  var videoElement = document.getElementById("lightbox-video");
  videoElement.src = video;
  videoElement.style.display = "block";
  videoElement.play(); // Inicia a reprodução do vídeo
  document.getElementById('lightbox-img').style.display = 'none'; // Garante que a imagem não seja exibida
  document.getElementById("lightbox").style.display = "block";
}

// Função para fechar o lightbox
function closeLightbox() {
  var videoElement = document.getElementById("lightbox-video");
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxVideo = document.getElementById('lightbox-video');

  document.getElementById('lightbox').style.display = 'none';
  lightboxImg.style.display = 'block'; // Garante que a imagem seja exibida
  lightboxVideo.style.display = 'none'; // Garante que o vídeo não seja exibido

  if (!videoElement.paused) {
    videoElement.pause(); // Pausa a reprodução do vídeo, se estiver reproduzindo
    videoElement.currentTime = 0; // Reinicia o vídeo para o início
  }
}
