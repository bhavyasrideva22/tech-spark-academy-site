
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    description: "Our support team will get back to you within 24 hours.",
    value: "contact@techspark.academy"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm.",
    value: "+1 (555) 123-4567"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    description: "Come say hello at our headquarters.",
    value: "123 Tech Park, San Francisco, CA 94102"
  }
];

const faqs = [
  {
    question: "Do you offer scholarships for students?",
    answer: "Yes, we offer merit-based scholarships for exceptional students. Please contact our admissions team for more information about eligibility criteria and application process."
  },
  {
    question: "How long are your typical courses?",
    answer: "Our courses range from 6 to 12 weeks depending on the complexity of the subject matter and depth of coverage. Each course includes hands-on projects and assessments."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Absolutely! We have a dedicated placement team that works with our corporate partners to help students find suitable roles after completing our programs."
  },
  {
    question: "Can I get a corporate training quote?",
    answer: "Yes, please fill out our contact form with your specific requirements, or call our corporate training department directly. We'll provide a customized quote within 48 hours."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll respond shortly.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions about our courses, hackathons, or corporate training? We're here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover-card">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="font-medium">{method.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2"
                    >
                      <option value="">Select a subject</option>
                      <option value="Course Inquiry">Course Inquiry</option>
                      <option value="Hackathon Information">Hackathon Information</option>
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="How can we help you?"
                      rows={6}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gradient"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017845323!3d37.75781499602919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1619560344026!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="TechSpark Academy Location"
                    className="w-full"
                  />
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <MapPin className="h-5 w-5 text-indigo-500 mt-1" />
                      <div>
                        <h3 className="font-semibold">Headquarters</h3>
                        <p className="text-muted-foreground">123 Tech Park, San Francisco, CA 94102</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-indigo-500 mt-1" />
                      <div>
                        <h3 className="font-semibold">Office Hours</h3>
                        <p className="text-muted-foreground">Monday-Friday: 9am - 6pm<br />Saturday: 10am - 3pm<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-500 to-teal-500 rounded-xl p-6 text-white">
                  <h3 className="font-semibold text-lg mb-4">Quick Support Options</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="#" className="flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <MessageSquare className="h-5 w-5 mr-3" />
                      <span>Live Chat</span>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>Call Support</span>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>Email Support</span>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Calendar className="h-5 w-5 mr-3" />
                      <span>Book a Meeting</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
