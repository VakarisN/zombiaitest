function copyEmails() {
    const emails = document.getElementById("emailList").innerText;
    navigator.clipboard.writeText(emails);
    alert("Emailai nukopijuoti!");
}

function sendEmail() {
    const emails = document.getElementById("emailList").innerText.split(', ');
    const firstEmail = emails[0];
    const bccEmails = emails.slice(1).join(',');
    const message = document.getElementById("emailText").value;
    window.location.href = `mailto:${firstEmail}?bcc=${bccEmails}&subject=Politiniai%20Lavonai&body=${encodeURIComponent(message)}`;
}

function randomMessage() {
    const messages = [
        "Zombiai valdo Seimą!",
        "Ar Seimo nariai jau pavirto lavonais?",
        "Seimo zombiai grįžo į gyvenimą!",
        "Kas nužudė demokratiją?",
        "Ar tikrai mes esame saugūs?",
        "Seime kvepia formaldehidu...",
        "Prašome nekandžioti rinkėjų!",
        "Pabuskite iš politinės komos!",
        "Seimas ar siaubo namai?",
        "Kodėl politiniai lavonai dar balsuoja?"
    ];
    document.getElementById("emailText").value = messages[Math.floor(Math.random() * messages.length)];
}

// DVD Logo Bouncing Effect
let zombie = document.getElementById("zombie");
let xSpeed = 2;
let ySpeed = 2;
let xPos = Math.random() * (window.innerWidth - zombie.offsetWidth);
let yPos = Math.random() * (window.innerHeight - zombie.offsetHeight);

function moveZombie() {
    let zombieWidth = zombie.offsetWidth;
    let zombieHeight = zombie.offsetHeight;

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos + zombieWidth > window.innerWidth || xPos < 0) {
        xSpeed *= -1;
    }
    if (yPos + zombieHeight > window.innerHeight || yPos < 0) {
        ySpeed *= -1;
    }

    zombie.style.left = `${xPos}px`;
    zombie.style.top = `${yPos}px`;

    requestAnimationFrame(moveZombie);
}

moveZombie();

// Adjust window resize
window.addEventListener('resize', function() {
    xPos = Math.random() * (window.innerWidth - zombie.offsetWidth);
    yPos = Math.random() * (window.innerHeight - zombie.offsetHeight);
});
