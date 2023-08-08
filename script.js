const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//function for randomizing the contents of story
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// random options to select from
const firstInsertion = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const secondInsertion = ["the soup kitchen", "Disneyland", "the White House"];
const thirdInsertion = ["spontaneously combusted",
    "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// values to be changed
let defaultName = "Bob";
let val1, val2, val3;
let temp1 = 94;
let unitTemp = "Farenheight";
let weight1 = 300;
let unitWeight = "pounds";

// story
const initialStory = "It was " + temp1 + " " + unitTemp + " outside, so " + val1 +
    " went for a walk.When they got to " + val2 +
    ", they stared in horror for a few moments, then " +
    val3 + ". " + defaultName + " saw the whole thing, but was not surprised - " +
    val1 + " weighs " + weight1 + " " + unitWeight + ", and it was a hot day.";

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);
function result() {
    let newStory = initialStory;
    if (customName.value != '') {
        newStory = newStory.replaceAll(defaultName, customName.value);
    }
    let value1 = randomValueFromArray(firstInsertion);
    let value2 = randomValueFromArray(secondInsertion);
    let value3 = randomValueFromArray(thirdInsertion);
    newStory = newStory.replaceAll(val1, value1);
    newStory = newStory.replaceAll(val2, value2);
    newStory = newStory.replaceAll(val3, value3);
    if (document.getElementById("uk").checked) {
        const temp2 = 34;
        const unitTemp2 = "Celsius";
        const weight2 = 21;
        const unitWeight2 = "stones";
        newStory = newStory.replaceAll(temp1, temp2);
        newStory = newStory.replaceAll(unitTemp, unitTemp2);
        newStory = newStory.replaceAll(weight1, weight2);
        newStory = newStory.replaceAll(unitWeight, unitWeight2);
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}