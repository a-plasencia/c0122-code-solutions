var $contactForm = document.querySelector('#contact-form');

function contactForm(event) {
  event.preventDefault();
  var nameValue = $contactForm.element.name.value;
  var emailValue = $contactForm.element.email.value;
  var messageValue = $contactForm.element.message.value;
  var messageData = {
    name: nameValue,
    email: emailValue,
    message: messageValue
  };

  console.log('messageData:', messageData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', contactForm);
