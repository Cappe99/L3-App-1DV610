Ska jag vara riktigt ärlig så tycker jag detta är skitsvårt, När jag ska bryta ut, göra funktioner mindre, tänka på errorhandeling, tänka på klasser hit och dit, så känns det som jag mer och mer gör det svårare att utveckla. Att hålla koll på allt, det känns som jag måste tänka på så sjukt mycket mer, och mer komlicerat för att följa clean codes exempler och regler. 

## Kapitel 2: Meaningful Names

Jag tycker det är väldigt svårt att namnge allt som ska bli namngivet.
**Use Intention-reviling names** är väl någonstans den mest centrala reglen i kappitlet, men även den svåraste att utföra. 

![Name](../public/images/Name.PNG)

Denna funktion har jag reflekterat mycket över, Den visar alla produkter i en kundvan, men ser man verkligen det? **AVOID DISINFORMATION** Man ska inte namnge något som likar förmycket. Kan man se att det är i prular när man kollar på den snabbt? ser man att det är itemS och inte item? 

I övrigt känner jag att jag följer det flesta reglerna som kappitlet tar upp, vissa regler behöver iallafall jag inte ens lägga en tanke på att uppfylla. Tex. **USE PRONOUNCEABLE NAMES**, **DONT BE CUTE** 

## Kapitel 3: Functions

Ett stycke i boken träffade mig mitt i prick **"How Do You Write Functions Like This?"**. Det handlar inte bara om att skriva funktioner tycker jag, det handlar om nästan alla kapitel, jag skriver kassa namn i början för att sedan refakturera, Skriver dåliga kommentarer, Dålig error handeling som bara jag fattar, långa funktioner etc. 

![Refactor](../public/images/Refactor.PNG)

Här btyter jag mot många regler innan jag har refacturerat.

**Small!**, **Do One Thing**, delvis **Function Arguments**, **Don't Repeat Yourself**

Det är såhär jag tycker om att jobba, mata ut kod och strunta i reglerna ibörjan, få det att funka, sedan kan jag börja städa för att få clean code. 

## Kapitel 4: Comments

Generellt har jag aldrig gillat att skriva kommentarer eller läsa andras kommentarer för den delen heller. Detta är det kappitlet jag sympatiserar mest med i hela boken. 

Med det sagt skulle kanske jag behöva skriva mer kommentarer **Comments Do Not Make Up for Bad Code**, Jag skriver troligtvis mycket konstig och dålig kod, men jag försöker att städa, och försöker tillämpa **Explain Yourself in Code**. Jag tyvärr har jag insett att jag använder **Commented-Out Code** väldigt mycket när jag refacturerar och kan ibland glömma att ta bort gammal kod. 

Sedan självklart skriver jag **Legal Comments** och ska jag skriva en kommentar försöker jag tillämpa **Mumbling**. 

Under workshoppen L2 jobbade jag tillsammans med en som skrev längre kommentarer än själva koden, jag läste inte ens kommentarerna då det tog längre tid än att förstå själva koden. **Redundant Comments**, **Noise Comments**

Jag använder däremot mycket **TODO Comments** som även clean code boken tycker är bra kommentarer, om det inte är en ursäkt för att skriva dålig kod. 


## Kapitel 5: Formatting

För att sammanfatta typ hela detta kappitel med ett citat från boken, "If  instead they see a scrambled mass of code that looks like it was written by a bevy of drunken sailors, then they are likely to conclude that the same inattention to detail pervades every other aspect of the project." 

Jag tycker jag följer **The Purpose of Formatting** även om jag "Fuskar" och använder ESLint, vilket gör **Indentation** väldigt enkelt. Med det sagt  har jag kollat igenom reglerna på kappitlet kopplat till mid kod. 

Jag har refacturerat så jag följer **The Newspaper Metaphor** och **Vertical Ordering** Viktiga delar och funktioner i början och i slutet ska det vara mindre viktiga. 

Tex. 

![findProduct](../public/images/findProduct.PNG) 

Denna är en hjälp funktion som ligger sist i min class vars ända uppgift är att hitta en produkt.

Jag använder även **Vertical Openness Between Concepts** för att lätt kunna följa med i koden. 

**Instance Variables** och **Vertical Density**(Eftersom det hör ihop) ligger i toppen på classerna, detta är lite olika från språken, i C++ ligger de i botten på classerna, men huvudsaken är att man ska kunna hitta dessa snabbt. 

![Variables](../public/images/variables.PNG)

**Dependent Functions** Jag vet inte riktigt om jag håller med helt och hållet på denna. Jag har försökt så gott jag kan att använda mig av detta men jag själv tycker att funktioner ska vara i botten, men där i ordning, så den första funktionen i klassen om kallar på en annan klass ska ligga först i botten(if that make sense?). 


## Kapitel 6: Objects and Data Structures

## Kapitel 7: Error Handling


