// Navegação entre telas
function showScreen(screenId) {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar a tela selecionada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Função para voltar (histórico simples)
let screenHistory = [];

function goBack() {
    if (screenHistory.length > 0) {
        const previousScreen = screenHistory.pop();
        showScreen(previousScreen);
    } else {
        showScreen('login-screen');
    }
}

// Salvar histórico ao navegar
function navigateTo(screenId) {
    const currentScreen = document.querySelector('.screen.active');
    if (currentScreen) {
        screenHistory.push(currentScreen.id);
    }
    showScreen(screenId);
}

// Login
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailPhoneElement = document.getElementById('email-phone');
    const passwordElement = document.getElementById('password');
    
    // Acessar valor do componente customizado
    const emailPhone = emailPhoneElement?.value || '';
    const password = passwordElement?.value || '';
    
    if (emailPhone && password) {
        // Simular verificação e mostrar tela OTP
        navigateTo('otp-screen');
        startOTPTimer();
    }
});

// Login Social
function loginWithGoogle() {
    console.log('Login com Google');
    // Aqui você implementaria a integração com Google OAuth
    navigateTo('otp-screen');
    startOTPTimer();
}

function loginWithApple() {
    console.log('Login com Apple');
    // Aqui você implementaria a integração com Apple Sign In
    navigateTo('otp-screen');
    startOTPTimer();
}

// Esqueci minha senha
function showForgotPassword() {
    const email = prompt('Digite seu e-mail para recuperação de senha:');
    if (email) {
        alert('Instruções de recuperação foram enviadas para ' + email);
    }
}

// OTP Timer
let otpTimerInterval;
let otpTimeLeft = 300; // 5 minutos em segundos

function startOTPTimer() {
    otpTimeLeft = 300;
    const timerElement = document.getElementById('timer');
    const resendBtn = document.getElementById('resend-btn');
    
    if (otpTimerInterval) {
        clearInterval(otpTimerInterval);
    }
    
    resendBtn.disabled = true;
    
    otpTimerInterval = setInterval(() => {
        const minutes = Math.floor(otpTimeLeft / 60);
        const seconds = otpTimeLeft % 60;
        
        if (timerElement) {
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        
        if (otpTimeLeft <= 0) {
            clearInterval(otpTimerInterval);
            if (resendBtn) {
                resendBtn.disabled = false;
            }
        } else {
            otpTimeLeft--;
        }
    }, 1000);
    
    // Auto-focus no primeiro input OTP
    setTimeout(() => {
        const firstInput = document.querySelector('.otp-input');
        if (firstInput) firstInput.focus();
    }, 100);
}

// OTP Input Navigation
document.addEventListener('DOMContentLoaded', function() {
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
        
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text').slice(0, 6);
            pastedData.split('').forEach((char, i) => {
                if (otpInputs[index + i] && /[0-9]/.test(char)) {
                    otpInputs[index + i].value = char;
                }
            });
            if (pastedData.length === 6) {
                otpInputs[5].focus();
            }
        });
    });
});

// Verificar OTP
function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otpCode = Array.from(otpInputs).map(input => input.value).join('');
    
    if (otpCode.length === 6) {
        // Simular verificação
        console.log('Código OTP:', otpCode);
        navigateTo('profile-screen');
    } else {
        alert('Por favor, digite o código completo de 6 dígitos');
    }
}

// Reenviar código OTP
function resendCode() {
    alert('Código reenviado! Verifique seu e-mail.');
    startOTPTimer();
}

// Revogar consentimento
function revokeConsent() {
    if (confirm('Tem certeza que deseja revogar seu consentimento? Isso pode afetar o acesso a alguns serviços.')) {
        alert('Consentimento revogado. Você será redirecionado para atualizar suas preferências.');
        // Aqui você implementaria a lógica de revogação
    }
}

// Editar perfil
function editProfile() {
    const name = prompt('Nome completo:', 'João Silva');
    const email = prompt('E-mail:', 'joao.silva@email.com');
    const phone = prompt('Telefone:', '(11) 99999-9999');
    
    if (name && email && phone) {
        // Atualizar informações na tela
        const profileScreen = document.getElementById('profile-screen');
        const nameElement = profileScreen.querySelector('.info-value');
        if (nameElement) {
            nameElement.textContent = name;
        }
        alert('Perfil atualizado com sucesso!');
    }
}

// Editar avatar
function editAvatar() {
    alert('Funcionalidade de edição de avatar será implementada em breve.');
    // Aqui você implementaria o upload de imagem
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que a tela de login seja a primeira
    showScreen('login-screen');
    
    // Adicionar listeners para navegação do menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const screenId = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (screenId) {
                navigateTo(screenId);
            }
        });
    });
});

