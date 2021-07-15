import React, { useState } from "react";

function DogForm() {
    const [name, setName] = useState(" ");
    const handleNameChange = (event) => setName(event.target.value);

    const [breed, setBreed] = useState(" ");
    const handleBreedChange = (event) => setBreed(event.target.value);

    const [age, setAge] = useState(" ");
    const handleAgeChange = (event) => setAge(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log( name, breed, age);

        setName(" ");
        setBreed(" ");
        setAge(" ");
    } 

    // console.log("Value of name: ", name);
    // console.log("Value of breed: ", breed);
    // console.log("Value of age: ", age);
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input
                    id="name"
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                /> 
            </label>
            <label hmtlFor="breed">
                Breed:
                <input
                    id="breed"
                    type="text"
                    onChange={handleBreedChange}
                    value={breed}
                />
            </label>
            <label htmlFor="age">
                Age:
                <input 
                    id="age"
                    type="text"
                    onChange={handleAgeChange}
                    value={age}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default DogForm;
