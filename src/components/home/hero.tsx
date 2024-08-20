"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import Link from "next/link";
import TextAnim from "../helpers/TextAnim";
import Search from "./Search";

export const Hero = () => {
  return (
    <section className="py-28  ">
      <div className=" flex flex-col items-center justify-center container">
        <Badge
          variant="outline"
          className=" items-center gap-2 py-1 px-2 text-lg font-mono"
        >
          <Rocket className="size-6" />
          Boost Your Productivity
        </Badge>
        <h1 className=" text-center  text-3xl md:text-7xl font-mono tracking-tighter mt-6 ">
          <TextAnim baseText="Unleash Your Search Potential" duration={6} />
        </h1>
        <p className="text-lg font-normal font-mono text-center  tracking-tight mt-6">
          Expolre Websites Easier & Faster with ChatAI, simple Ask question
          about content is the website & he will answer you faster than imagine,
          Search Faster & Smarter
        </p>
        <Search />
      </div>
    </section>
  );
};
