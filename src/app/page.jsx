"use client";

import  Hero from "./components/Hero"
import  Aboutme from "./Aboutme/page"
import  Skills from "./Skills/page"
import  Project from "./Project/page"
import  Contact from "./Contact/page"

export default function page() {
  return (
<div>
<Hero/>
<Aboutme/>
<Skills/>
<Project/>
<Contact/>

</div>
  );
}
