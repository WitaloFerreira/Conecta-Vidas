function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validarSenha(senha, minLength = 8) {
    return senha.length >= minLength;
}

function limparErros() {
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });
}

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    limparErros();

   
    const email = document.querySelector('#loginForm input[name="Email"]').value.trim();
    const senha = document.querySelector('#loginForm input[name="Senha"]').value.trim();

    let isValid = true;

    
    if (!validarEmail(email)) {
        document.getElementById('email-error').textContent = 'Por favor, insira um email válido.';
        isValid = false;
    }

    
    if (!validarSenha(senha)) {
        document.getElementById('senha-error').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        isValid = false;
    }

    
    if (isValid) {
        console.log("Login válido! Enviando dados...");
        this.submit(); 
    }
});


document.getElementById('cadastroForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    
    const nome = document.querySelector('#cadastroForm input[name="nome"]').value.trim();
    const email = document.querySelector('#cadastroForm input[name="email"]').value.trim();
    const senha = document.querySelector('#cadastroForm input[name="senha"]').value.trim();
    const confirmarSenha = document.querySelector('#cadastroForm input[name="confirmar-senha"]').value.trim();

    let isValid = true;

    
    if (nome === "") {
        document.getElementById('nome-error').textContent = 'Por favor, insira seu nome.';
        isValid = false;
    }

    
    if (!validarEmail(email)) {
        document.getElementById('email-error').textContent = 'Por favor, insira um email válido.';
        isValid = false;
    }

    
    if (!validarSenha(senha)) {
        document.getElementById('senha-error').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        isValid = false;
    }

    if (senha !== confirmarSenha) {
        document.getElementById('confirmar-senha-error').textContent = 'As senhas não coincidem.';
        isValid = false;
    }

    if (isValid) {
        console.log("Cadastro válido! Enviando dados...");
        this.submit(); 
    }
});