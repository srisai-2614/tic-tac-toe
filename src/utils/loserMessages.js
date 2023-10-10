export const getRandomLoserMessage = (isPlayerLoser) => {
  const messages = isPlayerLoser
    ? [
      "Oh my whiskers! Tom wins this round.",
      "You've got the cheese, and I've got the win, Tom!",
      "It's tough being a mouse when Tom's on a roll!",
      "You're the mouse of the hour, but it's a win for Tom!",
      "Mouse power! Jerry outsmarts the cat, but Tom's got the game.",
      "I may chase, but you've got the moves, Jerry! It's Tom's win this time.",
      "Jerry's the mouse that roared with victory, but it's a win for Tom!",
      "You've dodged me once again, Jerry, but it's Tom's win in the end.",
      "Mouse-sized moves, giant-sized victory for Tom!",
      "Cheese, Jerry, you're good at this game, but it's a win for Tom!"
            
      ]
    : [
        "I'll get you next time!",
        "You were lucky!",
        "You can't outsmart me forever!",
        "You're just postponing the inevitable!",
        "I'll be back, stronger!",
        "You'll slip up eventually!",
        "Just a temporary setback!",
        "Victory will be mine!",
        "Don't get too comfortable!",
        "You haven't seen the last of me!",
        "Meow, it looks like this round goes to Jerry!",
"Jerry, you've outwitted ol' Tom once again!",
"I might be a cat, but Jerry's the real cat-tion hero!",
"The clever mouse prevails, and I'm left with a whisker twitch!",
"I couldn't catch Jerry, and I couldn't catch a win either!",
"Jerry's the real hero of this cat and mouse game!",
"Tom's tail is down, and Jerry's got the crown!",
"Jerry's got the moves, and, well, Tom's got the blues!",
"The little guy triumphs! Tom's the one with a frown.",
"Jerry's the king of the mouse hole and the game board!"





      ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};
