// Shërbimet e Studio Legale BALISHA — teksti i plotë i klientit (SQ), me drejtshkrim të korrigjuar.
// EN = përkthimi ynë, për rishikim nga klienti.
// Blloqet: string|array → paragraf · {h} → nëntitull · {ul} → listë · {ol, type} → listë e numëruar
import { Q, PHONE, EMAIL } from './markers.mjs';

const CS = (sq, en) => Q(sq, en, 'Në tekstin origjinal shkruhet "Capital Solution". A duhet "Studio Legale BALISHA"?');

export const services = [
  /* 1 ------------------------------------------------------------------ */
  {
    id: 'kolateral',
    icon: 'stop',
    alert: true,
    audience: ['individ', 'biznes'],
    slug: { sq: 'ekzekutimi-i-kolateralit', en: 'collateral-enforcement' },
    name: { sq: 'Ndal! Ekzekutimi i kolateralit', en: 'Stop! Collateral enforcement' },
    short: {
      sq: 'Keni marrë njoftim për ekzekutimin e kolateralit? Keni përafërsisht 6 muaj kohë për ta ndaluar procedurën.',
      en: 'Received a notice of collateral enforcement? You have roughly 6 months to stop the procedure.',
    },
    body: {
      sq: [
        'Institucionet financiare (bankat, subjektet financiare jo-banka, institucionet e mikrokredisë, shoqëritë e kursim-kreditit etj.) zakonisht, pasi klienti shfaq vështirësi në pagesën e kësteve, angazhohen menjëherë në ekzekutimin e kolateralit.',
        'Bëni kujdes! Vlerësoni çdo njoftim të kredituesit lidhur me detyrimet e palikuiduara, pasi subjektet bankare, duke e pasur huanë të mbrojtur me anë të kolateralit, luajnë me afatet.',
        'Nëse keni marrë njoftim për ekzekutimin e kolateralit, afati maksimal deri në ekzekutimin e kolateralit është përafërsisht 6 muaj kohë. Kjo është koha efektive që ju mund ta stoponi procedurën. Nëse pritja zgjatet ose neglizhenca juaj „trimërohet”, pasojat do të jenë gjithnjë e më të mëdha. Detyrimet shtohen dhe pakësohen shanset që me vendim gjyqësor ju të merrni plan të ri pagesash dhe të merrni në posedim pronën që keni vendosur kolateral.',
        'Ndihma më e mirë për të ndaluar ekzekutimin e pasurive të paluajtshme është të kontaktoni një ekspert ligjor dhe të diskutoni mbi opsionet që mund të keni.',
        'Studio BALISHA është e përgatitur për t’ju ndihmuar të merrni nën kontroll problemet e borxhit dhe për të mbajtur pasuritë tuaja. Ne do t’ju japim alternativat më të mira dhe ju do të zgjidhni më të favorshmen për ju.',
      ],
      en: [
        'Financial institutions (banks, non-bank financial entities, microcredit institutions, savings and credit associations, etc.) usually move straight to enforcing the collateral as soon as a client has difficulty paying their instalments.',
        'Be careful! Assess every notice from the lender about unpaid obligations: because the loan is protected by collateral, banks play with the deadlines.',
        'If you have received a notice of collateral enforcement, the maximum time until the collateral is enforced is roughly 6 months. This is the effective window in which you can stop the procedure. If you wait longer, or your neglect “grows bolder”, the consequences only get bigger. The debt grows, and the chances shrink of obtaining a new payment plan by court decision and of keeping possession of the property you pledged as collateral.',
        'The best help in stopping the enforcement against real estate is to contact a legal expert and discuss the options you may have.',
        'Studio BALISHA is ready to help you take control of your debt problems and keep your assets. We will give you the best alternatives, and you will choose the one that suits you best.',
      ],
    },
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: 'borxh-individ',
    icon: 'person',
    audience: ['individ'],
    slug: { sq: 'zgjidhje-borxhi-individ', en: 'debt-solutions-individuals' },
    name: { sq: 'Zgjidhje borxhi për individë', en: 'Debt solutions for individuals' },
    short: {
      sq: 'Lehtësim i borxhit sipas situatës suaj financiare, me rrugë praktike dhe ligjore për ta ristrukturuar.',
      en: 'Debt relief tailored to your financial situation, with practical and legal routes to restructure it.',
    },
    body: {
      sq: [
        'Çdokujt në jetë i ndodh që të përballet me pyetjet e përditshme:',
        {
          ul: [
            'Jeni i papunë dhe nuk keni asnjë mënyrë për të likuiduar faturat',
            'Keni përfituar overdraft dhe/ose kartë krediti dhe papritur jeni në pamundësi për të likuiduar detyrimet që rrjedhin',
            'Institucionet financiare nuk pranojnë të komunikojnë me ju për të zgjidhur problemet e krijuara',
            'Jeni listuar nga agjencitë e mbledhjes së borxheve, nga përmbaruesit, për detyrimet e prapambetura',
            'Njerëz apo kompani të panjohura ju telefonojnë për detyrimet e krijuara',
            'Ndodh të jeni në situatën kur ju mbahen të ardhurat nga paga që ju merrni',
            'Ka filluar ekzekutimi i kolateralit që keni vendosur pranë institucionit financiar',
            'Makina riposedohet nga kreditori',
          ],
        },
        'Nëse individi përballet me një ose disa nga këto probleme, kuptohet që pozicionimi i tij në jetë bëhet tepër i vështirë. Apelojmë të mos hezitoni, por të bashkëpunoni me ne.',
        'Menjëherë do të angazhohemi për lehtësimin e borxhit që u përshtatet qëllimeve tuaja legale, në rrjedhojë të vlerësimit të situatës suaj financiare. Hapi i parë është gjetja e mundësive, e modaliteteve praktike dhe ligjore për të ristrukturuar borxhin. Kohëzgjatja e ristrukturimit mund të jetë në varësi të mundësive tuaja për të likuiduar detyrimet.',
        'Nëpërmjet procedurës ligjore do të bëjmë të mundur që disa nga detyrimet të shkarkohen, që do të thotë të mos paguhen. Të gjitha këto do të bëjnë që ju të ndiheni të qetë dhe jo të stresuar, çka do të thotë një fillim i ri për ju.',
        ['Mos hezitoni të na kontaktoni: ', PHONE, '. Takimi me ekspertët financiarë dhe ligjorë do të shënojë fundin e stresit dhe të problemeve që keni me detyrimet financiare.'],
      ],
      en: [
        'At some point in life, anyone can find themselves facing everyday questions like these:',
        {
          ul: [
            'You are unemployed and have no way of paying your bills',
            'You took an overdraft and/or a credit card and suddenly cannot pay the resulting debt',
            'Financial institutions refuse to talk to you to resolve the problems that have arisen',
            'You have been listed by debt collection agencies or bailiffs for outstanding debts',
            'Unknown people or companies call you about your debts',
            'Part of your salary is being withheld',
            'Enforcement has begun on the collateral you pledged with a financial institution',
            'Your car is being repossessed by the creditor',
          ],
        },
        'When a person faces one or more of these problems, their situation in life clearly becomes very difficult. We urge you not to hesitate, but to work with us.',
        'We will immediately work on debt relief that fits your legal goals, based on an assessment of your financial situation. The first step is to find the possibilities, and the practical and legal arrangements, to restructure the debt. How long the restructuring takes may depend on your ability to pay off the obligations.',
        'Through legal procedure we will make it possible for some of the obligations to be discharged, meaning they do not have to be paid. All of this will let you feel calm rather than stressed: a fresh start for you.',
        ['Do not hesitate to contact us: ', PHONE, '. Meeting our financial and legal experts will mark the end of the stress and problems you have with your financial obligations.'],
      ],
    },
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: 'borxh-biznes',
    icon: 'briefcase',
    audience: ['biznes'],
    slug: { sq: 'zgjidhje-borxhi-biznes', en: 'debt-solutions-business' },
    name: { sq: 'Zgjidhje borxhi për biznese', en: 'Debt solutions for businesses' },
    short: {
      sq: 'Kur mbaron likuiditeti: zgjidhje për pagat, kreditë, tatimet dhe llogaritë e bllokuara.',
      en: 'When cash runs out: solutions for payroll, loans, taxes and frozen accounts.',
    },
    body: {
      sq: [
        'Në çdo kohë, biznesi (i madh apo i vogël) përballet me një sërë nevojash, ku në rrjedhojë pjesa më e madhe konvergojnë te likuiditeti:',
        {
          ul: [
            'Të ka mbaruar gjendja cash',
            'Nuk paguani dot detyrimet ndaj punonjësve (paga, sigurime etj.)',
            'Kësti i kredisë ju vendos në situatë të vështirë financiare për vijimin e veprimtarisë',
            'Doni të evitoni një përballje të panevojshme me qiradhënësin për mospagesë',
            'Gjobat në tatime/taksa, nëse nuk i paguani, do të vazhdojnë të rriten',
            'Shoqëritë e mbledhjes së borxhit ju bezdisin (keni detyrime ndaj kreditorëve etj.)',
            'Keni marrë njoftim se llogaritë tuaja janë bllokuar nga përmbaruesit',
          ],
        },
        'Konfirmimi i njërës nga këto situata, ose i disa prej tyre, nuk duhet të sjellë shqetësime në menaxhim. Adresohu te Studio Legale BALISHA dhe menjëherë do të kesh në dispozicion zgjidhje.',
        'Personeli i studios sonë është i specializuar për të gjetur zgjidhje për borxhin, i aftë për t’ju këshilluar, si dhe në konkluzion për të marrë përsipër përfaqësimin e subjektit tuaj në zgjidhjen e problemeve.',
        ['Shumë i rëndësishëm është marrja e vendimit nëse biznesi duhet të ristrukturohet apo të likuidohet. Kjo është edhe situata më kritike për pronarët. Prandaj ', CS('studio Capital Solution', 'Capital Solution'), ' ju vjen në ndihmë për të konkluduar sa më arsyeshëm, me sa më pak pasoja negative për biznesin dhe në rrjedhojë për pronarin ose pronarët.'],
        'Ekspertët ligjorë dhe kontabël janë të gatshëm të përballen me sukses ndaj çdo padie të ngritur lidhur me detyrimet e prapambetura. Ata janë të aftë të ndalojnë çdo ekzekutim apo bllokim pasurie të biznesit tuaj. Nëse biznesi juaj është i detyruar të shesë asete, ne do t’ju asistojmë me ekspertët më të mirë ligjorë dhe financiarë që zyra jonë ka.',
        'Na besoni zgjidhjen e problemeve që keni me borxhin, na dërgoni të dhënat dhe në kohë rekord do të angazhohemi për zgjidhjen e tyre.',
      ],
      en: [
        'At any time, a business (large or small) faces a range of needs, most of which ultimately come down to liquidity:',
        {
          ul: [
            'You have run out of cash',
            'You cannot pay your obligations to employees (salaries, social insurance, etc.)',
            'The loan instalment puts the continuation of your business in financial difficulty',
            'You want to avoid an unnecessary confrontation with your landlord over non-payment',
            'Tax penalties will keep growing if you do not pay them',
            'Debt collection companies are harassing you (you owe creditors, etc.)',
            'You have been notified that your accounts have been frozen by bailiffs',
          ],
        },
        'Facing one or several of these situations should not unsettle your management. Turn to Studio Legale BALISHA and solutions will be available to you straight away.',
        'Our staff specialise in finding solutions to debt, are able to advise you and, ultimately, to take on the representation of your business in resolving the problems.',
        ['Deciding whether a business should be restructured or liquidated is very important. It is also the most critical moment for the owners. That is why ', CS('studio Capital Solution', 'Capital Solution'), ' helps you reach the most reasonable conclusion, with as few negative consequences as possible for the business and therefore for its owner or owners.'],
        'Our legal and accounting experts are ready to successfully face any lawsuit brought over outstanding debts. They are able to stop any enforcement or freezing of your business’s assets. If your business is forced to sell assets, we will assist you with the best legal and financial experts our office has.',
        'Trust us with your debt problems: send us the details and we will work on resolving them in record time.',
      ],
    },
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: 'ristrukturim',
    icon: 'refresh',
    audience: ['individ', 'biznes'],
    slug: { sq: 'ristrukturim-kredie', en: 'loan-restructuring' },
    name: { sq: 'Ristrukturim kredie', en: 'Loan restructuring' },
    short: {
      sq: 'Modifikim i marrëveshjes së kredisë: afat më i gjatë, normë e re interesi, heqje tarifash dhe penalitetesh.',
      en: 'Changing your loan agreement: a longer term, a new interest rate, waived fees and penalties.',
    },
    body: {
      sq: [
        'Ristrukturim kredie ose modifikim marrëveshjeje kredie nënkupton modifikimin e marrëveshjes ekzistuese të huasë midis kredidhënësit dhe kredimarrësit. Në çdo rast palët kontraktuese mbeten të njëjta, por kushtet e marrëveshjes së tyre modifikohen. Kushtet dhe termat e modifikuara kryesisht kanë të bëjnë me:',
        {
          ul: [
            'zgjatjen e kohës për shlyerjen e huasë',
            'ndryshimin e normës së interesit',
            'heqjen dorë nga tarifat dhe penalitetet për vonesa ose mospagesa',
            'shtimin e çdo pagese të humbur ose të vonuar në fund të kredisë',
          ],
        },
        ['Për ata të cilët duan të shmangin proceset gjyqësore apo procedurat e falimentit, gjithmonë ka rrugëzgjidhje. Një nga më të zakonshmet njihet si modifikim marrëveshjeje apo ristrukturim kredie. Kjo ndodh kur një biznes ose një individ është në paaftësi paguese dhe nuk mund t’i paguajë këstet në datën e maturimit. Nëse ju ndodheni përpara kësaj situate, në ', CS('Capital Solution', 'Capital Solution'), ' jemi zgjidhja e duhur.'],
        'Specialistët tanë në ristrukturimin e kredive do të mundësojnë draftimin, negocimin dhe implementimin e një marrëveshjeje të modifikuar, me metodat më të mira në modifikimin e marrëveshjeve, të cilat mundësojnë një ristrukturim sa më të favorshëm për debitorin, por njëkohësisht edhe zgjidhjen e ngërçit mes palëve.',
        'Eksperienca, ekspertiza dhe terminologjia në këtë fushë janë ato që na favorizojnë. Në një modifikim marrëveshjeje ekspertët ligjorë luajnë një rol shumë të rëndësishëm; mungesa e eksperiencës mund të çojë në më shumë probleme ligjore sesa në zgjidhje të tyre. Një kredimarrës që përjeton vështirësi financiare, përpara se situata të përshkallëzohet, duhet menjëherë të kontaktojë me një ekspert ligjor për modifikimin e kredisë.',
        'Ajo që na bën favorizues, të suksesshëm dhe të veçantë është se ne kemi një eksperiencë të gjatë në këtë fushë. Ne do t’ju ndihmojmë të përcaktoni rrugën më të mirë për situatën tuaj. Ekspertët tanë, bazuar në informacionet, do të analizojnë pozicionin tuaj financiar dhe më pas do t’ju rekomandojnë një strategji sa më të favorshme. Do t’ju mundësojmë navigim sa më me efikasitet dhe efektivitet në modifikimin e marrëveshjes për ristrukturimin e kredisë.',
      ],
      en: [
        'Loan restructuring, or loan agreement modification, means changing the existing loan agreement between lender and borrower. The contracting parties always stay the same, but the terms of their agreement are modified. The modified terms mainly concern:',
        {
          ul: [
            'extending the repayment period',
            'changing the interest rate',
            'waiving fees and penalties for late payment or non-payment',
            'adding any missed or late payments to the end of the loan',
          ],
        },
        ['For those who want to avoid court proceedings or bankruptcy, there is always a way out. One of the most common is known as an agreement modification, or loan restructuring. It applies when a business or individual is insolvent and cannot pay the instalments on their due date. If you are facing this situation, we at ', CS('Capital Solution', 'Capital Solution'), ' are the right solution.'],
        'Our loan restructuring specialists will handle the drafting, negotiation and implementation of a modified agreement, using the best methods for modifying agreements: ones that achieve the most favourable restructuring for the debtor while also breaking the deadlock between the parties.',
        'Experience, expertise and command of the terminology in this field are what set us apart. Legal experts play a very important role in an agreement modification; a lack of experience can lead to more legal problems rather than solving them. A borrower in financial difficulty should contact a legal expert about modifying the loan immediately, before the situation escalates.',
        'What makes us stand out, successful and distinctive is our long experience in this field. We will help you determine the best route for your situation. Based on the information, our experts will analyse your financial position and then recommend the most favourable strategy. We will help you navigate the modification of your loan restructuring agreement as efficiently and effectively as possible.',
      ],
    },
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: 'statusi',
    icon: 'chart',
    audience: ['individ'],
    slug: { sq: 'statusi-i-kredise', en: 'credit-status' },
    name: { sq: 'Statusi i kredisë', en: 'Credit status' },
    short: {
      sq: 'Shqyrtojmë raportin tuaj të kreditit dhe kundërshtojmë çdo të dhënë të pasaktë të raportuar në emrin tuaj.',
      en: 'We review your credit report and challenge any inaccurate data reported in your name.',
    },
    body: {
      sq: [
        ['Studio Legale „BALISHA” me të drejtë vlerësohet si një ndër subjektet më të specializuara në këtë fushë. Për rastet deri në 90 ditë vonesë në pagesën e kësteve, ', Q('ndërhyrja ka qenë përherë e suksesshme', 'our intervention has always been successful', 'Pretendim absolut suksesi — a mund ta mbështesë studioja dhe a lejohet në reklamimin e shërbimeve ligjore?'), '.'],
        'Statusi i kredisë është shumë i rëndësishëm, pasi në jetën tuaj të përditshme nga ky status varet çdo aplikim për financim shtesë që ju mund të bëni për kredi, overdraft apo kartë krediti. Rregullimi i statusit ka të bëjë me vlerësimin maksimal që ne i japim çdo të dhëne të hedhur nga institucionet financiare në emrin tuaj.',
        'Rregullimi i statusit të kredisë ka të bëjë me të qenit i sigurt se subjektet financiare kanë raportuar në mënyrë të drejtë të dhënat tuaja. Vlen shumë fakti që raporti i statusit tuaj të jetë sa më efektiv, në mënyrë që të mund të prodhojë rezultatin më të mirë të mundshëm të kreditit.',
        'Ne shqyrtojmë raportin tuaj të kreditit, shohim cila është problematika dhe si mund të rregullohet. Ne kemi të drejtë të kundërshtojmë çdo element të diskutueshëm në raportin tuaj të kreditit dhe adresojmë gjërat që besojmë se mund të ndihmojnë në rritjen e rezultatit tuaj të kreditit. Ne heqim çdo shënim të ardhur si pasojë e ngatërresave që mund të jenë bërë me të dhënat në statusin tuaj.',
        'Ne ju mundësojmë të hulumtoni rezultatin e statusit të kredisë, të merrni informacion se si funksionon raportimi, cilat shënime në raportin tuaj ndikojnë më shumë në rezultat dhe të kërkoni informacion ligjor mbi marrëdhëniet me subjektin tuaj financiar.',
        ['Na jepni besimin që ', CS('Capital Solution', 'Capital Solution'), ' t’i bëjë të gjitha këto shpejt dhe lehtë.'],
      ],
      en: [
        ['Studio Legale “BALISHA” is rightly regarded as one of the most specialised firms in this field. For cases of up to 90 days’ delay in paying instalments, ', Q('ndërhyrja ka qenë përherë e suksesshme', 'our intervention has always been successful', 'Absolute success claim — can the studio support it, and is it allowed in advertising legal services?'), '.'],
        'Your credit status matters a great deal, because in everyday life every application for additional financing — a loan, an overdraft or a credit card — depends on it. Correcting your status means giving the closest scrutiny to every piece of data that financial institutions have entered in your name.',
        'Correcting your credit status means making sure that financial institutions have reported your data correctly. It is very important that your status report is as accurate as possible, so that it produces the best possible credit score.',
        'We review your credit report, identify the problem and how it can be fixed. We have the right to dispute any questionable item in your credit report, and we address the things we believe can help raise your credit score. We remove any entry resulting from mix-ups that may have occurred with the data in your record.',
        'We help you look into your credit status score, learn how reporting works and which entries in your report affect the score most, and seek legal information on your relationship with your financial institution.',
        ['Trust ', CS('Capital Solution', 'Capital Solution'), ' to do all of this quickly and easily.'],
      ],
    },
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: 'falimenti',
    icon: 'scale',
    audience: ['individ', 'biznes'],
    slug: { sq: 'falimenti', en: 'bankruptcy' },
    name: { sq: 'Falimenti', en: 'Bankruptcy' },
    short: {
      sq: 'Likuidim, riorganizim ose ristrukturim: procedura që ndalojnë paditë dhe mbrojnë asetet tuaja.',
      en: 'Liquidation, reorganisation or restructuring: procedures that halt lawsuits and protect your assets.',
    },
    body: {
      sq: [
        'Falimenti është një kompleksitet procedurash financiare-kontabël, dhe në rrjedhojë nëpërmjet procesit ligjor personi ose biznesi përfshihet për të rregulluar detyrimet e prapambetura. Kryesore është se shumica e individëve apo bizneseve nga falimenti humbasin vetëm borxhin.',
        'Angazhimi në falimentin, në shumicën e rasteve, fillon nga vetë „debitori” dhe shumë pak (5%) e proceseve nga kreditori. Nëpërmjet kërkesës për një nga procedurat e falimentit, individi ose biznesi lirohet nga detyrimi, duke u ofruar njëkohësisht kreditorëve një opsion për shlyerjen e detyrimit. Menjëherë me fillimin e procedurës ndalojnë të gjitha paditë civile të ngritura kundrejt debitorit. Asetet marrin mbrojtje nga procedura dhe bëhen të pamundura për ekzekutim.',
        'Aplikimi për një procedurë në sistemin e falimentit nuk është një dështim. Është një mjet unik i planifikimit financiar që mund të ndryshojë jetën tuaj.',
        [Q('Ju garantojmë', 'We guarantee', 'Garanci rezultati — a e mban studioja këtë formulim? Rregullat e etikës së avokatisë zakonisht e ndalojnë garantimin e rezultatit.'), ' se në përfundim të procedurës mund të mbeteni pa borxhe. Pra, nuk ka më thirrje, nuk ka më padi. Por kjo situatë mbi të gjitha të krijon mundësi të reja.'],
        'Kur mendoni për fjalën „faliment”, vërtet të krijon një ndjesi ankthi, frike dhe pesimizmi. „Faliment” nuk do të thotë të heqësh dorë, por bëhet fjalë për një angazhim të ri, për të ndërtuar gjendjen financiare nga e para. Gjatë eksperiencës ndër vite, kemi parë klient pas klienti se si një falimentim i mirëpërpunuar mund ta përmirësojë në mënyrë të shkëlqyer jetën e njerëzve.',
        'Pranë Studio „BALISHA” do t’ju udhëzojmë në mënyrë efikase përmes procedurave të mëposhtme në paraqitjen e falimentit, pasi procedurat për një sistem falimenti janë të ndryshme:',
        {
          ol: [
            'Procedura e likuidimit. Aplikohet për individë dhe biznese.',
            'Procedura e riorganizimit. Aplikohet vetëm për biznese.',
            'Procedura e ristrukturimit. Aplikohet vetëm për individë.',
          ],
          type: 'a',
        },
        'Nëpërmjet njërës prej procedurave ju do të përfitoni një fillim të ri. Falimenti është ndërtuar si sistem për t’i dhënë një shans individit, biznesit dhe në tërësi ekonomisë së vendit, duke i liruar nga detyrimet e prapambetura.',
        ['Për të kuptuar më shumë nga ky sistem dhe se si borxhet tuaja mund të zgjidhen, ju jeni të lirë të na kontaktoni në web, me email ose në numrin e telefonit ', PHONE, '.'],
      ],
      en: [
        'Bankruptcy is a complex set of financial and accounting procedures through which, by legal process, a person or business sets about settling outstanding debts. The key point is that most individuals and businesses lose only the debt through bankruptcy.',
        'In most cases bankruptcy is initiated by the “debtor” themselves; very few proceedings (5%) are started by the creditor. By applying for one of the bankruptcy procedures, the individual or business is released from the obligation, while creditors are offered an option for repayment. As soon as the procedure begins, all civil lawsuits against the debtor stop. The assets are protected by the procedure and cannot be enforced against.',
        'Applying for a procedure within the bankruptcy system is not a failure. It is a unique financial planning tool that can change your life.',
        [Q('Ju garantojmë', 'We guarantee', 'Result guarantee — does the studio keep this wording? Legal ethics rules usually prohibit guaranteeing outcomes.'), ' that at the end of the procedure you may be left free of debt. No more calls, no more lawsuits. Above all, this situation creates new opportunities.'],
        'When you think of the word “bankruptcy”, it really does bring a feeling of anxiety, fear and pessimism. But “bankruptcy” does not mean giving up: it is a new commitment, to rebuild your finances from scratch. Over the years we have seen, client after client, how a well-prepared bankruptcy can improve people’s lives remarkably.',
        'At Studio “BALISHA” we will guide you efficiently through the following procedures when filing for bankruptcy, as the procedures within the bankruptcy system differ:',
        {
          ol: [
            'Liquidation procedure. Applies to individuals and businesses.',
            'Reorganisation procedure. Applies to businesses only.',
            'Restructuring procedure. Applies to individuals only.',
          ],
          type: 'a',
        },
        'Through one of these procedures you will get a fresh start. The bankruptcy system was built to give individuals, businesses and the country’s economy as a whole a chance, by releasing them from outstanding debts.',
        ['To learn more about this system and how your debts can be resolved, feel free to contact us online, by email or by phone at ', PHONE, '.'],
      ],
    },
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: 'shoqeri',
    icon: 'building',
    audience: ['biznes'],
    slug: { sq: 'per-shoqerite-tregtare', en: 'commercial-companies' },
    name: { sq: 'Për shoqëritë tregtare', en: 'For commercial companies' },
    short: {
      sq: '20 vjet përvojë me shoqëri tregtare: kontrata, bashkime e blerje, financim kapitali dhe borxhi.',
      en: '20 years of experience with companies: contracts, mergers and acquisitions, equity and debt financing.',
    },
    body: {
      sq: [
        'Studio Legale „BALISHA” është subjekt me veprimtari të gjerë pranë shoqërive tregtare:',
        {
          ul: [
            'në fushën financiare — bashkëthemelues dhe menaxhim (shoqëria Capital Invest sha / institucion financiar mikrokredie – sot MiA Finance)',
            'në tregun e stock exchange — themelues dhe administrator (Capital Pay shpk)',
            'në tregun e sigurimeve — bashkëthemelues dhe menaxhim i shoqërisë SiCred sha (shoqëri sigurimi jete)',
            'në tregun e pensioneve private — bashkëthemelues dhe menaxhim (shoqëria Capital Pension sha – sot SIGAL Pension sha)',
          ],
        },
        [CS('Shoqëria Capital Solution', 'Capital Solution'), ' ka përfaqësuar në çështjet ligjore, në ndërmjetësim etj. kompani të vogla, të mesme dhe të mëdha, me kapital privat dhe ato publike. Këto shërbime përfshijnë bashkimet dhe blerjet tradicionale të korporatave, financimin e kapitalit, financimin e borxhit, strukturën menaxhuese, rregullat dhe pajtueshmërinë e letrave me vlerë.'],
        'Ne përfaqësojmë biznese në shumë industri, në lidhje me të gjitha llojet e kontratave tregtare, të tilla si:',
        {
          ul: [
            'marrëveshjet e licencave',
            'marrëveshjet e ekskluzivitetit',
            'marrëveshjet e konfidencialitetit',
            'marrëveshjet e punësimit',
            'marrëveshjet e konsulencës për blerjen',
            'marrëveshjet e blerjes së aseteve',
          ],
        },
        'Specialistët tanë angazhohen si këshilltarë të jashtëm për kompanitë publike dhe private, me kapital të vogël, të mesëm dhe të madh.',
        ['Me një eksperiencë 20-vjeçare, kemi një përvojë të vlefshme për të përfaqësuar ', Q('kompani private', 'private companies', 'Në origjinal: "per te perfaqesuar përfaqësuar private" — supozuam "kompani private". A është e saktë?'), ' që nga krijimi deri në shitjen e tyre.'],
        'Ekspertët tanë janë nga më të ndryshmit, duke filluar nga ata ligjorë, financiarë, kontabilistë, vlerësues, zgjidhje borxhesh, administratorë falimenti etj. Ata janë të fokusuar në çështjet tregtare, pronësinë intelektuale, licencimin, pasuritë e paluajtshme, ligjin e punës, ligjin e falimentit, atë doganor dhe një sërë fushash të tjera të specializuara të praktikës.',
        'Krenohemi që me eksperiencën dhe profesionalizmin tonë veprojmë në mënyrë efikase dhe të përkryer, ku në konkluzion u kursejmë kohë dhe para klientëve tanë.',
        ['Mos hezitoni, telefononi në nr. ', PHONE, ' ose dërgoni email në ', EMAIL, '.'],
      ],
      en: [
        'Studio Legale “BALISHA” has broad experience working with commercial companies:',
        {
          ul: [
            'in the financial sector — co-founder and management (Capital Invest sha, a microcredit financial institution – today MiA Finance)',
            'in the stock exchange market — founder and administrator (Capital Pay shpk)',
            'in the insurance market — co-founder and management of SiCred sha (a life insurance company)',
            'in the private pensions market — co-founder and management (Capital Pension sha – today SIGAL Pension sha)',
          ],
        },
        [CS('Shoqëria Capital Solution', 'Capital Solution'), ' has represented small, medium and large companies, both privately held and public, in legal matters, mediation and more. These services include traditional corporate mergers and acquisitions, equity financing, debt financing, management structure, and securities regulation and compliance.'],
        'We represent businesses across many industries in all kinds of commercial contracts, such as:',
        {
          ul: [
            'licence agreements',
            'exclusivity agreements',
            'confidentiality agreements',
            'employment agreements',
            'acquisition consultancy agreements',
            'asset purchase agreements',
          ],
        },
        'Our specialists act as external advisers to public and private companies of small, medium and large capital.',
        ['With 20 years of experience, we have valuable expertise in representing ', Q('kompani private', 'private companies', 'Original reads "per te perfaqesuar përfaqësuar private" — we assumed "private companies". Is that right?'), ' from their creation to their sale.'],
        'Our experts come from many disciplines: legal, financial, accounting, valuation, debt resolution, bankruptcy administration and more. They focus on commercial matters, intellectual property, licensing, real estate, employment law, bankruptcy law, customs law and a range of other specialised practice areas.',
        'We are proud that, with our experience and professionalism, we work efficiently and thoroughly, ultimately saving our clients time and money.',
        ['Do not hesitate: call ', PHONE, ' or email ', EMAIL, '.'],
      ],
    },
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: 'sigurime',
    icon: 'shield',
    audience: ['individ', 'biznes'],
    slug: { sq: 'avokat-sigurimesh', en: 'insurance-lawyer' },
    name: { sq: 'Avokat në fushën e sigurimeve', en: 'Insurance lawyer' },
    short: {
      sq: 'Dëme pasurore, aksidente automobilistike, sigurim shëndetësor, paaftësi: ju ndihmojmë të merrni mbulimin e duhur.',
      en: 'Property damage, car accidents, health insurance, disability: we help you get the cover you are owed.',
    },
    body: {
      sq: [
        ['Studio Legale BALISHA ', Q('bazohet dhe praktikon vetëm ligjin e sigurimeve', 'is based on and practises only insurance law', 'Teksti thotë "vetëm ligjin e sigurimeve", por studioja ofron edhe shërbime të tjera. Si ta formulojmë?'), ' në Republikën e Shqipërisë. Ne ofrojmë këshilla ligjore kur klientët kanë pyetje apo kërkojnë asistencë ligjore në lidhje me çdo produkt apo shërbim në fushën e sigurimeve. Me autorizim të klientit, ne gjithashtu mund të negociojmë marrëveshjet e të gjitha llojeve në sigurime ose të ngremë çështje gjyqësore dhe t’i trajtojmë ato deri në zgjidhjen e problemeve.'],
        { h: 'Pretendimet që trajtojmë' },
        'Llojet e pretendimeve që trajtojnë avokatët e Studio Legale BALISHA në sigurime përfshijnë:',
        {
          ul: [
            'Kërkesat për dëme pasurore',
            'Rastet e aksidenteve automobilistike',
            'Përfitimet e sigurimit shëndetësor',
            'Rastet e paaftësisë',
            'Kërkesat për likuidimin e detyrimeve ndaj biznesit',
          ],
        },
        'Dhe më shumë.',
        { h: ['Kush ka nevojë për Studio Legale BALISHA – ', Q('Avokati më i mirë në sigurime', 'The best insurance lawyer', 'Superlativ ("më i miri") — a e mban studioja këtë titull?')] },
        'Kompanitë e sigurimeve në të gjithë botën, në rastin e ngjarjes së sigurimit, angazhohen për të ofruar gjithnjë më pak, gjithnjë më lirë, për të shtyrë afatet e pagesave etj. Marrja e mbulimit adekuat të sigurimit nuk është gjithmonë një proces i drejtpërdrejtë. Këto raste janë të komplikuara. Studio Legale BALISHA do t’ju ndihmojë të kuptoni opsionet dhe rreziqet tuaja ligjore.',
        'Ndërsa kemi të bëjmë me raste unike, mund t’ju duhet një avokat sigurimi, p.sh. për:',
        {
          ul: [
            'Ngritjen e padisë për çështje të lidhura me kontratën e sigurimit',
            'Identifikimin e një shume të drejtë shlyerjeje në një rast lëndimi personal',
            'Detyrimin e pajtueshmërisë ndaj kompanive të sigurimit në gjykatën civile',
            'Përcaktimin nëse kërkesa juaj është refuzuar me keqbesim ose me mirëbesim',
          ],
        },
        'Etj.',
      ],
      en: [
        ['Studio Legale BALISHA ', Q('bazohet dhe praktikon vetëm ligjin e sigurimeve', 'is based on and practises only insurance law', 'The text says "only insurance law", yet the studio offers other services too. How should we phrase it?'), ' in the Republic of Albania. We provide legal advice when clients have questions or need legal assistance with any insurance product or service. With the client’s authorisation, we can also negotiate settlements of all kinds in insurance, or bring court proceedings and pursue them until the problem is resolved.'],
        { h: 'Claims we handle' },
        'The types of insurance claims handled by the lawyers of Studio Legale BALISHA include:',
        {
          ul: [
            'Property damage claims',
            'Car accident cases',
            'Health insurance benefits',
            'Disability cases',
            'Claims for settling obligations towards a business',
          ],
        },
        'And more.',
        { h: ['Who needs Studio Legale BALISHA – ', Q('Avokati më i mirë në sigurime', 'The best insurance lawyer', 'Superlative ("the best") — does the studio keep this title?')] },
        'Insurance companies all over the world, when an insured event occurs, try to offer ever less, ever cheaper, to postpone payment deadlines and so on. Getting adequate insurance cover is not always a straightforward process. These cases are complicated. Studio Legale BALISHA will help you understand your legal options and risks.',
        'As every case is unique, you may need an insurance lawyer, for example for:',
        {
          ul: [
            'Filing a lawsuit over matters related to the insurance contract',
            'Identifying a fair settlement amount in a personal injury case',
            'Compelling insurance companies to comply in civil court',
            'Determining whether your claim was denied in bad faith or in good faith',
          ],
        },
        'Etc.',
      ],
    },
  },
];

// Lidhjet e ndërsjella mes shërbimeve (për "Shërbime të lidhura")
export const related = {
  kolateral: ['borxh-individ', 'ristrukturim', 'falimenti'],
  'borxh-individ': ['kolateral', 'ristrukturim', 'statusi'],
  'borxh-biznes': ['falimenti', 'ristrukturim', 'shoqeri'],
  ristrukturim: ['kolateral', 'borxh-individ', 'borxh-biznes'],
  statusi: ['ristrukturim', 'borxh-individ', 'kolateral'],
  falimenti: ['borxh-biznes', 'borxh-individ', 'ristrukturim'],
  shoqeri: ['borxh-biznes', 'falimenti', 'sigurime'],
  sigurime: ['shoqeri', 'borxh-biznes', 'borxh-individ'],
};
