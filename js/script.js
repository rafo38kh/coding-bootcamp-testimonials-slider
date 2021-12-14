const leftButton = document.querySelector(".js-left");
const rightButton = document.querySelector(".js-right");
const img = document.querySelector(".js-img");
const info = document.querySelector(".js-info");
const name = document.querySelector(".js-name");
const status = document.querySelector(".js-status");

let count = 1;

const base = [
  {
    picture: `images/image-tanya.jpg`,
    description: ` “ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future.” `,
    fullName: `Tanya Sinclair`,
    position: `UX Engineer`,
  },

  {
    picture: `images/image-john.jpg`,
    description: `“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`,
    fullName: ` John Tarkpor`,
    position: `Junior Front-end Developer`,
  },
];

rightButton.addEventListener("click", () => {
  if (count >= base.length) {
    img.src = base[count - base.length].picture;
    info.innerHTML = base[count - base.length].description;
    name.innerHTML = base[count - base.length].fullName;
    status.innerHTML = base[count - base.length].position;
    count = 1;
    // count++;
    console.log("right one");
  } else {
    img.src = base[count].picture;
    info.innerHTML = base[count].description;
    name.innerHTML = base[count].fullName;
    status.innerHTML = base[count].position;
    count++;
    console.log("right two");
  }
});

leftButton.addEventListener("click", () => {
  if (count >= 0) {
    img.src = base[count].picture;
    info.innerHTML = base[count].description;
    name.innerHTML = base[count].fullName;
    status.innerHTML = base[count].position;
    count--;
    console.log("left one");
  } else {
    count = base.length - 1;
    console.log(count);
    img.src = base[count].picture;
    info.innerHTML = base[count].description;
    name.innerHTML = base[count].fullName;
    status.innerHTML = base[count].position;
    count--;
    console.log("left two");
  }
});
