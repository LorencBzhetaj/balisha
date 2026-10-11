// Përmbajtja e përbashkët e faqes, SQ + EN nga i njëjti burim.
// Rregull: asgjë e shpikur. M('…') = mungon nga klienti; Q('…') = kërkon vendim të klientit.
import { M, Q, PHONE, EMAIL } from './markers.mjs';
export { M, Q, PHONE, EMAIL };
export { services, related } from './services.mjs';

export const site = {
  domain: 'https://balisha.al', // i pakonfirmuar
  domainConfirmed: false,
  name: { sq: 'Studio Legale BALISHA', en: 'Studio Legale BALISHA' },
  short: 'BALISHA',
  tagline: { sq: 'Law Firm', en: 'Law Firm' },
  legalName: M('Emri ligjor i regjistruar', 'Registered legal name'),
  nipt: M('NIPT XXXXXXXX'),
  address: M('Adresa e zyrës', 'Office address'),
  phone: { display: '+355 68 20 06 260', tel: '+355682006260' },
  email: M('email-i i studios', 'studio email'),
  hours: M('Orari i punës', 'Opening hours'),
  year: '2026',
  experienceYears: 20,
  updated: M('data e përditësimit', 'last updated date'),
};

export const langs = {
  sq: { code: 'sq', locale: 'sq_AL', label: 'SQ' },
  en: { code: 'en', locale: 'en_GB', label: 'EN' },
};

// Rrugët e faqeve në çdo gjuhë (çifte për hreflang dhe butonin e gjuhës)
export const routes = {
  home: { sq: '/', en: '/en/' },
  services: { sq: '/sherbimet/', en: '/en/services/' },
  team: { sq: '/ekipi/', en: '/en/team/' },
  about: { sq: '/rreth-nesh/', en: '/en/about/' },
  contact: { sq: '/kontakt/', en: '/en/contact/' },
  privacy: { sq: '/privatesia/', en: '/en/privacy/' },
  cookies: { sq: '/cookies/', en: '/en/cookies/' },
  terms: { sq: '/kushtet/', en: '/en/terms/' },
};

export const t = {
  nav: {
    services: { sq: 'Shërbimet', en: 'Services' },
    team: { sq: 'Ekipi', en: 'Team' },
    about: { sq: 'Rreth nesh', en: 'About' },
    contact: { sq: 'Kontakt', en: 'Contact' },
  },
  book: { sq: 'Rezervo konsultë', en: 'Book a consultation' },
  call: { sq: 'Telefono', en: 'Call us' },
  seeServices: { sq: 'Shiko shërbimet', en: 'See our services' },
  readMore: { sq: 'Lexo më shumë', en: 'Read more' },
  openPage: { sq: 'Hap faqen e shërbimit', en: 'Open the service page' },
  allServices: { sq: 'Të gjitha shërbimet', en: 'All services' },
  home: { sq: 'Fillimi', en: 'Home' },
  menu: { sq: 'Menuja', en: 'Menu' },
  close: { sq: 'Mbyll', en: 'Close' },
  skip: { sq: 'Kalo te përmbajtja', en: 'Skip to content' },
  switchLang: { sq: 'Read in English', en: 'Lexo në shqip' },
  phone: { sq: 'Telefon', en: 'Phone' },
  email: { sq: 'Email', en: 'Email' },
  address: { sq: 'Adresa', en: 'Address' },
  hours: { sq: 'Orari', en: 'Hours' },
  draft: { sq: 'Draft për rishikim nga studioja', en: 'Draft for review by the studio' },
  updated: { sq: 'Përditësuar më', en: 'Last updated' },
  sections: { sq: 'Seksionet', en: 'Sections' },
  audience: {
    all: { sq: 'Të gjitha', en: 'All' },
    individ: { sq: 'Për individë', en: 'For individuals' },
    biznes: { sq: 'Për biznese', en: 'For businesses' },
  },
  footer: {
    services: { sq: 'Shërbimet', en: 'Services' },
    studio: { sq: 'Studioja', en: 'The studio' },
    legal: { sq: 'Ligjore', en: 'Legal' },
    privacy: { sq: 'Privatësia', en: 'Privacy' },
    cookies: { sq: 'Cookies', en: 'Cookies' },
    terms: { sq: 'Kushtet', en: 'Terms' },
  },
  service: {
    related: { sq: 'Shërbime të lidhura', en: 'Related services' },
    sideTitle: { sq: 'Flisni me një ekspert ligjor', en: 'Talk to a legal expert' },
    sideText: {
      sq: 'Ne do t’ju japim alternativat më të mira dhe ju do të zgjidhni më të favorshmen për ju.',
      en: 'We will give you the best alternatives, and you will choose the one that suits you best.',
    },
  },
};

