export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            About SkillForge
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            SkillForge is an innovative online learning platform dedicated to
            helping students and professionals develop industry-relevant skills
            through high-quality courses, hands-on projects, and expert guidance.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-black font-bold mb-6">Our Mission</h2>

            <p className="text-gray-600 leading-8">
              At SkillForge, we believe that education should be accessible,
              practical, and career-focused. Our mission is to bridge the gap
              between traditional learning and real-world industry requirements
              by providing engaging courses and project-based learning
              experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl text-black font-semibold mb-4">
              What We Offer
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✓ Expert-Led Courses</li>
              <li>✓ Real-World Projects</li>
              <li>✓ Industry Certifications</li>
              <li>✓ Flexible Learning Schedule</li>
              <li>✓ Career-Focused Content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-600 mt-2">Active Learners</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">200+</h3>
              <p className="text-gray-600 mt-2">Premium Courses</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600 mt-2">Expert Mentors</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">95%</h3>
              <p className="text-gray-600 mt-2">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-black font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our learning experience using modern
                technologies and teaching methods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Quality education should be available to everyone regardless of
                their location or background.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We focus on delivering high-quality content that helps learners
                achieve their personal and professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-blackfont-bold mb-4">
            Start Your Learning Journey Today
          </h2>

          <p className="text-lg mb-8">
            Explore courses, gain practical skills, and achieve your career goals with SkillForge.
          </p>

          <a
            href="/courses"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </main>
  );
}