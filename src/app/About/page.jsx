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
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>

            <p className="text-gray-600 leading-8">
              At SkillForge, we believe that education should be accessible,
              practical, and career-focused. Our mission is to bridge the gap
              between traditional learning and real-world industry requirements
              by providing engaging courses and project-based learning
              experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
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

    
    </main>
  );
}