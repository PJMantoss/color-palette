async function getColors(colorCount){
    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)

    let data = await response.json();

    let colors = data.color;

    displayColors(colors);
}

let colorCount = 100;
getColors(colorCount);