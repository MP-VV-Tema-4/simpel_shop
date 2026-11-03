# Simpel Shop – opgavefordeling og projektstatus

Dette dokument giver et samlet overblik over arbejdsfordelingen mellem Vasilisa Virovka og Mitzie Petersen, herunder hvilke opgaver der er implementeret, hvilke der stadig er under udvikling, og hvem der har ansvaret for det videre arbejde.

Projektet udvikles som en gruppeopgave på Multimediedesignuddannelsen ved EK.

**Statusoversigt:**

- **Udført:** Implementeret og integreret i `main`.
- **Delvist udført:** En del af funktionaliteten er implementeret, men kræver yderligere arbejde eller test.
- **Mangler:** Ikke implementeret endnu.
- **Ekstra:** Nice-to-have-funktion, som først prioriteres, når de obligatoriske krav er opfyldt.

---

## 1. Layout, struktur og designsystem

**Ansvarlig: Mitzie**

| Opgave                                         | Ansvarlig | Status                  |
| ---------------------------------------------- | --------- | ----------------------- |
| Overordnet visuelt layout og sidestruktur      | Mitzie    | Udført                  |
| Opsætning af CSS Grid til sidernes indhold     | Mitzie    | Implementeret           |
| Undersøgelse og eventuel brug af CSS Subgrid   | Mitzie    | Ikke et nødvendigt krav |
| Overordnet designstruktur for komponenterne    | Mitzie    | Udført                  |
| Designsystem: farver, typografi og spacing     | Mitzie    | Implementeret           |
| Udarbejdelse af CSS-variabler og design tokens | Mitzie    | Implementeret           |
| Global styling i `globals.css`                 | Mitzie    | Udført                  |
| Fælles styling og layout i `layout.js`         | Mitzie    | Udført                  |

## 2. Header og navigation

**Ansvarlig: Mitzie**

| Opgave                                   | Ansvarlig | Status                                 |
| ---------------------------------------- | --------- | -------------------------------------- |
| Udvikling og styling af header           | Mitzie    | Udført                                 |
| Logo og navigation mellem sider          | Mitzie    | Udført                                 |
| Navigation fra forsiden til produktsiden | Mitzie    | Udført                                 |
| Indkøbskurv-ikon i header                | Mitzie    | Udført                                 |
| Visning af antal varer i indkøbskurven   | Mitzie    | Afventer integration med kurvens state |

Header og navigation er implementeret og integreret i `main` via pull requests #1 og #5.

## 3. Forside

**Ansvarlig: Delt mellem os**

| Opgave                                         | Ansvarlig | Status        |
| ---------------------------------------------- | --------- | ------------- |
| Hero-sektion med overskrift, tekst og CTA-knap | Vasilisa  | Udført        |
| Forsidens øvrige sektioner og indhold          | Mitzie    | Udført        |
| Udvikling og styling af forsidens sektioner    | Mitzie    | Udført        |
| Visning af udvalgte produkter                  | Mitzie    | Udført        |
| Samling af forsiden i `page.js`                | Vasilisa  | Implementeret |
| About Us-sektion                               | Mitzie    | Udført        |
| Recipes-sektion på forsiden                    | Mitzie    | Udført        |

Forsiden indeholder nu Hero, populære produkter, About Us og Recipes to inspire you.

Hero-sektionen er integreret via pull request #7, mens About Us og Recipes er integreret via pull request #6.

## 4. Produktside og produktkomponenter

**Ansvarlig: Delt mellem os**

| Opgave                                                        | Ansvarlig          | Status        |
| ------------------------------------------------------------- | ------------------ | ------------- |
| Hentning af produkter fra DummyJSON API                       | Vasilisa           | Implementeret |
| Udvikling og styling af `ProductCard.jsx`                     | Mitzie             | Udført        |
| Visning af produktbillede, navn, pris og rating i produktkort | Mitzie             | Udført        |
| Udvikling af genanvendelige knapper i forskellige varianter   | Mitzie             | Implementeret |
| Udvikling af produktoversigtens visuelle layout               | Mitzie             | Udført        |
| Grid-layout til produktoversigten                             | Mitzie             | Udført        |
| Integration af produktdata i produktkortene                   | Vasilisa           | Implementeret |
| Samling af produktoversigten i `products/page.js`             | Vasilisa           | Implementeret |
| Visning af produktpriser og produktinformation                | Mitzie og Vasilisa | Udført        |