// Teksti i CTA-së: fjali nga burimi i klientit
export const cta = {
  title: { sq: 'Mos hezitoni të na kontaktoni', en: 'Do not hesitate to contact us' },
  text: {
    sq: 'Takimi me ekspertët financiarë dhe ligjorë do të shënojë fundin e stresit dhe të problemeve që keni me detyrimet financiare.',
    en: 'Meeting our financial and legal experts will mark the end of the stress and problems you have with your financial obligations.',
  },
};

// Përvoja me shoqëri tregtare (nga teksti "Për shoqëritë tregtare")
export const companies = [
  { name: 'Capital Invest sha', now: 'MiA Finance', role: { sq: 'Bashkëthemelues dhe menaxhim', en: 'Co-founder and management' }, field: { sq: 'Institucion financiar mikrokredie', en: 'Microcredit financial institution' } },
  { name: 'Capital Pay shpk', role: { sq: 'Themelues dhe administrator', en: 'Founder and administrator' }, field: { sq: 'Tregu i stock exchange', en: 'Stock exchange market' } },
  { name: 'SiCred sha', role: { sq: 'Bashkëthemelues dhe menaxhim', en: 'Co-founder and management' }, field: { sq: 'Shoqëri sigurimi jete', en: 'Life insurance company' } },
  { name: 'Capital Pension sha', now: 'SIGAL Pension sha', role: { sq: 'Bashkëthemelues dhe menaxhim', en: 'Co-founder and management' }, field: { sq: 'Tregu i pensioneve private', en: 'Private pensions market' } },
];

export const experts = {
  types: {
    sq: ['Ligjorë', 'Financiarë', 'Kontabilistë', 'Vlerësues', 'Zgjidhje borxhesh', 'Administratorë falimenti'],
    en: ['Legal', 'Financial', 'Accounting', 'Valuation', 'Debt resolution', 'Bankruptcy administration'],
  },
  focus: {
    sq: ['Çështjet tregtare', 'Pronësia intelektuale', 'Licencimi', 'Pasuritë e paluajtshme', 'Ligji i punës', 'Ligji i falimentit', 'Ligji doganor'],
    en: ['Commercial matters', 'Intellectual property', 'Licensing', 'Real estate', 'Employment law', 'Bankruptcy law', 'Customs law'],
  },
};

