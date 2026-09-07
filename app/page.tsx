import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="nav">
        <p>Hurve-en</p>
        <div className="links">
          <a href="/personal">Personal</a>
          <a href="/business">Business</a>
          <a href="/partner">Partner</a>
          <a href="/about">About Us</a>
        </div>
        <button className="signInBtn">Sign In</button>
      </header>

      <main>
        <section className="heroSection">
          <h1 className="heroTitle">
            SOFTWARE <br />
            ENGINEER
          </h1>
          <div className="heroAside">
            <Image
              className="heroPhoto"
              src="/profiles.jpeg"
              alt="Portrait of Hurveen"
              width={340}
              height={420}
              priority
            />
            <p className="heroBlurb">
              Hi, Im Hurve-en, a Junior Software Engineer.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
