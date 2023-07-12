const functionGetDate = () => {
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

  let current_format_day = current_year + '-'
                          + current_month + '-'
                          + current_day;

  return current_format_day;
}

const functionGetDateAgo = () => {
  let current_date = new Date();
  let current_day = current_date.getDate();
  let current_month = current_date.getMonth() + 1;
  let current_year = current_date.getFullYear() - 1;

  if (current_day.toString().length < 2) {
    current_day = '0' + current_day.toString();
  }

  if (current_month.toString().length < 2) {
    current_month = '0' + current_month.toString();
  }

  // let current_format_day = current_year + '-'
  //                         + '01' + '-'
  //                         + '01';

  let current_format_day = current_year + '-'
                          + current_month + '-'
                          + current_day;

  return current_format_day;
}

const functionGetTime = () => {
  let current_date = new Date();
  let current_hour = current_date.getHours();
  let current_minute = current_date.getMinutes();
  let current_second = current_date.getSeconds();

  if (current_hour.toString().length < 2) {
    current_hour = '0' + current_hour.toString();
  }

  if (current_minute.toString().length < 2) {
    current_minute = '0' + current_minute.toString();
  }

  if (current_second.toString().length < 2) {
    current_second = '0' + current_second.toString();
  }

  let current_format_time = current_hour + ':'
                          + current_minute + ':'
                          + current_second;

  return current_format_time;
}

const functionGetFullDateTimeStamp = () => {
  let current_date = new Date();
  let current_day = current_date.getDate();
  let current_month = current_date.getMonth() + 1;
  let current_year = current_date.getFullYear().toString();
  let current_hour = current_date.getHours();
  let current_minute = current_date.getMinutes();
  let current_second = current_date.getSeconds();

  if (current_day.toString().length < 2) {
    current_day = '0' + current_day.toString();
  }

  if (current_month.toString().length < 2) {
    current_month = '0' + current_month.toString();
  }

  if (current_hour.toString().length < 2) {
    current_hour = '0' + current_hour.toString();
  }

  if (current_minute.toString().length < 2) {
    current_minute = '0' + current_minute.toString();
  }

  if (current_second.toString().length < 2) {
    current_second = '0' + current_second.toString();
  }

  let current_format_day = current_year +
                           current_month +
                           current_day +
                           current_hour +
                           current_minute +
                           current_second;

  return current_format_day;
}

const functionGetDateTimeStamp = () => {
  let current_date = new Date();
  let current_day = current_date.getDate();
  let current_month = current_date.getMonth() + 1;
  let current_year = current_date.getFullYear().toString();
  let current_hour = current_date.getHours();
  let current_minute = current_date.getMinutes();
  let current_second = current_date.getSeconds();

  if (current_day.toString().length < 2) {
    current_day = '0' + current_day.toString();
  }

  if (current_month.toString().length < 2) {
    current_month = '0' + current_month.toString();
  }

  if (current_hour.toString().length < 2) {
    current_hour = '0' + current_hour.toString();
  }

  if (current_minute.toString().length < 2) {
    current_minute = '0' + current_minute.toString();
  }

  // if (current_second.toString().length < 2) {
  //   current_second = '0' + current_second.toString();
  // }

  let current_format_day = current_year +
                           current_month +
                           current_day +
                           current_hour +
                           current_minute;

  return current_format_day;
}

const functionGetDateStamp = () => {
  let current_date = new Date();
  let current_day = current_date.getDate();
  let current_month = current_date.getMonth() + 1;
  let current_year = current_date.getFullYear().toString();

  if (current_day.toString().length < 2) {
    current_day = '0' + current_day.toString();
  }

  if (current_month.toString().length < 2) {
    current_month = '0' + current_month.toString();
  }

  let current_format_day = current_year +
                           current_month +
                           current_day

  return current_format_day;
}

const functionSplitDateByDash = (date) => {
  let split_date = date.split('-');

  let merge_date = "";
  split_date.map( (date, index) => {
    merge_date += date;
  });

  return merge_date.toString();
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

const functionSetFullDate = (date_number, month_number, year_number) => {
  let current_date = new Date();

  current_date.setDate(current_date.getDate() + date_number);
  current_date.setMonth(current_date.getMonth() + month_number);
  current_date.setYear(current_date.getFullYear() + year_number);

  let current_day = current_date.getDate();
  let current_month = current_date.getMonth() + 1;
  let current_year = current_date.getFullYear().toString();

  if (current_day.toString().length < 2) {
    current_day = '0' + current_day.toString();
  }

  if (current_month.toString().length < 2) {
    current_month = '0' + current_month.toString();
  }

  let current_format_day = current_year +
                           current_month +
                           current_day

  return current_format_day;
}

export {
  functionGetDate,
  functionGetDateAgo,
  functionGetTime,
  functionGetFullDateTimeStamp,
  functionGetDateTimeStamp,
  functionGetDateStamp,
  functionSplitDateByDash,
  functionGetCurrentDate,
  functionSetFullDate
};
