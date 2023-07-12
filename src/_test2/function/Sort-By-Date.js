const sortByDate = (data) => {

  let sort_date = [];
  let reset_date = 0;

  // sort_date = [lowdate, highdate];
  sort_date = [data[0].fruits[5].date];
  console.log("Initiated Sort Date -> ", sort_date);

  data.map( (item, index) => {

    console.log("Database Item -> ", item);

    Object.keys(item).map( (subitem, subindex) => {

      // console.log(item[subitem]);
      item[subitem].map ( (minitem, minindex) => {
        console.log("-/-/-/-/-/-/-/-/-/-/-");

        reset_date = 0;
        console.log(`Miniitem Date (${minindex}) -> ${minitem.date}`);
        // console.log("item[subitem][minindex] -> ", item[subitem][minindex]);
        sort_date.map( (date, dateindex) => {

          // console.log("Sort Date -> ", sort_date[dateindex]);
          // console.log("Date -> ", date);

          if (reset_date === 0) {
            let cross_date = [];
            let x_date = sort_date;
            let index_date = sort_date.indexOf(date);
            let dup_date = sort_date.indexOf(minitem);
            // console.log(date);
            if (minitem.date < date && minitem.date > sort_date[dateindex-1]) {
              // console.log(`Lower Date ${minitem.date} < ${date}`);
              // console.log(`And Higher Than > ${sort_date[dateindex-1]}`);
              // console.log("Index of Sort Date -> ", index_date);
              // console.log("Duplicate Date -> ", dup_date);
              // console.log("Slice Date -> ", x_date.slice(0, index_date+1));
              // console.log("Concat Date -> ", x_date.slice(index_date+1, x_date.length));
              // console.log("!!!!!!!!!! Insert Date !!!!!!!!!!");
              cross_date = x_date.slice(0, index_date+1).concat(minitem.date).concat(x_date.slice(index_date, x_date.length));
              sort_date = cross_date;
              reset_date = 1;
              // console.log("Cross Date -> ", cross_date);
              // console.log("Sort Date -> ", sort_date);
            }
            else if (minitem.date > date && minitem.date < sort_date[dateindex+1]) {
              // console.log(`Higher Date ${minitem.date} > ${date}`);
              // console.log(`And Lower Than < ${sort_date[dateindex+1]}`);
              // console.log("Index of Sort Date -> ", index_date);
              // console.log("Duplicate Date -> ", dup_date);
              // console.log("Slice Date -> ", x_date.slice(0, index_date+1));
              // console.log("Concat Date -> ", x_date.slice(index_date+1, x_date.length));
              // console.log("!!!!!!!!!! Insert Date !!!!!!!!!!");
              cross_date = x_date.slice(0, index_date+1).concat(minitem.date).concat(x_date.slice(index_date+1, x_date.length));
              sort_date = cross_date;
              reset_date = 1;
              // console.log("Cross Date -> ", cross_date);
              // console.log("Sort Date -> ", sort_date);
            }
            else if (minitem.date < date && index_date === 0) {
              // console.log(`Single Lower Date ${minitem.date} < ${date}`);
              // console.log("Index of Sort Date -> ", index_date);
              // console.log("Duplicate Date -> ", dup_date);
              // console.log("!!!!!!!!!! Index === 0 with Lower Date !!!!!!!!!!");
              cross_date = [minitem.date].concat(x_date);
              sort_date = cross_date;
              reset_date = 1;
              // console.log("Cross Date -> ", cross_date);
              // console.log("Sort Date -> ", sort_date);
            }
            else if (minitem.date > date && index_date+1 === sort_date.length) {
              // console.log(`Single Higher Date ${minitem.date} > ${date}`);
              // console.log("Index of Sort Date -> ", index_date);
              // console.log("Duplicate Date -> ", dup_date);
              // console.log("!!!!!!!!!! Index === Length with Higher Date !!!!!!!!!!");
              cross_date = x_date.concat([minitem.date])
              sort_date = cross_date;
              reset_date = 1;
              // console.log("Cross Date -> ", cross_date);
              // console.log("Sort Date -> ", sort_date);
            }

          }

        });

        console.log("-/-/-/-/-/-/-/-/-/-/-");
      });

    });

  });

  return sort_date;
}

export default sortByDate;
