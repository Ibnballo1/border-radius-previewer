const allRadius = document.getElementById("borderradius");
const allInput = document.querySelectorAll(".input");
const box = document.getElementById("box");
const reset = document.getElementById("reset");
const copyText = document.getElementById("copy");
let length = 0;
let split = '';
let borderRadiusValue = 0;
// const str = 'this is a boy'
// console.log(str.slice(0, 4));
// console.log(str.slice(1, (str.indexOf(' '))));
// console.log(`all radius value is ${allRadius.value}`);
allRadius.addEventListener('input', (e) => {
  borderRadiusValue = e.target.value;
  split = borderRadiusValue.split(" ");
  // console.log(split);
  if (split.length == 4) {
    box.style.borderTopLeftRadius = split[0];
    box.style.borderTopRightRadius = split[1];
    box.style.borderBottomRightRadius = split[2];
    box.style.borderBottomLeftRadius = split[3];
  } else if (split.length == 3) {
    box.style.borderTopLeftRadius = split[0];
    box.style.borderTopRightRadius = split[1];
    box.style.borderBottomRightRadius = split[2];
    box.style.borderBottomLeftRadius = split[1];
  } else if (split.length == 2) {
    box.style.borderTopLeftRadius = split[0];
    box.style.borderTopRightRadius = split[1];
    box.style.borderBottomRightRadius = split[0];
    box.style.borderBottomLeftRadius = split[1];
  } else {
    box.style.borderRadius = borderRadiusValue;
  }
})

reset.addEventListener("click", () => {
  allRadius.value = '';
  box.style.borderRadius = '0px';
});

// Copy
copyText.addEventListener("click", () => {
  allRadius.select();
  allRadius.setSelectionRange(0, 99999); // For Mobile Devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(allRadius.value);
  console.log(allRadius.value);
  alert("Border Radius: " + allRadius.value);
});
