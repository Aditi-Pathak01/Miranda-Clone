let tl = gsap.timeline();
tl.to("#main", {
  y: "100vh",
  duration: 0,
  scale: 0.4
});
tl.to("#main", {
  y: "-200vh",
  duration: 1,
  delay: 1
});
tl.to("#main", {
  rotate: -360,
  duration: 1,
  delay:1.3,
  scale: 1,
  y: "0vh"
});
