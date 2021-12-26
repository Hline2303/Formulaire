console.log("connecté !");

// Sélection et stockage
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const msgError = document.querySelectorAll(".error");
// console.log(msgError);
const titre = document.getElementById("titre");
// console.log(titre);

// Détecter validation du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log('formulaire envoyé !');
  // Récupération des valeurs des input
  const prenomValue = prenom.value.trim();
  // console.log(prenomValue, "prenom");
  const nomValue = nom.value.trim();
  // console.log(nomValue, "nom");
  const emailValue = email.value.trim();
  // console.log(emailValue, "eamil");
  const messageValue = message.value.trim();
  // console.log(messageValue, "message");

  // Tous les messages d'erreur sont invisibles
  msgError.forEach((error) => {
    error.classList.add("invisible");
  });

  // Vérification des informations entrées
  if (prenomValue.length < 2 || prenomValue.length > 15) {
    console.log("erreur prenom");
    prenom.nextElementSibling.classList.remove("invisible");
  } else if (nomValue.length < 3 || nomValue.length > 15) {
    console.log("erreur nom");
    nom.nextElementSibling.classList.remove("invisible");
  } else if (messageValue.length < 10 || messageValue > 100) {
    console.log("erreur message");
    message.nextElementSibling.classList.remove("invisible");
  } else {
    console.log("succès");
    titre.innerText = "Votre message a bien été envoyé !";
    form.remove();
  }
});
