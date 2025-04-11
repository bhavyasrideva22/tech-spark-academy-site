
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: "Subscription Successful!",
        description: "You've been added to our newsletter list.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-indigo-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Tech Trends</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Subscribe to our newsletter for latest course updates, tech news, and exclusive invites to events.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-center py-4">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white"
              />
              <Button type="submit" disabled={isSubmitting} className="bg-white hover:bg-gray-100 text-indigo-600 font-medium">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
          
          <p className="text-xs text-indigo-200 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from TechSpark.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
