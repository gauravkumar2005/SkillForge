export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div 
            className="
               bg-white p-8 rounded-xl shadow
               border border-transparent
               transition-all duration-300
               hover:-translate-y-1
               hover:shadow-xl
               hover:border-blue-200">
            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4">
              <p>
                <strong>Email:</strong> support@skillforge.com
              </p>

              <p>
                <strong>Phone:</strong> +91 90977 10004
              </p>

              <p>
                <strong>Address:</strong> Patna, Bihar, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
          className="
               bg-white p-8 rounded-xl shadow
               border border-transparent
               transition-all duration-300
               hover:-translate-y-1
               hover:shadow-xl
               hover:border-blue-200
            ">
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="
                   w-full border border-gray-300 p-3 rounded-lg
                   outline-none
                   transition-all duration-200
                   hover:border-blue-300
                   focus:border-blue-500
                   focus:ring-2 focus:ring-blue-100
                 "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                   w-full border border-gray-300 p-3 rounded-lg
                   outline-none
                   transition-all duration-200
                   hover:border-blue-300
                   focus:border-blue-500
                   focus:ring-2 focus:ring-blue-100
                 "
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}