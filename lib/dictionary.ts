import type { IconName } from "@/components/Icons";

export type Lang = "sq" | "en";

export type Service = {
  icon: IconName;
  title: string;
  blurb: string;
  points: string[];
  price: string;
};
export type Feature = { icon: IconName; title: string; text: string };
export type Step = { step: string; title: string; text: string };
export type Testimonial = { quote: string; name: string; role: string; initials: string };
export type Doctor = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  badge?: string;
};
export type Stat = { value: number; suffix?: string; decimals?: number; label: string };
export type Faq = { q: string; a: string };

type Content = {
  nav: { home: string; services: string; contact: string; book: string };
  langName: string;
  hero: {
    badge: string;
    title: string;
    highlight: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    reviews: string;
    scroll: string;
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    highlight: string[];
    subtitle: string;
    before: string;
    after: string;
    hint: string;
    caption: string;
  };
  badges: { painless: string };
  marquee: string[];
  stats: Stat[];
  featuresSection: { eyebrow: string; title: string; highlight: string[] };
  features: Feature[];
  servicesPreview: {
    eyebrow: string;
    title: string;
    highlight: string[];
    all: string;
    learnMore: string;
  };
  processSection: { eyebrow: string; title: string; highlight: string[] };
  process: Step[];
  testimonialsSection: { eyebrow: string; title: string; highlight: string[] };
  testimonials: Testimonial[];
  cta: { title: string; text: string; primary: string; call: string };
  services: Service[];
  servicesPage: {
    eyebrow: string;
    title: string;
    highlight: string[];
    subtitle: string;
    approachEyebrow: string;
    approachTitle: string;
    approachHighlight: string[];
    guarantees: { icon: IconName; t: string; d: string }[];
    faqEyebrow: string;
    faqTitle: string;
    faqHighlight: string[];
    faqCtaText: string;
    faqCtaButton: string;
  };
  faqs: Faq[];
  contactPage: {
    eyebrow: string;
    title: string;
    highlight: string[];
    subtitle: string;
    getInTouch: string;
    formTitle: string;
    formHighlight: string[];
    formIntro: string;
    hoursTitle: string;
    hours: { day: string; time: string }[];
    cards: { icon: IconName; label: string; value: string; href: string }[];
    mapName: string;
    mapAddress: string;
    openMaps: string;
  };
  form: {
    name: string;
    namePh: string;
    phone: string;
    phonePh: string;
    email: string;
    emailPh: string;
    service: string;
    servicePh: string;
    notSure: string;
    message: string;
    messagePh: string;
    submit: string;
    sending: string;
    consent: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
  };
  footer: {
    tagline: string;
    clinic: string;
    treatments: string;
    visit: string;
    rights: string;
    crafted: string;
    privacy: string;
    terms: string;
    hours: string;
  };
  team: Doctor[];
  clinic: { phone: string; phoneHref: string; email: string; address: string; hoursShort: string };
};

const ADDRESS = "Rruga e UÇK-së, 30000 Pejë, Kosovë";
const ADDRESS_EN = "UÇK Street, 30000 Peja, Kosovo";
const PHONE = "+383 49 555 333";
const EMAIL = "info@eurodent-ks.com";

