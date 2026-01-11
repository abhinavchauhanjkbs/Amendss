import contactIndiaMap from "@/assets/contact-india-map.png";

const stats = [
  { value: "2M+", label: "Couples Helped" },
  { value: "50K+", label: "Coaching Sessions" },
  { value: "4.8", label: "Average Rating" },
];

const TrustedSection = () => {
  return (
    <section className="bg-[#111315] py-16 text-white">
      <div className="container-custom px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 flex justify-center">
            <img
              src={contactIndiaMap}
              alt="India map"
              className="w-full max-w-sm rounded-2xl"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Trusted Partners</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold">
              Trusted by couples across India
            </h2>
            <p className="mt-4 text-white/70 max-w-lg">
              Couples across India trust Amendss to strengthen relationships through fun games,
              meaningful challenges, and expert guidance that supports better communication and everyday
              relationship growth.
            </p>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              {stats.map((stat, index) => (
                <div key={stat.label} className="md:border-l md:border-white/20 md:pl-6 first:md:border-l-0 first:md:pl-0">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
