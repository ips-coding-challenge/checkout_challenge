import React from "react";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="container mx-auto max-w-container mt p-3">
      <h1 className="text-gray1 text-3xl font-semibold mt-8 ">Checkout</h1>
      <div className="flex flex-col md:flex-row-reverse justify-between">
        <Cart></Cart>
        <ContactForm></ContactForm>
      </div>

      <footer className="mt-24 text-sm text-gray1 text-center">
        IpsCodingChallenge@devchallenges.io
      </footer>
    </div>
  );
}

export default App;
