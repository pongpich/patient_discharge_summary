
const colonTime = (time) => {
  if (time.trim() !== "") {
    const split_left_time = time.substring(0, 2);
    const split_right_time = time.substring(2, 4);
    const merge_split_time = split_left_time + ":" + split_right_time;
    //console.log("Split Time -> ", merge_split_time);

    return merge_split_time.toString();
  }
  else {
    return "";
  }
}

const colonTimeDateChrist = (time) => {
  // console.log("TIMEEEEEEEEEEEEEEEE", time);
  if (time.trim() !== "") {
    const split_left_time = time.substring(8, 10);
    const split_right_time = time.substring(10, 12);
    const merge_split_time = split_left_time + ":" + split_right_time;
    //console.log("Split Time -> ", merge_split_time);

    return merge_split_time.toString();
  }
  else {
    return "";
  }
}

export { colonTime, colonTimeDateChrist };
