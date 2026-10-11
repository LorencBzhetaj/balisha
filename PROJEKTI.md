# Studio Legale BALISHA — dokumenti i projektit

Ndërtuar sipas *Blueprint-it të faqeve web* (v1). Faza aktuale: **faqja e plotë në staging**. Pret përgjigjet e klientit para publikimit.

## Si punohet

```
npm run build        # staging → dist/ (vend-mbajtës dhe pyetje të dukshme, noindex, robots Disallow)
npm run serve        # http://localhost:4321/
npm run build:prod   # refuzon sa kohë ka të dhëna që mungojnë ose pyetje pa përgjigje
```

| Skedari | Çfarë mban |
|---|---|
| `src/content/services.mjs` | 8 shërbimet: teksti i plotë SQ + EN, karta e shkurtër, audienca |
| `src/content/site.mjs` | kontaktet, faqet, përvoja, ekipi, faqet ligjore, teksti i ndërfaqes |
| `src/content/markers.mjs` | `M()` mungon · `Q()` kërkon vendim · `PHONE` / `EMAIL` |
| `build.mjs` | shabllonet + kontrolli i lidhjeve, ID-ve, H1, të dhënave që mungojnë |
| `src/assets/` | CSS (token-at e blueprint-it, `.ls-*`), JS, ikonat |

**Vercel:** `vercel.json` ndërton me `node build.mjs` → `dist/` (pa varësi npm). Build-i në Vercel është **staging**: `noindex` + `robots.txt Disallow`, vend-mbajtësit të dukshëm. Për publikim real, kur s'mungon më asgjë: ndrysho `buildCommand` në `node build.mjs --prod`.

Kur klienti përgjigjet: zëvendëso `M('…')` me vlerën, ose `Q('…')` me tekstin përfundimtar. Faqet ligjore aprovohen me `approved: true`, domeni me `domainConfirmed: true`.

## Faqet (33)

| Faqja | SQ | EN |
|---|---|---|
| Homepage | `/` | `/en/` |
| Shërbimet (hub me filtër Individë/Biznese) | `/sherbimet/` | `/en/services/` |
| Ndal! Ekzekutimi i kolateralit | `/sherbimet/ekzekutimi-i-kolateralit/` | `/en/services/collateral-enforcement/` |
| Zgjidhje borxhi për individë | `/sherbimet/zgjidhje-borxhi-individ/` | `/en/services/debt-solutions-individuals/` |
| Zgjidhje borxhi për biznese | `/sherbimet/zgjidhje-borxhi-biznes/` | `/en/services/debt-solutions-business/` |
| Ristrukturim kredie | `/sherbimet/ristrukturim-kredie/` | `/en/services/loan-restructuring/` |
| Statusi i kredisë | `/sherbimet/statusi-i-kredise/` | `/en/services/credit-status/` |
| Falimenti | `/sherbimet/falimenti/` | `/en/services/bankruptcy/` |
| Për shoqëritë tregtare | `/sherbimet/per-shoqerite-tregtare/` | `/en/services/commercial-companies/` |
| Avokat në fushën e sigurimeve | `/sherbimet/avokat-sigurimesh/` | `/en/services/insurance-lawyer/` |
| Ekipi | `/ekipi/` | `/en/team/` |
| Rreth nesh | `/rreth-nesh/` | `/en/about/` |
| Kontakt | `/kontakt/` | `/en/contact/` |
| Privatësia · Cookies · Kushtet | `/privatesia/` `/cookies/` `/kushtet/` | `/en/privacy/` `/en/cookies/` `/en/terms/` |
| 404 (SQ + EN) | `/404.html` | |

**Kartat e shërbimeve:** në homepage dhe te hub-i, çdo kartë ka titullin dhe një fjali të shkurtër. Klikimi hap të gjithë tekstin në një dritare që ka butonat Rezervo / Telefono / Faqja e shërbimit. Pa JS, ose me Ctrl-klik, hapet faqja e shërbimit (SEO + lidhje që ndahen). Karta "Ndal!" është e theksuar.