Produktkort og filtrering er integreret via pull request #2.

Produktoversigten henter produkter fra DummyJSON API og viser dem i genanvendelige produktkort.

## 5. Søgning og filtrering

**Ansvarlig: Delt mellem os**

| Opgave                                                          | Ansvarlig          | Status           |
| --------------------------------------------------------------- | ------------------ | ---------------- |
| Udvikling og styling af søgefelt                                | Mitzie             | Udført           |
| Implementering af produktsøgning med Fuse.js                    | Mitzie             | Udført           |
| Hentning af produktkategorier fra DummyJSON API                 | Mitzie             | Skal verificeres |
| Visning af produktkategorier                                    | Mitzie             | Skal verificeres |
| Udvikling og styling af kategorivælger                          | Mitzie             | Skal verificeres |
| Filtrering af produkter efter kategori                          | Mitzie             | Skal verificeres |
| Filtrering efter pris                                           | Mitzie             | Implementeret    |
| Filtrering efter rating                                         | Mitzie             | Implementeret    |
| Sortering af produkter                                          | Mitzie             | Implementeret    |
| Samspil mellem søgning og filtrering                            | Mitzie             | Skal testes      |
| Håndtering af tomme søgeresultater og kategorier uden produkter | Mitzie og Vasilisa | Skal testes      |

Produktsøgningen med fuzzy matching er implementeret og integreret via pull request #4.

Pris- og ratingfiltrering samt sortering er også implementeret. Kategorifiltreringen skal kontrolleres særskilt, så vi sikrer, at den fungerer efter hensigten.

## 6. Produktdetaljeside

**Ansvarlig: Vasilisa**

| Opgave                                                        | Ansvarlig | Status        |
| ------------------------------------------------------------- | --------- | ------------- |
| Dynamisk produktside via `/products/[id]`                     | Vasilisa  | Udført        |
| Hentning af ét produkt ud fra produktets ID                   | Vasilisa  | Udført        |
| Visning af produktets billede og produktinformation           | Vasilisa  | Udført        |
| Visning af pris, beskrivelse, rating og lagerstatus           | Vasilisa  | Udført        |
| Udvikling og styling af produktdetaljesidens layout           | Vasilisa  | Implementeret |
| Funktion til at tilføje produktet til kurven fra detaljesiden | Vasilisa  | Mangler       |

Produktdetaljesiden er implementeret og integreret via pull request #3. Funktionen til at tilføje produkter til kurven skal stadig udvikles.

## 7. Indkøbskurv og state management

**Ansvarlig: Vasilisa**

| Opgave                                       | Ansvarlig          | Status                |
| -------------------------------------------- | ------------------ | --------------------- |
| Opsætning af Zustand-store (`cartStore.js`)  | Vasilisa           | Mangler               |
| Funktion til at tilføje produkter til kurven | Vasilisa           | Mangler               |
| Funktion til at fjerne produkter fra kurven  | Vasilisa           | Mangler               |
| Funktion til at ændre antal af produkter     | Vasilisa           | Mangler               |
| Beregning af samlet pris                     | Vasilisa           | Mangler               |
| Visning af kurvens produkter og antal        | Vasilisa           | Mangler               |
| Håndtering af tom indkøbskurv                | Vasilisa           | Delvist implementeret |
| Udvikling og styling af `cart/page.js`       | Vasilisa           | Delvist implementeret |
| Integration af kurvens antal i header        | Vasilisa og Mitzie | Mangler               |
| Test af indkøbskurv og prisberegning         | Mitzie og Vasilisa | Mangler               |

Zustand er allerede installeret i projektet, men selve kurvfunktionen mangler at blive implementeret.

