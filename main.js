var niceArray = [ "Everyday we wake up is another blessing",
 "Follow your dreams and don't let anyone stop you",
 "Two people can look at the same thing and see it differently",
"Never say never",
"Haters will say what they want, but their hate will never stop you from chasing your dream",
"I'm not a fighter by nature, but, if I believe in something, I stand up for it",
"Stay humble",
"I'm looking forward to influencing others in a positive way. My message is you can do anything if you just put your mind to it.",
"Keep Going Strong!",
"One less lonely girl",
"Every one of my fans is so special to me",
"look for the good",
"I can't resist a good prank",
"I'm just a regular 16 year old kid. I make good grilled cheese and I like girls."];

function generate() {
  return Math.floor(Math.random() * niceArray.length);
}

$("button").on('click',
  function() {
    $("#result h1").html(niceArray[generate()])
  })
