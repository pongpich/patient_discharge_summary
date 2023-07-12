
const dashDateChrist = (date_christ) => {
  if (date_christ.trim() !== "") {
    const split_year = date_christ.substring(0, 4);
    let split_month = date_christ.substring(4, 6);
    const split_day = date_christ.substring(6, 8);
    const merge_date = split_year + "-" + split_month + "-" + split_day;

    return merge_date.toString();
  }
  else {
    return "";
  }
}

const dashDateBuddhist = (date_christ) => {
  if (date_christ.trim() !== "") {
    const split_year = date_christ.substring(0, 4);
    const split_year_buddhist = parseInt(split_year) + 543;
    const split_month = date_christ.substring(4, 6);
    const split_day = date_christ.substring(6, 8);
    const merge_date = split_day + "-" + split_month + "-" + split_year_buddhist;

    return merge_date.toString();
  }
  else {
    return "";
  }
}

const slashDateBuddhist = (date_christ) => {
  if (date_christ.trim() !== "") {
    const split_year = date_christ.substring(0, 4);
    const split_year_buddhist = parseInt(split_year) + 543;
    const split_month = date_christ.substring(4, 6);
    const split_day = date_christ.substring(6, 8);
    const merge_date = split_day + "/" + split_month + "/" + split_year_buddhist;

    return merge_date.toString();
  }
  else {
    return "";
  }
}

const slashDateChristDMY = (date_christ) => {
  if (date_christ.trim() !== "") {
    const split_year = date_christ.substring(0, 4);
    let split_month = date_christ.substring(4, 6);
    const split_day = date_christ.substring(6, 8);
    const merge_date = split_day + "/" + split_month + "/" + split_year;

    return merge_date.toString();
  }
  else {
    return "";
  }
}

const functionGetCurrentDate = () => {
  let current_date = new Date();
  let current_day = current_date.getDate();
  let current_month = current_date.getMonth() + 1;
  let current_year = current_date.getFullYear();

  if (current_day.toString().length < 2) {
    current_day = '0' + current_day.toString();
  }

  if (current_month.toString().length < 2) {
    current_month = '0' + current_month.toString();
  }

  let merge_date = "";

  merge_date = current_year + current_month + current_day;

  return merge_date.toString();
}

export {
  dashDateChrist,
  dashDateBuddhist,
  slashDateBuddhist,
  slashDateChristDMY,
  functionGetCurrentDate
};
