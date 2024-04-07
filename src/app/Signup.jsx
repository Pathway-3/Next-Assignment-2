"use client";

import React from "react";

export default function Signup() {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, password);
  };

  return (
    <form>
      <label>Username</label>
      <input type="text" value={user} onChange={handleUsername} />
      <label>Password</label>
      <input type="password" value={password} onChange={handlePassword} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
