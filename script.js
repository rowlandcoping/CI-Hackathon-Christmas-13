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
    });
});

//lights on listener + action
document.getElementById("lights-off-button").addEventListener("click", (e) => {
    document.querySelectorAll('.christmas-light').forEach(element => {
        element.classList.add("light-off");
    });
});