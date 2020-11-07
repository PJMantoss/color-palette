async function getColors(colorCount){
    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)

    let data = await response.json();

    let colors = data.colors;

    displayColors(colors);
}

function displayColors(colors){
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background: ${color.value}"></div>`;
    }).join('');

    document.body.innerHTML = `<div class="my-colors">${myColorsHtml}</div>`;
}

//Set the count to 100 colors, update the .my-color class to maintain the grid structure
//Create a variable to store the count of colors to be loaded
let colorCount = 100;
getColors(colorCount);