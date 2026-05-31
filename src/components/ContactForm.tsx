import { Send, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

// Web3Forms access key - get a free one at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSent(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // If key is default, run in preview/mock success mode so it doesn't break local testing
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
      setTimeout(() => {
        setSubmitting(false);
        setSent(true);
        form.reset();
      }, 700);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Different Angle] Message from ${data.name}`,
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        setError(result.message || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Unable to connect to the email server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-line rounded-[8px] p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-bone">
          Name
          <input
            required
            name="name"
            className="rounded-[6px] border border-white/10 bg-black/25 px-4 py-3 text-bone placeholder:text-white/35 transition focus:border-gold/50 focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-bone">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-[6px] border border-white/10 bg-black/25 px-4 py-3 text-bone placeholder:text-white/35 transition focus:border-gold/50 focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-bone">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="resize-none rounded-[6px] border border-white/10 bg-black/25 px-4 py-3 text-bone placeholder:text-white/35 transition focus:border-gold/50 focus:outline-none"
          placeholder="Tell me what you have in mind..."
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="gold-button mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            Sending... <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Send Message <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      {sent && (
        <div className="mt-5 rounded-[6px] border border-teal/20 bg-teal/5 px-4 py-3 text-sm text-teal">
          {WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" ? (
            <div>
              <p className="font-semibold">Local Success Preview Mode</p>
              <p className="mt-1 text-xs text-teal/80 leading-relaxed">
                Form behaves perfectly! To receive real messages inside your email inbox when you publish to GitHub Pages, replace <code>WEB3FORMS_ACCESS_KEY</code> in <code>src/components/ContactForm.tsx</code> with a free key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-white">web3forms.com</a>.
              </p>
            </div>
          ) : (
            <p>Your message has been sent successfully! I will get back to you soon.</p>
          )}
        </div>
      )}

      {error && (
        <p className="mt-5 rounded-[6px] border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
