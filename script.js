const translations = {
  ru: {
    return: "Вернуться к Melbet Partners",
    title: "Проверьте своего менеджера в 2 клика",
    searchOn: "Искать в",
    search: "Поиск",
    check: "Проверить",
    empty: "Введите контакт для проверки.",
    verifiedTitle: "Официальный менеджер Melbet",
    verifiedBody: "Этот контакт подтвержден. Вы можете продолжить общение в том же канале.",
    invalidTitle: "Контакт не найден",
    invalidBody: "Этот контакт не указан как официальный менеджер Melbet Partners. Не передавайте личные или платежные данные.",
  },
  en: {
    return: "Return to Melbet Partners",
    title: "Check your manager in 2 clicks",
    searchOn: "Search on",
    search: "Search",
    check: "Check",
    empty: "Enter a contact to check.",
    verifiedTitle: "Official Melbet manager",
    verifiedBody: "This contact is verified. You can continue the conversation through the same channel.",
    invalidTitle: "Contact not found",
    invalidBody: "This contact is not listed as an official Melbet Partners manager. Do not share personal or payment details.",
  },
  ar: {
    return: "العودة إلى Melbet Partners",
    title: "تحقق من مديرك خلال نقرتين",
    searchOn: "البحث عبر",
    search: "البحث",
    check: "تحقق",
    empty: "أدخل جهة تواصل للتحقق.",
    verifiedTitle: "مدير Melbet رسمي",
    verifiedBody: "جهة التواصل موثقة. يمكنك متابعة المحادثة عبر نفس القناة.",
    invalidTitle: "جهة التواصل غير موجودة",
    invalidBody: "هذه الجهة ليست ضمن مديري Melbet Partners الرسميين. لا تشارك بياناتك الشخصية أو المالية.",
  },
  bd: {
    return: "Melbet Partners-এ ফিরে যান",
    title: "২ ক্লিকে আপনার ম্যানেজার যাচাই করুন",
    searchOn: "যেখানে খুঁজবেন",
    search: "সার্চ",
    check: "চেক",
    empty: "যাচাই করার জন্য একটি কন্টাক্ট লিখুন।",
    verifiedTitle: "অফিসিয়াল Melbet ম্যানেজার",
    verifiedBody: "এই কন্টাক্টটি যাচাইকৃত। একই চ্যানেলে কথোপকথন চালিয়ে যেতে পারেন।",
    invalidTitle: "কন্টাক্ট পাওয়া যায়নি",
    invalidBody: "এই কন্টাক্টটি অফিসিয়াল Melbet Partners ম্যানেজার হিসেবে তালিকাভুক্ত নয়। ব্যক্তিগত বা পেমেন্ট তথ্য শেয়ার করবেন না।",
  },
  fr: {
    return: "Retour a Melbet Partners",
    title: "Verifiez votre manager en 2 clics",
    searchOn: "Chercher sur",
    search: "Recherche",
    check: "Verifier",
    empty: "Saisissez un contact a verifier.",
    verifiedTitle: "Manager Melbet officiel",
    verifiedBody: "Ce contact est verifie. Vous pouvez poursuivre via le meme canal.",
    invalidTitle: "Contact introuvable",
    invalidBody: "Ce contact n'est pas repertorie comme manager officiel Melbet Partners. Ne partagez pas de donnees personnelles ou de paiement.",
  },
  pt: {
    return: "Voltar para Melbet Partners",
    title: "Verifique seu gerente em 2 cliques",
    searchOn: "Pesquisar em",
    search: "Pesquisar",
    check: "Verificar",
    empty: "Insira um contato para verificar.",
    verifiedTitle: "Gerente oficial Melbet",
    verifiedBody: "Este contato foi verificado. Voce pode continuar a conversa pelo mesmo canal.",
    invalidTitle: "Contato nao encontrado",
    invalidBody: "Este contato nao esta listado como gerente oficial da Melbet Partners. Nao compartilhe dados pessoais ou de pagamento.",
  },
  tr: {
    return: "Melbet Partners'a don",
    title: "Yoneticinizi 2 tiklamada kontrol edin",
    searchOn: "Aranacak yer",
    search: "Ara",
    check: "Kontrol et",
    empty: "Kontrol etmek icin bir iletisim bilgisi girin.",
    verifiedTitle: "Resmi Melbet yoneticisi",
    verifiedBody: "Bu iletisim bilgisi dogrulandi. Ayni kanal uzerinden gorusmeye devam edebilirsiniz.",
    invalidTitle: "Iletisim bulunamadi",
    invalidBody: "Bu iletisim Melbet Partners resmi yoneticisi olarak listelenmiyor. Kisisel veya odeme bilgilerinizi paylasmayin.",
  },
  uz: {
    return: "Melbet Partners sahifasiga qaytish",
    title: "Menejeringizni 2 bosishda tekshiring",
    searchOn: "Qayerdan qidirish",
    search: "Qidirish",
    check: "Tekshirish",
    empty: "Tekshirish uchun kontakt kiriting.",
    verifiedTitle: "Rasmiy Melbet menejeri",
    verifiedBody: "Bu kontakt tasdiqlangan. Suhbatni shu kanal orqali davom ettirishingiz mumkin.",
    invalidTitle: "Kontakt topilmadi",
    invalidBody: "Bu kontakt Melbet Partners rasmiy menejeri sifatida ro'yxatda yo'q. Shaxsiy yoki to'lov ma'lumotlarini ulashmang.",
  },
};

