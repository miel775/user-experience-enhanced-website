
# NEW DDA dessign

![DDA S10](https://github.com/user-attachments/assets/40be64d8-3a68-4858-b3a8-5dcfff43686d)

Voor Sprint 10 heb ik een hele nieuwe design gemaakt omdat het design van de vorige sprint heel erg op de oude design lijkt dit neemt nogal wat tijd in beslag omdat ik wat onderzoek heb moeten doen om het nieuwe design toe te passen. Het nieuwe design ga ik hier in deze ReadMe toelichten.


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Het nieuwe design is gebaseerd op het oude design maar dan met iets meer kleur zodat de website nog wat levendiger wordt. Er zitten ook sommige functies in.

# Header
<img width="817" alt="Screenshot 2025-05-07 at 20 49 37" src="https://github.com/user-attachments/assets/3550a0d1-60a7-4ebd-993d-09435177fad5" />

De header is responsive en is blauw zodat het er wat levendiger uitziet. Om de toegankelijkheid te verbeteren is er een darkmode knop bij toegevoegd om de pagina te veranderen naar Darkmode.

<img width="339" alt="Screenshot 2025-05-07 at 20 50 58" src="https://github.com/user-attachments/assets/90bf86ce-8cb2-49e3-8daf-8e23dbad0fdc" />

Er is iets bijzonders, ik heb ondervonden dat je met je duim moeilijker naar de bovenkant van het scherm kan gaan daarom heb ik een experiment gedaan om de header aan de onderkant te zetten. Hier staat dan de dropdown menu en het menu.

# Publicaties
In de volgende tab zie je het publicatie overzicht. Hier kan je zoeken naar de publicatie die je wilt en selecteren op welk onderdeel je het wilt sorteren door te kijken naar de buttons die in de titelbalk staan.

<img width="501" alt="Screenshot 2025-05-07 at 20 57 38" src="https://github.com/user-attachments/assets/0f1d8ec5-051d-4164-b7d2-c04f75df0065" />

# Andere onderdelen
Er is verder niet veel veranderd in de indeling

<img width="512" alt="Screenshot 2025-05-07 at 20 58 24" src="https://github.com/user-attachments/assets/8acc0b4c-4792-4594-a404-3fb522a98094" />

Wel is de footer een klein beetje aangepast op de nieuwe stijl.

# Publicatie detailpagina
Hier is niet veel veranderd er is namelijk gefocust op de stijl van de website.

# Loading state
<img width="664" alt="Screenshot 2025-05-10 at 07 44 40" src="https://github.com/user-attachments/assets/b745cf26-362e-4c29-ae56-c3f80046046e" />

Wanneer er een comment geplaatst wordt onder een publicatie dan is er een loading state. Deze sectie laat hij zien wanneer de form wordt gesubmit naar de server dan gaat het over naar de loading state. Als het is niet gelukt dan laat de website een error state zien.

## Gebruik
Je kan scrollen door de publicaties en erop klikken en uiteindelijk reageren op een publicatie door je mening te geven. Je kan het formulier invullen met een klein textje, je naam en een emoji. Deze reactie wordt dan geplaatst op de publicatie die er staat.

De header van de mobiel zit aan de onderkant, heb niet veel tijd gehad om hier op te focussen als alleen de dropdown menu. Maar je kan deze gebruiken door op de dropdown button te klikken en te navigeren door alle pagina's.

## Kenmerken
De HTML is opgebouwd in shopify liquid. Er wordt data opgehaald uit een server (Directus) Hier kan je publicatie materiaal toevogen om zo je website makkelijk publicaties te weergeven.

## Voorbeelden

# Voorbeeld 1: Loading state

https://github.com/miel775/user-experience-enhanced-website/blob/86118591ad83cbf1d6d5fe830a97ac36bef9d395/views/publicatie-blog.liquid#L94-L138

Hier zie je hoe ik de loading state heb toegepast in het ontwerp.

# Voorbeeld 2: Responsive Photo

https://github.com/miel775/user-experience-enhanced-website/blob/213ba430f64a777a565b57e948d737a48c81a835/views/publicaties.liquid#L37-L54

In plaats dat ik img tag gebruik, stop ik het in een picture element, hier kan je fallbacks in maken zodat de foto responsive wordt en het voorkomt dat er layout shifts zijn. Dit ook om een width en height mee te geven aan de foto bij de image tag.

# Voorbeeld 3: View Transition

https://github.com/miel775/user-experience-enhanced-website/blob/86118591ad83cbf1d6d5fe830a97ac36bef9d395/views/publicaties.liquid#L55-L57

https://github.com/miel775/user-experience-enhanced-website/blob/86118591ad83cbf1d6d5fe830a97ac36bef9d395/views/publicatie-blog.liquid#L140-L158
            
Ik heb een view transition toegepast wanneer je op een publicatie klikt. Ik heb van publicatie pagina naar detailpagina een view transition gemaakt. Dit heb ik wel met inline CSS moeten doen je dynamische data aanspreekt met publication.id.

## Installatie
1. Installeer NodeJS
2. Clone de repository naar je device
3. Open de repository in VS code.
4. Open de terminal
5. Type NPM install om het pakket the installeren
6. Start de server : npm start
7. Ga naar localhost:8000

## Bronnen
Duim
[Design van DDA](https://www.figma.com/design/9V8Ld6aVJQSggdpDTFr7V6/Untitled?node-id=1-5&t=U3kLuhbu6FF0znTH-1)
[View Transition](https://daverupert.com/2023/05/getting-started-view-transitions/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
