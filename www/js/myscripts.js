
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