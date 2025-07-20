import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Full Background */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Welcome to <span className="text-blue-400">StudySprint</span> 🚀
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Connect with peers. Join focused study groups. Crush your academic goals.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/register">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition focus:ring-4 focus:ring-blue-300">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition focus:ring-4 focus:ring-blue-200">
                Already have an account?
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            Why Choose <span className="text-blue-500">StudySprint</span>?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Find Study Groups
              </h3>
              <p className="text-gray-600">
                Join students from your course or subject. Study smarter together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Real-Time Chat
              </h3>
              <p className="text-gray-600">
                Instantly message and collaborate with your group. Stay synced!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dashboard & Productivity
              </h3>
              <p className="text-gray-600">
                Keep track of your group, upcoming sessions, and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*exam Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
  📅Upcoming Exams
</h2>



          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Data Structures Midterm
              </h3>
              <p className="text-gray-600">📆 Aug 5, 2025</p>
              <p className="text-gray-600">🕘 10:00 AM – 12:00 PM</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Web Development Final
              </h3>
              <p className="text-gray-600">📆 Aug 12, 2025</p>
              <p className="text-gray-600">🕑 2:00 PM – 5:00 PM</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Machine Learning Project
              </h3>
              <p className="text-gray-600">📆 Aug 20, 2025</p>
              <p className="text-gray-600">🕚 Submit before 11:59 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
