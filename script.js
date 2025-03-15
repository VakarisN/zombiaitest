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
        "Gerbiamas Seimo nary, Jūsų balsavimas prieš sankcijų Rusijai pratęsimą kelia didelį nerimą. Ar tikrai manote, kad toks sprendimas atitinka Jūsų priesaiką saugoti Lietuvos valstybingumą ir nepriklausomybę? Tyliai stebėti agresoriaus stiprėjimą reiškia silpninti mūsų saugumą. Tikiuosi, suvokiate, kokią žalą tai daro mūsų valstybei ir jos ateičiai.",
        "Seimo nary, Balsuodamas prieš sankcijų Rusijai pratęsimą, pasirinkote sprendimą, kuris prieštarauja Lietuvos interesams. Ar tai neprieštarauja Jūsų duotai priesaikai ginti mūsų valstybę? Tokie veiksmai tiesiogiai kenkia mūsų nacionaliniam saugumui ir stiprina agresoriaus pozicijas Europoje.",
        "Gerbiamas(-a), Jūsų sprendimas nepratęsti sankcijų Rusijai stebina ir liūdina. Ar tikrai tai suderinama su Jūsų, kaip Seimo nario, pareiga ir priesaika saugoti Lietuvos nepriklausomybę? Tokiais balsavimais siunčiama pavojinga žinutė tiek mūsų sąjungininkams, tiek priešams.",
        "Seimo nary, Kaip žmogus, kuris privalo ginti Lietuvos laisvę ir nepriklausomybę, ar tikrai manote, kad balsuodamas prieš sankcijų Rusijai pratęsimą laikėtės priesaikos? Tokie veiksmai kenkia mūsų valstybės saugumui ir kelia klausimą dėl tikrųjų vertybių, kurioms tarnaujate.",
        "Gerbiamasis, Jūsų balsavimas prieš sankcijų agresorei Rusijai pratęsimą kelia pagrįstą klausimą – ar dar jaučiatės įsipareigojęs priesaikai, kurią davėte Lietuvos žmonėms? Tokie sprendimai silpnina valstybę ir stiprina tuos, kurie siekia mūsų nepriklausomybės sunaikinimo.",
        "Seimo nary, Nusivylęs stebiu Jūsų sprendimą balsuoti prieš sankcijų Rusijai pratęsimą. Kaip toks balsavimas suderinamas su Jūsų pareiga ginti Lietuvos valstybės vientisumą ir nepriklausomybę? Tai sprendimas, kuris silpnina mūsų gynybines galias ir kelia grėsmę mūsų ateičiai.",
        "Gerbiamas(-a) Seimo nary, Kai priesaikoje įsipareigojote ginti Lietuvos valstybę, ar įsivaizdavote, kad kada nors balsuosite prieš sankcijas agresoriui, kuris kėsinasi į taiką Europoje? Jūsų sprendimas žaloja mūsų saugumą ir stiprina agresoriaus pozicijas.",
        "Seimo nary, Negaliu suprasti, kaip Jūsų sprendimas balsuoti prieš sankcijų pratęsimą Rusijai gali būti suderinamas su Jūsų priesaika ginti Lietuvos nepriklausomybę. Ar esate pasiruošęs prisiimti atsakomybę už pasekmes, kurios gali kilti dėl tokio sprendimo? Tai kelia grėsmę mūsų šalies saugumui.",
        "Gerbiamas Seimo nary, Balsuodamas prieš sankcijų Rusijai pratęsimą, nusprendėte žengti žingsnį, kuris prieštarauja mūsų nacionalinio saugumo interesams. Ar nemanote, kad tai gali būti laikoma Jūsų priesaikos sulaužymu? Tikiuosi, suvokiate atsakomybę, kurią prisiimate tokiais sprendimais.",
        "Seimo nary, Jūsų balsavimas prieš sankcijų agresoriaus Rusijos režimui pratęsimą smarkiai kenkia Lietuvos ir Europos saugumui. Ar šis sprendimas dera su priesaika, kuria įsipareigojote ginti mūsų valstybės nepriklausomybę ir žmonių gerovę? Tokiais veiksmais silpninate mūsų valstybę kritiniu laikotarpiu."
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
