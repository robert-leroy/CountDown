
function RandomImage() 
{

    // Get random number between 0 and number of $images
    randomCount = Math.floor(Math.random() * 163);
    document.getElementById("randImage").src = `./pics/${randomCount}.jpeg`;
 
}

window.onload = RandomImage;