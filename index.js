// template_ae51puj
// service_aahskhi
// Icp1xk9l7iS3qDKbA

function contact(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_aahskhi',
        'template_ae51puj',
        event.target,
        'Icp1xk9l7iS3qDKbA'
      ).then(() => {
        console.log('this worked')
      })
}