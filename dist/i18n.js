const i18next = window.i18next;
const i18nextHttpBackend = window.i18nextHttpBackend;

i18next.use(i18nextHttpBackend).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  initImmediate: false,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
}, () => {
  window.translate()
})

window.translate = (lng) => {
  i18next.changeLanguage(lng, (_, t) => {
    const elements = document.querySelectorAll('[i18n-key]');
    elements.forEach(e => {
      const key = e.getAttribute("i18n-key");
      e.innerHTML = t(key);
    })
  })
}
