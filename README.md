# Simpel Shop – opgavefordeling og samlet projektstatus

Dette dokument giver et samlet overblik over arbejdsfordelingen mellem Vasilisa Virovka og Mitzie Petersen i forbindelse med udviklingen af Simpel Shop.

Formålet er at dokumentere, hvem der har arbejdet med de enkelte dele af projektet, hvilke funktioner der er implementeret, hvad der er testet, og hvilke opgaver der fortsat mangler, før projektet er fuldt færdigt og klar til aflevering.

Projektet udvikles som en gruppeopgave på multimediedesignuddannelsen ved Erhvervsakademi København (EK).

## Statusoversigt

| Status                | Betydning                                                 |
| --------------------- | --------------------------------------------------------- |
| Færdig og testet      | Implementeret og funktionaliteten er testet               |
| Implementeret         | Udviklet, men mangler eventuelt yderligere test           |
| Delvist implementeret | En del af funktionen er udviklet                          |
| Skal testes           | Implementeret, men ikke endeligt verificeret              |
| Mangler               | Ikke implementeret endnu                                  |
| Afventer integration  | Udviklet på en feature-branch, men ikke integreret i main |

---

## 1. Layout, struktur og designsystem

**Primært ansvarlig: Mitzie**

| Opgave                                                   | Ansvarlig          | Status                  |
| -------------------------------------------------------- | ------------------ | ----------------------- |
| Overordnet visuelt layout og sidestruktur                | Mitzie             | Færdig                  |
| Opsætning af CSS Grid til sidernes indhold               | Mitzie             | Implementeret           |
| Undersøgelse og eventuel brug af CSS Subgrid             | Mitzie             | Ikke et nødvendigt krav |
| Overordnet designstruktur for komponenterne              | Mitzie             | Færdig                  |
| Designsystem: farver, typografi og spacing               | Mitzie             | Implementeret           |
| CSS-variabler og design tokens                           | Mitzie             | Implementeret           |
| Global styling i `globals.css`                           | Mitzie             | Færdig                  |
| Fælles styling og layout i `layout.js`                   | Mitzie             | Færdig                  |
| Kontrol af responsivt layout på tværs af skærmstørrelser | Mitzie             | Skal testes             |
| Endelig visuel kvalitetssikring                          | Mitzie og Vasilisa | Mangler                 |

## 2. Header og navigation

**Primært ansvarlig: Mitzie**

**Supplerende ansvarlig: Vasilisa – integration med Zustand og dynamiske tællere**

| Opgave                                       | Ansvarlig          | Status                   |
| -------------------------------------------- | ------------------ | ------------------------ |
| Udvikling og styling af header               | Mitzie             | Færdig                   |
| Logo og navigation mellem sider              | Mitzie             | Færdig                   |
| Navigation fra forsiden til produktsiden     | Mitzie             | Færdig                   |
| Indkøbskurv-ikon og link i header            | Mitzie             | Færdig                   |
| Favoritlink i header                         | Vasilisa           | Implementeret            |
| Integration med indkøbskurvens Zustand-store | Vasilisa           | Implementeret            |
| Integration med favorit-store                | Vasilisa           | Implementeret            |
| Dynamisk visning af antal varer i kurven     | Vasilisa           | Implementeret og testet  |
| Dynamisk visning af antal favoritter         | Vasilisa           | Implementeret og testet  |
| Test af navigation og tællere                | Mitzie og Vasilisa | Skal indgå i samlet test |
| Endelig integration i main                   | Mitzie             | Afventer integration     |

Headeren er oprindeligt udviklet og stylet af Mitzie. Vasilisa har efterfølgende implementeret de dynamiske tællere, så headeren viser det aktuelle antal varer i indkøbskurven og antallet af favoritter.

## 3. Forside

**Ansvarlig: Delt mellem Vasilisa og Mitzie**

| Opgave                                         | Ansvarlig          | Status               |
| ---------------------------------------------- | ------------------ | -------------------- |
| Hero-sektion med overskrift, tekst og CTA-knap | Vasilisa           | Færdig               |
| Forsidens øvrige sektioner og indhold          | Mitzie             | Færdig               |
| Udvikling og styling af forsidens sektioner    | Mitzie             | Færdig               |
| Visning af udvalgte produkter                  | Mitzie             | Færdig               |
| Samling af forsiden i `page.js`                | Vasilisa           | Implementeret        |
| About Us-sektion                               | Mitzie             | Færdig               |
| Recipes-sektion på forsiden                    | Mitzie             | Færdig               |
| Test af alle links og CTA-knapper              | Mitzie og Vasilisa | Skal testes          |
| Responsiv test af hele forsiden                | Mitzie             | Skal testes          |
| Endelig integration i main                     | Mitzie             | Afventer integration |

