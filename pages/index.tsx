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
    </div>
  );
}
