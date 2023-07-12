const object_sort_date = (oneday_order, continue_order) => {
  console.log("ONE DAY ORDER -> ", oneday_order);
  let sort_date = {
    result: []
  };

  if (oneday_order) {
    console.log("OK");
    oneday_order.result.map( (list, index) => {
      sort_date = {
        ...sort_date,
        result: [
          ...sort_date.result,
          list
        ]
      };
    });
    console.log("ONE DAY SORT -> ", sort_date);
  }

  return 1;
}

export {
  object_sort_date
};
