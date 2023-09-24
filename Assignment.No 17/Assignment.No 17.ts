let guests = ["Ali", "Ahmad", "Faizan"];
let whocantcook = "Usama";
console.log(`Dear ${whocantcook} Iam happy to see you in dinner in my place.`);
console.log(`Dear ${guests} i would feel bad for saying that my  table is not come at time.So i will invite only two friends.\nQaim Ali `);
let removedguest1 = guests.pop();
console.log(`Dear ${removedguest1} I am sad to say that I would not call you for dinner in my home.\nQaim Ali\n\.`);
let removedgueest2 = guests.pop();
console.log(`Dear ${removedgueest2}I am sad to said you you can not come to .\n[Qaim Ali]\n.`);
console.log(`Dear ${guests} you will still come for dinner in my house.`);
console.log(" remaining guests", guests);
let removedgueest3 = guests.pop();
console.log("guests",guests)