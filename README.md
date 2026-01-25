 ap2 steinsakspapir Middleware - validateChoise

 hvorfor middleware?

 Api-et skal ha et endepunkt hvor klienten sender inn et valg i steinsakspapir (f.eks. playerchoise).
 uten validering kan klienten sende ugyldige verdier (tom string, feil ord, tall osv.) som kan gi feil resultat eller feil data lagret.

 denne middlewaren løser dette ved å:

 sjekke at feltet finnes i request body

 sjekke at verdien er lovlig

 normalisere norsk input til engelsk (stein, saks,papir / rock,scissors,paper)

 returnerer "400 bad request" med feilmelding hvis inputet er ugyldig

 hva det gjør:

 godtar inputene på både norsk og engelsk og normaliserer dem til engelsk og setter playerchise requesten til den normaliserte verdien.