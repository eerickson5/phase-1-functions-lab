// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue-42);
    //returns the number of blocks given a value
}

function distanceFromHqInFeet(someValue) {
    return(264 * distanceFromHqInBlocks(someValue));
}

function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(start-destination);
    return(blocks * 264);
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if(feet > 2500){
        return 'cannot travel that far';
    } else if(feet > 2000) {
        return(25)
    } else if(feet > 400) {
        return (0.02*(feet - 400));
    } else {
        return(0);
    }
}