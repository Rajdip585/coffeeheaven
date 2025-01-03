let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  var webhookUrl = "https://api.bots.business/v1/bots/1147792/new-webhook?&command=OnRequest&public_user_token=516c8e8dfa01ac1c8e9e02179c5f915c&user_id=20228307"; // Replace with your webhook URL
//webhook
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;

  let requestData = {
    "name": name, "number": number, "msg": message
  };
 
  // Disable the submit button to prevent multiple submissions
  document.getElementById("SubmitBtn").disabled = true;
  // Show the loader
  document.querySelector('.loader').style.display = 'inline-block';

  $.ajax({
    type: "POST",
    url: webhookUrl,
    data: JSON.stringify(requestData),
    success: function() {
      alert("Message sent successfully");
      location.reload(); // Reload the page after successful webhook request
    },
    error: function(xhr, status, error) {
      location.reload();
      console.log(error);
      // Display error message to the user
    },
    dataType: "json"
  });
});
