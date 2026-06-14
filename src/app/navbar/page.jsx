import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-2xl font-bold">SkillForge</h1>

        <div className="flex gap-5">
          <Link href="/" className="text-xl hover:text-gray-600">Home</Link>
          <Link href="/about" className="text-xl hover:text-gray-600">About</Link>
          <Link href="/services" className="text-xl hover:text-gray-600">Services</Link>
          <Link href="/contact" className="text-xl hover:text-gray-600">Contact</Link>
          <Link href="/profile" className="text-xl hover:text-gray-600">Profile</Link>
          <Link href="/login" className="text-xl hover:text-gray-600">Login</Link>
          <Link href="/signup" className="text-xl hover:text-gray-600">Sign Up</Link>
        </div>

      </div>
    </nav>
  );
}