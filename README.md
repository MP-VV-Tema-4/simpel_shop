# Simpel Shop – opgavefordeling

## 1. Layout, struktur og designsystem

**Ansvarlig: Mitzie**

| Opgave                                         | Ansvarlig |
| ---------------------------------------------- | --------- |
| Overordnet visuelt layout og sidestruktur      | Mitzie    |
| Opsætning af CSS Grid til sidernes indhold     | Mitzie    |
| Undersøgelse og eventuel brug af CSS Subgrid   | Mitzie    |
| Overordnet designstruktur for komponenterne    | Mitzie    |
| Designsystem: farver, typografi og spacing     | Mitzie    |
| Udarbejdelse af CSS-variabler og design tokens | Mitzie    |
| Global styling i `globals.css`                 | Mitzie    |
| Fælles styling og layout i `layout.js`         | Mitzie    |

## 2. Header og navigation

**Ansvarlig: Mitzie**

| Opgave                                     | Ansvarlig |
| ------------------------------------------ | --------- |
| Udvikling og styling af header             | Mitzie    |
| Logo og navigation mellem sider            | Mitzie    |
| Navigation fra forsiden til produktsiden   | Mitzie    |
| Indkøbskurv-ikon og visning af antal varer | Mitzie    |

## 3. Forside

**Ansvarlig: Delt mellem os**

| Opgave                                         | Ansvarlig |
| ---------------------------------------------- | --------- |
| Hero-sektion med overskrift, tekst og CTA-knap | Vasilisa  |
| Forsidens øvrige sektioner og indhold          | Mitzie    |
| Udvikling og styling af forsidens sektioner    | Mitzie    |
| Eventuel visning af udvalgte produkter         | Mitzie    |
| Samling af forsiden i `page.js`                | Vasilisa  |

## 4. Produktside og produktkomponenter

**Ansvarlig: Delt mellem os**

| Opgave                                                        | Ansvarlig |
| ------------------------------------------------------------- | --------- |
| Hentning af produkter fra DummyJSON API                       | Vasilisa  |
| Udvikling og styling af `ProductCard.jsx`                     | Mitzie    |
| Visning af produktbillede, navn, pris og rating i produktkort | Mitzie    |
| Udvikling af genanvendelige knapper i forskellige varianter   | Mitzie    |
| Udvikling af produktoversigtens visuelle layout               | Mitzie    |
| Grid-layout til produktoversigten                             | Mitzie    |
| Integration af produktdata i produktkortene                   | Vasilisa  |
| Samling af produktoversigten i `products/page.js`             | Vasilisa  |

## 5. Søgning og filtrering

**Ansvarlig: Delt mellem os**

| Opgave                                                          | Ansvarlig          |
| --------------------------------------------------------------- | ------------------ |
| Udvikling og styling af søgefelt                                | Mitzie             |
| Implementering af produktsøgning med Fuse.js                    | Vasilisa           |
| Hentning af produktkategorier fra DummyJSON API                 | Mitzie             |
| Visning af produktkategorier                                    | Mitzie             |
| Udvikling og styling af kategorivælger                          | Mitzie             |
| Filtrering af produkter efter kategori                          | Mitzie             |
| Samspil mellem søgning og kategorifiltrering                    | Vasilisa og Mitzie |
| Håndtering af tomme søgeresultater og kategorier uden produkter | Vasilisa og Mitzie |

## 6. Produktdetaljeside

**Ansvarlig: Vasilisa**

| Opgave                                                        | Ansvarlig |
| ------------------------------------------------------------- | --------- |
| Dynamisk produktside via `/products/[id]`                     | Vasilisa  |
| Hentning af ét produkt ud fra produktets ID                   | Vasilisa  |
| Visning af produktets billede og produktinformation           | Vasilisa  |
| Visning af pris, beskrivelse, rating og lagerstatus           | Vasilisa  |
| Udvikling og styling af produktdetaljesidens layout           | Vasilisa  |
| Funktion til at tilføje produktet til kurven fra detaljesiden | Vasilisa  |

## 7. Indkøbskurv og state management

**Ansvarlig: Vasilisa**

| Opgave                                       | Ansvarlig          |
| -------------------------------------------- | ------------------ |
| Opsætning af Zustand-store (`cartStore.js`)  | Vasilisa           |
| Funktion til at tilføje produkter til kurven | Vasilisa           |
| Funktion til at fjerne produkter fra kurven  | Vasilisa           |
| Funktion til at ændre antal af produkter     | Vasilisa           |
| Beregning af samlet pris                     | Vasilisa           |
| Visning af kurvens produkter og antal        | Vasilisa           |
| Håndtering af tom indkøbskurv                | Vasilisa           |
| Udvikling og styling af `cart/page.js`       | Vasilisa           |
| Test af indkøbskurv og prisberegning         | Mitzie og Vasilisa |

## 8. Fake checkout og betaling

**Ansvarlig: Vasilisa**

| Opgave                                        | Ansvarlig |
| --------------------------------------------- | --------- |
| Udvikling af fake betalingsside               | Vasilisa  |
| Hentning af produkter fra Zustand-store       | Vasilisa  |
| Visning af produkterne i kurven               | Vasilisa  |
| Visning af samlet pris                        | Vasilisa  |
| Enkel simulering af gennemført betaling       | Vasilisa  |
| Visning af bekræftelse efter gennemført ordre | Vasilisa  |

