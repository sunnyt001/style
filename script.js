  const msg = document.getElementsByClassName('msg')[0];
const icon = document.getElementsByClassName('facebook-icon')[0];
const link = document.getElementsByClassName('message');
icon.addEventListener("click", function() {
  if (msg.className == "msg") {
    msg.className = "msg display";  
  } else {
    msg.className = "msg";
  }
});
for (const i of link) {
  i.addEventListener("mouseover", function() {
    i.style.backgroundColor = "#FFCCFF";
  });
  i.addEventListener("mouseout", function() {
    i.style.backgroundColor = "pink";
  });
}