export const home = {
  eyebrow: { sq: 'Studio Legale BALISHA · Law Firm', en: 'Studio Legale BALISHA · Law Firm' },
  // Titull përmbledhës i shërbimeve reale — për miratim nga klienti
  title: { sq: 'Zgjidhje ligjore për borxhin, kreditë, falimentin dhe sigurimet.', en: 'Legal solutions for debt, loans, bankruptcy and insurance.' },
  lead: {
    sq: 'Studio Legale BALISHA është e përgatitur për t’ju ndihmuar të merrni nën kontroll problemet e borxhit dhe për të mbajtur pasuritë tuaja.',
    en: 'Studio Legale BALISHA is ready to help you take control of your debt problems and keep your assets.',
  },
  meta: {
    sq: 'Studio Legale BALISHA: ekzekutimi i kolateralit, zgjidhje borxhi për individë dhe biznese, ristrukturim kredie, statusi i kredisë, falimenti, shoqëri tregtare dhe sigurime.',
    en: 'Studio Legale BALISHA: collateral enforcement, debt solutions for individuals and businesses, loan restructuring, credit status, bankruptcy, companies and insurance.',
  },
  servicesEyebrow: { sq: 'Shërbimet', en: 'Services' },
  servicesTitle: { sq: 'Si ju ndihmojmë', en: 'How we can help' },
  servicesSub: { sq: 'Klikoni një kartë për të lexuar të gjithë tekstin.', en: 'Click a card to read the full text.' },
  proofEyebrow: { sq: 'Përvoja', en: 'Experience' },
  proofTitle: { sq: '20 vjet pranë shoqërive tregtare', en: '20 years alongside commercial companies' },
  proofSub: {
    sq: 'Studio Legale „BALISHA” është subjekt me veprimtari të gjerë pranë shoqërive tregtare.',
    en: 'Studio Legale “BALISHA” has broad experience working with commercial companies.',
  },
  expertsTitle: { sq: 'Ekspertët tanë', en: 'Our experts' },
  today: { sq: 'sot', en: 'today' },
};

export const servicesHub = {
  title: { sq: 'Shërbimet', en: 'Services' },
  lead: {
    sq: 'Nga ndalimi i ekzekutimit të kolateralit deri te falimenti dhe sigurimet. Ne do t’ju japim alternativat më të mira dhe ju do të zgjidhni më të favorshmen për ju.',
    en: 'From stopping collateral enforcement to bankruptcy and insurance. We will give you the best alternatives, and you will choose the one that suits you best.',
  },
  meta: {
    sq: 'Shërbimet e Studio Legale BALISHA për individë dhe biznese: kolateral, borxhe, ristrukturim kredie, statusi i kredisë, falimenti, shoqëri tregtare, sigurime.',
    en: 'Studio Legale BALISHA services for individuals and businesses: collateral, debt, loan restructuring, credit status, bankruptcy, companies, insurance.',
  },
};

export const teamPage = {
  title: { sq: 'Ekipi', en: 'Team' },
  lead: {
    sq: 'Ekspertët tanë janë nga më të ndryshmit, duke filluar nga ata ligjorë, financiarë, kontabilistë, vlerësues, zgjidhje borxhesh, administratorë falimenti etj.',
    en: 'Our experts come from many disciplines: legal, financial, accounting, valuation, debt resolution, bankruptcy administration and more.',
  },
  meta: {
    sq: 'Ekipi i Studio Legale BALISHA: ekspertë ligjorë, financiarë, kontabilistë, vlerësues dhe administratorë falimenti.',
    en: 'The Studio Legale BALISHA team: legal, financial, accounting, valuation and bankruptcy administration experts.',
  },
  peopleTitle: { sq: 'Njerëzit', en: 'People' },
  profilesTitle: { sq: 'Profilet e ekspertëve', en: 'Expert profiles' },
  focusTitle: { sq: 'Fushat ku fokusohen', en: 'Areas of focus' },
};

// Ekipi: asnjë person real ende — vend-mbajtës deri sa klienti të dërgojë të dhënat
export const team = [
  { name: M('Emër Mbiemër', 'Full name'), role: M('Roli', 'Role'), area: M('Fusha', 'Field') },
  { name: M('Emër Mbiemër', 'Full name'), role: M('Roli', 'Role'), area: M('Fusha', 'Field') },
  { name: M('Emër Mbiemër', 'Full name'), role: M('Roli', 'Role'), area: M('Fusha', 'Field') },
  { name: M('Emër Mbiemër', 'Full name'), role: M('Roli', 'Role'), area: M('Fusha', 'Field') },
];

