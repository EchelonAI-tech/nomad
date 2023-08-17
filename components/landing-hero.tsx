"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl space-y-5 font-extrabold">
        <h1>AI Operations Center</h1>
        <h2> Custom Solutions for:</h2>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          <TypewriterComponent
            options={{
              strings: [
                "Real Estate Agents.",
                "IT Operations ",
                "Cyber Security Operations",
                "Business Analytics",
                "Social Media Assistants",
                "Lead Generation",
                "Developers",
                "Everyone!!!"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Harness the Power of AI 
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Try For Free!!!
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
