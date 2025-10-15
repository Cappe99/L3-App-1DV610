# Testspecifikation 

### Målbeskrivning

Målet med detta dokument är att ge en överblick över den manuella testningen för webbutiksapplikationen. Dokumentet beskriver testmål, teststrategi, testområden samt manuella testfall för de viktigaste funktionerna.

Syftet är att säkerställa att användaren kan:

- Visa produkter
- Lägga till och ta bort varor i kundvagnen
- Genomföra köp
- Hantera rabattkoder
- Lägga till pengar i plånboken

### Vad kommer testas och hur?

Övergripande mål:

Testningen kommer att innefatta hela användarflödet i webbshoppen, från att tanka på pengar till att lägga till och köpa en produkt. Testningen kommer att använda både korrekt funktionallitet och hantering av fel.

### Testmål

Syftet med testningen är att verifiera att alla kärnfunktioner i e-handelsflödet fungerar korrekt, stabilt och enligt kravspecifikationen.

### Teststrategi

Manuell testning:

Syfte:

- Verifiera att funktionella krav uppfylls
- Upptäcka felaktig felhantering eller saknade valideringar

Tillvägagångssätt:

- Testning sker i webbläsare (Chrome)
- Testfallen körs manuellt
- Buggar rapporteras i GitHub Issues

### Manuella testfall

#### TC1.1 – Visa alla produkter

Scenario: Användaren öppnar produktsidan

Precondition: Applikationen är startad

Test steps:
1. navigera till products i menyn
2. Kontrollera att alla produkter visas (8st)
- T-shirt, Cap, Hoddie, Sneakers, Hat, Jacket, Sunglasses, Pants
3. Klicka på en produkt

Expected:
- Alla produkter visas med namn, pris och bild
- Vid klick visas produktsida med detaljer

#### TC2.1 – Lägg till produkt i kundvagn

Scenario: Användaren vill lägga till en produkt

Precondition: Står på produktsidan (TC1.1)

Test steps:
1. Klicka på “Lägg till i kundvagn”
2. Kontrollera att flashmeddelandet “Produkten sparades!” visas
3. Navigera till "Cart" i menyn (Bild på en kundvagn)

Expected:
- Produkten syns i kundvagnen
- Antal och totalpris är korrekt

#### TC2.2 – Ta bort en produkt från kundvagn

Scenario: Användaren tar bort en produkt

Precondition: En produkt finns i kundvagnen (TC1.1, TC2.1)

Test steps:
1. Navigera till "Cart" i menyn (Bild på en kundvagn)
2. Klicka på “-” (Röd knapp med täckenet -)
3. Kontrollera att produkten försvinner

Expected:
- Produkten tas bort
- Summan uppdateras korrekt

#### TC2.3 – Töm hela kundvagnen

Scenario: Användaren vill rensa kundvagnen

Precondition: Flera produkter finns i kundvagnen (TC1.1, TC2.1 x4)

Test steps:
1. Klicka på “Töm kundvagn”
2. Kontrollera att vagnen blir tom

Expected: 
- Kundvagnen visar "Kundvagnen är tom."


#### TC3.1 – Använd rabattkod (giltig)

Scenario: Användaren anger en giltig rabattkod

Precondition: Minst en produkt i kundvagnen

Test steps:
1. Ange rabattkod “SOMMAR25” eller "VINTER10" eller "BLACKFRIDAY"
2. Klicka på “Använd kod”

Expected:
- Rabatt tillämpas
- Ny totalsumma visas
- Meddelande om lyckad rabatt visas

#### TC3.2 – Använd rabattkod (ogiltig)

Scenario: Användaren anger en ogiltig rabattkod

Precondition: Minst en produkt i kundvagnen

Test steps:
1. Ange "Hej"
2. Klicka på “Använd kod”

Expected:
- Felmeddelande visas (“Ogiltig kod”)
- Ingen rabatt appliceras

#### TC4.1 – Lägga till pengar i plånbok

Scenario: Användaren vill fylla på saldo

Precondition: Användaren står på sidan plånbok

Test steps:
1. Navigera till plånbok i menyn
2. Ange belopp 1200 i textfältet
3. Klicka på “Ladda på”

Expected:
- Saldo ökar med beloppet
- Meddelande: “Du har lagt till 1200 kr!” visas
- Transaktionslistan uppdateras

#### TC4.2 – Ogiltig insättning i plånbok

Scenario: Användaren anger ogiltigt belopp

Precondition: Användaren står på sidan plånbok

Test steps:

1. Ange “0” eller “-50”
2. Klicka på “Ladda på”

Expected:
- Felmeddelande: “Ogiltigt belopp”
- Saldot påverkas inte

#### TC5.1 – Genomföra köp med tillräckligt saldo

Scenario: Användaren har pengar i plånboken och vill köpa

Precondition: Plånbok har mer än totalsumman

Test steps:
1. Lägg till produkter i kundvagnen (TC1.1, TC2.1)
2. Klicka på "Betala"

Expected:
- Meddelande: “Tack för ditt köp!”
- Kundvagnen töms
- Pengar dras från plånboken
- Transaktionslistan uppdateras (på plånbokssidan)

#### TC5.2 – Försök köpa utan tillräckligt saldo

Scenario: Användaren försöker betala utan pengar

Precondition: Plånbokssaldo = 0

Test steps:
1. Lägg till produkter i kundvagnen (TC1.1, TC2.1)
2. Klicka på "Betala"

Expected:
- Felmeddelande: “Inte tillräckligt med pengar i plånboken”
- Kundvagnen töms inte

| Testfall | Produkter | Kundvagn | Rabatt | Kassa | Plånbok |
|-----------|------------|-----------|--------|----------|--------|
| TC1.1 | OK | 0 | 0 | 0 | 0 |
| TC2.1 | 0 | OK | 0 | 0 | 0 |
| TC2.2 | 0 | OK | 0 | 0 | 0 |
| TC2.3 | 0 | OK | 0 | 0 | 0 |
| TC3.1 | 0 | OK | OK | 0 | 0 |
| TC3.2 | 0 | OK | OK | 0 | 0 |
| TC4.1 | 0 | OK | OK| OK | OK |
| TC4.2 | 0 | OK | OK| OK | OK |
| TC5.1 | 0 | 0 | 0 | OK | 0 |
| TC5.2 | 0 | 0 | 0 | OK | 0|