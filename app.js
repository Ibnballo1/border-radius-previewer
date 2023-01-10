const allRadius = document.getElementById("borderradius");
const box = document.getElementById("box");
const reset = document.getElementById("reset");
const copyText = document.getElementById("copy");

allRadius.addEventListener('input', (e) => {
  let split = '';
  let borderRadiusValue = 0;
  borderRadiusValue = e.target.value;
  split = borderRadiusValue.split(" ");

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
  navigator.clipboard.writeText(allRadius.value);
  console.log(allRadius.value);
  alert("Border Radius: " + allRadius.value);
});
