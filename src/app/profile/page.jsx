"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Gaurav Kumar",
    email: "gaurav@example.com",
    bio: "Passionate learner focused on building practical skills and real-world projects.",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your personal information and learning profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Profile Card */}
<div
  className="
    bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center
    transition-all duration-300 ease-in-out
    hover:-translate-y-1
    hover:shadow-xl
    hover:border-blue-200
  "
>
  {/* Avatar */}
  <div
    className="
      w-28 h-28 mx-auto rounded-full
      bg-blue-600
      flex items-center justify-center
      text-white text-4xl font-bold
      transition-all duration-300
      hover:scale-105
    "
  >
    {profile.name.charAt(0)}
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-5">
    {profile.name}
  </h2>

  <p className="text-gray-500 mt-1">
    {profile.email}
  </p>

  <div className="mt-6 grid grid-cols-2 gap-4">

    <div
      className="
        bg-gray-50 rounded-xl p-4
        transition-all duration-300
        hover:bg-blue-50
        hover:-translate-y-1
      "
    >
      <p className="text-2xl font-bold text-blue-600">
        4
      </p>

      <p className="text-sm text-gray-500">
        Courses
      </p>
    </div>

    <div
      className="
        bg-gray-50 rounded-xl p-4
        transition-all duration-300
        hover:bg-green-50
        hover:-translate-y-1
      "
    >
      <p className="text-2xl font-bold text-green-600">
        72%
      </p>

      <p className="text-sm text-gray-500">
        Progress
      </p>
    </div>

  </div>
</div>

          {/* Profile Details */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Update your profile details.
                </p>
              </div>

              <button
                onClick={() => setEditing(!editing)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                {editing ? "Save" : "Edit Profile"}
              </button>
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!editing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!editing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                disabled={!editing}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500 resize-none"
              />
            </div>

            {/* Learning Activity */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Learning Activity
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="border border-gray-200 rounded-xl p-4  transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200  hover:bg-blue-50/30">
                  <p className="text-sm text-gray-500">
                    Completed Courses
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    2
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4  transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200  hover:bg-blue-50/30">
                  <p className="text-sm text-gray-500">
                    Certificates
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    2
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200  hover:bg-blue-50/30">
                  <p className="text-sm text-gray-500">
                    Learning Hours
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    36h
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}