import { ArrowUpRight } from "lucide-react";
import couplePhone from "@/assets/couple-phone.jpg";
import coupleConversation from "@/assets/couple-conversation.jpg";
import coupleChallenge from "@/assets/couple-challenge.jpg";

const PlayfulMoments = () => {
  const moments = [
    {
      title: "Truth & Dare",
      description: "Fun and bold prompts that spark laughter, honesty, and deeper closeness instantly.",
      link: "Play Truth & Dare",
      image: couplePhone,
    },
    {
      title: "Bonding Questions",
      description: "Thoughtfully curated questions that start meaningful conversations.",
      link: "Start a Conversation",
      image: coupleConversation,
    },
    {
      title: "Couple Challenges",
      description: "Light, engaging challenges that improve teamwork, trust, and connection.",
      link: "Try a Challenge",
      image: coupleChallenge,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Playful Couple Moments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover fun, meaningful, and interactive couple games that bring you closer. Whether it's deep questions, playful dares, or thoughtful prompts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {moment.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {moment.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm"
                >
                  <span className="border-b border-primary pb-0.5 leading-none">
                    {moment.link}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayfulMoments;
