
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Award, Clock, ArrowRight, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const trainingPrograms = [
  {
    id: 1,
    title: "ServiceNow Transformation",
    description: "Comprehensive training for IT teams on ServiceNow platform administration, customization, and integration.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
      </svg>
    ),
    features: [
      "Custom workflow automation",
      "ITSM best practices",
      "Custom app development",
      "Integration strategies"
    ]
  },
  {
    id: 2,
    title: "Salesforce Enterprise Training",
    description: "Hands-on Salesforce training for sales teams, administrators, and developers to maximize your CRM investment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
      </svg>
    ),
    features: [
      "Apex programming",
      "Lightning component development",
      "Admin certification preparation",
      "Data migration strategies"
    ]
  },
  {
    id: 3,
    title: "DevOps Transformation",
    description: "Help your teams adopt modern DevOps practices to improve collaboration and accelerate software delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="14" rx="2"></rect>
        <rect width="20" height="8" x="2" y="2" rx="2"></rect>
        <line x1="6" x2="6" y1="6" y2="6"></line>
        <line x1="6" x2="6" y1="18" y2="18"></line>
      </svg>
    ),
    features: [
      "CI/CD implementation",
      "Container orchestration",
      "Infrastructure as code",
      "Automated testing strategies"
    ]
  },
  {
    id: 4,
    title: "AI & ML for Enterprises",
    description: "Practical AI and machine learning training for technical teams to implement data-driven solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 0-5 5v14a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z"></path>
        <path d="M8 16h8"></path>
        <path d="M8 20h8"></path>
        <path d="M12 12V4"></path>
      </svg>
    ),
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision applications",
      "Ethical AI implementation"
    ]
  }
];

const corporateLogos = [
  { name: 'Microsoft', logo: 'https://via.placeholder.com/150x50?text=Microsoft' },
  { name: 'Google', logo: 'https://via.placeholder.com/150x50?text=Google' },
  { name: 'Amazon', logo: 'https://via.placeholder.com/150x50?text=Amazon' },
  { name: 'IBM', logo: 'https://via.placeholder.com/150x50?text=IBM' },
  { name: 'Oracle', logo: 'https://via.placeholder.com/150x50?text=Oracle' },
  { name: 'Salesforce', logo: 'https://via.placeholder.com/150x50?text=Salesforce' }
];

const Corporate = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    trainingNeeds: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        title: "Consultation Request Received",
        description: "Our corporate training team will reach out to you within 24 hours.",
        duration: 5000,
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        trainingNeeds: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Enterprise Solutions
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Custom Tech Training for Your Organization
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Empower your workforce with specialized training programs tailored to your business needs. Our enterprise solutions help organizations build technical capabilities to drive innovation and growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="btn-gradient">
                    Schedule a Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="group">
                    View Training Programs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-indigo-500 to-teal-500 rounded-2xl p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-6">Why Choose TechSpark?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Customized curriculum designed for your specific industry needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Expert instructors with real-world industry experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Flexible training formats: in-person, virtual, or hybrid</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Pre and post-training assessments to measure impact</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Ongoing support and consultation after program completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of organizations that have partnered with us for their tech training needs
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {corporateLogos.map((company, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 transition-all">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Training Programs</h2>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                We offer specialized training in high-demand technical areas, customized to match your organization's goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingPrograms.map((program) => (
                <div key={program.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover-card">
                  <div className="mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-indigo-500 to-teal-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Training Impact</h2>
                <p className="text-xl mb-8">
                  Our corporate training programs deliver measurable results and significant ROI for organizations of all sizes.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-4xl font-bold">94%</p>
                    <p className="text-white/80">Employee satisfaction rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">40%</p>
                    <p className="text-white/80">Productivity increase</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">85%</p>
                    <p className="text-white/80">Knowledge retention</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">3.5x</p>
                    <p className="text-white/80">Return on training investment</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <blockquote className="italic mb-4">
                    "TechSpark's DevOps training transformed our development process. Our deployment time has been reduced by 60%, and our team now has the confidence to implement modern CI/CD practices."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white/20 mr-3"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-white/70">CTO, TechInnovate Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="trainingNeeds" className="block text-sm font-medium mb-2">Training Needs</label>
                    <Textarea
                      id="trainingNeeds"
                      name="trainingNeeds"
                      value={formData.trainingNeeds}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      placeholder="Tell us about your training requirements..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-white hover:bg-gray-100 text-indigo-600 font-medium"
                  >
                    {isSubmitting ? "Submitting..." : "Request Consultation"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process ensures your team receives training that aligns perfectly with your business objectives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-indigo-500" />
                </div>
                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Step 1
                </span>
                <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground">
                  We start with a detailed discussion to understand your organization's specific technical training needs and objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-indigo-500" />
                </div>
                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Step 2
                </span>
                <h3 className="text-xl font-semibold mb-2">Custom Program Design</h3>
                <p className="text-muted-foreground">
                  Our experts develop a tailored training program with specific modules, hands-on exercises, and evaluation metrics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-indigo-500" />
                </div>
                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Step 3
                </span>
                <h3 className="text-xl font-semibold mb-2">Implementation & Follow-up</h3>
                <p className="text-muted-foreground">
                  We deliver the training, provide certification, and offer follow-up support to ensure knowledge retention and application.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporate;
