
const dashDateChrist = (date_christ) => {
  const split_year = date_christ.substring(0, 4);
  let split_month = date_christ.substring(4, 6);
  const split_day = date_christ.substring(6, 8);
  const merge_date = split_year + "-" + split_month + "-" + split_day;

  return merge_date.toString();
}

const dashDateBuddhist = (date_christ) => {
  const split_year = date_christ.substring(0, 4);
  const split_year_buddhist = parseInt(split_year) + 543;
  const split_month = date_christ.substring(4, 6);
  const split_day = date_christ.substring(6, 8);
  const merge_date = split_day + "-" + split_month + "-" + split_year_buddhist;

  return merge_date.toString();
}

const slashDateBuddhist = (date_christ) => {
  const split_year = date_christ.substring(0, 4);
  const split_year_buddhist = parseInt(split_year) + 543;
  const split_month = date_christ.substring(4, 6);
  const split_day = date_christ.substring(6, 8);
  const merge_date = split_day + "/" + split_month + "/" + split_year_buddhist;

  return merge_date.toString();
}

export { dashDateChrist, dashDateBuddhist, slashDateBuddhist };