## 9. Test og kvalitetssikring

**Ansvarlig: Delt mellem os**

| Opgave                                               | Ansvarlig          |
| ---------------------------------------------------- | ------------------ |
| Test af navigation mellem alle sider                 | Mitzie og Vasilisa |
| Test af API-kald og produktvisning                   | Vasilisa           |
| Test af produktkort og visning af produktinformation | Mitzie             |
| Test af søgning                                      | Vasilisa           |
| Test af kategorifiltrering                           | Mitzie             |
| Test af produktdetaljesiden                          | Vasilisa           |
| Test af indkøbskurv og prisberegning                 | Mitzie og Vasilisa |
| Test af fake checkout-flow                           | Vasilisa           |
| Kontrol af visuel sammenhæng mellem siderne          | Mitzie             |
| Kontrol af GitHub-repository og README               | Vasilisa           |
| Deploy til Vercel og test af live-version            | Vasilisa           |
| Kontrol af alle afleveringskrav                      | Mitzie og Vasilisa |

## 10. Komponent- og filoversigt

| Komponent/fil              | Funktion                           | Ansvarlig          |
| -------------------------- | ---------------------------------- | ------------------ |
| `layout.js`                | Fælles layout for hjemmesiden      | Mitzie             |
| `globals.css`              | Global styling og designvariabler  | Mitzie             |
| `shared_header_footer.jsx` | Fælles header og eventuelt footer  | Mitzie             |
| `index_Hero.jsx`           | Hero-sektion på forsiden           | Vasilisa           |
| `page.js`                  | Forsidens samling af komponenter   | Vasilisa           |
| `products/page.js`         | Produktsidens overordnede struktur | Vasilisa           |
| `ProductCard.jsx`          | Genanvendeligt produktkort         | Mitzie             |
| `product_page.jsx`         | Produktoversigtens komponenter     | Vasilisa og Mitzie |
| `single_view.jsx`          | Visning af ét produkt              | Vasilisa           |
| `basket.jsx`               | Indkøbskurvens indhold             | Vasilisa           |
| `cart/page.js`             | Indkøbskurv og fake checkout       | Vasilisa           |
| `cartStore.js`             | Zustand-store til indkøbskurven    | Vasilisa           |

Filnavne og komponentstruktur kan tilpasses undervejs, hvis det giver bedre mening i den eksisterende projektstruktur.

## 11. Installerede biblioteker

- **Zustand:** Håndtering af global state til indkøbskurven.
- **React Icons:** Ikoner til blandt andet navigation og indkøbskurv.
- **Fuse.js:** Fuzzy search til produktsøgning.

## 12. Projektets designretning

- Webshop med fødevarer som produktkategori.
- DummyJSON API som datakilde.
- Fælles visuel retning med udgangspunkt i de Figma-designs, vi allerede har drøftet.
- Lys orange, cremefarvet og eventuelt grøn farvepalette.
- Fokus på brugervenlighed, overskuelig navigation og tydelige produktkort.

Det endelige visuelle design fastlægges og implementeres, når de nødvendige funktionaliteter er på plads.

## 13. Arbejdsproces og prioritering

**1. Funktionaliteter og grundstruktur**

Først sørger vi for, at de nødvendige funktioner og sider fungerer:

- API-hentning og produktvisning.
- Produktkategorier og filtrering.
- Produktsøgning.
- Produktdetaljeside.
- Indkøbskurv med Zustand.
- Fake checkout.

Samtidig udvikles de nødvendige genanvendelige komponenter, så de kan integreres på tværs af siderne.

**2. Visuel implementering**

Når funktionaliteterne er på plads, færdiggør vi det visuelle design med udgangspunkt i vores fælles Figma-retning.

Her tilpasses blandt andet:

- Layout og grid.
- Farver og typografi.
- Spacing og CSS-variabler.
- Knapper og produktkort.
- Header og navigation.
- Visuel sammenhæng mellem siderne.

**3. Test og aflevering**

Til sidst tester vi funktionaliteterne og den samlede brugeroplevelse, inden projektet deployes til Vercel og afleveres.

## 14. Vigtige aftaler

- Hver opgave har én primært ansvarlig, medmindre andet er angivet.
- Den ansvarlige sørger for, at opgaven er færdig og fungerer.
- Mitzie har hovedansvaret for layout, visuelle komponenter, produktkort, knapper, kategorier og forsidens øvrige indhold.
- Vasilisa har hovedansvaret for API-integration, søgning, produktdetaljer, state management, indkøbskurv og fake checkout.
- Genanvendelige komponenter bruges på tværs af relevante sider.
- Fælles filer og styling koordineres, inden der foretages større ændringer.
- Opgaver, der afhænger af hinanden, koordineres mellem os.
- Funktionaliteter prioriteres før den endelige visuelle færdiggørelse.
- Vi holder os til kravene i den officielle opgavebeskrivelse og tilføjer ikke unødvendige funktioner.

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
