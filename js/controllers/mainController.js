// MAIN CONTROLLER
function mainController() {
  
    this.fiches = [];

    this.create = (nom, prenom, email) => {
        this.fiches.push({nom: nom, prenom: prenom, email: email});
        this.nom = "";
        this.prenom = "";
        this.email = "";
        console.log(this.fiches);
    };

    this.update = (i, nom, prenom, email) => {
        this.fiches[i] = {nom: nom, prenom: prenom, email: email};
        console.log(this.fiches);
    };

    this.delete = (i) => {
        this.fiches.splice(i, 1);
        console.log(this.fiches);
    };
}
