function main() {
    var pions = document.querySelectorAll("#Jeu button");
    var joueurs = ["X", "O"];
    var tour = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage(
      "Le jeu peut commencer ! <br /> Joueur " +
        joueurs[tour] +
        " c'est votre tour."
    );
    for (var i = 0, len = pions.length; i < len; i++) {
      pions[i].addEventListener("click", function() {
        if (jeuEstFini) return;
  
        if (!estValide(this)) {
          tour++;
          tour = tour % 2;
          afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
        }
      });
    }
  }
  
  main();
  