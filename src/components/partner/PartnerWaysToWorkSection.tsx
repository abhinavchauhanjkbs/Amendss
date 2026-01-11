const partnershipModels = [
  "Coach & Expert Partnership",
  "Content & Research Partnership",
  "Corporate Wellness Initiatives",
  "Brand Collaboration",
];

const PartnerWaysToWorkSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container-custom px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-2xl md:ml-6 lg:ml-12">
            <h2 className="text-4xl font-heading font-semibold leading-tight text-gray-900 md:text-5xl">
              <span>Ways We Can Work</span>
              <br className="hidden md:block" />
              <span>Together</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500 md:max-w-lg">
              Choose a partnership model tailored to your expertise, goals, and the unique value you
              provide couples globally.
            </p>
          </div>

          <div className="flex justify-center md:justify-center">
            <div className="w-full max-w-sm rounded-[36px] bg-[#c93735] px-10 py-12 text-white transition-transform md:-translate-x-6">
              <ul className="space-y-6">
                {partnershipModels.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg font-semibold">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWaysToWorkSection;
