"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const convertLowercaseSentence = sentence.toLowerCase();
        const convertLowercaseWord = word.toLowerCase();
        const replaceRegxInSentence = convertLowercaseSentence.replace(/[.!#@*$&^%~`+=-_|'":;]/g, "");
        const splitSentence = replaceRegxInSentence.split(" ");
        const result = splitSentence.filter(item => item === convertLowercaseWord);
        return result.length;
    };
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result);
}
