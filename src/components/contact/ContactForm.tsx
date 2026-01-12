import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and privacy policy");
      return;
    }

    toast.success("Your message has been sent successfully!");
    setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "", agreeToTerms: false });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">User Feedback</h2>
          <p className="mt-3 text-base text-gray-500">
            Have a question or need help? Share your details and our team will respond quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                autoComplete="given-name"
                className="h-12 rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                autoComplete="family-name"
                className="h-12 rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                autoComplete="tel"
                className="h-12 rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                autoComplete="email"
                className="h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[140px] rounded-2xl"
            />
          </div>

          <div className="flex items-start gap-3 mt-6">
            <Checkbox
              id="agree"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: Boolean(checked) })}
            />
            <label htmlFor="agree" className="text-sm text-gray-500">
              By submitting this form, I agree to the terms and privacy policy.
            </label>
          </div>

          <Button type="submit" className="mt-8 h-12 w-full rounded-full bg-primary text-white text-base font-semibold">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
