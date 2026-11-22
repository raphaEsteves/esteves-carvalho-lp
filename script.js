// Menu mobile
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Acordeão FAQ
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const answer = button.nextElementSibling;

    button.setAttribute('aria-expanded', String(!expanded));
    if (answer) {
      answer.classList.toggle('is-open', !expanded);
    }
  });
});

// Validação simples de demonstração do formulário
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = form.nome.value.trim();
    const contato = form.contato.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !contato || !mensagem) {
      feedback.textContent = 'Preencha nome, contato e um breve resumo para enviar.';
      feedback.className = 'form-feedback is-error';
      return;
    }

    feedback.textContent =
      'Mensagem registrada nesta demonstração. Em produção, este formulário pode ser conectado a e-mail, CRM ou WhatsApp.';
    feedback.className = 'form-feedback is-success';
    form.reset();
  });
}