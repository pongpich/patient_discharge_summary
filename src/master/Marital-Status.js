
const getMaritalName = (mrg_code) => {

  let mrg_name = "";

  if (mrg_code.trim() === "0") {
    mrg_name = "อื่นๆ........";
  }
  else if (mrg_code.trim() === "1") {
    mrg_name = "โสด";
  }
  else if (mrg_code.trim() === "2") {
    mrg_name = "สมรส";
  }
  else if (mrg_code.trim() === "3") {
    mrg_name = "หม้าย";
  }
  else if (mrg_code.trim() === "4") {
    mrg_name = "หย่า";
  }
  else if (mrg_code.trim() === "5") {
    mrg_name = "แยกกันอยู่";
  }
  else if (mrg_code.trim() === "6") {
    mrg_name = "พระ";
  }
  else if (mrg_code.trim() === "7") {
    mrg_name = "แม่ชี";
  }
  else if (mrg_code.trim() === "8") {
    mrg_name = "นักบวช";
  }
  else if (mrg_code.trim() === "9") {
    mrg_name = "ไม่ระบุ";
  }

  return mrg_name;
}

export {
  getMaritalName
};
