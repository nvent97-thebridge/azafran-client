interface Animal {
    id: number;
    name?: string;
}

interface Dog extends Animal {
    breed: string;
}

const Title = () => {

    const dog: Dog = {
        id: 1,
        breed: "Golden",
        name: "pipi",
    }

    return (
        <h1>{dog.name && dog.name.toUpperCase()}</h1>
    )
}

export { Title }