let IsModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_aahskhi',
            'template_1ipwhzs',
            event.target,
            'Icp1xk9l7iS3qDKbA'
        ).then(() => {
        loading.classList.remove('modal__overlay--visible')
    success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavaliable. Please contact me directly on davidsaleh03@gmail.com"
            );
        }
    )
}

function toggleModal() {
    if (IsModalOpen) {
        IsModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    IsModalOpen = true;
    document.body.classList += " modal__open"
}