const seletor = document.getElementById('menu_temas');
const corpo = document.body;

seletor.addEventListener('change', (evento) =>{
    const tema_selecionado = evento.target.value;
    console.log("tema mudou: ", tema_selecionado);
    corpo.setAttribute('data_tema', tema_selecionado);
})