export const aboutPage = {
  title: { sq: 'Rreth nesh', en: 'About us' },
  lead: {
    sq: 'Me një eksperiencë 20-vjeçare, kemi një përvojë të vlefshme për të përfaqësuar kompani që nga krijimi deri në shitjen e tyre.',
    en: 'With 20 years of experience, we have valuable expertise in representing companies from their creation to their sale.',
  },
  meta: {
    sq: 'Studio Legale BALISHA: 20 vjet përvojë pranë shoqërive tregtare, në financë, sigurime dhe pensione private.',
    en: 'Studio Legale BALISHA: 20 years of experience with commercial companies in finance, insurance and private pensions.',
  },
  approachTitle: { sq: 'Si punojmë', en: 'How we work' },
  approach: {
    sq: [
      'Ne do t’ju japim alternativat më të mira dhe ju do të zgjidhni më të favorshmen për ju.',
      'Ekspertët tanë, bazuar në informacionet, do të analizojnë pozicionin tuaj financiar dhe më pas do t’ju rekomandojnë një strategji sa më të favorshme.',
      'Krenohemi që me eksperiencën dhe profesionalizmin tonë veprojmë në mënyrë efikase dhe të përkryer, ku në konkluzion u kursejmë kohë dhe para klientëve tanë.',
    ],
    en: [
      'We will give you the best alternatives, and you will choose the one that suits you best.',
      'Based on the information, our experts will analyse your financial position and then recommend the most favourable strategy.',
      'We are proud that, with our experience and professionalism, we work efficiently and thoroughly, ultimately saving our clients time and money.',
    ],
  },
  representTitle: { sq: 'Kë përfaqësojmë', en: 'Who we represent' },
  represent: {
    sq: 'Kemi përfaqësuar në çështjet ligjore, në ndërmjetësim etj. kompani të vogla, të mesme dhe të mëdha, me kapital privat dhe ato publike. Specialistët tanë angazhohen si këshilltarë të jashtëm për kompanitë publike dhe private, me kapital të vogël, të mesëm dhe të madh.',
    en: 'We have represented small, medium and large companies, both privately held and public, in legal matters, mediation and more. Our specialists act as external advisers to public and private companies of small, medium and large capital.',
  },
};

export const contactPage = {
  title: { sq: 'Rezervoni një konsultë', en: 'Book a consultation' },
  lead: {
    sq: 'Na besoni zgjidhjen e problemeve që keni me borxhin: na dërgoni të dhënat dhe do të angazhohemi për zgjidhjen e tyre.',
    en: 'Trust us with your debt problems: send us the details and we will work on resolving them.',
  },
  meta: {
    sq: 'Kontaktoni Studio Legale BALISHA: telefon +355 68 20 06 260. Rezervoni një konsultë për borxhin, kreditë, falimentin ose sigurimet.',
    en: 'Contact Studio Legale BALISHA: phone +355 68 20 06 260. Book a consultation on debt, loans, bankruptcy or insurance.',
  },
  form: {
    name: { sq: 'Emri dhe mbiemri', en: 'Full name' },
    phone: { sq: 'Telefoni', en: 'Phone' },
    email: { sq: 'Email', en: 'Email' },
    service: { sq: 'Shërbimi', en: 'Service' },
    choose: { sq: 'Zgjidhni (opsionale)', en: 'Choose (optional)' },
    message: { sq: 'Përshkrim i shkurtër i rastit', en: 'Short description of your case' },
    consent: {
      sq: ['Pranoj që të dhënat e mia të përdoren vetëm për t’iu përgjigjur kërkesës sime (', { link: 'privacy', label: 'Politika e privatësisë' }, ').'],
      en: ['I agree that my data will be used only to respond to my request (', { link: 'privacy', label: 'Privacy policy' }, ').'],
    },
    send: { sq: 'Dërgo kërkesën', en: 'Send request' },
    required: { sq: 'Plotësoni fushat e shënuara dhe pranoni kushtet.', en: 'Please complete the marked fields and accept the terms.' },
    staging: {
      sq: 'Formulari është në staging: kërkesa nuk u dërgua. Lidhja me email-in e studios vendoset para publikimit.',
      en: 'The form is in staging: your request was not sent. Delivery to the studio’s email is set up before launch.',
    },
    phoneOrEmail: { sq: 'Lini të paktën telefonin ose email-in.', en: 'Leave at least your phone number or email.' },
  },
  mapTitle: { sq: 'Harta', en: 'Map' },
  mapPending: { sq: 'Harta shfaqet sapo të kemi adresën e zyrës.', en: 'The map will appear once we have the office address.' },
};

