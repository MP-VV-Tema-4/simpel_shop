# Simpel Shop

En Next.js-baseret webshop med fokus på fødevarer. Projektet henter produktdata fra DummyJSON og samler produkterne i en overskuelig produktoversigt med søgning, filtrering, favoritter og indkøbskurv.

> **Projektstatus:** Denne README er udarbejdet ud fra projektbeskrivelsen, opgavefordelingen og de projektoplysninger, der hidtil er gennemgået. Funktioner og Git-status bør opdateres, når gruppen har testet og færdiggjort dem.

---

## Indhold

- [Projektbeskrivelse](#projektbeskrivelse)
- [Designretning](#designretning)
- [Teknologier og biblioteker](#teknologier-og-biblioteker)
- [Funktioner og komponenter](#funktioner-og-komponenter)
- [Projektstruktur](#projektstruktur)
- [Kom godt i gang](#kom-godt-i-gang)
- [Procesdokumentation og Git](#procesdokumentation-og-git)
- [Opgavefordeling](#opgavefordeling)
- [Test og kvalitetssikring](#test-og-kvalitetssikring)
- [Videre arbejde](#videre-arbejde)
- [Nyttige links](#nyttige-links)

## Projektbeskrivelse

Simpel Shop er en webshop-prototype, hvor brugeren kan udforske fødevareprodukter, søge efter produkter, filtrere produktudvalget og tilføje varer til favoritter eller indkøbskurven.

Produktdata hentes fra [DummyJSON](https://dummyjson.com/). Projektet er udviklet med Next.js og React-komponenter, så funktionalitet og brugergrænseflade kan opdeles i genanvendelige dele.

Projektets formål er at skabe en brugervenlig og overskuelig webshop samt at arbejde med blandt andet API-integration, komponentbaseret udvikling, state management, Git-samarbejde og deployment.

## Designretning

- **Tema:** Webshop med fødevarer.
- **Farver:** Lys orange, cremefarvet og eventuelt grønne nuancer.
- **Udtryk:** Enkelt, imødekommende og overskueligt.
- **Brugeroplevelse:** Tydelig navigation, let tilgængelige produktinformationer og en enkel købsproces.
- **Produktvisning:** Genanvendelige produktkort og et grid-layout.

De fælles designbeslutninger bør samles i projektets globale styling og genbruges på tværs af sider og komponenter.

## Teknologier og biblioteker

| Teknologi/bibliotek | Anvendelse |
|---|---|
| Next.js | React-framework og routing med App Router |
| React | Opbygning af brugergrænseflade og komponenter |
| JavaScript / JSX | Projektets programmeringssprog og komponentfiler |
| Tailwind CSS | Styling af layout og komponenter |
| DummyJSON | Ekstern datakilde til produkter |
| Zustand | Global state management, blandt andet til indkøbskurven |
| Zustand Persist | Gemmer kurvens state i browserens localStorage |
| Fuse.js | Fuzzy search i produktoversigten |
| React Icons | Ikoner til navigation, favoritter og kurv |
| Vercel | Planlagt/aktuel hosting og deployment, afhængigt af projektets deploy-status |

## Funktioner og komponenter

Nedenstående oversigt beskriver projektets kendte funktioner og den tiltænkte ansvarsfordeling mellem komponenterne. Den er ikke i sig selv dokumentation for, at alle funktioner er færdigtestede.

### Produkter og produktdata

- Produkter hentes fra DummyJSON.
- Produktoversigten arbejder med kategorien `groceries`.
- Produktkort viser blandt andet produktbillede, navn, pris og relevante produktinformationer.
- Produktkortet kan genbruges i forskellige visninger, eksempelvis en kompakt visning.

### Søgning og filtrering

- Fuse.js anvendes til fuzzy search.
- Produkter kan filtreres efter kategori.
- Produktoversigten indeholder filtreringsmuligheder, eksempelvis pris og rating, samt sortering.
- Der skal være en tydelig håndtering af tomme søgeresultater.
- Nulstilling af filtre bør også nulstille en aktiv søgning, så brugerens visning bliver konsekvent.

### Favoritter

- Favoritfunktionen håndteres med en separat Zustand-store.
- Brugeren kan tilføje og fjerne produkter fra favoritter.
- Favoritstatus vises på produktkortet.

### Indkøbskurv

- Indkøbskurven håndteres med Zustand i `cartStore.js`.
- `persist` gemmer kurvens indhold i browserens `localStorage` under storage-nøglen `cart-storage`.
- Store-funktionerne omfatter:
  - `addToCart`: tilføjer et produkt til kurven.
  - `removeFromCart`: fjerner et produkt.
  - `updateQuantity`: ændrer antal eller fjerner produktet, hvis antallet sættes til nul eller mindre.
  - `clearCart`: tømmer kurven.
- Produkter i kurven gemmes med en `quantity`-værdi.
- Hvis et produkt tilføjes igen, skal antallet lægges til den eksisterende produktlinje frem for at oprette en dublet.
- Produktkortets mængdevælger skal sende det valgte antal videre til `addToCart(product, quantity)`.
- Kurvesiden skal vise antal, subtotal pr. produkt og samlet pris.

**Prisberegning:**  
Subtotal for en produktlinje beregnes som `product.price * product.quantity`. Kurvens total beregnes som summen af alle produktlinjers subtotaler.

### Produktdetaljer, checkout og øvrige sider

Projektets opgavefordeling omfatter også en dynamisk produktside (`/products/[id]`) og et checkout-flow. Funktionerne bør først markeres som færdige, når de er implementeret og testet i den aktuelle kodebase.

## Projektstruktur

Projektet anvender Next.js App Router med kode under `src/app`. Den præcise struktur kan variere, efterhånden som projektet udvikles.

Kendte filer og komponenter:

| Fil/komponent | Formål |
|---|---|
| `src/app/page.js` | Forside |
| `src/app/layout.js` | Fælles layout for appen |
| `src/app/globals.css` | Global styling |
| `ProductCard.jsx` | Genanvendeligt produktkort med produktinformation, favorit og tilføj til kurv |
| `ProductCatalog.jsx` | Produktoversigt og samling af produktvisning |
| `ProductFilters.jsx` | Filtreringsmuligheder |
| `cartStore.js` | Global state for indkøbskurven |
| `FavoritesStore.js` | Global state for favoritter |
| `src/app/products/page.js` | Produktoversigt |
| `src/app/products/[id]/` | Dynamisk produktdetaljeside |
| `src/app/cart/page.js` | Indkøbskurv |

Brug den faktiske mappestruktur i repository'et som facit, hvis filerne ligger et andet sted.

## Kom godt i gang

### Forudsætninger

- Node.js installeret.
- npm installeret.
- Repository'et klonet lokalt.

### Installation

Åbn projektmappen i terminalen, og kør:

```bash
npm install
```

### Start udviklingsserveren

```bash
npm run dev
```

Åbn derefter [http://localhost:3000](http://localhost:3000).

Hvis projektets `package.json` bruger en anden port eller et andet script, er det `package.json`, der bestemmer den korrekte kommando.

### DummyJSON API

Produktdata hentes fra DummyJSON. Den anvendte grocery-forespørgsel har eksempelvis denne form:

```text
https://dummyjson.com/products/category/groceries?limit=0
```

DummyJSON bruges som ekstern testdatakilde. Projektet skal derfor håndtere fejl, hvis API'et ikke svarer, eller hvis der ikke returneres produkter.

## Procesdokumentation og Git

### Branch-struktur

Projektets Git-arbejde har været organiseret med en lokal `main`-branch, en `improvements`-branch og to remotes:

| Remote | Repository | Rolle |
|---|---|---|
| `origin` | `mipe0018/simpel_shop` | Gruppens/personligt fork-repository |
| `upstream` | `MP-VV-Tema-4/simpel_shop` | Skolens oprindelige repository |

**Senest kendte Git-status fra arbejdet:**

- Arbejdet fra `improvements` blev flettet ind i `main`.
- Merge-committen blev oprettet med hash `3a05d6a` og beskeden `Merge branch 'improvements'`.
- Den lokale `main` fulgte på kontroltidspunktet `upstream/main`.
- Arbejdsmappen var clean på kontroltidspunktet.
- Push til `origin` fejlede med `Repository not found`.

Det betyder, at merge-committen fandtes lokalt, men at det ikke blev bekræftet, at den var pushet til gruppens/personlige `origin`-repository. GitHub-repositoryets aktuelle tilstand skal kontrolleres, før man konkluderer, at alle ændringer er offentliggjort.

### Kontrol af branches og remotes

Brug disse kommandoer for at kontrollere den aktuelle status:

```bash
git status
git branch -vv
git branch -a
git remote -v
git log --oneline --graph --decorate -15
```

### Arbejdsgang ved nye opgaver

1. Kontrollér, hvilken branch du står på.
2. Hent seneste ændringer fra det relevante remote.
3. Aftal med gruppen, hvilken branch opgaven skal udvikles på.
4. Lav ændringer i afgrænsede filer og komponenter.
5. Test den relevante funktion lokalt.
6. Commit med en kort og beskrivende besked.
7. Push til det aftalte repository og branch.
8. Merge først, når ændringerne er gennemgået og fungerer sammen med resten af projektet.

Eksempler på beskrivende commit-beskeder:

```text
Add product category filtering
Update cart quantity handling
Fix product search reset
Style product cards
Merge improvements into main
```

### Samarbejde og koordinering

- Hver opgave bør have én primært ansvarlig.
- Den ansvarlige udvikler, tester og færdiggør opgaven.
- Genanvendelige komponenter bør bruges på tværs af relevante sider.
- Ændringer i fælles filer som `layout.js`, `globals.css` og fælles komponenter koordineres med gruppen.
- Opgaver med afhængigheder skal aftales på forhånd. Eksempelvis afhænger kurvesidens visning af, at `cartStore` gemmer produkt og antal på en ensartet måde.

## Opgavefordeling

Navne er kun udfyldt, hvor de fremgik af den modtagne opgavefordeling. Tomme felter betyder, at ansvaret endnu ikke er dokumenteret her – ikke nødvendigvis, at opgaven mangler en ansvarlig.

| Område | Opgave | Ansvarlig |
|---|---|---|
| Forside | Forsidens øvrige sektioner og indhold | Mitzie |
| Søgning og filtrering | Hentning og visning af produktkategorier | Mitzie |
| Test og aflevering | Test af indkøbskurv og prisberegning | Mitzie |
| Layout | Responsivt layout til forskellige skærmstørrelser | Ikke tildelt i den modtagne oversigt |
| Øvrige opgaver | Se gruppens opgavefordeling | Afklares/udfyldes af gruppen |

Gruppen bør udfylde de resterende ansvarsområder i den oprindelige opgavefordeling og holde denne README opdateret, hvis ansvaret ændres.

## Test og kvalitetssikring

Følgende punkter kan bruges som testtjekliste før aflevering:

- [ ] Navigation mellem alle sider fungerer.
- [ ] API-kald henter produkter fra DummyJSON.
- [ ] Produkter vises korrekt i produktoversigten.
- [ ] Søgning med Fuse.js giver relevante resultater.
- [ ] Kategorifiltrering fungerer.
- [ ] Pris- og ratingfiltre samt sortering fungerer.
- [ ] Nulstilling rydder filtre og søgning.
- [ ] Tomme søgeresultater vises med en brugervenlig besked.
- [ ] Favoritter kan tilføjes og fjernes.
- [ ] Produktkortets mængdevælger sender det valgte antal til kurven.
- [ ] Gentagen tilføjelse af samme produkt lægger antal sammen.
- [ ] Antal kan ændres fra kurvesiden.
- [ ] Subtotal og samlet pris beregnes korrekt.
- [ ] Produkter kan fjernes, og kurven kan tømmes.
- [ ] Kurvens indhold bevares efter genindlæsning.
- [ ] Produktdetaljesiden viser det korrekte produkt.
- [ ] Checkout-flowet er testet, hvis det er en del af den færdige løsning.
- [ ] Layout er kontrolleret på relevante skærmstørrelser.
- [ ] GitHub-repository, branches og README er kontrolleret.
- [ ] Vercel-deployment og live-version er testet.
- [ ] Alle afleveringskrav er gennemgået.

## Videre arbejde

De næste oplagte procestrin er:

1. Færdiggør koblingen mellem produktkortets mængdevælger, `cartStore` og kurvesiden.
2. Kontrollér, at alle komponenter bruger samme produktstruktur og `quantity`-felt.
3. Gennemfør testtjeklisten og registrér eventuelle fejl og løsninger.
4. Afklar de resterende ansvarsområder i gruppen.
5. Kontrollér branch- og remote-status, og sørg for at de færdige ændringer er pushet til det aftalte repository.
6. Test den deployede version på Vercel.

## Nyttige links

- [Next.js dokumentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [DummyJSON dokumentation](https://dummyjson.com/docs/products)
- [Zustand dokumentation](https://zustand.docs.pmnd.rs/)
- [Fuse.js dokumentation](https://www.fusejs.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel dokumentation](https://vercel.com/docs)
