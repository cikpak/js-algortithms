const sentence = "The Fiji tropical dry forests are a tropical dry forest ecoregion in Fiji.";

const getLongestWord = (string) => {
    const wordsArr = string.split(" "); // impart propozitia in cuvinte

    let maxLength = wordsArr[0].length;
    let longestIndex = 0;

    for(let i = 1; i < wordsArr.length; i++) {
        if(maxLength < wordsArr[i].length) {
            maxLength = wordsArr[i].length;
            longestIndex = i;
        }
    }

    return wordsArr[longestIndex];
}

const longest = getLongestWord(sentence);