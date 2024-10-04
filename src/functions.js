// Pega o modal
var modal = document.getElementById("myModal");

// Pega o botão que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Pega os elementos de título e descrição do modal
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var imageContainer = document.getElementById("imageContainer");

// Pega os botões que criam imagens
var createImageBtn1 = document.getElementById("createImageBtn1");
var createImageBtn2 = document.getElementById("createImageBtn2");

// Função para abrir o modal com informações dinâmicas
function openModal(title, description, imageUrl) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Limpa o conteúdo anterior da imagem e adiciona a nova
    imageContainer.innerHTML = '';
    var img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = '100%';
    imageContainer.appendChild(img);
    
    modal.style.display = "block";
}

// Função para criar imagem 1 e abrir o modal
createImageBtn1.onclick = function() {
    openModal(
        'Imagem 1 Criada!',
        'Esta é a descrição da imagem 1.',
        'https://via.placeholder.com/400x300?text=Imagem+1'
    );
}

// Função para criar imagem 2 e abrir o modal
createImageBtn2.onclick = function() {
    openModal(
        'Imagem 2 Criada!',
        'Esta é a descrição da imagem 2.',
        'https://via.placeholder.com/400x300?text=Imagem+2'
    );
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, também fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
