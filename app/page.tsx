import Image from "next/image";
export default function Page() {
  return (
    <>
      <header className="nav">
        <p>Available for New Project</p>
        <div className="links">
          <a href="/work">Work</a>
          <a href="/service">Service</a>
          <a href="/experince">Experience</a>
          <a href="/contact">Contact</a>
        </div>
        <button className="signIn">Lets Talk</button>
      </header>

      <main>
        <h1>Hurve-en</h1>

        <h2>Full-Stack Developer</h2>

        <p>Developing meaningful apps that help people on a daily basis.</p>

        <Image
          className="heroPic"
          src="/profiles.jpeg"
          alt="pfp"
          width={340}
          height={420}
          priority
        />

        <button>Github</button>
        <button>Instagram</button>
        <button>LinkedIn</button>
      </main>
    </>
  );
}