const verifiedManagers = {
  telegram: ["@melbetpartners", "@melbet_manager", "melbet_manager"],
  whatsapp: ["+971501234567", "971501234567"],
  email: ["b2b@melbetpartners.com", "support@melbetpartners.com", "manager@melbetpartners.com"],
  skype: ["melbet.partners", "melbet.manager"],
  managerId: ["MB-1024", "MB-2048", "1024", "2048"],
};

const languageMenu = document.querySelector(".language-menu");
const languageButton = document.querySelector("#languageButton");
const languageList = document.querySelector("#languageList");
const currentLanguage = document.querySelector("#currentLanguage");
const form = document.querySelector("#checkerForm");
const resultPanel = document.querySelector("#resultPanel");
const searchType = document.querySelector("#searchType");
const managerQuery = document.querySelector("#managerQuery");

let activeLanguage = "en";

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function messages() {
  return translations[activeLanguage] || translations.en;
}

function applyLanguage(language) {
  activeLanguage = translations[language] ? language : "en";
  const languageMessages = messages();

  document.documentElement.lang = activeLanguage === "bd" ? "bn" : activeLanguage;
  document.documentElement.dir = activeLanguage === "ar" ? "rtl" : "ltr";
  currentLanguage.textContent = activeLanguage;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (languageMessages[key]) {
      node.textContent = languageMessages[key];
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === activeLanguage);
  });

  if (!resultPanel.hidden) {
    resultPanel.hidden = true;
  }
}

function updatePlaceholder() {
  const placeholders = {
    telegram: "@melbet_manager",
    whatsapp: "+971501234567",
    email: "b2b@melbetpartners.com",
    skype: "melbet.manager",
    managerId: "MB-1024",
  };
  managerQuery.placeholder = placeholders[searchType.value];
}

function showResult(type, title, body) {
  resultPanel.hidden = false;
  resultPanel.className = `result-panel ${type}`;
  resultPanel.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
}

languageButton.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("is-open");
  languageButton.setAttribute("aria-expanded", String(isOpen));
});

languageList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button) {
    return;
  }

  applyLanguage(button.dataset.language);
  languageMenu.classList.remove("is-open");
  languageButton.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (!languageMenu.contains(event.target)) {
    languageMenu.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  }
});

searchType.addEventListener("change", updatePlaceholder);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = managerQuery.value.trim();
  const languageMessages = messages();

  if (!query) {
    showResult("error", languageMessages.invalidTitle, languageMessages.empty);
    managerQuery.focus();
    return;
  }

  const officialContacts = verifiedManagers[searchType.value].map(normalize);
  const isVerified = officialContacts.includes(normalize(query));

  if (isVerified) {
    showResult("success", languageMessages.verifiedTitle, languageMessages.verifiedBody);
  } else {
    showResult("error", languageMessages.invalidTitle, languageMessages.invalidBody);
  }
});

applyLanguage("en");
updatePlaceholder();
