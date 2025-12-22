
// time variable for flashing
const FlashInterval = 200;

//colors used in styles (even off color)
const Colors =
{
    lightOff: "light-off",
    colorWhite: "color-white",
    colorRed: "color-red",
    colorBlue: "color-blue",
    colorGreen: "color-green",
    colorOrange: "color-orange",
    colorPurple: "color-purple"
};


/*I've added the event listeners, below, and the basic color change functions
and listeners.  I'm sure you can make it do cool things!*/

const lightsColorChange = (color) => {
    const colorArray=["red", "blue", "green", "orange", "purple"];
    document.querySelectorAll('.christmas-light').forEach((element, index) => {
        const existingColor = [...element.classList].find(c => c.startsWith('color-'))
        if (existingColor) {
            element.classList.remove(existingColor)
        }
        if (color==="mixed") {
            const nextColor = colorArray[index % colorArray.length];
            element.classList.add(`color-${nextColor}`);                                    
        } else {
            element.classList.add(`color-${color}`)
        }
    });
}


//color basic color change listner
document.querySelectorAll('.color-button').forEach(element => {
    element.addEventListener('click', function () {
        const color = this.id.split("-")[1];
        console.log(color);
        lightsColorChange(color);
    });
});

//lights off listener + action
document.getElementById("lights-on-button").addEventListener("click", (e) => {
    document.querySelectorAll('.christmas-light').forEach(element => {
        element.classList.remove("light-off");
        if (flashIntervalId) clearInterval(flashIntervalId);
    });
});

//lights on listener + action
document.getElementById("lights-off-button").addEventListener("click", (e) => {
    document.querySelectorAll('.christmas-light').forEach(element => {
        element.classList.add("light-off");
        if (flashIntervalId) clearInterval(flashIntervalId);
    });
});

// event listener for flashing lights
document.getElementById("lights-flash-button").addEventListener("click", flashAll);

//global variable to turn off flashing
let flashIntervalId = null;

//actually flash lights
function flashAll()
{
    const lights = document.querySelectorAll(".christmas-light");

    if (flashIntervalId) clearInterval(flashIntervalId);

    flashIntervalId = setInterval(() =>
    {
        lights.forEach(element =>
        {
            if (element.classList.contains(Colors.lightOff)) removeClass(element, Colors.lightOff)
            else addClass(element, Colors.lightOff);
        });
    }, FlashInterval);
}


//helper classes
function removeClass(element, className)
{
    if (element?.classList.contains(className))
    {
        element?.classList.remove(className);
    }
}

function addClass(element, className)
{
    element?.classList.add(className);
}