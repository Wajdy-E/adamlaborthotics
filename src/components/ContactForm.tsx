import { business } from "@/lib/site-data";

export function ContactForm() {
  return (
    <form action={business.formspreeEndpoint} className="animate-fade-up rounded-[2rem] border border-stone-200 bg-white/95 p-6 card-shadow sm:p-8" method="POST">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-stone-700">
          First name
          <input
            className="rounded-2xl border border-stone-200 px-4 py-3 font-medium outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[var(--primary)] focus:ring-4 focus:ring-teal-100"
            name="firstName"
            placeholder="John"
            required
            type="text"
            autoComplete="given-name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-stone-700">
          Last name
          <input
            className="rounded-2xl border border-stone-200 px-4 py-3 font-medium outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[var(--primary)] focus:ring-4 focus:ring-teal-100"
            name="lastName"
            placeholder="Doe"
            required
            type="text"
            autoComplete="family-name"
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-stone-700">
          Email
          <input
            className="rounded-2xl border border-stone-200 px-4 py-3 font-medium outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[var(--primary)] focus:ring-4 focus:ring-teal-100"
            name="email"
            placeholder="john@example.com"
            required
            type="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-stone-700">
          Phone
          <input
            className="rounded-2xl border border-stone-200 px-4 py-3 font-medium outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[var(--primary)] focus:ring-4 focus:ring-teal-100"
            name="telephone"
            placeholder="1-905-xxx-xxxx"
            required
            type="tel"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-stone-700">
        Subject
        <input
          className="rounded-2xl border border-stone-200 px-4 py-3 font-medium outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[var(--primary)] focus:ring-4 focus:ring-teal-100"
          name="subject"
          placeholder="Custom orthotics inquiry"
          type="text"
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-stone-700">
        Message
        <textarea
          className="min-h-36 rounded-2xl border border-stone-200 px-4 py-3 font-medium outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[var(--primary)] focus:ring-4 focus:ring-teal-100"
          name="message"
          placeholder="Tell us how we can help..."
          required
        />
      </label>
      <button className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-lg active:translate-y-0" type="submit">
        Send Message
      </button>
    </form>
  );
}
