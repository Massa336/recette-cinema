
let recette = 0;
let billetsmoins16 = 0;
let billetsplus16 = 0;
let age = 11;
let prix = 0;

do {
  
    let prix;
    if (age<16) {
        prix = 1500;
        billetsmoins16++;
    } else {
        prix = 2500;
        billetsplus16++;
    }
    recette += prix;
    console.log(" age : " + age + " ans , prix : " + prix + "FCFA");
age++;    
}
while (age <=20);
    console.log(" recette totale :" + recette + "FCFA");
    console.log(" billets à 1500 FCFA :" + billetsmoins16);
    console.log(" billets à 2500 FCFA : " +billetsplus16);
