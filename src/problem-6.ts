{
    interface IProfile {
        name: string;
        age: number;
        email: string;
    };

    const updateProfile = (obj: IProfile, update: Partial<IProfile>): IProfile => {
        return { ...obj, ...update }
    }

    const userInfo: IProfile = { name: "Moshfiqur Rahman", age: 24, email: "moshfiq@example.com" };

    console.log(updateProfile(userInfo, { age: 25 }));

}