Forsiden indeholder Hero, populære produkter, About Us og Recipes to inspire you.

## 4. Produktside og produktkomponenter

**Ansvarlig: Delt mellem Vasilisa og Mitzie**

| Opgave                                                | Ansvarlig          | Status                   |
| ----------------------------------------------------- | ------------------ | ------------------------ |
| Hentning af produkter fra DummyJSON API               | Vasilisa           | Færdig og testet         |
| Udvikling og styling af `ProductCard.jsx`             | Mitzie             | Færdig                   |
| Visning af produktbillede, navn, pris og rating       | Mitzie             | Færdig                   |
| Udvikling af genanvendelige knapper                   | Mitzie             | Implementeret            |
| Produktoversigtens visuelle layout                    | Mitzie             | Færdig                   |
| Grid-layout til produktoversigten                     | Mitzie             | Færdig                   |
| Integration af produktdata i produktkortene           | Vasilisa           | Færdig                   |
| Samling af produktoversigten i `products/page.js`     | Vasilisa           | Færdig                   |
| Visning af produktpriser og produktinformation        | Mitzie og Vasilisa | Implementeret            |
| Integration af favoritknap i produktkort              | Vasilisa           | Implementeret og testet  |
| Integration af tilføj-til-kurv-funktion i produktkort | Vasilisa           | Implementeret og testet  |
| Test af alle produktkort                              | Mitzie og Vasilisa | Skal indgå i samlet test |
| Endelig integration i main                            | Mitzie             | Afventer integration     |

Produktoversigten henter produktdata fra DummyJSON API og viser produkterne i genanvendelige produktkort.

Mitzie har stået for produktkortets visuelle udformning, mens Vasilisa har arbejdet med integration af produktdata og funktionalitet til favoritter og indkøbskurv.

## 5. Søgning og filtrering

**Ansvarlig: Primært Mitzie**

| Opgave                                          | Ansvarlig          | Status                                |
| ----------------------------------------------- | ------------------ | ------------------------------------- |
| Udvikling og styling af søgefelt                | Mitzie             | Færdig                                |
| Implementering af produktsøgning med Fuse.js    | Mitzie             | Implementeret og testet               |
| Hentning af produktkategorier fra DummyJSON API | Mitzie             | Skal verificeres                      |
| Visning af produktkategorier                    | Mitzie             | Skal verificeres                      |
| Udvikling og styling af kategorivælger          | Mitzie             | Skal verificeres                      |
| Filtrering af produkter efter kategori          | Mitzie             | Skal verificeres                      |
| Filtrering efter pris                           | Mitzie             | Implementeret                         |
| Filtrering efter rating                         | Mitzie             | Implementeret                         |
| Sortering af produkter                          | Mitzie             | Implementeret                         |
| Samspil mellem søgning og filtrering            | Mitzie             | Skal testes                           |
| Håndtering af tomme søgeresultater              | Mitzie og Vasilisa | Skal testes                           |
| Håndtering af kategorier uden produkter         | Mitzie og Vasilisa | Skal testes                           |
| Kontrol for dobbeltfiltrering                   | Mitzie             | Rettet – skal indgå i regressionstest |

Produktsøgningen med Fuse.js og fuzzy matching er implementeret.

Pris- og ratingfiltrering samt sortering er ligeledes implementeret. Mitzie har oplyst, at problematikken med dobbeltfiltrering er løst. Kategorifiltreringen og samspillet mellem de forskellige funktioner skal fortsat verificeres.

## 6. Produktdetaljeside

**Primært ansvarlig: Vasilisa**

| Opgave                                                   | Ansvarlig | Status           |
| -------------------------------------------------------- | --------- | ---------------- |
| Dynamisk produktside via `/products/[id]`                | Vasilisa  | Færdig           |
| Hentning af ét produkt ud fra produktets ID              | Vasilisa  | Færdig           |
| Visning af produktbillede og produktinformation          | Vasilisa  | Færdig           |
| Visning af pris, beskrivelse og rating                   | Vasilisa  | Færdig           |
| Visning af lagerstatus                                   | Vasilisa  | Færdig           |
| Udvikling og styling af produktdetaljesidens layout      | Vasilisa  | Implementeret    |
| Tilføjelse af produkt til indkøbskurven fra detaljesiden | Vasilisa  | Skal verificeres |
| Test af dynamiske produkt-ID'er                          | Vasilisa  | Skal testes      |
| Test af ugyldigt eller manglende produkt-ID              | Vasilisa  | Skal testes      |

