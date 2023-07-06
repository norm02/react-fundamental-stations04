import React from "react";
import { Header } from "../components/Header";
import { Top } from "../components/Top";
import { Footer } from "../components/Footer";
import { AboutContents } from "../components/AboutContents";
import { SkillContents } from "../components/SkillContents";
import { LinkContents } from "../components/LinkContents";

export const Home = () => {
  return (
    <div>
      <Header />
      <Top />
      <main>
        <section>
          <AboutContents />
          <SkillContents />
          <LinkContents />
        </section>
      </main>
      <Footer />
    </div>
  );
};
