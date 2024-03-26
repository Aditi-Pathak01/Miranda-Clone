let tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  duration: 0,
  scale: 0.6,
});
tl.to("#page1", {
  y: "30vh",
  duration: 1,
  delay: 1,
});
tl.to("#page1", {
  rotate: -360,
  duration: 0.8,
  scale: 1,
  y: "0vh",
});
