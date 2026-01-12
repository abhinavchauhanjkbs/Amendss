import { Mail, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Call us anytime at 1800 203 2520 for quick, reliable assistance.",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Drop us a note at info@amendss.com and we’ll respond within 1 business day.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Office 312, Spaze iTech Park, Sohna Road, Sector 49, Gurugram, Haryana 122018",
  },
];

const ReachUsSection = () => {
  return (
    <section className="bg-white pt-20 pb-24 md:pb-56">
      <div className="container-custom px-4">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-gray-900">Reach Us Directly</h2>
          <p className="mt-3 text-gray-500">
            We’re always here to support your needs with quick responses, reliable guidance, and dedicated service.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className={`text-center px-4 md:px-6 ${
                index > 0 ? "md:border-l md:border-gray-200" : ""
              }`}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <method.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachUsSection;
