import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-xl font-bold">MyProject</h1>

        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
}