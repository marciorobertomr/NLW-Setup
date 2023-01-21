const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form); //Cria um novo objeto NLWSetup
const button = document.querySelector('header button');

button.addEventListener('click', add); //Observa todos os eventos e tem ação ao ocorrer o selecionado. No comando, ele irá executar a função add()
form.addEventListener('change', save);

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);
    
    if(dayExists) {
        alert('Dia já incluso. ❌')
        return; //Toda função ao encontrar o comando return, para a execução da função naquele ponto.
    }
    
    alert('Dia adicionado com sucesso ✅')
    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}; 
//Caso não exista nada atribuído ao LocalStorage, irá aplicar um objeto vazio com a utilização do OU à variável data
nlwSetup.setData(data);
nlwSetup.load();