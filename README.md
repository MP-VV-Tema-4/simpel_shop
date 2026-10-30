# Simpel Shop – opgavefordeling

Skriv navnet på den person, der har hovedansvaret for hver opgave. Den ansvarlige står for at udvikle, teste og færdiggøre den pågældende del.

## 1. Layout og overordnet design

| Opgave                                                    | Ansvarlig |
| --------------------------------------------------------- | --------- |
| Overordnet layout og sidestruktur                         |           |
| Opsætning af CSS Grid til sidernes indhold                |           |
| Eventuel brug af CSS Subgrid                              |           |
| Responsivt layout til forskellige skærmstørrelser         | INGEN     |
| Designsystem: farver, typografi, spacing og CSS-variabler |           |
| Global styling i `globals.css`                            |           |
| Fælles layout i `layout.js`                               |           |

## 2. Header og navigation

| Opgave                                     | Ansvarlig |
| ------------------------------------------ | --------- |
| Udvikling og styling af header             |           |
| Logo og navigation mellem sider            |           |
| Indkøbskurv-ikon og visning af antal varer |           |
| Udvikling og styling af footer             |           |

## 3. Forside

| Opgave                                         | Ansvarlig |
| ---------------------------------------------- | --------- |
| Hero-sektion med overskrift, tekst og CTA-knap |           |
| Forsidens øvrige sektioner og indhold          |  Mitzie   |
| Visning af udvalgte/populære produkter         |           |
| Samling af forsiden i `page.js`                |           |

## 4. Produktside og produktkomponenter

| Opgave                                                        | Ansvarlig |
| ------------------------------------------------------------- | --------- |
| Hentning af produkter fra DummyJSON API                       |           |
| Udvikling og styling af `ProductCard.jsx`                     |           |
| Visning af produktbillede, navn, pris og rating i produktkort |           |
| Genanvendelige knapper i forskellige varianter                | Mitzie    |
| Favoritikon (stjerne) på produktkort                          |           |
| Funktion til at tilføje og fjerne favoritter                  |           |
| Produktoversigt i `products/page.js`                          |           |
| Grid-layout til produktoversigten                             |           |

## 5. Søgning og filtrering

| Opgave                                                             | Ansvarlig |
| ------------------------------------------------------------------ | --------- |
| Udvikling og styling af søgefelt                                   |           |
| Implementering af produktsøgning med Fuse.js                       |           |
| Hentning og visning af produktkategorier                           |   Mitzie  |
| Filtrering af produkter efter kategori                             |           |
| Håndtering af tomme søgeresultater og ingen produkter i kategorien |           |

## 6. Produktdetaljeside

| Opgave                                              | Ansvarlig |
| --------------------------------------------------- | --------- |
| Dynamisk produktside via `/products/[id]`           |           |
| Hentning af ét produkt ud fra produktets ID         |           |
| Visning af produktets billede og produktinformation |           |
| Visning af pris, beskrivelse, rating og lagerstatus |           |
| Tilføj til kurv fra produktdetaljesiden             |           |

## 7. Indkøbskurv og state management

| Opgave                                       | Ansvarlig |
| -------------------------------------------- | --------- |
| Opsætning af Zustand-store (`cartStore.js`)  |           |
| Funktion til at tilføje produkter til kurven |           |
| Funktion til at fjerne produkter fra kurven  |           |
| Funktion til at ændre antal af produkter     |           |
| Beregning af samlet pris                     |           |
| Visning af kurvens produkter og antal        |           |
| Håndtering af tom indkøbskurv                |           |
| Udvikling og styling af `cart/page.js`       |           |

## 8. Checkout og betaling

| Opgave                                            | Ansvarlig |
| ------------------------------------------------- | --------- |
| Udvikling af checkout-/betalingsside              |           |
| Formular med kunde- og leveringsoplysninger       |           |
| Validering af formularfelter                      |           |
| Visning af ordreoversigt og samlet pris           |           |
| Simulering af gennemført betaling (fake checkout) |           |
| Bekræftelse efter gennemført ordre                |           |

## 9. Test og aflevering

| Opgave                                    | Ansvarlig |
| ----------------------------------------- | --------- |
| Test af navigation mellem alle sider      |           |
| Test af API-kald og produktvisning        |           |
| Test af søgning og kategorifiltrering     |           |
| Test af favoritfunktion                   |           |
| Test af indkøbskurv og prisberegning      |  Mitzie   |
| Test af checkout-flow                     |           |
| Kontrol af responsivt design              |           |
| Kontrol af GitHub-repository og README    |           |
| Deploy til Vercel og test af live-version |           |
| Kontrol af alle afleveringskrav           |           |

---
## Komponent oversigt: 
**Global**

**Index page**

**Product page**

**Single product view page**

**Contact page**
---


## Installerede biblioteker

- **Zustand:** Håndtering af global state til indkøbskurven.
- **React Icons:** Ikoner til blandt andet navigation, favoritter og indkøbskurv.
- **Fuse.js:** Fuzzy search til produktsøgning.

## Projektets designretning

- Webshop med fødevarer som produktkategori.
- DummyJSON API som datakilde.
- Lys orange, cremefarvet og eventuelt grøn farvepalette.
- Fokus på brugervenlighed, overskuelig navigation og tydelige produktkort.

## Vigtige aftaler

- Hver opgave har én primært ansvarlig.
- Den ansvarlige sørger for, at opgaven er færdig og fungerer.
- Genanvendelige komponenter skal bruges på tværs af relevante sider.
- Fælles filer og styling koordineres, inden der foretages større ændringer.
- Opgaver, der afhænger af hinanden, skal koordineres mellem de ansvarlige.

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
