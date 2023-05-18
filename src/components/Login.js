import React from "react";
import "../Login.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await fetch("https://pdhuntall1-production-8015.up.railway.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      setData(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div>
          <h1 className="heading">Sign in on Product Hunt</h1>
          <p className="para">
            Join our community of friendly folks discovering and sharing the latest products in tech.
          </p>
        </div>

        <div className="sign-in-form">
          <form onSubmit={onFormSubmit}>
            <p>{data}</p>
            <input
              type="email"
              className="input-box"
              placeholder="Your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input-box"
              placeholder="Your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            ​
            <br />
            <br />
            <input type="submit" className="signup-btn" value="Sign In" />
            <hr />
            <p className="or">OR</p>
            <br />
            <p className="P_class">
              You don't have an account? <a href="./">Sign Up</a>
            </p>
          </form>
        </div>

        <p className="permission">We'll never post to any of your accounts without your permission.</p>
      </div>
    </>
  );
}
