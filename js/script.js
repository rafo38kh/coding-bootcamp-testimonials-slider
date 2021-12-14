const button = document.querySelectorAll(".js-button");
const img = document.querySelector(".js-img");
const info = document.querySelector(".js-info");
const name = document.querySelector(".js-name");
const status = document.querySelector(".js-status");

let count = 0;

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

const visible = function () {
  setTimeout(() => {
    img.classList.add("active__visible");
  }, 500);

  img.classList.remove("active__visible");
};

button.forEach((btn) =>
  btn.addEventListener("click", () => {
    visible();
    img.src = base[count].picture;
    info.innerHTML = base[count].description;
    name.innerHTML = base[count].fullName;
    status.innerHTML = base[count].position;

    count === 0 ? count++ : count--;
  })
);
