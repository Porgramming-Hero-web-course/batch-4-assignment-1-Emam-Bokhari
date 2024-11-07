{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }

    const person = { name: "Moshfiqur Rahman", age: 24, email: "moshfiq@example.com" };

    console.log(validateKeys(person, ["name", "age"]));

}