/*let tl = gsap.timeline();
tl.to("#main", {
  y: "100vh",
  duration: 0,
  scale: 0.4,
});
tl.to("#main", {
  y: "-235vh",
  duration: 1,
  delay: 1,
});
tl.to("#main", {
  rotate: -360,
  duration: 1,
  delay: 1.3,
  scale: 1,
  y: "0vh",
});*/
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");

card1.addEventListener("mouseover", () => {
  card2.style.left = "20vw";
  card3.style.left = "20vw";
  card4.style.left = "20vw";
  card2.style.transition = "all 0.5s ease-in-out";
  card3.style.transition = "all 0.5s ease-in-out";
  card4.style.transition = "all 0.5s ease-in-out";
});
card1.addEventListener("mouseout", () => {
  card2.style.left = "0"
  card3.style.left = "0";
  card4.style.left = "0";
  card2.style.transition = "all 0.5s ease-in-out";
  card3.style.transition = "all 0.5s ease-in-out";
  card4.style.transition = "all 0.5s ease-in-out";
});

card2.addEventListener("mouseover", () => {
  card3.style.left = "20vw";
  card4.style.left = "20vw";
  card3.style.transition = "all 0.5s ease-in-out";
  card4.style.transition = "all 0.5s ease-in-out";
});
card2.addEventListener("mouseout", () => {
  card3.style.left = "0";
  card4.style.left = "0";
  card3.style.transition = "all 0.5s ease-in-out";
  card4.style.transition = "all 0.5s ease-in-out";
});

card3.addEventListener("mouseover", () => {
  card4.style.left = "20vw";
  card4.style.transition = "all 0.5s ease-in-out";
});
card3.addEventListener("mouseout", () => {
  card4.style.left = "0";
  card4.style.transition = "all 0.5s ease-in-out";
})