// Faqet ligjore — DRAFT për rishikim nga studioja (asnjë fakt i shpikur; ato që mungojnë janë M)
export const legal = {
  privacy: {
    title: { sq: 'Politika e privatësisë', en: 'Privacy policy' },
    meta: { sq: 'Si i përdor Studio Legale BALISHA të dhënat personale që na dërgoni.', en: 'How Studio Legale BALISHA uses the personal data you send us.' },
    sections: [
      {
        h: { sq: 'Kush jemi', en: 'Who we are' },
        body: {
          sq: [[M('Emri ligjor i regjistruar', 'Registered legal name'), ' (Studio Legale BALISHA), ', M('NIPT XXXXXXXX'), ', me adresë ', M('Adresa e zyrës', 'Office address'), ', është kontrolluesi i të dhënave për këtë faqe.']],
          en: [[M('Emri ligjor i regjistruar', 'Registered legal name'), ' (Studio Legale BALISHA), ', M('NIPT XXXXXXXX'), ', at ', M('Adresa e zyrës', 'Office address'), ', is the data controller for this website.']],
        },
      },
      {
        h: { sq: 'Të dhënat që mbledhim', en: 'Data we collect' },
        body: {
          sq: ['Vetëm të dhënat që na dërgoni vetë: përmes formularit të kontaktit (emri, telefoni, email-i, shërbimi që ju intereson dhe përshkrimi i rastit), ose kur na telefononi apo na shkruani.'],
          en: ['Only the data you send us yourself: through the contact form (name, phone, email, the service you are interested in and a description of your case), or when you call or write to us.'],
        },
      },
      {
        h: { sq: 'Pse i përdorim', en: 'Why we use it' },
        body: {
          sq: ['Për t’iu përgjigjur kërkesës suaj dhe, nëse vendosni të bashkëpunoni me ne, për t’ju ofruar shërbimin ligjor. Nuk i shesim dhe nuk i ndajmë të dhënat tuaja me palë të treta për qëllime marketingu.'],
          en: ['To respond to your request and, if you decide to work with us, to provide the legal service. We do not sell your data or share it with third parties for marketing purposes.'],
        },
      },
      {
        h: { sq: 'Sa kohë i ruajmë', en: 'How long we keep it' },
        body: { sq: [['Afati i ruajtjes: ', M('afati i ruajtjes së të dhënave', 'data retention period'), '.']], en: [['Retention period: ', M('afati i ruajtjes së të dhënave', 'data retention period'), '.']] },
      },
      {
        h: { sq: 'Cookies', en: 'Cookies' },
        body: {
          sq: [['Kjo faqe aktualisht nuk vendos cookies dhe nuk përdor analitikë. Shihni ', { link: 'cookies', label: 'Politikën e cookies' }, '.']],
          en: [['This website currently sets no cookies and uses no analytics. See the ', { link: 'cookies', label: 'Cookie policy' }, '.']],
        },
      },
      {
        h: { sq: 'Të drejtat tuaja', en: 'Your rights' },
        body: {
          sq: ['Keni të drejtë të kërkoni akses, korrigjim ose fshirje të të dhënave tuaja dhe të kundërshtoni përpunimin e tyre. Keni gjithashtu të drejtë të ankoheni te Komisioneri për të Drejtën e Informimit dhe Mbrojtjen e të Dhënave Personale.'],
          en: ['You have the right to request access to, correction or deletion of your data, and to object to its processing. You also have the right to complain to the Albanian Commissioner for the Right to Information and Personal Data Protection.'],
        },
      },
      {
        h: { sq: 'Kontakt', en: 'Contact' },
        body: { sq: [['Për çdo pyetje mbi privatësinë: ', PHONE, ' · ', EMAIL, '.']], en: [['For any privacy question: ', PHONE, ' · ', EMAIL, '.']] },
      },
    ],
  },
  cookies: {
    title: { sq: 'Politika e cookies', en: 'Cookie policy' },
    meta: { sq: 'Cookies që përdor faqja e Studio Legale BALISHA.', en: 'Cookies used by the Studio Legale BALISHA website.' },
    sections: [
      {
        h: { sq: 'Çfarë janë cookies', en: 'What cookies are' },
        body: {
          sq: ['Cookies janë skedarë të vegjël që një faqe mund të ruajë në shfletuesin tuaj.'],
          en: ['Cookies are small files a website can store in your browser.'],
        },
      },
      {
        h: { sq: 'Cookies në këtë faqe', en: 'Cookies on this website' },
        body: {
          sq: ['Kemi verifikuar faqen në shfletues: aktualisht nuk vendoset asnjë cookie dhe nuk ngarkohet asnjë shërbim i palëve të treta (analitikë, harta, video).'],
          en: ['We have checked the website in the browser: it currently sets no cookies and loads no third-party services (analytics, maps, video).'],
        },
        table: true,
      },
      {
        h: { sq: 'Ndryshimet', en: 'Changes' },
        body: {
          sq: ['Nëse në të ardhmen shtohen analitika ose harta, ato aktivizohen vetëm pas pëlqimit tuaj dhe kjo tabelë përditësohet.'],
          en: ['If analytics or maps are added in future, they will only be activated after your consent and this table will be updated.'],
        },
      },
    ],
    table: {
      head: { sq: ['Cookie', 'Qëllimi', 'Kohëzgjatja'], en: ['Cookie', 'Purpose', 'Duration'] },
      empty: { sq: 'Asnjë cookie aktualisht.', en: 'No cookies at present.' },
    },
  },
  terms: {
    title: { sq: 'Kushtet e përdorimit', en: 'Terms of use' },
    meta: { sq: 'Kushtet e përdorimit të faqes së Studio Legale BALISHA.', en: 'Terms of use of the Studio Legale BALISHA website.' },
    sections: [
      {
        h: { sq: 'Informacion i përgjithshëm', en: 'General information' },
        body: {
          sq: ['Përmbajtja e kësaj faqeje ka qëllim informues dhe nuk përbën këshillë ligjore për një rast konkret. Marrëdhënia avokat–klient krijohet vetëm me marrëveshje të veçantë.'],
          en: ['The content of this website is for information only and does not constitute legal advice on any specific case. A lawyer–client relationship is created only by a separate agreement.'],
        },
      },
      {
        h: { sq: 'Komunikimi përmes faqes', en: 'Communicating through the website' },
        body: {
          sq: ['Mos na dërgoni informacion konfidencial përmes formularit para se të keni folur me ne.'],
          en: ['Please do not send confidential information through the form before you have spoken with us.'],
        },
      },
      {
        h: { sq: 'Pronësia e përmbajtjes', en: 'Ownership of content' },
        body: {
          sq: ['Tekstet dhe elementet grafike të kësaj faqeje i përkasin Studio Legale BALISHA dhe nuk mund të riprodhohen pa leje.'],
          en: ['The texts and graphics on this website belong to Studio Legale BALISHA and may not be reproduced without permission.'],
        },
      },
      {
        h: { sq: 'Ligji i zbatueshëm', en: 'Governing law' },
        body: {
          sq: ['Për këto kushte zbatohet legjislacioni i Republikës së Shqipërisë.'],
          en: ['These terms are governed by the laws of the Republic of Albania.'],
        },
      },
    ],
  },
};

export const notFound = {
  title: { sq: 'Faqja nuk u gjet', en: 'Page not found' },
  lead: {
    sq: 'Faqja që kërkuat nuk ekziston ose është zhvendosur.',
    en: 'The page you are looking for does not exist or has moved.',
  },
  search: { sq: 'Kërko në faqe', en: 'Search the site' },
};
