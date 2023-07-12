
const findNumberHighestLowestWithArray = (number_array) => {
  let the_number, highest_number, lowest_number;
  let initiate = false;
  number_array.map( (number, index) => {
    the_number = parseFloat(number.trim());
    if (initiate === false && isNaN(the_number) === false) {
      highest_number = the_number;
      lowest_number = the_number;
      initiate = true;
    }
    else {
      if (the_number > highest_number && isNaN(the_number) === false) {
        highest_number = the_number;
      }
      else if (the_number < lowest_number && isNaN(the_number) === false) {
        lowest_number = the_number;
      }
    }
  });
  return {
    highest_number: highest_number,
    lowest_number: lowest_number
  };
}

const findAverageNumberWithArray = (number_array) => {
  let the_number, average_number;
  let sum_number = 0;
  let number_length = 0;
  number_array.map( (number, index) => {
    the_number = parseFloat(number.trim());
    if (isNaN(the_number) === false) {
      sum_number = sum_number + the_number;
      number_length++;
    }
  });
  average_number = parseFloat( sum_number / number_length ).toFixed(2);
  return average_number;
}

const findStairNumberWithArray = (number_array) => {
  let the_number, average_number, lowest_number, highest_number, stair_number, increase_number;
  let initiate = false;
  let number_length = 0;
  number_array.map( (number, index) => {
    the_number = parseFloat(number.trim());
    if (initiate === false && isNaN(the_number) === false) {
      highest_number = the_number;
      lowest_number = the_number;
      number_length++;
      initiate = true;
    }
    else if (the_number > highest_number && isNaN(the_number) === false) {
      highest_number = the_number;
      number_length++;
    }
    else if (the_number < lowest_number && isNaN(the_number) === false) {
      lowest_number = the_number;
      number_length++;
    }
  });

  average_number = parseFloat( ((highest_number / number_length)).toFixed(1) );

  for ( let loop = 0; loop < 5; loop++ ) {
    if (loop === 0) {
      stair_number = [parseInt((lowest_number-average_number)), parseInt(lowest_number)];
      increase_number = lowest_number;
    }
    else if (loop === 4 && stair_number[4] > increase_number) {
      stair_number = [
        ...stair_number,
        parseInt(highest_number)
      ];
    }
    else {
      increase_number = increase_number + average_number;
      stair_number = [
        ...stair_number,
        parseInt(increase_number)
      ];
    }
  }
  return stair_number;
}

export {
  findNumberHighestLowestWithArray,
  findAverageNumberWithArray,
  findStairNumberWithArray
};
