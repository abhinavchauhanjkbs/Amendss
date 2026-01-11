import lisaAvatar from "@/assets/lisa-avatar.png";
import laraAvatar from "@/assets/lara-avatar.png";
import avatar1 from "@/assets/avatar_1.png";
import avatar2 from "@/assets/avatar_2.png";
import avatar3 from "@/assets/avatar_3.png";
import quoteIcon from "@/assets/quote-icon.svg";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The team at Qano Flow understood our business challenges deeply and tailored AI solutions that actually worked. Clean execution, great results.",
    author: "Lisa B.",
    role: "Project Manager, HVAC",
    avatar: lisaAvatar,
  },
  {
    quote:
      "The entire booking experience was seamless, transparent, and premium. Amendss helped us enjoy a relaxing spa session that felt truly world-class.",
    author: "Lara",
    role: "COO, Retail",
    avatar: laraAvatar,
  },
  {
    quote:
      "Amendss brings us consistent, high-intent customers. Our bookings increased without extra effort, and the platform’s support makes partnership incredibly smooth.",
    author: "Aarav Mehta",
    role: "Adventure Partner",
    avatar: avatar1,
  },
  {
    quote:
      "Amendss planned our anniversary perfectly. Every detail felt thoughtful, premium, and beautifully arranged. Truly the easiest way to create unforgettable moments.",
    author: "Riya Malhotra",
    role: "Couple Experience",
    avatar: avatar2,
  },
  {
    quote:
      "We’ve worked with larger consultancies, but none were this agile. Qana Flow moved fast, delivered real outcomes, and kept things simple.",
    author: "Elena P.",
    role: "CEO, Dealership",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background overflow-hidden pb-32 md:pb-40">
      <div className="container-custom mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What Our Users Say
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Real stories from couples and individuals who discovered meaningful,
          beautifully curated experiences through Amendss.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-testimonial-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[360px] max-w-[360px] mx-6 bg-white rounded-2xl shadow-sm p-6"
            >
              <img src={quoteIcon} className="w-6 h-6 mb-4 opacity-80" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes testimonial-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-testimonial-marquee {
          animation: testimonial-marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