Produktdetaljesiden er implementeret. Den skal gennemgås sammen med den øvrige funktionalitet, så det sikres, at brugerens handlinger fungerer korrekt på tværs af produktoversigt, produktdetaljeside og indkøbskurv.

## 7. Indkøbskurv og state management

**Primært ansvarlig: Vasilisa**

| Opgave                                                | Ansvarlig | Status               |
| ----------------------------------------------------- | --------- | -------------------- |
| Installation og opsætning af Zustand                  | Vasilisa  | Færdig               |
| Oprettelse af `cartStore.js`                          | Vasilisa  | Færdig               |
| Funktion til at tilføje produkter til kurven          | Vasilisa  | Færdig og testet     |
| Automatisk forøgelse af antal ved gentaget tilføjelse | Vasilisa  | Færdig og testet     |
| Funktion til at fjerne produkter fra kurven           | Vasilisa  | Færdig og testet     |
| Funktion til at ændre antal produkter                 | Vasilisa  | Færdig og testet     |
| Håndtering af antal på nul                            | Vasilisa  | Færdig og testet     |
| Beregning af subtotal og samlet pris                  | Vasilisa  | Færdig og testet     |
| Visning af produkter i kurven                         | Vasilisa  | Færdig og testet     |
| Visning af antal produkter                            | Vasilisa  | Færdig og testet     |
| Håndtering af tom indkøbskurv                         | Vasilisa  | Implementeret        |
| Udvikling og styling af `cart/page.js`                | Vasilisa  | Implementeret        |
| Integration af kurvens antal i header                 | Vasilisa  | Færdig og testet     |
| Tømning af hele indkøbskurven                         | Vasilisa  | Færdig og testet     |
| Test af samlet prisberegning                          | Vasilisa  | Testet               |
| Test af kurvens funktionalitet efter genindlæsning    | Vasilisa  | Skal verificeres     |
| Endelig integration i main                            | Mitzie    | Afventer integration |

Indkøbskurven er implementeret med Zustand. Den understøtter tilføjelse, fjernelse og ændring af antal samt automatisk prisberegning.

Funktionaliteten er testet med flere produkter og forskellige antal. Headeren viser det samlede antal varer i kurven.

## 8. Fake checkout og betaling

**Primært ansvarlig: Vasilisa**

| Opgave                                      | Ansvarlig | Status               |
| ------------------------------------------- | --------- | -------------------- |
| Udvikling af fake checkout-side             | Vasilisa  | Færdig               |
| Hentning af produkter fra Zustand-store     | Vasilisa  | Færdig               |
| Visning af produkterne i kurven             | Vasilisa  | Færdig               |
| Visning af samlet pris                      | Vasilisa  | Færdig               |
| Kundeoplysninger: navn og e-mail            | Vasilisa  | Implementeret        |
| Kundeoplysninger: adresse, by og postnummer | Vasilisa  | Implementeret        |
| Simulering af gennemført ordre              | Vasilisa  | Færdig og testet     |
| Visning af ordrebekræftelse                 | Vasilisa  | Færdig og testet     |
| Automatisk tømning af kurven efter ordre    | Vasilisa  | Færdig og testet     |
| Kontrol af tom kurv ved adgang til checkout | Vasilisa  | Skal testes          |
| Test af formularvalidering                  | Vasilisa  | Skal testes          |
| Endelig integration i main                  | Mitzie    | Afventer integration |

Checkout er en simpel simulering af et køb. Der implementeres ikke en rigtig betalingsløsning eller kortbetaling.

## 9. Favoritter

**Primært ansvarlig: Vasilisa**

