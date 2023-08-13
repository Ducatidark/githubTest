// histos.js
//modifié remote
//
// checkageMGDC
//modifié local
// m�thode permettant d'afficher un message d'avertissement lors du d�cochage 
// de la checkbox 'Gestion MGDC' lors de la cr�ation d'historique global
// sur la page d'ajout de produit
function checkageMGDC(formulaire, check, checkInitial) {
	var checkActuelle = check.checked;
	if(checkActuelle == false){
		
//add comment	
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
