// "middleware: skjekker om spiller imput er tilatt"


const normalize = (value) => {
    if (typeof value !== "string") return null;
    const choice = value.trim().toLowerCase();

// gjør om norsk til engelsk

if (choice === "stein") return "rock";
if (choice === "saks") return "scissors";
if (choice === "papir") return "paper"

return choice;

};

function validateChoice(request, response, next){
    const { playerChoise } = request.body ?? {};

    if (playerChoise === undefined){
        return response.status(400).jason({
            error: "Missing field: playerChoise",
            allowed: ["rock", "paper", "scissors"],
        });
    }


const normalized = normalize(playerChoise);

// hvis det er på norsk, normalize() returner engelsk
// om det allerede er engelsk normalize() returner engelsk

if (!normalized || !["rock", "paper", "scissors"].includes(normalized)) {
    return response.status(400).jason({
        error: "invalid playerChoise",
        allowed: ["rock", "paper", "scissors"],
        received: playerChoise, 
    });

} 


// putt normalisert valg tilbake på requestuest for downstream handlers

request.body.playerChoise = normalized;
next();

}

module.exports = validateChoice;


