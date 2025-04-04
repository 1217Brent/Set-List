import React, { useState, useEffect } from "react";
import db from "../backend/firebaseConfig";
import { getAuth } from "firebase/auth";
import { getUserCard } from "../backend/firebaseFunctions";
import { doc, updateDoc } from "firebase/firestore";

interface UserCard {
  name: string;
  age: number;
  instrument: string;
  genre: string[];
  email: string;
  description: string;
}

const EditUser: React.FC = () => {
  const [userCard, setUserCard] = useState<UserCard>({
    name: "",
    age: 0,
    instrument: "",
    genre: [],
    email: "",
    description: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const currUser = await getUserCard(db, user.uid);
        if (currUser) {
          setUserCard(currUser);
        }
      } else {
        console.log("Failed to load user");
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCard((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setUserCard((prevModel) => {
      const newGenres = checked
        ? [...prevModel.genre, value]
        : prevModel.genre.filter((genre) => genre !== value);
      return { ...prevModel, genre: newGenres };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "user-cards", user.uid);
        const updateData = { // this is for selective updates
            email: userCard.email,
            name: userCard.name,
            age: userCard.age,
            instrument: userCard.instrument,
            description: userCard.description,
            genre: userCard.genre,
        }
        await updateDoc(userDocRef, updateData);
        console.log("User card updated successfully");
      } else {
        console.log("User does not exist");
      }
    } catch (error) {
      console.error("Could not submit:", error);
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userCard.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userCard.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          <label htmlFor="instrument">Instruments</label>
          <input
            type="text"
            className="form-control"
            name="instrument"
            value={userCard.instrument}
            onChange={handleChange}
            placeholder="Enter instruments"
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={userCard.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={userCard.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
          <label htmlFor="genre">Genre</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Rock"
                checked={userCard.genre.includes("Rock")}
                onChange={handleGenreChange}
              />
              Rock
            </label>
            <label>
              <input
                type="checkbox"
                value="Jazz"
                checked={userCard.genre.includes("Jazz")}
                onChange={handleGenreChange}
              />
              Jazz
            </label>
            <label>
              <input
                type="checkbox"
                value="Classical"
                checked={userCard.genre.includes("Classical")}
                onChange={handleGenreChange}
              />
              Classical
            </label>
          </div>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;