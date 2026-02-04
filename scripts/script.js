const inputSenha = document.getElementById('senha');
const btnToggle = document.getElementById('btn-toggle');
const eyeOpen = document.getElementById('eye-open');
const eyeClosed = document.getElementById('eye-closed');

btnToggle.addEventListener('click', () => {
    if (inputSenha.type === 'password') {
        inputSenha.setAttribute('type', 'text');

        eyeOpen.classList.add('hide');
        eyeClosed.classList.remove('hide');
    } else {
        inputSenha.setAttribute('type', 'password');

        eyeOpen.classList.remove('hide');
        eyeClosed.classList.add('hide');
    }
});