"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ name: "", bio: "" });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch("/api/profile");
        if (res.status === 401) {
          window.location.href = "/login";
          return;
        }
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Could not load your profile.");
        } else {
          setProfile(data.user);
          setForm({ name: data.user.name, bio: data.user.bio });
        }
      } catch {
        setError("Could not reach the server.");
      }
      setLoading(false);
    }
    loadProfile();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCancel() {
    setForm({ name: profile.name, bio: profile.bio });
    setEditing(false);
    setError("");
  }

  async function handleSave() {
    setError("");
    setMessage("");
    setSaving(true);

    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 401) {
        window.location.href = "/login";
        return;
      }
      if (!res.ok) {
        setError(data.error || "Could not save changes.");
        setSaving(false);
        return;
      }

      setProfile(data.user);
      setForm({ name: data.user.name, bio: data.user.bio });
      setEditing(false);
      setMessage("Profile updated.");
    } catch {
      setError("Could not reach the server.");
    }
    setSaving(false);
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading your profile...</p>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <p className="text-red-600">{error || "Could not load your profile."}</p>
      </main>
    );
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-black focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";
  const cardClass = "bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-200";
  const memberSince = new Date(profile.createdAt).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-2">
              Manage your personal information and learning profile.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className={`${cardClass} p-6 text-center`}>
            <div className="w-28 h-28 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold transition-all duration-300 hover:scale-105">
              {profile.name.charAt(0).toUpperCase()}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-5">
              {profile.name}
            </h2>
            <p className="text-gray-500 mt-1">{profile.email}</p>
            <p className="text-xs text-gray-400 mt-3">Member since {memberSince}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1">
                <p className="text-2xl font-bold text-blue-600">4</p>
                <p className="text-sm text-gray-500">Courses</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 transition-all duration-300 hover:bg-green-50 hover:-translate-y-1">
                <p className="text-2xl font-bold text-green-600">72%</p>
                <p className="text-sm text-gray-500">Progress</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className={`lg:col-span-2 ${cardClass} p-6 sm:p-8`}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Update your profile details.
                </p>
              </div>

              {editing ? (
                <div className="flex gap-2">
                  <button
                    onClick={handleCancel}
                    disabled={saving}
                    className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setEditing(true);
                    setMessage("");
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {error && (
              <div
                role="alert"
                className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}
            {message && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                {message}
              </div>
            )}

            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={!editing || saving}
                maxLength={60}
                className={inputClass}
              />
            </div>

            {/* Email (read only) */}
            <div className="mb-6">
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={profile.email}
                disabled
                className={inputClass}
              />
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className={labelClass}>
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={form.bio}
                onChange={handleChange}
                disabled={!editing || saving}
                maxLength={300}
                rows={4}
                placeholder={editing ? "Write something about yourself" : ""}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Learning Activity */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Learning Activity
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 hover:bg-blue-50/30">
                  <p className="text-sm text-gray-500">Completed Courses</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 hover:bg-blue-50/30">
                  <p className="text-sm text-gray-500">Certificates</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 hover:bg-blue-50/30">
                  <p className="text-sm text-gray-500">Learning Hours</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">36h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}