// template_1ipwhzs
// service_aahskhi
// Icp1xk9l7iS3qDKbA

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