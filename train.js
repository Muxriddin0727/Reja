//vazifa
//TASK-E

const primeNumber= function(number) {
  if (number <=1) return false ;
    for (let i = 4; i <=number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
      
  return true;
};

const result = primeNumber(9);
console.log(result);















//const moment = require("moment");
//const data = moment();

//class Shop {
 // constructor(non, cola, lagmon) {
//this.non = non;
   // this.cola = cola;
   // this.lagmon = lagmon;
  //}


 // result() {
 //   console.log(
//      `Hozir ${data.add(10, "minutes").format("HH:mm")}da ${this.non}ta non, ${ this.lagmon }ta lagmon va ${this.cola}ta cola bor.`
//    );
 // }

//  sell(a, b) {
 //   this.non -= b;
//  }

 // get(a, b) {
   // this.cola += b;
//}
//}

//const shop = new Shop(4, 5, 2);
//shop.result();
//shop.sell("non", 3);
//shop.get("cola", 4);
//shop.result();





//console.log("Jack Ma maslahatlari");

//const list = [
 // "Yaxshi talaba bo'ling", // 0-20
  //"To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
 // "O'zingizga ishlashni boshlang", // 30-40
 // "Siz kuchli bo'lgan narsalarni qiling", // 40-50
 // "Yoshlarga investitsiya qiling", // 50-60
 // "Endi dam oling, foydasi yo'q endi", // 60
//];
////Callback functions
//function maslahatBering(a, callback) {
 //   if (typeof a !== "number") callback("Iltimos raqam yozing", null);
 // else if (a <= 20) callback(null, list[0]);
 //  else if (a > 20 && a <= 30) callback(null, list[1]);
 //   else if (a > 30 && a <= 40) callback(null, list[2]);
//else if (a > 40 && a <= 50) callback(null, list[3]);
 //   else if (a > 50 && a <= 60) callback(null, list[4]);
  //  else {
 //    setInterval(function () {
 //      callback(null, list[5]);
 //    }, 1000);
//}
 // }

 // console.log("passed here 0");
  //maslahatBering(65, (err, data) => {
  //if(err) console.log('ERROR:', err);
  // else {
 // console.log('javob:', data);
   // }
 //});
  //console.log("passed here 1");


 //acynchronous functions
  
//async function maslahatBering(a) {
   // if (typeof a !== "number") throw new Error("Insert a number");
   // else if (a <= 20) return(list[0]);
  //  else if (a > 20 && a <= 30) return list[1];
  //  else if (a> 30 && a <= 40) return list[2];
  //  else if (a > 40 && a <= 50) return list[3];
 //   else if (a > 50 && a <= 50) return list[4];
  //  else {
  //      return new Promise ((resolve, reject) =>{
  //          setTimeout(() => {
  //              resolve(list[5]);
  //          }, 5000);
   //     });
  //  }
//}

// call viathen/catch
// console.log("passed here 0");
// maslahatBering(a20)
// .then(data => {
//    console.log("javob:", data);
//}).catch(err => {
//    console.log("ERROR:", err);
//})

//console.log("passed here 1");


// call via asyn/await

//async function run() {
 //   let javob = await maslahatBering(65);
//    console.log(javob);
 //   result = await maslahatBering(31);
  //  console.log(javob);
 //   result = await maslahatBering(41);
 //   console.log(javob);
//}

//run();