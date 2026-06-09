import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-2xl font-bold">MyProject</h1>

        <div className="flex gap-5">
          <Link href="/" className="text-xl hover:bg-gray-600">Home</Link>
          <Link href="/about" className="text-xl hover:bg-gray-600">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>

      </div>
    </nav>
  );
}