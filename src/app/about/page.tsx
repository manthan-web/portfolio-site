import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
        My name is Manthan Narang and I am a self-taught software developer from India. I started programming just a year ago, at the age of 16, and since then I have created several projects that actually solve problems for people.
        </p>
        <p>
          I learned coding because it's a path to solving real-world problems and creating products that sell.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
    <strong>I am an AI full-stack developer</strong> specializing in <strong>React, Next.js, Node.js, and LangChain</strong>. My expertise includes building <strong>sophisticated LLM applications</strong> that leverage AI for enhanced functionality. Previously, I developed <strong>bots and conversational AIs</strong> using no-code platforms but <strong>transitioned to coding</strong> for greater customization and control. I'm passionate about <strong>integrating AI solutions into business websites</strong>, enabling them to harness AI for <strong>improved user interaction and operational efficiency</strong>.
</p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
    <h2>Projects</h2>
    <p>
        In my free time, I like to work on side projects to keep my skills sharp and try out new tech. Here is a list of my current projects:
    </p>
    <ul className="list-inside list-disc">
        <li>
            <Link href="#" className="text-primary hover:underline">
                AI Notes App for Class 12 Students
            </Link>
            - Building a notes app that provides the best notes with just a question from the best resources available, aiming to reduce students' struggle in finding notes and serve as an educational personal assistant for them.
        </li>
        <li>
            <Link href="https://nostalgia-ecommerce.vercel.app/" className="text-primary hover:underline">
                Nostalgia E-commerce Site
            </Link>
            - Built an e-commerce site themed around toys and things from the 2000s, aimed at evoking nostalgic memories and improving my skills.
        </li>
    </ul>
</section>

      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
        Besides programming, I love playing cricket and hanging out with friends. I enjoy improving my skills by trying to notice where I can find problems in my surroundings, whether it's with people, friends, or relatives, and networking with them and others.
        </p>
      </section>
    </section>
  );
}
