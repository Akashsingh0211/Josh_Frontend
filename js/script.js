// Cart Modal
const mymodal = document.getElementById("myModal");
// const modal = document.getElementById("hid");
// const body = document.querySelector("body"); 
// const showModal = function (e) { 

//     mymodal.classList.toggle("hidden"); 
//     if (!mmodal.classList.contains("hidden")) { 

//         // Disable scroll 

//         body.style.overflow = "hidden"; 

//     } else { 

//         // Enable scroll 

//         body.style.overflow = "auto"; 

//     } 

// }; 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  mymodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mymodal.style.display = "none";
}

// Request a Dish Modal
const mymodal2 = document.getElementById("mineModal");
var ended = document.getElementsByClassName("ends")[0];

// Get the button that opens the modal
var btn2 = document.getElementById("dish");

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  mymodal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ended.onclick = function() {
  mymodal2.style.display = "none";
}
const video = document.getElementsById("sample_video");
let i;
for (i = 0; i < video.length; i++) {
  video[i].addEventListener("click", function () {
    const controls = this.nextElementSibling;
    if (controls.innerHTML === "▶") {
      controls.innerHTML = "| |";
      this.play();
    } else {
      controls.innerHTML = "▶";
      this.pause();
    }
  });
  video[i].addEventListener("mouseout", function () {
    const controls = this.nextElementSibling;
    if (!this.paused) {
      controls.style.display = "none";
    }
  });
  video[i].addEventListener("mouseover", function () {
    const controls = this.nextElementSibling;
    controls.style.display = "flex";
  });
  video[i].addEventListener(
    "ended",
    function () {
      const controls = this.nextElementSibling;
      controls.style.display = "flex";
      controls.innerHTML = "▶";
    },
    false
  );
}




        

