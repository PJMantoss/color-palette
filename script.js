async function getColors(colorCount){
    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)

    let data = await response.json();
}