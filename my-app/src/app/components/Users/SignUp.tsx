import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import db from "../backend/firebaseConfig"; // Ensure this is correctly set up

const SignUp: React.FC = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    name: "",
    age: 0,
    instrument: "",
    description: "",
    genre: [] as string[],
  });
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormFields((prevModel) => {
      const newGenres = checked
        ? [...prevModel.genre, value]
        : prevModel.genre.filter((genre) => genre !== value);
      return { ...prevModel, genre: newGenres };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formFields.email, password)
      .then((userCredentials) => {
        console.log("Successfully Logged In!", userCredentials);
        return addDoc(collection(db, "user-cards"), {
          userId: userCredentials.user.uid,
          email: formFields.email,
          name: formFields.name,
          age: formFields.age,
          instrument: formFields.instrument,
          description: formFields.description,
          genre: formFields.genre,
        });
      })
      .then(() => {
        console.log("User data added to Firestore");
      })
      .catch((err) => {
        console.log("Failed to sign up or add user data:", err);
      });
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
            value={formFields.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            name="name"
            value={formFields.name}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
          <label htmlFor="instruments">Instruments</label>
          <input
            type="instruments"
            className="form-control"
            name="instruments"
            value={formFields.instrument}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter instruments"
          />
          <label htmlFor="age">Age</label>
          <input
            type="age"
            className="form-control"
            name="age"
            value={formFields.age}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter age"
          />
          <label htmlFor="description">Description</label>
          <input
            type="description"
            className="form-control"
            name="description"
            value={formFields.description}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter description"
          />
          <label htmlFor="genre">Genre</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Rock"
                checked={formFields.genre.includes("Rock")}
                onChange={handleGenreChange}
              />
              Rock
            </label>
            <label>
              <input
                type="checkbox"
                value="Jazz"
                checked={formFields.genre.includes("Jazz")}
                onChange={handleGenreChange}
              />
              Jazz
            </label>
            <label>
              <input
                type="checkbox"
                value="Classical"
                checked={formFields.genre.includes("Classical")}
                onChange={handleGenreChange}
              />
              Classical
            </label>
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            aria-describedby="password"
            placeholder="Enter password"
          />
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

export default SignUp;