let price = 900;
const isLeader = false;

if (isLeader == true) {
    if (price <= 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 100;
}
// console.log(price);


price = isLeader == true ? price <= 1000 ? price / 2 : price = 0 : price + 100;

// console.log(price);


let hour = 20;

// if (hour <= 15) {
//     console.log('Good Boy');
// }
// else {
//     console.log('Very Good boy')
// }

hour <=15 ? console.log('Good Boy'): console.log('very good boy');


