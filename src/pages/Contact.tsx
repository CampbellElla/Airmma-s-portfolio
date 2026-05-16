import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_gbsm4gk",
        "template_zwudps6",
        form.current,
        "GUlckk0icOffQgNHr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-6 md:px-10
                 bg-gradient-to-b from-brand-darkAlt via-brand-dark to-brand-darkAlt
                 overflow-hidden"
    >
      <div className="orb orb-a" style={{ top: "20%", right: "-12%" }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-brand-roseLight font-semibold mb-2">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-cream">
            Contact Me
          </h2>
          <div className="section-rule mt-5 w-20" />
        </motion.div>

        <div className="grid lg:grid-cols-[52%_48%] gap-8 lg:gap-10 items-start">

          {/* ── Left: info card ── */}
          <motion.div
            initial={{ opacity: 0, x: -44 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.75 }}
          >
            <div className="glass rounded-3xl overflow-hidden shadow-glow-sm h-full">
              <img
                src="Ella.jpg"
                alt=""
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-7 sm:p-9">
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  I'm always excited to collaborate on new projects, discuss ideas,
                  or simply chat about design and code. Feel free to reach out!
                </p>
                <div className="flex flex-col gap-4">
                  <InfoRow label="Email" value="campbellemmanuella17@gmail.com" href="mailto:campbellemmanuella17@gmail.com" />
                  <InfoRow label="Location" value="Nigeria" />
                  <InfoRow label="Phone" value="+234 705 160 4330" href="tel:2347051604330" />
                </div>

                {/* Social row */}
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-brand-darkBorder">
                  <a
                    href="https://instagram.com/campbell_.ella21"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-brand-rose hover:text-brand-roseLight transition-colors p-2"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com/CampbellElla01"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="X"
                    className="text-brand-muted hover:text-brand-cream transition-colors p-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a
                    href="https://facebook.com/Emmanuella Campbell"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-blue-500 hover:text-blue-400 transition-colors p-2"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="https://wa.me/2347051604330?text=Hi%20Campbell"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors p-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.336 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 44 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.1 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass rounded-3xl p-7 sm:p-9 shadow-glow-sm
                         flex flex-col gap-5 transition-shadow duration-500
                         hover:shadow-glow-md"
            >
              {/* Full name */}
              <div>
                <label htmlFor="name" className="text-[0.72rem] uppercase tracking-wider
                                               text-brand-goldLight font-semibold mb-1.5 block">
                  Full Name
                </label>
                <input
                  id="name" type="text" name="user_name"
                  placeholder="Your full name..."
                  className="input-field"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-[0.72rem] uppercase tracking-wider
                                                 text-brand-goldLight font-semibold mb-1.5 block">
                  Email Address
                </label>
                <input
                  id="email" type="email" name="user_email"
                  placeholder="your@email.com"
                  className="input-field"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="msg" className="text-[0.72rem] uppercase tracking-wider
                                               text-brand-goldLight font-semibold mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="msg" name="message"
                  rows={5} placeholder="Tell me about your project..."
                  className="input-field resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary self-start mt-1"
                whileTap={{ scale: 0.97 }}
              >
                <IconSend />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Small helper ─────────── */
function InfoRow({
  label, value, href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const el = href
    ? <a href={href} className="text-brand-cream/70 hover:text-brand-roseLight transition-colors text-sm">{value}</a>
    : <span className="text-brand-cream/70 text-sm">{value}</span>;

  return (
    <div>
      <p className="text-brand-goldLight text-xs uppercase tracking-wider font-semibold">{label}</p>
      {el}
    </div>
  );
}
