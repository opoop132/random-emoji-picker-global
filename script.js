const emojis = [
  "😀", "😂", "🤣", "😊", "😍", "😎", "🤔", "😴", "🤯", "🥳",
  "😇", "😭", "😤", "🤮", "👻", "🎃", "💩", "🙈", "🐶", "🐱",
  "🐵", "🐸", "🐼", "🐷", "🦁", "🐯", "🌈", "🌟", "🔥", "💧",
  "🍕", "🍔", "🍩", "🍉", "🍓", "🍣", "🍿", "🚀", "🎮", "🎲",
  "🏀", "⚽", "🎯", "🎵", "📱", "💡", "📚", "✈️", "🛸", "🧠"
];

function pickEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  document.getElementById("emojiResult").innerText = emojis[randomIndex];
}
