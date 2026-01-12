import React, { useState } from "react";

export function RegistrationForm() {
  const [step, setStep] = useState(1);
  const total = 11;
  const next = () => setStep((s) => Math.min(total, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-0 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Begin Your Coaching Journey</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Complete your profile details to get verified and start offering guided, secure coaching sessions to users.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-4 px-2">
            {Array.from({ length: total }).map((_, i) => {
              const n = i + 1;
              const isActive = n === step;
              return (
                <div key={n} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-semibold transition-shadow ${
                      isActive
                        ? "bg-[#A62825] text-white shadow-[0_8px_20px_rgba(166,38,37,0.25)]"
                        : "bg-white text-gray-800 border border-gray-200 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                    }`}
                    style={{ boxShadow: isActive ? "0 8px 24px rgba(166,38,37,0.25)" : "0 6px 18px rgba(0,0,0,0.08)" }}
                  >
                    {n}
                  </div>

                  {n < total && (
                    <div
                      aria-hidden
                      className="w-14 h-1 mx-2"
                      style={{
                        backgroundImage: "radial-gradient(circle, #A62825 2px, transparent 3px)",
                        backgroundSize: "10px 6px",
                        backgroundRepeat: "repeat-x",
                        alignSelf: "center",
                        transform: "translateY(0.15rem)"
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input placeholder="Enter your full name" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm focus:ring-0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input placeholder="+91" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm" />
            </div>

            {/* Row 3 (file + email) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Government ID</label>
              <div className="mt-2 relative">
                <input type="text" placeholder="No file chosen" className="w-full border border-gray-200 rounded-md px-3 py-3 text-sm pr-12" readOnly />
                <label className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-3 py-1.5 border rounded-md bg-white cursor-pointer text-gray-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14"/></svg>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input placeholder="your.email@example.com" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm" />
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Residential Address</label>
              <input placeholder="Enter address" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Recent Photograph</label>
              <div className="mt-2">
                <input type="file" accept="image/*" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" />
              </div>
            </div>

            {/* Row 5 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
              <input placeholder="Name" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Emergency Contact Number</label>
              <input placeholder="Number" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm" />
            </div>

            {/* Row 6 */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Preferred Communication</label>
              <select className="mt-2 w-full border border-gray-200 rounded-md px-3 py-3 text-sm">
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>

            {/* Privacy */}
            <div className="md:col-span-2 flex items-start gap-2 mt-2">
              <input id="privacy" type="checkbox" className="mt-1" />
              <label htmlFor="privacy" className="text-sm text-gray-600">See our Privacy Policy for details on how we handle your information. We never share or sell your opt-in information.</label>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 mt-4">
              <div className="flex gap-3">
                <button type="button" onClick={prev} className="flex-1 border border-gray-200 rounded-md px-4 py-3 text-sm bg-white">Back</button>
                <button type="button" onClick={next} className="flex-1 bg-[#A62825] text-white rounded-md px-4 py-3 text-sm">Next</button>
              </div>
            </div>
          </form>
        </div>
      </section>
  );

}

export default RegistrationForm;

