const i18next = window.i18next;
const i18nextHttpBackend = window.i18nextHttpBackend;
const ghpage = true;

i18next.use(i18nextHttpBackend).init({
  lng: 'en',
  fallbackLng: 'en',
  initImmediate: false,
  backend: {
    loadPath: (ghpage ? '/resume' : '') + '/locales/{{lng}}/{{ns}}.json'
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
