// app/page.tsx

import React from "react";
import HomePage from "@/components/Home";
import SlideShow from "@/components/HomePage/SlideShow";

export default function Home() {
  return (
    <div>
        <SlideShow />
        <HomePage />
    </div>
  );
}
