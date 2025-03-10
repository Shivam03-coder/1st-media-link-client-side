import React from "react";
import Hero from "./hero";
import Footer from "./footer";
import Solution from "./solution";
import CustomerReview from "./customer-review";
import Payment from "./payment";
import Goal from "./goals";

function Home() {
  return (
    <div className="min-h-screen dark:bg-primary">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <Hero />
        <Solution />
        <Goal />
        <CustomerReview />
        <Payment />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
