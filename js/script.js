const fades = document.querySelectorAll('.fade');
const messages = [
  "Me gusta cómo eres, incluso cuando no lo notas 💙",
  "Me gusta pensar en ti, sin razón ❤️",
  "Me gusta que existas ✨"
];

window.addEventListener('scroll', () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

function showMsg(i){
  document.getElementById("msg").innerText = messages[i];
}