| Opgave                                 | Ansvarlig | Status                  |
| -------------------------------------- | --------- | ----------------------- |
| Oprettelse af `FavoritesStore.js`      | Vasilisa  | Færdig                  |
| Opsætning af Zustand til favoritter    | Vasilisa  | Færdig                  |
| Integration af persist middleware      | Vasilisa  | Færdig                  |
| Lagring af favoritter i localStorage   | Vasilisa  | Færdig og testet        |
| Funktion til at tilføje favoritter     | Vasilisa  | Færdig og testet        |
| Funktion til at fjerne favoritter      | Vasilisa  | Færdig og testet        |
| Funktion til at rydde favoritter       | Vasilisa  | Implementeret           |
| Hjerteknap på produktkort              | Vasilisa  | Implementeret og testet |
| Visuel markering af gemte favoritter   | Vasilisa  | Implementeret og testet |
| Udvikling af `/favorites`              | Vasilisa  | Færdig                  |
| Visning af gemte favoritprodukter      | Vasilisa  | Færdig og testet        |
| Håndtering af tom favoritside          | Vasilisa  | Implementeret           |
| Dynamisk favoritantal i header         | Vasilisa  | Færdig og testet        |
| Test af favoritter efter genindlæsning | Vasilisa  | Færdig og testet        |
| Endelig integration i main             | Mitzie    | Afventer integration    |

Favoritfunktionen er implementeret med Zustand og localStorage. Brugeren kan gemme og fjerne produkter fra favoritter, og favoritterne bevares efter genindlæsning af siden.

## 10. Opskrifter

**Primært ansvarlig: Mitzie**

| Opgave                                      | Ansvarlig | Status           |
| ------------------------------------------- | --------- | ---------------- |
| Integration af DummyJSON Recipes API        | Mitzie    | Implementeret    |
| Visning af opskrifter på forsiden           | Mitzie    | Færdig           |
| Udvikling og styling af opskriftssektionen  | Mitzie    | Færdig           |
| Udvikling af opskriftsdetaljeside           | Mitzie    | Implementeret    |
| Dynamisk hentning af opskrift via ID        | Mitzie    | Skal verificeres |
| Test af navigation til opskriftsdetaljeside | Mitzie    | Skal testes      |
| Test af API-fejl og manglende opskrifter    | Mitzie    | Skal testes      |

Recipes-sektionen er en ekstra funktion, der bidrager med inspiration på forsiden.

## 11. Dark mode

**Primært ansvarlig: Mitzie**

| Opgave                                          | Ansvarlig          | Status                  |
| ----------------------------------------------- | ------------------ | ----------------------- |
| Udvikling af dark mode                          | Mitzie             | Under udvikling         |
| Toggle til skift mellem light og dark mode      | Mitzie             | Under udvikling         |
| Tilpasning af farver og baggrunde               | Mitzie             | Afventer implementering |
| Kontrol af kontrast og læsbarhed                | Mitzie             | Afventer                |
| Test af dark mode på alle sider                 | Mitzie og Vasilisa | Afventer                |
| Kontrol af tilstand ved navigation mellem sider | Mitzie             | Afventer                |

Dark mode er under udvikling og skal først markeres som færdig, når funktionen er implementeret og testet på tværs af projektets sider.

## 12. Test og kvalitetssikring

**Ansvarlig: Delt mellem Mitzie og Vasilisa**

| Opgave                                      | Ansvarlig          | Status                      |
| ------------------------------------------- | ------------------ | --------------------------- |
| Test af navigation mellem alle sider        | Mitzie og Vasilisa | Delvist udført              |
| Test af API-kald og produktvisning          | Vasilisa           | Færdig og testet            |
| Test af produktkort og produktinformation   | Mitzie             | Færdig                      |
| Test af søgning                             | Mitzie             | Færdig                      |
| Test af pris- og ratingfiltrering           | Mitzie             | Skal indgå i samlet test    |
| Test af kategorifiltrering                  | Mitzie             | Skal verificeres            |
| Test af samspil mellem søgning og filtre    | Mitzie             | Skal testes                 |
| Test af produktdetaljesiden                 | Vasilisa           | Skal gennemgås              |
| Test af indkøbskurv og prisberegning        | Vasilisa           | Færdig og testet            |
| Test af fake checkout-flow                  | Vasilisa           | Færdig og testet            |
| Test af favoritter og localStorage          | Vasilisa           | Færdig og testet            |
| Test af headerens dynamiske tællere         | Vasilisa           | Færdig og testet            |
| Test af opskriftssektionen                  | Mitzie             | Skal gennemgås              |
| Test af dark mode                           | Mitzie og Vasilisa | Afventer implementering     |
| Kontrol af responsivt design                | Mitzie             | Skal testes                 |
| Kontrol af visuel sammenhæng mellem siderne | Mitzie             | Afsluttende kontrol mangler |
| Kontrol af GitHub-repository og README      | Vasilisa           | Igangværende                |
| Integration af branches i main              | Mitzie             | Afventer                    |
| Test af samlet main-branch                  | Mitzie og Vasilisa | Afventer integration        |
| Deploy til Vercel og test af live-version   | Vasilisa           | Mangler                     |
| Kontrol af alle officielle afleveringskrav  | Mitzie og Vasilisa | Mangler                     |

