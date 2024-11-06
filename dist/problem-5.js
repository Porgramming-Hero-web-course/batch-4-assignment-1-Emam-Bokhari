"use strict";
{
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const person = { name: "Alice", age: 30 };
    const result = getProperty(person, "age");
    console.log(result);
}
