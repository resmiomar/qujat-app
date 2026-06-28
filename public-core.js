(function (global) {
  const API = 'https://qujat-production.up.railway.app';
  const LANGS = ['ru', 'kz', 'en'];
  const LANG_KEY = 'qujat_weblang';

  const STR = {
    ru: {
      heroTitle: 'Бухгалтерия в телефоне',
      heroSub: 'Документы · налоги · ИИ · бесплатно',
      ctaTitle: 'Создать документ',
      ctaSub: 'PDF за минуту — без 1С',
      signInTitle: 'Войти',
      signInSub: 'Уже есть аккаунт',
      signUpTitle: 'Создать аккаунт',
      signUpSub: 'Бесплатная регистрация',
      footer: '© 2026 Qujat',
      langRu: 'Русский', langKz: 'Қазақша', langEn: 'English',
      welcome: 'Добро пожаловать',
      welcomeSub: 'Войдите в свой аккаунт',
      email: 'Email', password: 'Пароль', signIn: 'Войти',
      forgot: 'Забыли пароль?',
      or: 'или',
      noAccount: 'Нет аккаунта?', create: 'Создать →',
      hasAccount: 'Уже есть аккаунт?', loginLink: 'Войти →',
      createAcc: 'Создать аккаунт',
      createAccSub: 'Начните бесплатно за минуту',
      continue: 'Продолжить',
      consent: 'Принимаю',
      terms: 'Условия',
      and: 'и',
      privacy: 'Политику конфиденциальности',
      verifyTitle: 'Подтвердите почту',
      verifySub: 'Код отправлен на',
      resend: 'Отправить код снова',
      finishTitle: 'Завершите регистрацию',
      loginLabel: 'Логин',
      firstName: 'Имя', lastName: 'Фамилия',
      register: 'Зарегистрироваться',
      e_email: 'Введите корректный email',
      e_pass: 'Пароль — минимум 6 символов',
      e_name: 'Укажите имя',
      e_consent: 'Примите условия',
      e_code: 'Введите 6-значный код',
      e_creds: 'Неверный email или пароль',
      e_taken: 'Email уже занят',
      errnet: 'Ошибка сети. Попробуйте ещё раз.',
      forgotAsk: 'Email для восстановления:',
      forgotSent: 'Если аккаунт существует, мы отправили ссылку на почту.',
      resetTitle: 'Новый пароль',
      resetSub: 'Придумайте пароль минимум 6 символов',
      resetBtn: 'Сохранить пароль',
      resetOk: 'Пароль обновлён. Войдите.',
      resetBad: 'Ссылка недействительна или устарела',
      oauthGoogle: 'Продолжить с Google',
      oauthApple: 'Продолжить с Apple',
      errGoogle: 'Не удалось войти через Google. Попробуйте email или обновите страницу.',
      googleOrigin: 'Google: добавьте https://app.qujat.digital в Authorized JavaScript origins (Google Cloud Console).',
      appleSoon: 'Sign in with Apple ещё не настроен на сервере.',
      appleNeedSafari: 'Вход через Apple доступен в Safari или в приложении Qujat на iPhone.',
      appleInvalid: 'Apple: неверный client id или Return URL. Проверьте Services ID digital.qujat.signin в Apple Developer.',
      appleVerify: 'Apple: не удалось проверить вход. Попробуйте ещё раз или войдите по email.',
    },
    kz: {
      heroTitle: 'Телефондағы бухгалтерия',
      heroSub: 'Құжаттар · салықтар · AI · тегін',
      ctaTitle: 'Құжат жасау',
      ctaSub: 'PDF бір минутта — 1С-сіз',
      signInTitle: 'Кіру',
      signInSub: 'Аккаунтыңыз бар',
      signUpTitle: 'Тіркелу',
      signUpSub: 'Тегін тіркелу',
      footer: '© 2026 Qujat',
      langRu: 'Русский', langKz: 'Қазақша', langEn: 'English',
      welcome: 'Қош келдіңіз',
      welcomeSub: 'Аккаунтыңызға кіріңіз',
      email: 'Email', password: 'Пароль', signIn: 'Кіру',
      forgot: 'Парольді ұмыттыңыз ба?',
      or: 'немесе',
      noAccount: 'Аккаунт жоқ па?', create: 'Тіркелу →',
      hasAccount: 'Аккаунт бар ма?', loginLink: 'Кіру →',
      createAcc: 'Аккаунт жасау',
      createAccSub: 'Бір минутта тегін бастаңыз',
      continue: 'Жалғастыру',
      consent: 'Қабылдаймын',
      terms: 'Шарттар',
      and: 'және',
      privacy: 'Құпиялылық саясаты',
      verifyTitle: 'Поштаны растаңыз',
      verifySub: 'Код жіберілді:',
      resend: 'Кодты қайта жіберу',
      finishTitle: 'Тіркелуді аяқтаңыз',
      loginLabel: 'Логин',
      firstName: 'Аты', lastName: 'Тегі',
      register: 'Тіркелу',
      e_email: 'Дұрыс email енгізіңіз',
      e_pass: 'Пароль — кемінде 6 таңба',
      e_name: 'Атыңызды енгізіңіз',
      e_consent: 'Шарттарды қабылдаңыз',
      e_code: '6 таңбалы кодты енгізіңіз',
      e_creds: 'Email немесе пароль қате',
      e_taken: 'Email бос емес',
      errnet: 'Желі қатесі. Қайта көріңіз.',
      forgotAsk: 'Қалпына келтіру email:',
      forgotSent: 'Аккаунт болса, ссылка жіберілді.',
      resetTitle: 'Жаңа пароль',
      resetSub: 'Кемінде 6 таңба',
      resetBtn: 'Парольді сақтау',
      resetOk: 'Пароль жаңартылды. Кіріңіз.',
      resetBad: 'Ссылка жарамсыз',
      oauthGoogle: 'Google арқылы жалғастыру',
      oauthApple: 'Apple арқылы жалғастыру',
      errGoogle: 'Google арқылы кіру сәтсіз. Email қолданыңыз.',
      googleOrigin: 'Google: https://app.qujat.digital доменін Google Cloud Console-ға қосыңыз.',
      appleSoon: 'Apple арқылы кіру серверде бапталмаған.',
      appleNeedSafari: 'Apple арқылы кіру Safari немесе iPhone қосымшасында.',
      appleInvalid: 'Apple: client id немесе Return URL қате. Apple Developer-де digital.qujat.signin тексеріңіз.',
      appleVerify: 'Apple: кіру расталмады. Email арқылы кіріп көріңіз.',
    },
    en: {
      heroTitle: 'Accounting in your pocket',
      heroSub: 'Documents · taxes · AI · free',
      ctaTitle: 'Create a document',
      ctaSub: 'PDF in a minute — no ERP needed',
      signInTitle: 'Sign in',
      signInSub: 'Already have an account',
      signUpTitle: 'Sign up',
      signUpSub: 'Free registration',
      footer: '© 2026 Qujat',
      langRu: 'Русский', langKz: 'Қазақша', langEn: 'English',
      welcome: 'Welcome back',
      welcomeSub: 'Sign in to your account',
      email: 'Email', password: 'Password', signIn: 'Sign in',
      forgot: 'Forgot password?',
      or: 'or',
      noAccount: 'No account?', create: 'Create →',
      hasAccount: 'Already have an account?', loginLink: 'Sign in →',
      createAcc: 'Create account',
      createAccSub: 'Start free in a minute',
      continue: 'Continue',
      consent: 'I accept the',
      terms: 'Terms',
      and: 'and',
      privacy: 'Privacy Policy',
      verifyTitle: 'Verify your email',
      verifySub: 'Code sent to',
      resend: 'Resend code',
      finishTitle: 'Complete registration',
      loginLabel: 'Login',
      firstName: 'First name', lastName: 'Last name',
      register: 'Sign up',
      e_email: 'Enter a valid email',
      e_pass: 'Password — at least 6 characters',
      e_name: 'Enter your name',
      e_consent: 'Accept the terms',
      e_code: 'Enter the 6-digit code',
      e_creds: 'Invalid email or password',
      e_taken: 'Email already taken',
      errnet: 'Network error. Try again.',
      forgotAsk: 'Email for recovery:',
      forgotSent: 'If an account exists, we sent a link.',
      resetTitle: 'New password',
      resetSub: 'At least 6 characters',
      resetBtn: 'Save password',
      resetOk: 'Password updated. Sign in.',
      resetBad: 'Link invalid or expired',
      oauthGoogle: 'Continue with Google',
      oauthApple: 'Continue with Apple',
      errGoogle: 'Google sign-in failed. Try email or refresh the page.',
      googleOrigin: 'Google: add https://app.qujat.digital to Authorized JavaScript origins in Google Cloud Console.',
      appleSoon: 'Sign in with Apple is not configured on the server yet.',
      appleNeedSafari: 'Apple sign-in works in Safari or the Qujat iPhone app.',
      appleInvalid: 'Apple: invalid client id or Return URL. Check Services ID digital.qujat.signin in Apple Developer.',
      appleVerify: 'Apple: sign-in verification failed. Try email instead.',
    },
  };

  let lang = localStorage.getItem(LANG_KEY) || 'ru';
  if (!STR[lang]) {
    const nav = (navigator.language || 'ru').toLowerCase();
    lang = nav.startsWith('kk') ? 'kz' : nav.startsWith('en') ? 'en' : 'ru';
  }

  let authToken = localStorage.getItem('qujat_token') || '';

  function S() { return STR[lang] || STR.ru; }

  function setToken(t) {
    authToken = t || '';
    if (t) localStorage.setItem('qujat_token', t);
    else localStorage.removeItem('qujat_token');
  }

  function afetch(url, opts) {
    opts = opts || {};
    if (!('credentials' in opts)) opts.credentials = 'include';
    const h = Object.assign({}, opts.headers || {});
    if (authToken) h.Authorization = 'Bearer ' + authToken;
    opts.headers = h;
    return fetch(url, opts);
  }

  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setLang(next) {
    if (!STR[next]) return;
    lang = next;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === 'kz' ? 'kk' : lang;
    if (global.onLangChange) global.onLangChange();
  }

  function cycleLang() {
    const i = LANGS.indexOf(lang);
    setLang(LANGS[(i + 1) % LANGS.length]);
  }

  function mountLangPill(root) {
    const wrap = root.querySelector('.lang-fixed') || root;
    const pill = wrap.querySelector('.lang-pill');
    const menu = wrap.querySelector('.lang-menu');
    if (!pill || !menu) return;

    function renderPill() {
      pill.innerHTML = LANGS.map((l) =>
        `<span class="${l === lang ? 'on' : ''}">${l.toUpperCase()}</span>`
      ).join('');
    }

    function renderMenu() {
      const s = S();
      const labels = { ru: s.langRu, kz: s.langKz, en: s.langEn };
      menu.innerHTML = LANGS.map((l) =>
        `<button type="button" class="lang-opt${l === lang ? ' on' : ''}" data-lang="${l}">` +
        `${labels[l]}${l === lang ? '<span class="tick">✓</span>' : ''}</button>`
      ).join('');
      menu.querySelectorAll('.lang-opt').forEach((btn) => {
        btn.onclick = () => { setLang(btn.dataset.lang); menu.classList.remove('open'); renderPill(); renderMenu(); };
      });
    }

    pill.onclick = (e) => {
      e.stopPropagation();
      menu.classList.toggle('open');
      renderMenu();
    };
    document.addEventListener('click', () => menu.classList.remove('open'));
    renderPill();
    renderMenu();
  }

  async function loadMe() {
    try {
      const r = await afetch(API + '/auth/me', { credentials: 'include' });
      const d = await r.json();
      return d.user || null;
    } catch (e) {
      return null;
    }
  }

  global.QujatPublic = {
    API, STR, LANGS, reEmail, S, lang: () => lang, setLang, cycleLang,
    setToken, afetch, mountLangPill, loadMe, authToken: () => authToken,
  };
})(window);
