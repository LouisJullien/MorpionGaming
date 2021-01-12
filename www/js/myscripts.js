
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//taille Canvas
var largeur = c.width;
var hauteur = c.height;

//taille grille
var nbColonnes = 3 ;
var nbLignes = 3 ;

//taille cases
var hauteurLigne = hauteur/nbLignes ;
var largeurColonne = largeur/nbColonnes ;

//croix
var ratioCroix = 0.7 ;
var epaisseurCroix = 1 ;
var couleurCroix = "blue";

//rond
var ratioRond = 0.7 ;
var epaisseurRond = 1 ;
var couleurRond = "red";
var rayonRond = largeurColonne ; 
if(largeurColonne > hauteurLigne) 
	rayonRond = hauteurLigne ; 
rayonRond /= 2;
rayonRond *= ratioRond ;

// victoire
var nbCoupsVictoire = 3 ;

// Deroulement du jeu
var jeu = true ;
var joueurActuel = true;
var coups = [];

// Remplissage pour la grille
for(var i = 0 ; i < nbLignes ; i++)
{
	for(var j = 0 ; j < nbColonnes ; j++) 
	{		
		coups.push([]);	
		coups[i].push(false);
	}
}

// Couleur de fond du canvas + contour
ctx.fillStyle = "white" ;
ctx.strokeStyle = "black";
ctx.fillRect(0,0,largeur,hauteur);
ctx.strokeRect(0,0,largeur,hauteur);

ctx.beginPath()
ctx.lineWidth = 1;
ctx.strokeStyle = "black";

// Creation de la grille
for(var i = 0 ; i < nbLignes-1 ; i++) 
{
	// Creation ligne
	ctx.moveTo(0,(i+1)*(hauteurLigne));
	ctx.lineTo(largeur,(i+1)*(hauteurLigne));
	ctx.stroke();
}

for(var j = 0 ; j < nbColonnes-1 ; j++)
{
	// Creation case (colonne)
	ctx.moveTo((j+1)*(largeurColonne),0);
	ctx.lineTo((j+1)*(largeurColonne),hauteur);
	ctx.stroke();
}

ctx.closePath();



