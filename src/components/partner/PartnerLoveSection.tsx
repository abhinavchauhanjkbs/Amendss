import partnerMeeting from "@/assets/partner-meeting.png";

const highlights = [
  "Featured placement and enhanced visibility",
  "Dedicated partner success team",
  "Real-time analytics and insights",
  "Long-term collaboration programs",
];

const PartnerLoveSection = () => {
  return (
    <section className="bg-white pt-20 pb-40">
      <div className="container-custom px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="order-2 lg:order-2">
            <h2 className="mt-4 text-4xl font-heading font-bold text-foreground">
              Why Partners Love Working With Us
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We provide transparent processes, advanced tools, marketing support, and continuous
              growth opportunities for every trusted partner we onboard.
            </p>
            <ul className="mt-8 space-y-4 text-base text-foreground">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-1">
            <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[40px] shadow-xl lg:max-w-[500px]">
              <img
                src={partnerMeeting}
                alt="Partners meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLoveSection;
