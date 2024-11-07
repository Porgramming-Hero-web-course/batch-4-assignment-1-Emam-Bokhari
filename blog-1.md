### The significance of union and intersection types in Typescript

- Union:

Using a type, we can accept anyone of multiple types.

**_Example: 01_**

```
type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+"  | "AB-" | "O+" | "O-"

const displayBloodGroup = (bloodGroup: BloodGroup): string => {
    return `Your blood group is ${bloodGroup}`;
}

const result = displayBloodGroup("O+");

console.log(result);
```

Here, in the `BloodGroup` type we used a union type so we can select any one fo the options.

**_Example: 02_**

```
const displayValue = (value: string | number) =>{
    console.log(value);
}
```

Here the `displayValue` function can accept a value `string` or `number` .

<br/>
<br/>

- Intersection

With an intersection type, we can combine multiple types together.

_**Example: 01**_

```
type FirstName = {
    firstName: string;
}

type LastName = {
    lastName: string;
}

type FullName = FirstName & LastName;

const fullName: FullName = {
    firstName: "Moshfiqur",
    lastName: "Rahman",
}

console.log(fullName);
```

In this example in the `FirstName` type we only took `firstName`. And the other type `LastName` we took `lastName` property.

Then in `FullName` type we combined the `firstName`, and `lastName` properties together using intersection type.