Der findes en foreløbig kurvside, som viser en tom indkøbskurv. Den skal videreudvikles med den faktiske funktionalitet.

## 8. Fake checkout og betaling

**Ansvarlig: Vasilisa**

| Opgave                                        | Ansvarlig | Status  |
| --------------------------------------------- | --------- | ------- |
| Udvikling af fake betalingsside               | Vasilisa  | Mangler |
| Hentning af produkter fra Zustand-store       | Vasilisa  | Mangler |
| Visning af produkterne i kurven               | Vasilisa  | Mangler |
| Visning af samlet pris                        | Vasilisa  | Mangler |
| Enkel simulering af gennemført betaling       | Vasilisa  | Mangler |
| Visning af bekræftelse efter gennemført ordre | Vasilisa  | Mangler |

Checkout skal være en simpel simulering af et køb. Der skal ikke implementeres en rigtig betalingsløsning.

## 9. Test og kvalitetssikring

**Ansvarlig: Delt mellem os**

| Opgave                                               | Ansvarlig          | Status                              |
| ---------------------------------------------------- | ------------------ | ----------------------------------- |
| Test af navigation mellem alle sider                 | Mitzie og Vasilisa | Delvist udført                      |
| Test af API-kald og produktvisning                   | Vasilisa           | Implementeret og testet             |
| Test af produktkort og visning af produktinformation | Mitzie             | Udført                              |
| Test af søgning                                      | Mitzie             | Udført                              |
| Test af kategorifiltrering                           | Mitzie             | Skal verificeres                    |
| Test af produktdetaljesiden                          | Mitzie og Vasilisa | Skal gennemgås                      |
| Test af indkøbskurv og prisberegning                 | Mitzie og Vasilisa | Afventer implementering             |
| Test af fake checkout-flow                           | Vasilisa           | Afventer implementering             |
| Kontrol af visuel sammenhæng mellem siderne          | Mitzie             | Udført, afsluttende kontrol mangler |
| Kontrol af GitHub-repository og README               | Vasilisa           | Igangværende                        |
| Deploy til Vercel og test af live-version            | Vasilisa           | Mangler                             |
| Kontrol af alle afleveringskrav                      | Mitzie og Vasilisa | Mangler                             |

## 10. Komponent- og filoversigt

| Komponent/fil              | Funktion                           | Ansvarlig          | Status              |
| -------------------------- | ---------------------------------- | ------------------ | ------------------- |
| `layout.js`                | Fælles layout for hjemmesiden      | Mitzie             | Udført              |
| `globals.css`              | Global styling og designvariabler  | Mitzie             | Udført              |
| `shared_header_footer.jsx` | Fælles header og footer            | Mitzie             | Udført              |
| `index_Hero.jsx`           | Hero-sektion på forsiden           | Mitzie             | Udført              |
| `page.js`                  | Forsidens samling af komponenter   | Mitzie og Vasilisa | Implementeret       |
| `products/page.js`         | Produktsidens overordnede struktur | Mitzie og Vasilisa | Implementeret       |
| `ProductCard.jsx`          | Genanvendeligt produktkort         | Mitzie             | Udført              |
| `product_page.jsx`         | Produktoversigtens komponenter     | Mitzie             | Implementeret       |
| `single_view.jsx`          | Visning af ét produkt              | Mitzie og Vasilisa | Implementeret       |
| `cart/page.js`             | Indkøbskurv                        | Vasilisa           | Skal videreudvikles |
| `cartStore.js`             | Zustand-store til indkøbskurven    | Vasilisa           | Mangler             |
| Recipe-komponenter         | Visning af opskrifter på forsiden  | Mitzie             | Udført              |
| About-komponent            | About Us-sektion på forsiden       | Mitzie             | Udført              |

Filnavne og komponentstruktur kan tilpasses undervejs, hvis det giver bedre mening i den eksisterende projektstruktur.

## 11. Installerede biblioteker

