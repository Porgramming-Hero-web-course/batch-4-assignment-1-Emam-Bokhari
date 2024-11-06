"use strict";
{
    const removeDuplicates = (value) => {
        return value.filter((number, index) => value.indexOf(number) === index);
    };
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);
}
