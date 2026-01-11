import choose1 from "../assets/Choose-1.png";
import choose2 from "../assets/Choose-2.png";
import choose3 from "../assets/Choose-3.png";
import choose4 from "../assets/Choose-4.png";
import choose5 from "../assets/Choose-5.png";
import choose6 from "../assets/Choose-6.png";

const WhyChoose = () => {
  const images = [choose1, choose2, choose3, choose4, choose5, choose6];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Why Choose Amendss?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A curated ecosystem built on quality, transparency, and unforgettable
            real-world experiences.
          </p>
        </div>

        {/* Equal vertical + horizontal gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-0">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`choose-${index}`}
              className="rounded-3xl w-full h-72 md:h-80 object-cover"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
