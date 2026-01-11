import valueEmpathy from "@/assets/value-empathy.png";
import valueSimple from "@/assets/value-simple.png";
import valueExperts from "@/assets/value-experts.png";
import valueSecure from "@/assets/value-secure.png";

const values = [
  { image: valueEmpathy, alt: "Empathy First" },
  { image: valueSimple, alt: "Simple & Meaningful" },
  { image: valueExperts, alt: "Guided by Experts" },
  { image: valueSecure, alt: "Secure & Private" },
];

const ValuesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We operate with integrity, innovation, and commitment to deliver reliable solutions that
            consistently help our clients grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <img key={value.alt} src={value.image} alt={value.alt} className="w-full h-auto rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
