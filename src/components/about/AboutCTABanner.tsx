import { Button } from "@/components/ui/button";

const AboutCTABanner = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container-custom max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
          Ready to Strengthen Your Relationship?
        </h2>
        <p className="text-amber-800/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of couples who have transformed their relationships through our guided exercises and expert coaching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-amber-600 hover:bg-amber-700 text-white"
          >
            Start Your Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold border-amber-600 text-amber-700 hover:bg-amber-50"
          >
            Meet Our Coaches
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutCTABanner;
