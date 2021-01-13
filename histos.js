// histos.js
//
// checkageMGDC
// méthode permettant d'afficher un message d'avertissement lors du décochage 
// de la checkbox 'Gestion MGDC' lors de la création d'historique global
// sur la page d'ajout de produit
function checkageMGDC(formulaire, check, checkInitial) {
	var checkActuelle = check.checked;
	if(checkActuelle == false){
		if(confirm('Souhaitez-vous supprimer toutes les garanties Mgdc ?')){
			formulaire.submit();
			return true;		
		} else {
			check.checked = checkInitial;
			return false;
		}
	} else {
		formulaire.submit();
		return true;		
	}
}