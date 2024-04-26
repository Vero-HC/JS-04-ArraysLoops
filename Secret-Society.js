console.log("SOCIEDAD SECRETA");

const member1 = ["Esperanza","Franco","Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const member3 = ["Harry", "Ron", "Hermione"];

function secretName(arr){
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    console.log(res.sort());


}
secretName(member1);
secretName(member2);
secretName(member3);

