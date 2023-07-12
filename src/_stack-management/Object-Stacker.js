var object_stacked = [];

const object_stacker = (object) => {

  var a = window.object_stacked;

  a = [
    ...a,
    {x:"1"}
  ];

  window.object_stacked = a;

  return window.object_stacked;
}

export default object_stacker;
