function toast({
    title='', 
    message='', 
    type='info', 
    duration=3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        
        // Auto remove toast
        const autoRemovedId = setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemovedId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            warning: 'fas fa-exclamation',
            error: 'fas fa-exclamation-circle'
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .4s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML= `
            <div class="toast__icon">
                <i class="${icon}" aria-hidden="true"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        `;
        main.appendChild(toast);

    }
}

const success_toast = document.getElementsByClassName("btn--success")[0];
const warning_toast = document.getElementsByClassName("btn--warning")[0];
const error_toast = document.getElementsByClassName("btn--error")[0];

success_toast.onclick = function showSuccessToast() {
    toast({
        title: 'SUCCESS',
        message: 'Chuc mung ban da thanh cong ^^',
        type: 'success',
        duration: 2000
    });
}
warning_toast.onclick = function showWarningToast() {
    toast({
        title: 'WARNING',
        message: 'Canh bao! Co the xay ra loi',
        type: 'warning',
        duration: 2000
    });
}
error_toast.onclick = function showErrorToast() {
    toast({
        title: 'ERROR',
        message: 'That bai! Vui long thu lai',
        type: 'error',
        duration: 2000
    });
}