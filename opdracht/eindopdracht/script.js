let bezoeker = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    email: prompt("wat is je email?"),
    woonplaats: prompt("waar woon jij?")
};
if (bezoeker.leeftijd ==16) {
    document.body.style.backgroundColor = 'orange';
}
if (bezoeker.leeftijd ==17) {
    document.body.style.backgroundColor = 'blue';
}
if (bezoeker.leeftijd ==18) {
    document.body.style.backgroundColor = 'gold';
}
if (bezoeker.leeftijd ==19) {
    document.body.style.backgroundColor = 'green';
}
if (bezoeker.leeftijd ==0) {
    document.body.style.backgroundColor = 'lightblue';
}