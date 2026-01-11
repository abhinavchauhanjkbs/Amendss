import coaching1 from "../assets/Coaching-1.png";
import coaching2 from "../assets/Coaching-2.png";
import coaching3 from "../assets/Coaching-3.png";
import coaching4 from "../assets/Coaching-4.png";

const CoachingSupport = () => {
  const images = [coaching1, coaching2, coaching3, coaching4];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container-custom flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Relationship Coaching Support
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get expert guidance from certified coaches to improve communication, resolve conflicts, and strengthen connection with simple, private, and personalized sessions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-0 max-w-5xl mx-auto">
          {images.map((src, index) => (
            <div key={`coach-${index}`} className="rounded-2xl overflow-hidden shadow-lg bg-black">
              <img src={src} alt={`coaching-${index + 1}`} className="w-full h-40 md:h-44 lg:h-48 object-cover block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingSupport;
