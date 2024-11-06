"use strict";
{
    ;
    const updateProfile = (obj, update) => {
        return Object.assign(Object.assign({}, obj), update);
    };
    const userInfo = { name: "Moshfiqur Rahman", age: 24, email: "moshfiq@example.com" };
    console.log(updateProfile(userInfo, { age: 25 }));
}