**Verifikuar:**
- 0 lidhje ose ID të prishura, 1 H1 për faqe.
- hreflang, Open Graph dhe JSON-LD (LegalService, Service, BreadcrumbList, ItemList, ContactPage, AboutPage).
- Pa scroll horizontal në 375 px në të gjitha llojet e faqeve dhe 0 gabime JS.
- Menuja, dritarja (Escape, klik në sfond, fokusi kthehet te karta), filtri (8 / 6 / 6) dhe validimi i formularit punojnë.

## Burimi dhe korrigjimet

- Teksti i 8 shërbimeve vjen i plotë nga klienti (2026-10-09). Asnjë paragraf ose pikë nuk u hoq.
- **Drejtshkrim:** ë/ç, i/I, gabime shtypi ("Sudio" → "Studio", "rrjdhoje" → "rrjedhojë", "mbledhgjes" → "mbledhjes", "paka" → "paga"). Kuptimi nuk ndryshoi.
- **Strukturë:** disa renditje në tekst u kthyen në lista, si kushtet e ristrukturimit dhe kontratat tregtare. Pika e fundit e listës "Individ" u nda në dy: "Ka filluar ekzekutimi i kolateralit" dhe "Makina riposedohet nga kreditori".
- **"finance plus"** (Statusi i kredisë) u përkthye si "financim shtesë". Duhet konfirmuar.
- Vijat bosh "___" për kontaktin u plotësuan me telefonin real. Email-i mbetet vend-mbajtës.
- Fjalitë e shkurtra të kartave, titulli i hero-s dhe titujt e seksioneve janë përmbledhje tonat nga teksti i klientit. Duhen miratuar.
- EN = përkthimi ynë. Duhet rishikuar.
- Përmbajtja shembull e mockup-it (fushat e vjetra, 4 hapat, gjuhët "SQ · EN · IT", orari 09–18) u hoq sepse nuk vinte nga klienti.

## Pyetje për klientin (shfaqen të theksuara në staging)

1. **"Capital Solution"** del 4 herë në tekst (Borxhi Biznes, Ristrukturim, Statusi, Shoqëri tregtare). A duhet "Studio Legale BALISHA"?
2. **"Ju garantojmë"** (Falimenti): rregullat e etikës së avokatisë zakonisht e ndalojnë garantimin e rezultatit. A e mbajmë?
3. **"ndërhyrja ka qenë përherë e suksesshme"** (Statusi i kredisë): pretendim absolut. A e mbajmë?
4. **"praktikon vetëm ligjin e sigurimeve"** bie ndesh me shërbimet e tjera. Si ta formulojmë?
5. **"Avokati më i mirë në sigurime"**: superlativ. A e mbajmë?
6. **"për të përfaqësuar përfaqësuar private"**: supozuam "kompani private". A është e saktë?
7. Domeni: `balisha.al`?
8. Privatësia, Cookies, Kushtet: draftet tona duhen rishikuar dhe miratuar.

## Mungon nga klienti

- [ ] Email-i i studios (dhe ku dërgohen kërkesat e formularit)
- [ ] Adresa e zyrës (aktivizon hartën) dhe orari i punës
- [ ] Emri ligjor i regjistruar dhe NIPT
- [ ] Ekipi: emrat, rolet, fushat, fotot
- [ ] Afati i ruajtjes së të dhënave (Privatësia) dhe data e përditësimit
- [ ] Logoja reale (tani ikonë peshore + "BALISHA")
- [ ] Fotot (hero, ekipi) → WebP 480–1600 me srcset

## Vendime teknike

- Fontet Newsreader + Public Sans: ende jo në server. Tani përdoren Georgia dhe fonti i sistemit. Duhen `.woff2` në `src/assets/fonts/`.
- Faqja nuk vendos cookies dhe nuk ka analitikë, ndaj nuk ka banner pëlqimi. Kur të shtohen analitika/harta, shtohet edhe banner-i.
- Formulari validon në shfletues. Në staging nuk dërgon asgjë. Duhet vendosur dërgimi (email/endpoint) para publikimit.
- Seksioni i publikimeve nuk ekziston derisa të ketë artikuj realë.

## Hapat e radhës

1. Përgjigjet e pyetjeve 1–8 dhe të dhënat që mungojnë.
2. Fontet në server, logoja, fotot, dërgimi i formularit.
3. `npm run build:prod` → Lighthouse ×3 → montimi në staging të serverit.
