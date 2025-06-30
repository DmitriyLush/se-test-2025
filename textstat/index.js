/**
 * Event handler for 'Statistics' button.
 * Calculates following values for the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked() {
    const text = document.getElementById('text').value

    const valCharCount = text.length
    const valSpacesCount = (text.match(/ /g) || []).length
    const valVowelsCount = (text.match(/[aeiou]/gi) || []).length
    const valConsonantsCount = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length
    const valWordsCount = text.trim().split(/\s+/).length || 0

    document.getElementById('valCharCount').value = valCharCount
    document.getElementById('valSpacesCount').value = valSpacesCount
    document.getElementById('valVowelsCount').value = valVowelsCount
    document.getElementById('valConsonantsCount').value = valConsonantsCount
    document.getElementById('valWordsCount').value = valWordsCount
}

function removeEvenWords(text) {
    return text
        .trim()
        .split(/\s+/)
        .filter((_, idx) => idx % 2 === 0)
        .join(" ")
}

/**
 * Event handler for 'Remove even words' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked() {
    const text = document.getElementById('text').value

    document.getElementById('valOddWords').value = removeEvenWords(text)
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    const btnStatistics = document.getElementById('statistics')
    const btnRemoveWords = document.getElementById('removewords')

    text.value = txt;

    btnStatistics.addEventListener('click', onStatisticsClicked)
    btnRemoveWords.addEventListener('click', onRemoveWordsClicked)
}

document.addEventListener('DOMContentLoaded', init);


