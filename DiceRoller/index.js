


function rollDice() {
    const numberOfDices = document.getElementById("numberOfDice").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("images");
    const values = [];
    const images = [];

    for (let i = 0; i < numberOfDices; i++) {
        const value = Math.floor(Math.random() * 6 ) + 1;
        values.push(value);
        images.push(`<img src="images/Dice-${value}.png" alt="Dice-${value}"> `);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}