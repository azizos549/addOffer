// Partie 1: Validation using onClick
function validerFormulaire(event) {
    event.preventDefault();
    var titre = document.getElementById('titre').value;
    var dest = document.getElementById('dest').value;
    var dd = document.getElementById('dd').value;
    const dd1 = new Date(dd);
    var dr = document.getElementById('dr').value;
    const dr1 = new Date(dr);
    var prix = document.getElementById('prix').value;
    const x = /^[A-Za-z\s]{3,}$/;

    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères");
        return false;
    } else if (!x.test(dest)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
        return false;
    } else if (dd1 > dr1) {
        alert("La date de retour doit être ultérieure à la date de départ");
        return false;
    } else if (prix < 0) {
        alert("Le prix doit être un nombre positif");
        return false;
    }

    document.getElementById('travelForm').submit();
}

// Partie 2: Validation using submit EventListener
document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('successMessage').textContent = '';

    let isValid = true;

    const titre = document.getElementById('titre').value;
    if (titre.length < 3) {
        document.getElementById('titleError').textContent = "Le titre doit contenir au moins 3 caractères.";
        isValid = false;
    }

    const dest = document.getElementById('dest').value;
    const destRegex = /^[A-Za-z\s]{3,}$/;
    if (!destRegex.test(dest)) {
        document.getElementById('destError').textContent = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
        isValid = false;
    }

    const dd = new Date(document.getElementById('dd').value);
    if (isNaN(dd.getTime())) {
        document.getElementById('ddError').textContent = "Veuillez entrer une date valide.";
        isValid = false;
    }

    const dr = new Date(document.getElementById('dr').value);
    if (isNaN(dr.getTime()) || dr <= dd) {
        document.getElementById('drError').textContent = "La date de retour doit être ultérieure à la date de départ.";
        isValid = false;
    }

    const prix = parseFloat(document.getElementById('prix').value);
    if (isNaN(prix) || prix <= 0) {
        document.getElementById('prixError').textContent = "Le prix doit être un nombre positif.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = "Formulaire soumis avec succès!";
        document.getElementById('travelForm').submit();
    }
});

// Partie 3: Validation using keyup EventListener
const titleField = document.getElementById('titre');
const destField = document.getElementById('dest');
const priceField = document.getElementById('prix');

// Validation du champ Titre
titleField.addEventListener('keyup', function() {
    if (titleField.value.length < 3) {
        document.getElementById('titleError').textContent = "Le titre doit contenir au moins 3 caractères.";
        document.getElementById('titleError').style.color = "red";
    } else {
        document.getElementById('titleError').textContent = "Correct";
        document.getElementById('titleError').style.color = "green";
    }
});

// Validation du champ Destination
destField.addEventListener('keyup', function() {
    const destRegex = /^[A-Za-z\s]{3,}$/;
    if (!destRegex.test(destField.value)) {
        document.getElementById('destError').textContent = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
        document.getElementById('destError').style.color = "red";  
    } else {
        document.getElementById('destError').textContent = "Correct";
        document.getElementById('destError').style.color = "green";
    }
});

// Validation du champ Prix
priceField.addEventListener('keyup', function() {
    const prix = parseFloat(priceField.value);
    if (isNaN(prix) || prix <= 0) {
        document.getElementById('prixError').textContent = "Le prix doit être un nombre positif.";
        document.getElementById('prixError').style.color = "red";  
    } else {
        document.getElementById('prixError').textContent = "Correct";
        document.getElementById('prixError').style.color = "green";  
    }
});
