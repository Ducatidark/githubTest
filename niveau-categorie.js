// niveau-categorie.js

// var niveauInitial='#{creaCategorieBean.categorie.niveau}';		
// modif locale						
function gestionAlert(formulaire, niveau, niveauInitial, disable) {
	var formId = formulaire.id;
//	var niveau = document.getElementById(formId + ':listeNiveau');
	var niveauSaisi = niveau.value;
	
	if (disable == 'true') {
		formulaire.submit();
		return true;
	} else {
		if(niveauInitial != null && niveauInitial.length > 0) {
			if(confirm('D�sirez-vous vraiment modifier le niveau et donc supprimer les contrats li�s du tableau? (confirmer ce choix par la mise � jour de la cat�gorie)')) {
				// l'utilisateur veut modifier le niveau
				// true pour soumettre le formulaire
				formulaire.submit();
				return true;
			}
			else {
				// l'utilisateur annule, on repasse au niveau 
				// initial et on ne soumet pas le formulaire
				niveau.value = niveauInitial;
				return false;
			}
		}
		else {
			formulaire.submit();
			return true;
		}
	}
}