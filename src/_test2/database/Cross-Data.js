import fruits from './Fruits';
import animals from './Animals';
import sortByDate from '../function/Sort-By-Date';

let lowest_date = 0;
let highest_date = 0;
////////////////////////
let cross_data = [];
////////////////////////
let sort_date = [];

// console.log("Lowest Date -> ", lowest_date);
// console.log("Highest Date -> ", highest_date);
// if (lowest_date === 0 || highest_date === 0) {
//   lowest_date = fruits[0].date;
//   highest_date = fruits[0].date;
  // console.log("Lowest Date -> ", lowest_date);
  // console.log("Highest Date -> ", highest_date);
// }

// fruits.map( (item, index) => {
//   if (item.date < lowest_date) {
//     lowest_date = item.date;
//   }
//   else if (item.date > highest_date) {
//     highest_date = item.date;
//   }
// });
//
// animals.map( (item, index) => {
//   if (item.date < lowest_date) {
//     lowest_date = item.date;
//   }
//   else if (item.date > highest_date) {
//     highest_date = item.date;
//   }
// });


// console.log("Lowest Date -> ", lowest_date);
// console.log("Highest Date -> ", highest_date);

cross_data = [
  {
    fruits: fruits
  },
  {
    animals: animals
  }
];

sort_date = sortByDate(cross_data);
// console.log("Sort By Date -> ", sort_date);

export {
  cross_data,
  sort_date
};
