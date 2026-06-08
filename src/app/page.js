import Link from "next/link";

export default function Home() {
  return (
      <section className="bg-blue-600 text-white py-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl text-red-600 font-bold mb-6">
            Learn New Skills with SkillForge
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join thousands of learners and gain industry-ready skills through
            expert-led courses, practical projects, and interactive learning.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/courses"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Explore Courses
            </Link>

            <Link
              href="/signup"
              className="border border-white px-6 py-3 rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
  );
}
