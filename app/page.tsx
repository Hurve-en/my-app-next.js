import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div>
          <p>Hurveen</p>
        </div>

        <div className="links">
          <a href="/personal">Personal</a>
          <a href="/business">Business</a>
          <a href="/partner">Partner</a>
          <a href="/about">About Us</a>
        </div>

        <div>
          <button className="signInBtn">Sign In</button>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "1.8rem",
          marginTop: "2rem",
        }}
      >
        <Image src="/profiles.jpeg" alt="" width={200} height={300} />
      </div>

      <div>
        <h1 className="heroTitle">
          SOFTWARE <br />
          ENGINEER
        </h1>
      </div>
    </>
  );
}
