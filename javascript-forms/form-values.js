var $contactForm = document.querySelector('#contact-form');
function contactForm(event) {
  event.preventDefault();
  var nameValue = $contactForm.elements.name.value;
  var emailValue = $contactForm.elements.email.value;
  var messageValue = $contactForm.elements.message.value;
  var messageData = {
    name: nameValue,
    email: emailValue,
    message: messageValue
  };

  console.log('messageData:', messageData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', contactForm);
