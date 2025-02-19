let abrirmodal = document.getElementById('check');
const modal = document.querySelector('dialog');

let fecharmodal = document.getElementById('close-modal');

abrirmodal.onclick = function (){
    modal.showModal();
}

fecharmodal.onclick = function (){
    modal.close();
}


