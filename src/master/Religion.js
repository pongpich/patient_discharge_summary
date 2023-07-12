
const getReligionName = (reg_code) => {

  let reg_name = "";

  if (reg_code.trim() === "0000") {
    reg_name = "อื่นๆ";
  }
  else if (reg_code.trim() === "0001") {
    reg_name = "พุทธ";
  }
  else if (reg_code.trim() === "0002") {
    reg_name = "คริสต์";
  }
  else if (reg_code.trim() === "0003") {
    reg_name = "อิสลาม";
  }
  else if (reg_code.trim() === "0004") {
    reg_name = "ซิกข์";
  }
  else if (reg_code.trim() === "0005") {
    reg_name = "ฮินดู";
  }
  else if (reg_code.trim() === "9999") {
    reg_name = "ไม่ระบุ";
  }

  return reg_name;
}

export {
  getReligionName
};
