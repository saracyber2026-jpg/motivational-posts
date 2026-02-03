function showMessage() {
  const messages = [
    "كل يوم جديد هو فرصة جديدة ✨",
    "أنتِ أقوى مما تتوقعين 💪",
    "استمري… النجاح أقرب مما تظنين 🌟",
    "ثقي بنفسك، الطريق يبدأ بخطوة ❤️",
    "أحلامك تستحق المحاولة دائمًا 🚀"
  ];

  const message = document.getElementById("message");
  const random = Math.floor(Math.random() * messages.length);

  message.textContent = messages[random];
}