## 13. Installerede biblioteker og teknologier

| Teknologi     | Anvendelse                         | Status                 |
| ------------- | ---------------------------------- | ---------------------- |
| Next.js       | Framework og routing               | Installeret og anvendt |
| React         | Komponentbaseret brugergrænseflade | Installeret og anvendt |
| Tailwind CSS  | Styling og layout                  | Installeret og anvendt |
| Zustand       | Global state management            | Installeret og anvendt |
| Fuse.js       | Fuzzy matching til produktsøgning  | Installeret og anvendt |
| React Icons   | Ikoner til brugergrænsefladen      | Installeret og anvendt |
| DummyJSON API | Produkt- og opskriftsdata          | Integreret             |

## 14. Projektets designretning

- Webshop med fødevarer som produktkategori.
- DummyJSON API som datakilde.
- Fælles visuel retning med udgangspunkt i Figma-designs.
- Lys orange og cremefarvet farvepalette med eventuelle grønne elementer.
- Fokus på brugervenlighed, overskuelig navigation og tydelige produktkort.
- Opskriftsinspiration som ekstra indhold på forsiden.
- Sammenhængende design på tværs af forside, produktside og produktdetaljeside.
- Dark mode som ekstra funktion under udvikling.

## 15. Prioritering frem mod færdigt projekt

Følgende punkter skal gennemgås, før projektet kan betragtes som fuldt færdigt:

1. Færdiggøre og teste Mitzie's dark mode.
2. Verificere kategorifiltrering og samspillet mellem søgning og filtre.
3. Gennemgå produktdetaljesiden og tilføjelse til kurven.
4. Gennemgå opskriftsnavigation og opskriftsdetaljesider.
5. Teste formularvalidering og checkout med tom kurv.
6. Gennemføre samlet test af navigation og brugerflow.
7. Kontrollere responsivt design på relevante skærmstørrelser.
8. Integrere begge feature-branches i `main`.
9. Teste hele projektet efter integrationen.
10. Deploye projektet til Vercel.
11. Teste live-versionen.
12. Kontrollere alle krav i den officielle opgavebeskrivelse.

## 16. Vigtige aftaler og ansvarsfordeling

- Hver opgave har én primært ansvarlig, medmindre andet er angivet.
- Den ansvarlige sørger for, at opgaven bliver implementeret og testet.
- Mitzie har hovedansvaret for det visuelle design, layout, header, footer, produktkort, søgning, filtrering, opskrifter og dark mode.
- Vasilisa har hovedansvaret for produkt-API-integration, produktdetaljer, Zustand, indkøbskurv, fake checkout og favoritter.
- Mitzie har implementeret produktsøgningen med Fuse.js.
- Vasilisa har implementeret den globale state management for indkøbskurv og favoritter.
- Fælles komponenter og styling koordineres, inden der foretages større ændringer.
- Funktioner, der afhænger af hinanden, koordineres mellem gruppemedlemmerne.
- Funktionaliteter prioriteres før eventuelle ekstra funktioner.
- Projektet skal leve op til den officielle opgavebeskrivelse.
- Recipes og favoritter er ekstra funktioner.
- Dark mode er under udvikling og skal ikke betragtes som færdig, før den er testet.
- Feature-branches skal integreres i `main`, hvorefter hele projektet testes samlet.

## 17. Git-status og seneste ændringer

Projektet udvikles på separate Git-branches.

Vasilisas aktuelle branch:

`feature/cart-and-favorites`

Seneste commit:

`58ca00b – Tilføjer favorit- og kurvetællere i header`

Committen indeholder ændringer i:

- `src/app/components/global/Header.jsx`
- `src/app/store/FavoritesStore.js`

Ændringerne er pushed til GitHub på Vasilisas feature-branch.

Mitzie står for den aftalte integration af begge gruppemedlemmers branches i `main`. Indtil integrationen er gennemført, skal funktionerne vurderes ud fra deres respektive branches.

GitHub-repository:

https://github.com/MP-VV-Tema-4/simpel_shop

---

**Senest opdateret: 4. november 2026**

Dokumentet fungerer som fælles statusoversigt for arbejdsfordeling, implementering, test og resterende opgaver i Simpel Shop.

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
