

  //la table annuaire
  var annuaire = {
    patricia: '06 66 66 66 66',
    david: '07 77 77 77 77',
 }

  //au moment de renseigner le nom que le textarea soit propre
  document.getElementById('recherche').onmouseover=function nettoyer(){
    document.getElementById('resultat').value="";
  }

  //phase de recherche du num en fonction du nom
  document.getElementById('btnr').onclick=function rechercher(){

    var nom = document.getElementById('recherche').value; 
 
      document.getElementById('resultat').value=annuaire[nom];
      document.getElementById('recherche').value="";
  }
    

  //phase d'ajout en fonction du nom dans la table annuaire
  
  document.getElementById('btna').onclick=function ajouter(){

    var nom = document.getElementById('recherche').value; 
      var num=prompt('Quel est son numéro de téléphone : ');
      annuaire[nom]=num;
      document.getElementById('resultat').value=num;
      document.getElementById('recherche').value="";
    }

    //phase de suppression en fonction du nom dans la table annuaire

  document.getElementById('btnd').onclick=function supprimer(){

      var nom = document.getElementById('recherche').value; 
      delete annuaire[nom];
        document.getElementById('resultat').value="";
        document.getElementById('recherche').value="";
      }

      //phase de listage de toute la table annuaire
  
  document.getElementById('btnl').onclick=function lister(){
    document.getElementById('resultat').value="";

    for (var cle in annuaire) {
          document.getElementById('resultat').value=resultat.value+'\n'+cle+"  "+annuaire[cle];
        }
        document.getElementById('recherche').value="";
      }
  
  