import ProductHunt from "./components/ProductHunt";
import { useEffect, useState } from "react";

function App() {
  const [signUp, setSignUp] = useState(true);

  useEffect(() => {
    console.log("useEffect", signUp);
  }, [signUp]);

  const changeForm = (value) => {
    setSignUp(value);
  };

  console.log(signUp);
  return <ProductHunt />;
  // return signUp ? <SignUp onClick={changeForm} /> : <Login onClick={changeForm} />;
}

export default App;
