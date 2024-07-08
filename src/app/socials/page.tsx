import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {


  const Links = [
    {
      id: 1,
      platform: "Github",
      href: "https://github.com/manthan-web"
    },
    {
      id: 2,
      platform: "Twitter",
      href: "https://x.com/manthan_dev"
    },
    {
      id: 3,
      platform: "Linkedin",
      href: "https://www.linkedin.com/in/manthan-narang-8350812a7/"
    },
    {
      id: 4,
      platform: "Instagram",
      href: "https://www.instagram.com/its.manthan_59/"
    }
  ]


  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>

        <p>Links to all my social accounts:</p>
        <ul className="list-inside flex flex-col list-disc space-y-1">
          {Links.map(social => (
            <Link key={social.id} href={social}><li className="text-primary hover:underline">{social.platform}</li></Link>
          ))}
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project please contact me via email at{" "}
          <Link
            target="_blank"
            href="mailto:manthannarang9@gmail.com"
            className="text-primary hover:underline"
          >
            manthannarang9@gmail.com
          </Link>
        </p>
      </section>
    </section>
  );
}