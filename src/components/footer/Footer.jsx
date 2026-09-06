import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              SkillForge
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400 max-w-sm">
              Learn practical skills, build real-world projects, and grow
              your career with SkillForge.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-white transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Platform
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/my-courses"
                  className="hover:text-white transition"
                >
                  My Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Get the latest courses, learning resources, and updates.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>
            © 2026 SkillForge. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}