export const dict: Record<Lang, Content> = {
  /* =======================================================================
     ALBANIAN (default)
     ======================================================================= */
  sq: {
    nav: { home: "Ballina", services: "Shërbimet", contact: "Rreth nesh & Kontakt", book: "Cakto vizitë" },
    langName: "EN",
    hero: {
      badge: "Ekipi stomatologjik më i dashur i rajonit",
      title: "Stomatologji që ju bën të buzëqeshni",
      highlight: ["buzëqeshni"],
      subtitle:
        "EuroDent bashkon precizionin evropian me kujdes vërtet të butë. Implante, estetikë, ortodonci dhe stomatologji familjare — të gjitha nën një kulm modern e të qetë.",
      ctaPrimary: "Cakto vizitën tënde",
      ctaSecondary: "Shiko trajtimet",
      reviews: "nga 2.300+ vlerësime",
      scroll: "Lëviz poshtë",
    },
    beforeAfter: {
      eyebrow: "Transformime reale",
      title: "Rrëshqit për ta parë ndryshimin",
      highlight: ["ndryshimin"],
      subtitle:
        "Zvarrit ndarësen dhe shiko si duket një buzëqeshje EuroDent — nga e zbehtë dhe e lodhur, në të ndritshme e të shëndetshme.",
      before: "Para",
      after: "Pas",
      hint: "Zvarrit",
      caption: "Dizajn buzëqeshjeje · Faseta porcelani & zbardhim profesional",
    },
    badges: { painless: "Pa dhimbje" },
    marquee: [
      "Implante Dentare",
      "Invisalign®",
      "Faseta Porcelani",
      "Kurora brenda ditës",
      "Imazheri 3D",
      "Stomatologji me qetësim",
      "Zbardhim Dhëmbësh",
      "Kujdes Familjar",
    ],
    stats: [
      { value: 18, suffix: "+", label: "Vite kujdes në rajon" },
      { value: 32000, suffix: "+", label: "Buzëqeshje të shëndetshme" },
      { value: 2, label: "Stomatologë specialistë" },
      { value: 4.9, decimals: 1, label: "Vlerësim mesatar i pacientëve" },
    ],
    featuresSection: { eyebrow: "Pse EuroDent", title: "Kujdes për të cilin ndiheni vërtet mirë", highlight: ["mirë"] },
    features: [
      { icon: "shield", title: "Precizion evropian", text: "Protokolle dhe materiale të besuara në klinikat kryesore të Evropës, të zbatuara në çdo rast." },
      { icon: "heart", title: "Vërtet i butë", text: "Opsione qetësimi, teknika pa dhimbje dhe një ekip i përkushtuar t'ju mbajë rehat." },
      { icon: "sparkle", title: "Teknologji e së ardhmes", text: "Kurora dixhitale brenda ditës, imazheri 3D dhe skanerë intraoralë — pa masa të pakëndshme." },
      { icon: "clock", title: "Koha e respektuar", text: "Termine në kohë, çmime transparente dhe trajtim i përfunduar në më pak vizita." },
    ],
    servicesPreview: { eyebrow: "Çfarë ofrojmë", title: "Një klinikë e plotë nën një kulm", highlight: ["plotë"], all: "Të gjitha shërbimet", learnMore: "Mëso më shumë" },
    processSection: { eyebrow: "Si funksionon", title: "Rrugëtimi yt drejt një buzëqeshjeje më të shëndetshme", highlight: ["shëndetshme"] },
    process: [
      { step: "01", title: "Konsultë", text: "Një bisedë e qetë, skanim i plotë dixhital dhe një pasqyrë e qartë e shëndetit tuaj oral — pa presion." },
      { step: "02", title: "Plan i personalizuar", text: "Hartojmë opsionet dhe kostot paraprakisht, që ju të vendosni me siguri të plotë." },
      { step: "03", title: "Trajtim i butë", text: "Kujdes preciz e komod, i ofruar nga specialisti më i përshtatshëm për ju." },
      { step: "04", title: "Buzëqeshje të qëndrueshme", text: "Kontrolle të vazhdueshme dhe plane higjiene që mbrojnë investimin tuaj për vite." },
    ],
    testimonialsSection: { eyebrow: "Tregime pacientësh", title: "Buzëqeshje për të cilat ia vlen të flitet", highlight: ["flitet"] },
    testimonials: [
      { quote: "Kisha frikë nga dentisti. EuroDent e ndryshoi krejtësisht këtë — implanti im ishte pa dhimbje dhe duket si dhëmb i vërtetë.", name: "Arta Krasniqi", role: "Pacient implanti", initials: "AK" },
      { quote: "Procesi i dizajnimit të buzëqeshjes ishte i jashtëzakonshëm. Më treguan rezultatin para se të fillonim. Investimi më i mirë.", name: "Blerim Gashi", role: "Pacient fasetash", initials: "BG" },
      { quote: "Fëmijët e mi tani kërkojnë vetë të shkojnë. Ekipi është i ngrohtë, klinika e pastër dhe gjithçka funksionon në kohë.", name: "Vjosa Hoxha", role: "Pacient familjar", initials: "VH" },
    ],
    cta: { title: "Gati ta doni përsëri buzëqeshjen tuaj?", text: "Cakto një konsultë të qetë sot. Pa presion, pa gjykim — vetëm këshilla të sinqerta dhe një plan që ju përshtatet.", primary: "Cakto vizitën tënde", call: "Telefono klinikën" },
    services: [
      { icon: "implant", title: "Implante Dentare", blurb: "Zëvendësime të përhershme dhe me pamje natyrale për dhëmbët e munguar, me implante titani të vendosura me precizion kirurgjikal.", points: ["Implant i vetëm & harku i plotë", "Vendosje e udhëhequr nga 3D", "Qëndrueshmëri e përjetshme"], price: "nga 1.200€" },
      { icon: "veneer", title: "Estetikë & Faseta", blurb: "Faseta porcelani dhe bondim të punuara me dorë që riformësojnë, zbardhin dhe përsosin buzëqeshjen tuaj.", points: ["Dizajn dixhital i buzëqeshjes", "Përgatitje minimale", "Rezistente ndaj njollave"], price: "nga 650€" },
      { icon: "braces", title: "Ortodonci", blurb: "Aligner transparentë dhe aparate modernë që drejtojnë dhëmbët në mënyrë diskrete, në një kohë që i përshtatet jetës suaj.", points: ["Aligner të padukshëm", "Fëmijë & të rritur", "Rezultate më të shpejta"], price: "nga 2.400€" },
      { icon: "whitening", title: "Zbardhim Dhëmbësh", blurb: "Zbardhim profesional në karrige dhe në shtëpi që largon vite njollosjeje në një vizitë të vetme.", points: ["Deri në 8 nuanca", "I sigurt për smaltin", "Seancë 60-minutëshe"], price: "nga 290€" },
      { icon: "checkup", title: "Kontrolle & Higjienë", blurb: "Ekzaminime të plota, pastrim dhe kujdes parandalues që largojnë problemet para se të fillojnë.", points: ["Rëntgen dixhital", "Pastrim i butë", "Plan i personalizuar"], price: "nga 40€" },
      { icon: "kids", title: "Familje & Fëmijë", blurb: "Përvojë e qetë e miqësore për gjithë familjen — duke ndërtuar shprehi të shëndetshme që nga dhëmbi i parë.", points: ["Pa ankth", "Argëtuese për fëmijët", "Termine në mbrëmje"], price: "nga 30€" },
    ],
    servicesPage: {
      eyebrow: "Shërbimet",
      title: "Çdo trajtim, i ofruar me ekspertizë",
      highlight: ["ekspertizë"],
      subtitle: "Çfarëdo që i nevojitet buzëqeshjes suaj, specialistët tanë e kanë të mbuluar — me këshilla të sinqerta, çmime transparente dhe kujdes të butë e preciz.",
      approachEyebrow: "Qasja jonë",
      approachTitle: "E thjeshtë, transparente, në anën tuaj",
      approachHighlight: ["transparente"],
      guarantees: [
        { icon: "shield", t: "Garanci 5-vjeçare", d: "Për implante dhe punime të mëdha restauruese." },
        { icon: "clock", t: "Urgjenca brenda ditës", d: "Mbajmë gjithmonë termine të lira për raste urgjente." },
        { icon: "heart", t: "Plane fleksibile pagese", d: "Shpërndani koston e trajtimeve më të mëdha." },
      ],
      faqEyebrow: "Mirë të dihet",
      faqTitle: "Pyetjet, të përgjigjura",
      faqHighlight: ["përgjigjura"],
      faqCtaText: "Ende nuk jeni i sigurt cili trajtim është i duhuri për ju?",
      faqCtaButton: "Flisni me ekipin tonë",
    },
    faqs: [
      { q: "A pranoni pacientë të rinj?", a: "Po — mirëpresim pacientë të rinj çdo javë. Vizita juaj e parë përfshin një ekzaminim të plotë dixhital dhe një plan pa presion." },
      { q: "A do të dhembë trajtimi?", a: "Komoditeti është përparësia jonë. Ofrojmë mpirje të butë, opsione qetësimi dhe teknika të dizajnuara t'ju mbajnë të qetë gjatë gjithë kohës." },
      { q: "Sa do të kushtojë?", a: "Japim oferta transparente e të detajuara para çdo trajtimi, dhe ofrojmë plane fleksibile pagese për rastet më të mëdha." },
      { q: "A trajtoni urgjencat?", a: "Mbajmë termine të lira çdo ditë për urgjencat dentare. Na telefononi dhe do t'ju shohim sa më shpejt të jetë e mundur." },
    ],
    contactPage: {
      eyebrow: "Rreth nesh & Kontakt",
      title: "Njihuni me ekipin pas buzëqeshjes suaj",
      highlight: ["buzëqeshjes"],
      subtitle: "Dy specialistë, një pasion i përbashkët: kujdes preciz, i butë e vërtet njerëzor. Ejani të na thoni përshëndetje.",
      getInTouch: "Na kontaktoni",
      formTitle: "Cakto vizitën tënde sot",
      formHighlight: ["sot"],
      formIntro: "Plotësoni formularin dhe recepsioni ynë do t'ju telefonojë brenda një dite pune. Preferoni të flisni tani? Na gjeni drejtpërdrejt më poshtë.",
      hoursTitle: "Orari i punës",
      hours: [
        { day: "E hënë – E premte", time: "08:00 – 18:00" },
        { day: "E shtunë", time: "09:00 – 14:00" },
        { day: "E diel", time: "Mbyllur" },
      ],
      cards: [
        { icon: "phone", label: "Telefono", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
        { icon: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
        { icon: "pin", label: "Vizito", value: "Pejë, Kosovë", href: "#map" },
      ],
      mapName: "Klinika EuroDent",
      mapAddress: ADDRESS,
      openMaps: "Hap në Google Maps",
    },
    form: {
      name: "Emri i plotë",
      namePh: "Arta Krasniqi",
      phone: "Telefoni",
      phonePh: "+383 4_ ___ ___",
      email: "Email",
      emailPh: "arta@email.com",
      service: "Trajtimi me interes",
      servicePh: "Zgjidhni një trajtim…",
      notSure: "Ende i pasigurt",
      message: "Mesazhi",
      messagePh: "Na tregoni pak për atë që ju nevojitet…",
      submit: "Kërko termin",
      sending: "Duke dërguar…",
      consent: "Duke dërguar, pranoni të kontaktoheni rreth kërkesës suaj.",
      successTitle: "Kërkesa u pranua!",
      successText: "Faleminderit që na kontaktuat. Recepsioni ynë do t'ju telefonojë brenda një dite pune për të konfirmuar terminin.",
      sendAnother: "Dërgo një tjetër",
    },
    footer: {
      tagline: "Ekipi stomatologjik kryesor i rajonit. Precizion evropian, kujdes modern e i butë, dhe buzëqeshje që zgjasin.",
      clinic: "Klinika",
      treatments: "Trajtimet",
      visit: "Na vizitoni",
      rights: "Të gjitha të drejtat e rezervuara.",
      crafted: "Punuar me precizion",
      privacy: "Privatësia",
      terms: "Kushtet",
      hours: "Hën–Pre 08:00–18:00 · Sht 09:00–14:00",
    },
    team: [
      { name: "Dr. Enver Berisha", role: "Themelues & Implantolog Kryesor", bio: "Mbi 25 vite përvojë dhe mijëra implante të vendosura. Themeluesi i EuroDent dhe mentor i ekipit.", initials: "EN", accent: "from-brand-400 to-brand-700", badge: "Themelues" },
      { name: "Dr. Etrit Berisha", role: "Stomatolog Estetik & Ortodont", bio: "Specialist i dizajnit dixhital të buzëqeshjes dhe i aligner-ëve transparentë, duke sjellë teknikat më të reja te çdo pacient.", initials: "ET", accent: "from-mint to-brand-500" },
    ],
    clinic: { phone: PHONE, phoneHref: `tel:${PHONE.replace(/\s/g, "")}`, email: EMAIL, address: ADDRESS, hoursShort: "Hën–Pre 08:00–18:00 · Sht 09:00–14:00" },
  },

  /* =======================================================================
     ENGLISH
     ======================================================================= */
  en: {
    nav: { home: "Home", services: "Services", contact: "About & Contact", book: "Book a visit" },
    langName: "SQ",
    hero: {
      badge: "The region's most-loved dental team",
      title: "Dentistry that makes you smile",
      highlight: ["smile"],
      subtitle:
        "EuroDent blends European precision with genuinely gentle care. Implants, cosmetic, orthodontics and family dentistry — all under one calm, modern roof.",
      ctaPrimary: "Book your visit",
      ctaSecondary: "Explore treatments",
      reviews: "from 2,300+ reviews",
      scroll: "Scroll to explore",
    },
    beforeAfter: {
      eyebrow: "Real transformations",
      title: "Slide to see the difference",
      highlight: ["difference"],
      subtitle:
        "Drag the divider to see what a EuroDent smile looks like — from dull and tired to bright, aligned and healthy.",
      before: "Before",
      after: "After",
      hint: "Drag",
      caption: "Smile design · Porcelain veneers & professional whitening",
    },
    badges: { painless: "Painless care" },
    marquee: [
      "Dental Implants",
      "Invisalign®",
      "Porcelain Veneers",
      "Same-day Crowns",
      "3D Imaging",
      "Sedation Dentistry",
      "Teeth Whitening",
      "Family Care",
    ],
    stats: [
      { value: 18, suffix: "+", label: "Years caring for the region" },
      { value: 32000, suffix: "+", label: "Healthy smiles delivered" },
      { value: 2, label: "Specialist dentists" },
      { value: 4.9, decimals: 1, label: "Average patient rating" },
    ],
    featuresSection: { eyebrow: "Why EuroDent", title: "Care you can actually feel good about", highlight: ["good"] },
    features: [
      { icon: "shield", title: "European precision", text: "Protocols and materials trusted across Europe's leading clinics, applied to every single case." },
      { icon: "heart", title: "Genuinely gentle", text: "Sedation options, numbing-free techniques and a team obsessed with keeping you comfortable." },
      { icon: "sparkle", title: "Future-proof tech", text: "Same-day digital crowns, 3D imaging and intra-oral scanners — no goopy impressions." },
      { icon: "clock", title: "Time respected", text: "On-time appointments, transparent pricing and treatment finished in fewer visits." },
    ],
    servicesPreview: { eyebrow: "What we do", title: "A complete clinic under one roof", highlight: ["complete"], all: "All services", learnMore: "Learn more" },
    processSection: { eyebrow: "How it works", title: "Your journey to a healthier smile", highlight: ["healthier"] },
    process: [
      { step: "01", title: "Consultation", text: "A relaxed chat, a full digital scan, and a clear picture of your oral health — no pressure." },
      { step: "02", title: "Tailored plan", text: "We map out options and costs up front so you decide with total confidence." },
      { step: "03", title: "Gentle treatment", text: "Precise, comfortable care delivered by the specialist best suited to your needs." },
      { step: "04", title: "Lasting smiles", text: "Ongoing check-ins and hygiene plans that protect your investment for years." },
    ],
    testimonialsSection: { eyebrow: "Patient stories", title: "Smiles worth talking about", highlight: ["talking"] },
    testimonials: [
      { quote: "I used to dread the dentist. EuroDent completely changed that — my implant was painless and looks exactly like a real tooth.", name: "Arta Krasniqi", role: "Implant patient", initials: "AK" },
      { quote: "The smile design process was unreal. They showed me the result before we even started. Best money I've ever spent.", name: "Blerim Gashi", role: "Veneers patient", initials: "BG" },
      { quote: "My kids actually ask to go now. The team is warm, the clinic is spotless, and everything runs on time.", name: "Vjosa Hoxha", role: "Family patient", initials: "VH" },
    ],
    cta: { title: "Ready to love your smile again?", text: "Book a relaxed consultation today. No pressure, no judgement — just honest advice and a plan that fits you.", primary: "Book your visit", call: "Call the clinic" },
    services: [
      { icon: "implant", title: "Dental Implants", blurb: "Permanent, natural-looking replacements for missing teeth using titanium implants placed with surgical precision.", points: ["Single & full-arch", "3D-guided placement", "Lifetime durability"], price: "from €1,200" },
      { icon: "veneer", title: "Cosmetic & Veneers", blurb: "Hand-crafted porcelain veneers and bonding that reshape, brighten and perfect your smile.", points: ["Digital smile design", "Minimal prep", "Stain resistant"], price: "from €650" },
      { icon: "braces", title: "Orthodontics", blurb: "Clear aligners and modern braces that straighten teeth discreetly, on a timeline that fits your life.", points: ["Invisible aligners", "Kids & adults", "Faster results"], price: "from €2,400" },
      { icon: "whitening", title: "Teeth Whitening", blurb: "Professional in-chair and take-home whitening that lifts years of staining in a single visit.", points: ["Up to 8 shades", "Enamel-safe", "60-minute session"], price: "from €290" },
      { icon: "checkup", title: "Check-ups & Hygiene", blurb: "Thorough exams, scaling and preventative care that keep problems away before they start.", points: ["Digital X-rays", "Gentle cleaning", "Tailored plan"], price: "from €40" },
      { icon: "kids", title: "Family & Kids", blurb: "A calm, friendly experience for the whole family — building healthy habits from the very first tooth.", points: ["Anxiety-free", "Fun for kids", "Evening slots"], price: "from €30" },
    ],
    servicesPage: {
      eyebrow: "Services",
      title: "Every treatment, expertly delivered",
      highlight: ["expertly"],
      subtitle: "Whatever your smile needs, our specialists have it covered — with honest advice, transparent pricing and gentle, precise care.",
      approachEyebrow: "Our approach",
      approachTitle: "Simple, transparent, on your side",
      approachHighlight: ["transparent"],
      guarantees: [
        { icon: "shield", t: "5-year guarantee", d: "On implants and major restorative work." },
        { icon: "clock", t: "Same-day emergencies", d: "We always keep urgent slots open." },
        { icon: "heart", t: "Flexible payment plans", d: "Spread the cost of larger treatments." },
      ],
      faqEyebrow: "Good to know",
      faqTitle: "Questions, answered",
      faqHighlight: ["answered"],
      faqCtaText: "Still not sure which treatment is right for you?",
      faqCtaButton: "Talk to our team",
    },
    faqs: [
      { q: "Do you take new patients?", a: "Yes — we welcome new patients every week. Your first visit includes a full digital exam and a no-pressure plan." },
      { q: "Will treatment hurt?", a: "Comfort is our priority. We offer gentle numbing, sedation options and techniques designed to keep you relaxed throughout." },
      { q: "How much will it cost?", a: "We give transparent, itemised quotes before any treatment begins, and offer flexible payment plans on larger cases." },
      { q: "Do you handle emergencies?", a: "We keep same-day slots open for dental emergencies. Call us and we'll get you seen as quickly as possible." },
    ],
    contactPage: {
      eyebrow: "About & Contact",
      title: "Meet the team behind your smile",
      highlight: ["smile"],
      subtitle: "Two specialists, one shared obsession: care that's precise, gentle and genuinely human. Come say hello.",
      getInTouch: "Get in touch",
      formTitle: "Book your visit today",
      formHighlight: ["today"],
      formIntro: "Fill in the form and our front desk will call you within one business day. Prefer to talk now? Reach us directly below.",
      hoursTitle: "Opening hours",
      hours: [
        { day: "Monday – Friday", time: "08:00 – 18:00" },
        { day: "Saturday", time: "09:00 – 14:00" },
        { day: "Sunday", time: "Closed" },
      ],
      cards: [
        { icon: "phone", label: "Call us", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
        { icon: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
        { icon: "pin", label: "Visit", value: "Peja, Kosovo", href: "#map" },
      ],
      mapName: "EuroDent Clinic",
      mapAddress: ADDRESS_EN,
      openMaps: "Open in Google Maps",
    },
    form: {
      name: "Full name",
      namePh: "Arta Krasniqi",
      phone: "Phone",
      phonePh: "+383 4_ ___ ___",
      email: "Email",
      emailPh: "arta@email.com",
      service: "Treatment of interest",
      servicePh: "Choose a treatment…",
      notSure: "Not sure yet",
      message: "Message",
      messagePh: "Tell us a little about what you need…",
      submit: "Request appointment",
      sending: "Sending…",
      consent: "By submitting you agree to be contacted about your enquiry.",
      successTitle: "Request received!",
      successText: "Thanks for reaching out. Our front desk will call you within one business day to confirm your appointment.",
      sendAnother: "Send another",
    },
    footer: {
      tagline: "The region's leading dental team. European precision, gentle modern care, and smiles built to last.",
      clinic: "Clinic",
      treatments: "Treatments",
      visit: "Visit us",
      rights: "All rights reserved.",
      crafted: "Crafted with precision",
      privacy: "Privacy",
      terms: "Terms",
      hours: "Mon–Fri 08:00–18:00 · Sat 09:00–14:00",
    },
    team: [
      { name: "Dr. Enver Berisha", role: "Founder & Lead Implantologist", bio: "25+ years and thousands of implants placed. The founder of EuroDent and mentor to the team.", initials: "EN", accent: "from-brand-400 to-brand-700", badge: "Founder" },
      { name: "Dr. Etrit Berisha", role: "Cosmetic Dentist & Orthodontist", bio: "A digital smile-design and clear-aligner specialist, bringing the latest techniques to every patient.", initials: "ET", accent: "from-mint to-brand-500" },
    ],
    clinic: { phone: PHONE, phoneHref: `tel:${PHONE.replace(/\s/g, "")}`, email: EMAIL, address: ADDRESS_EN, hoursShort: "Mon–Fri 08:00–18:00 · Sat 09:00–14:00" },
  },
};
