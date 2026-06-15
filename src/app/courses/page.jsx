import Link from "next/link";

export default function MyCoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "John Smith",
      progress: 75,
      lessons: 48,
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Sarah Johnson",
      progress: 45,
      lessons: 36,
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Michael Brown",
      progress: 90,
      lessons: 28,
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      instructor: "Emily Davis",
      progress: 20,
      lessons: 24,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">My Courses</h1>
          <p className="mt-3 text-blue-100">
            Track your progress and continue learning.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto text-black px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-gray-500">Enrolled Courses</h3>
            <p className="text-3xl text-blue-600 font-bold mt-2">4</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-gray-500">Completed</h3>
            <p className="text-3xl text-blue-600 font-bold mt-2">1</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-gray-500">Certificates</h3>
            <p className="text-3xl text-blue-600 font-bold mt-2">1</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto text-black px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Continue Learning
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Course Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-500 mb-4">
                  Instructor: {course.instructor}
                </p>

                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-5">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">
                    {course.lessons} Lessons
                  </span>

                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}