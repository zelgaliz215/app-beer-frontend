import Link from "next/link";
export default function Home() {
  return (
    <>
      <h2>BEER - APP</h2>
      
      <hr />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/users">Users</Link>

    </>
  );
}
