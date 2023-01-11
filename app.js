const allRadius = document.getElementById("borderradius");
const box = document.getElementById("box");
const reset = document.getElementById("reset");
const copyText = document.getElementById("copy");
const copiedBox = document.getElementById("copiedBox");

allRadius.addEventListener('input', (e) => {
  let split = '';
  let borderRadiusValue = e.target.value;
  const defaultVal = 'px';
  const tests = /[a-zA-Z]/.test(borderRadiusValue);
  split = borderRadiusValue.split(" ");

  if (split.length == 4) {
    box.style.borderTopLeftRadius = tests ? split[0] : split[0] + defaultVal;
    box.style.borderTopRightRadius = tests ? split[1] : split[1] + defaultVal;
    box.style.borderBottomRightRadius = tests ? split[2] : split[2] + defaultVal;
    box.style.borderBottomLeftRadius = tests ? split[3] : split[3] + defaultVal;
  } else if (split.length == 3) {
    box.style.borderTopLeftRadius = tests ? split[0] : split[0] + defaultVal;
    box.style.borderTopRightRadius = tests ? split[1] : split[1] + defaultVal;
    box.style.borderBottomRightRadius = tests ? split[2] : split[2] + defaultVal;
    box.style.borderBottomLeftRadius = tests ? split[1] : split[1] + defaultVal;
  } else if (split.length == 2) {
    box.style.borderTopLeftRadius = tests ? split[0] : split[0] + defaultVal;
    box.style.borderTopRightRadius = tests ? split[1] : split[1] + defaultVal;
    box.style.borderBottomRightRadius = tests ? split[0] : split[0] + defaultVal;
    box.style.borderBottomLeftRadius = tests ? split[1] : split[1] + defaultVal;
  } else {
    box.style.borderRadius = tests ? borderRadiusValue : borderRadiusValue + defaultVal;
  }
})

// Reset input Field
reset.addEventListener("click", () => {
  allRadius.value = '';
  box.style.borderRadius = '0px';
  copiedBox.style.display = 'none';
});

// Copy Border Radius
copyText.addEventListener("click", () => {
  allRadius.select();
  allRadius.setSelectionRange(0, 99999); // For Mobile Devices
  navigator.clipboard.writeText(allRadius.value);
  copiedBox.style.display = 'flex';
  copiedBox.innerHTML = `Border Radius ${allRadius.value}`;
  setTimeout(()=>{
    return (copiedBox.style.display = 'none');
  }, 5000)
});
