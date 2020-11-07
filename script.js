async function getColors(colorCount){
    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)

    let data = await response.json();

    let colors = data.colors;

    displayColors(colors);
}

function displayColors(colors){
    let myColorsHtml = colors.map(color => {
        `<div class="my-color" style="background: ${color.value}"></div>`
    }).join('');

    document.body.innerHTML = `<div></div>`
}

let colorCount = 100;
getColors(colorCount);