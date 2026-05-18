const translations = {
  en: {
    back: "Back to partners site",
    language: "Language",
    eyebrow: "Official contact verification",
    title: "Check your Melbet manager",
    lead: "Enter the contact you received and confirm it belongs to an authorized Melbet Partners manager before you continue.",
    searchOn: "Search on",
    search: "Search",
    hint: "Use the exact username, phone, email, Skype name, or manager ID.",
    check: "Check",
    empty: "Enter a contact to check.",
    verifiedTitle: "Official Melbet manager",
    verifiedBody: "This contact is verified. You can continue the conversation through the same channel.",
    invalidTitle: "Contact not found",
    invalidBody: "This contact is not listed as an official Melbet Partners manager. Do not share personal or payment details.",
  },
  ar: {
    back: "العودة إلى موقع الشركاء",
    language: "اللغة",
    eyebrow: "تحقق رسمي من جهات التواصل",
    title: "تحقق من مدير Melbet",
    lead: "أدخل جهة التواصل التي وصلتك وتأكد أنها تخص مديرا معتمدا من Melbet Partners قبل المتابعة.",
    searchOn: "البحث عبر",
    search: "البحث",
    hint: "استخدم اسم المستخدم أو الهاتف أو البريد أو Skype أو رقم المدير كما هو تماما.",
    check: "تحقق",
    empty: "أدخل جهة تواصل للتحقق.",
    verifiedTitle: "مدير Melbet رسمي",
    verifiedBody: "جهة التواصل موثقة. يمكنك متابعة المحادثة عبر نفس القناة.",
    invalidTitle: "جهة التواصل غير موجودة",
    invalidBody: "هذه الجهة ليست ضمن مديري Melbet Partners الرسميين. لا تشارك بياناتك الشخصية أو المالية.",
  },
  fr: {
    back: "Retour au site partenaires",
    language: "Langue",
    eyebrow: "Verification officielle du contact",
    title: "Verifiez votre manager Melbet",
    lead: "Saisissez le contact recu et confirmez qu'il appartient a un manager Melbet Partners autorise avant de continuer.",
    searchOn: "Chercher sur",
    search: "Recherche",
    hint: "Utilisez le nom exact, telephone, e-mail, Skype ou identifiant manager.",
    check: "Verifier",
    empty: "Saisissez un contact a verifier.",
    verifiedTitle: "Manager Melbet officiel",
    verifiedBody: "Ce contact est verifie. Vous pouvez poursuivre via le meme canal.",
    invalidTitle: "Contact introuvable",
    invalidBody: "Ce contact n'est pas repertorie comme manager officiel Melbet Partners. Ne partagez pas de donnees personnelles ou de paiement.",
  },
  es: {
    back: "Volver al sitio de partners",
    language: "Idioma",
    eyebrow: "Verificacion oficial de contacto",
    title: "Verifica tu manager Melbet",
    lead: "Introduce el contacto recibido y confirma que pertenece a un manager autorizado de Melbet Partners antes de continuar.",
    searchOn: "Buscar en",
    search: "Buscar",
    hint: "Usa el usuario, telefono, email, Skype o ID de manager exacto.",
    check: "Verificar",
    empty: "Introduce un contacto para verificar.",
    verifiedTitle: "Manager oficial de Melbet",
    verifiedBody: "Este contacto esta verificado. Puedes continuar la conversacion por el mismo canal.",
    invalidTitle: "Contacto no encontrado",
    invalidBody: "Este contacto no figura como manager oficial de Melbet Partners. No compartas datos personales ni de pago.",
  },
};

const verifiedManagers = {
  telegram: ["@melbetpartners", "@melbet_manager", "melbet_manager"],
  whatsapp: ["+971501234567", "971501234567"],
  email: ["support@melbetpartners.com", "manager@melbetpartners.com"],
  skype: ["melbet.partners", "melbet.manager"],
  managerId: ["MB-1024", "MB-2048", "1024", "2048"],
};

const languageSelect = document.querySelector("#languageSelect");
const form = document.querySelector("#checkerForm");
const resultPanel = document.querySelector("#resultPanel");
const searchType = document.querySelector("#searchType");
const managerQuery = document.querySelector("#managerQuery");

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function currentMessages() {
  return translations[languageSelect.value] || translations.en;
}

function applyLanguage(language) {
  const messages = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (messages[key]) {
      node.textContent = messages[key];
    }
  });
}

function updatePlaceholder() {
  const placeholders = {
    telegram: "@melbet_manager",
    whatsapp: "+971501234567",
    email: "manager@melbetpartners.com",
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

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

searchType.addEventListener("change", updatePlaceholder);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const messages = currentMessages();
  const query = managerQuery.value.trim();

  if (!query) {
    showResult("error", messages.invalidTitle, messages.empty);
    managerQuery.focus();
    return;
  }

  const allowedValues = verifiedManagers[searchType.value].map(normalize);
  const isVerified = allowedValues.includes(normalize(query));

  if (isVerified) {
    showResult("success", messages.verifiedTitle, messages.verifiedBody);
  } else {
    showResult("error", messages.invalidTitle, messages.invalidBody);
  }
});

applyLanguage("en");
updatePlaceholder();
