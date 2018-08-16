/* ------------------------------------------------------------------------------------------------------------------ */
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
console.log(`at first kitty was ${ JSON.stringify(kitty) }`);

// Error
/*kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/

kitty.name = "Cat";
kitty.numLives--;
console.log(`kitty looks like ${ JSON.stringify(kitty) } right now`);


/* ------------------------------------------------------------------------------------------------------------------ */
