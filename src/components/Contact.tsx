import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Loader2 } from "lucide-react";

// WARNING: API key should be stored in environment variables in production
// For development only - DO NOT expose API keys in client-side code in production
const RESEND_API_KEY = "re_beqzXNEm_6xJJxH5TpZ3MttYr8gVcsgW7";
const RECIPIENT_EMAIL = "luisshrestha2@gmail.com";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "First name is required"
  }).max(50),
  lastName: z.string().trim().min(1, {
    message: "Last name is required"
  }).max(50),
  email: z.string().trim().email({
    message: "Invalid email address"
  }).max(255).optional().or(z.literal('')),
  phone: z.string().trim().min(1, {
    message: "Phone is required"
  }).max(20),
  message: z.string().trim().min(1, {
    message: "Message is required"
  }).max(1000)
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      setIsLoading(true);

      // Send email via Resend API
      const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}

Message:
${formData.message}
      `.trim();

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: [RECIPIENT_EMAIL],
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          text: emailBody,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. Luis will get back to you soon."
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact us directly.",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  return <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mx-0 order-2 md:order-1">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name (requiredd)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={errors.firstName ? "border-destructive" : ""} />
                  {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={errors.lastName ? "border-destructive" : ""} />
                  {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className={errors.email ? "border-destructive" : ""} />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone (required)
              </label>
              <Input name="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} className={errors.phone ? "border-destructive" : ""} />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message (required)
              </label>
              <Textarea name="message" placeholder="Tell us about your event..." value={formData.message} onChange={handleChange} rows={6} className={errors.message ? "border-destructive" : ""} />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-foreground hover:bg-foreground/90 text-background font-semibold py-5 md:py-6 text-base md:text-lg w-full text-center min-h-[48px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "SEND"
              )}
            </Button>
          </form>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center items-center rounded mx-0 py-0 my-0 order-1 md:order-2 mb-6 md:mb-0">
            <h2 className="font-raleway text-accent uppercase tracking-wider mb-4 md:mb-6 py-0 my-0 font-normal text-lg md:text-xl lg:text-2xl">
              CONTACT
            </h2>
            <div className="relative inline-block">
              <h3 className="font-sansita font-bold text-foreground text-center mx-0 my-0 py-0 px-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">let's make magic</h3>
              <svg className="absolute left-0 w-full transition-all duration-300 hover:translate-y-1" style={{
              top: 'calc(100% + 2px)',
              height: '20px'
            }} viewBox="0 0 800 20" preserveAspectRatio="none">
                <path d="M 10 10 Q 200 15, 400 8 T 790 12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;