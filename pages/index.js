import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <p>
        Hello, World! Did you mean{" "}
        <Link href="/register" className="link">
          /register
        </Link>
        ?
      </p>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .link {
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