| Bibliotek    | Anvendelse                                   | Status                               |
| ------------ | -------------------------------------------- | ------------------------------------ |
| Next.js      | Framework og routing                         | Installeret og anvendt               |
| React        | Komponentbaseret brugergrænseflade           | Installeret og anvendt               |
| Tailwind CSS | Styling og layout                            | Installeret og anvendt               |
| Zustand      | Håndtering af global state til indkøbskurven | Installeret – implementering mangler |
| React Icons  | Ikoner til navigation og indkøbskurv         | Installeret og anvendt               |
| Fuse.js      | Fuzzy matching til produktsøgning            | Installeret og anvendt               |

## 12. Projektets designretning

- Webshop med fødevarer som produktkategori.
- DummyJSON API som datakilde.
- Fælles visuel retning med udgangspunkt i vores Figma-designs.
- Lys orange, cremefarvet og eventuelt grøn farvepalette.
- Fokus på brugervenlighed, overskuelig navigation og tydelige produktkort.
- Opskriftsinspiration som ekstra indhold på forsiden.
- Sammenhængende design på tværs af forside, produktside og produktdetaljeside.

Det visuelle design er implementeret i den nuværende version af `main`. Der foretages løbende justeringer og afsluttende kvalitetssikring.

## 13. Arbejdsproces og prioritering

### 1. Funktionaliteter og grundstruktur

Følgende funktioner er allerede implementeret:

- API-hentning og produktvisning.
- Produktkort og produktoversigt.
- Produktsøgning med Fuse.js.
- Pris- og ratingfiltrering.
- Sortering af produkter.
- Produktdetaljeside.
- Header og navigation.
- Forside med Hero, About Us og Recipes.
- Footer.

Følgende funktioner mangler eller skal færdiggøres:

- Kategorifiltrering skal verificeres.
- Zustand-store til indkøbskurven.
- Tilføjelse og fjernelse af produkter.
- Ændring af antal i kurven.
- Beregning af samlet pris.
- Integration mellem produktdetaljesiden og kurven.
- Fake checkout.

### 2. Visuel implementering

Den overordnede visuelle implementering er allerede gennemført af Mitzie.

Eventuelle resterende justeringer omfatter:

- Kontrol af layout og grid.
- Farver og typografi.
- Spacing og CSS-variabler.
- Knapper og produktkort.
- Header og navigation.
- Visuel sammenhæng mellem siderne.

### 3. Test og aflevering

Til sidst skal vi:

- Teste alle funktionaliteter.
- Kontrollere navigation og brugerflow.
- Teste indkøbskurv og prisberegning.
- Teste fake checkout.
- Kontrollere GitHub-repository og README.
- Deploye til Vercel.
- Gennemgå alle afleveringskrav.

## 14. Vigtige aftaler

- Hver opgave har én primært ansvarlig, medmindre andet er angivet.
- Den ansvarlige sørger for, at opgaven er færdig og fungerer.
- Mitzie har hovedansvaret for layout, visuelle komponenter, produktkort, knapper, kategorier, header, footer og forsidens øvrige indhold.
- Vasilisa har hovedansvaret for produkt-API-integration, produktdetaljer, Zustand, indkøbskurv og fake checkout.
- Mitzie har implementeret produktsøgningen med Fuse.js og fuzzy matching.
- Genanvendelige komponenter bruges på tværs af relevante sider.
- Fælles filer og styling koordineres, inden der foretages større ændringer.
- Opgaver, der afhænger af hinanden, koordineres mellem os.
- Funktionaliteter prioriteres før eventuelle ekstra funktioner.
- Vi holder os til kravene i den officielle opgavebeskrivelse og undgår unødvendige funktioner.
- Recipes-sektionen er en ekstra funktion og må ikke forsinke implementeringen af de obligatoriske krav.
- Favoritter er en ekstra funktion og prioriteres først, når indkøbskurv og fake checkout fungerer.

---

**Seneste status:** 3. november 2026

Projektets seneste ændringer fra Mitzie er integreret i `main` gennem pull requests #1–#7. Den videre udvikling fokuserer primært på indkøbskurv, state management og fake checkout, som Vasilisa har ansvaret for.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
