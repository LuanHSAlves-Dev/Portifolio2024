
function abrirmodal(id) {
    const modal = document.getElementById('janela');
    const body = document.body;
    const modalContent = modal.querySelector('.modal');


    fetch('skills.json')
        .then(response => response.json())
        .then(data => {
            const texto = data[id];


            const testeFormatado = texto.itens.replace(/\n/g, '<br>');


            modalContent.querySelector('h1').textContent = texto.titulo;
            modalContent.querySelector('h2').textContent = texto.subt;
            modalContent.querySelector('p').innerHTML = testeFormatado; 
            modalContent.querySelector('h3').textContent = texto.subt2;
            modalContent.querySelector('h4').textContent = texto.descricao;
        })
        .catch(error => console.error('Erro ao carregar dados:', error));


    modal.classList.add('abrir');
    body.classList.add('modal-aberto');

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'fechar' || e.target.id === 'janela') {
            modal.classList.remove('abrir');
            body.classList.remove('modal-aberto');
        }
    });
}


function abrirmodal2(id) {
    const modal = document.getElementById('janela2');
    const body = document.body;
    const modal2 = document.getElementById('janela2');
    const modalContent = modal2.querySelector('.modal2');

    fetch('descricao.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const text = data[id];

            const imagemEspecifica1 = document.getElementById('gif1');
            imagemEspecifica1.src = text.caminho_imagem1; 
            const imagemEspecifica2 = document.getElementById('gif2');
            imagemEspecifica2.src = text.caminho_imagem2; 
            const imagemEspecifica3 = document.getElementById('gif3');
            imagemEspecifica3.src = text.caminho_imagem3; 
            const imagemEspecifica4 = document.getElementById('gif4');
            imagemEspecifica4.src = text.caminho_imagem4; 
        
            const p1 = document.getElementById('p1');
            p1.querySelector('h2').textContent = text.p1;
            p1.querySelector('p').innerHTML = text.desc1.replace(/\n/g, '<br>');
            const linkEspecifico1 = document.getElementById('btn1');
            linkEspecifico1.href = text.link1; 
            const linkEspecifico2 = document.getElementById('btn2');
            linkEspecifico2.href = text.link2; 

            const p2 = document.getElementById('p2');
            p2.querySelector('h2').textContent = text.p2;
            p2.querySelector('p').innerHTML = text.desc2.replace(/\n/g, '<br>');
            const linkEspecifico3 = document.getElementById('btn3');
            linkEspecifico3.href = text.link3; 
            const linkEspecifico4 = document.getElementById('btn4');
            linkEspecifico4.href = text.link4;

            const p3 = document.getElementById('p3');
            p3.querySelector('h2').textContent = text.p3;
            p3.querySelector('p').innerHTML = text.desc3.replace(/\n/g, '<br>');
            const linkEspecifico5 = document.getElementById('btn5');
            linkEspecifico5.href = text.link5; 
            const linkEspecifico6 = document.getElementById('btn6');
            linkEspecifico6.href = text.link6;

            const p4 = document.getElementById('p4');
            p4.querySelector('h2').textContent = text.p4;
            p4.querySelector('p').innerHTML = text.desc4.replace(/\n/g, '<br>');
            const linkEspecifico7 = document.getElementById('btn7');
            linkEspecifico7.href = text.link7; 
            const linkEspecifico8 = document.getElementById('btn8');
            linkEspecifico8.href = text.link8;

        })
        .catch(error => console.error('Erro ao carregar dados:', error));

    modal.classList.add('abrir2');
    body.classList.add('modal-aberto');

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'fechar2' || e.target.id === 'janela2') {
            modal.classList.remove('abrir2');
            body.classList.remove('modal-aberto');
        }
    });
}


function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var items = document.querySelectorAll('ul#time-line li');
    items.forEach(function(item) {
        if (isInViewport(item)) {
            item.classList.add('visibility');
        } else {
            item.classList.remove('visibility');
        }
    });
}

// Initial check on page load
handleScroll();

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);
