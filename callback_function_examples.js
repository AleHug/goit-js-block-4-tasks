// //Klick zäler
// const buttonRef = document.querySelector(`.js-button`);

// const handleBtnClick = function () {
//     console.log(`Zeit von tasten klick: ` + Date.now())
// };

// buttonRef.addEventListener("click", handleBtnClick);






// //Geolocation

// const onGetPositionSuccess = function (position) {
//     console.log('Das ist abruf von onGetPositionSuccess');
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log('Das ist abruf von onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);


//    ***** callback function! ******
const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }
    return filteredArray;
};

const callback1 = function (value) {
    return value >= 3;
};

const callback2 = function (value) {
  return value <= 3;
};



const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsQuantity = function (fruit) {
    return fruit.quantity >= 120;
};



const result1 = filter([1, 2, 3, 4, 5], callback1);
console.log(result1);

const result2 = filter([1, 2, 3, 4, 5], callback2);
console.log(result2);

const result3 = filter(fruits, getFruitsQuantity);
console.log(result3);
