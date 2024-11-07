{
    const countWordOccurrences = (sentence: string, word: string): number => {
        
        const convertLowercaseSentence = sentence.toLowerCase();
        const convertLowercaseWord = word.toLowerCase();
    
        const splitSentence = convertLowercaseSentence.split(" ");
    
        const result = splitSentence.filter(item => item === convertLowercaseWord);
    
        return result.length;
    };
    
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result); 
    
    
    
}