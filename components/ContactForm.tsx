import React from 'react';

export default function ConnectForm() {
  // Server Action → Sends data to Basin
  async function handleFormSubmit(formData: FormData) {
    'use server';

    const BASIN_ENDPOINT = 'https://usebasin.com/f/YOUR_FORM_ID'; // replace this

    try {
      await fetch(BASIN_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Basin submission failed:', error);
    }
  }

  const interestOptions = [
    'Website',
    'SEO',
    'UI/UX',
    'Mobile App',
    'Web App',
    'Other',
  ];

  const budgetOptions = [
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 +',
  ];

  return (
    <section className="relative w-full h-screen md:h-auto bg-white text-white flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 overflow-hidden">

      {/* Soft ambient background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[150px]" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl bg-blue-400 border border-neutral-200 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-16 shadow-xl">

        {/* LEFT SIDE */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-black uppercase">
              Devntom Solutions
            </span>

            <h2 className="text-5xl sm:text-6xl xl:text-7xl font-light leading-tight">
              Let’s <br />
              <span className="font-medium">Connect</span>
            </h2>

            <p className="text-neutral-600 text-lg max-w-md">
              Have a project in mind? Share your details and our team will reach out within 24 hours.
            </p>
          </div>

          <div className="hidden lg:block border-t border-neutral-200 pt-6 text-sm text-neutral-600">
            hello@devntomsolutions.com
          </div>
        </div>

        {/* FORM */}
        <form action={handleFormSubmit} className="lg:col-span-7 space-y-8">

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <input name="fullName" required placeholder="Full name"
              className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-black" />

            <input name="email" type="email" required placeholder="Email"
              className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-black" />

            <input name="phone" placeholder="Phone"
              className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-black" />

            <input name="companyName" placeholder="Company name"
              className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-black" />

            <input name="designation" placeholder="Your designation"
              className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-black" />

            <select name="source" required
              className="w-full border-b border-neutral-300 py-3 bg-transparent text-neutral-600 focus:outline-none focus:border-black sm:col-span-2">
              <option value="">How did you hear about us</option>
              <option value="google">Google</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>

            <textarea name="message" rows={3} placeholder="Message"
              className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-black sm:col-span-2 resize-none" />

          </div>

          {/* Interests */}
          <div>
            <p className="text-xs uppercase text-neutral-500 mb-3">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((item) => (
                <label key={item} className="px-4 py-2 border border-neutral-300 rounded-full text-sm cursor-pointer hover:border-black transition">
                  <input type="checkbox" name="interests" value={item} className="hidden" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <p className="text-xs uppercase text-neutral-500 mb-3">Budget</p>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((item) => (
                <label key={item} className="px-4 py-2 border border-neutral-300 rounded-full text-sm cursor-pointer hover:border-black transition">
                  <input type="radio" name="budget" value={item} className="hidden" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl font-medium hover:opacity-90 transition"
          >
            Submit Project Request
          </button>

        </form>
      </div>
    </section>
  );
}