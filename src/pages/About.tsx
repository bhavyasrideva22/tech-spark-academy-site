
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "TechSpark Academy was founded with a mission to provide high-quality tech training to engineering students."
  },
  {
    year: "2020",
    title: "Expanded Course Offerings",
    description: "Added specialized courses in ServiceNow, Salesforce, and cloud technologies to meet growing industry demand."
  },
  {
    year: "2021",
    title: "First Hackathon",
    description: "Organized our first major hackathon with 200+ participants and partnership with 5 tech companies."
  },
  {
    year: "2022",
    title: "Corporate Training Launch",
    description: "Expanded services to include customized corporate training programs for enterprises."
  },
  {
    year: "2023",
    title: "Placement Partnership Program",
    description: "Established direct placement partnerships with 20+ leading tech companies."
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to serve students and companies internationally with virtual training options."
  },
  {
    year: "2025",
    title: "Technology Innovation Hub",
    description: "Launched TechSpark Innovation Hub to foster collaboration between students, startups, and established companies."
  }
];

const teamMembers = [
  {
    name: "Jennifer Chen",
    role: "Founder & CEO",
    bio: "Former tech executive with 15+ years of experience in enterprise software companies.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    bio: "Cloud architecture specialist with background in AWS and Azure technologies.",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Director of Training",
    bio: "Certified instructor with expertise in Salesforce and ServiceNow platforms.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Kim",
    role: "Head of Corporate Relations",
    bio: "Former HR executive specialized in technical talent acquisition and development.",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const partnerCompanies = [
  "https://via.placeholder.com/150x50?text=Microsoft",
  "https://via.placeholder.com/150x50?text=Google",
  "https://via.placeholder.com/150x50?text=Amazon",
  "https://via.placeholder.com/150x50?text=IBM",
  "https://via.placeholder.com/150x50?text=Oracle",
  "https://via.placeholder.com/150x50?text=Salesforce"
];

const partnerColleges = [
  "Stanford University",
  "MIT",
  "UC Berkeley",
  "Carnegie Mellon",
  "Georgia Tech",
  "University of Washington"
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Our Story</h1>
              <p className="text-xl text-muted-foreground text-center">
                Founded in 2019, TechSpark Academy has grown from a small training center for engineering students to a comprehensive tech education provider serving students and corporations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground">
                    To bridge the gap between academic education and industry requirements by providing specialized, hands-on technical training that prepares individuals for successful careers in the rapidly evolving tech landscape.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground">
                    To become the premier tech education partner for students and organizations worldwide, known for excellence in specialized technical training and consistently producing industry-ready professionals.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[80px] dark:bg-indigo-500/10" />
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0 font-medium">1</span>
                      <p>Industry-specific curriculum focused on in-demand platforms and technologies</p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0 font-medium">2</span>
                      <p>Expert instructors with extensive real-world experience</p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0 font-medium">3</span>
                      <p>Direct industry connections for placement opportunities</p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0 font-medium">4</span>
                      <p>Regular hackathons and competitions to apply skills and gain recognition</p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0 font-medium">5</span>
                      <p>Customized corporate training solutions with measurable outcomes</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The evolution of TechSpark Academy from a small training center to a comprehensive tech education provider
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 dark:bg-gray-700 -translate-x-1/2" />
              
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
                      <div className="h-8 w-8 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900 flex items-center justify-center font-bold text-white text-sm" />
                    </div>
                    
                    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm md:w-5/12 relative ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the experts driving TechSpark's mission to transform tech education
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm group hover-card">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-indigo-500 dark:text-indigo-400 mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partner Network</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading tech companies and educational institutions
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-center mb-6">Corporate Partners</h3>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {partnerCompanies.map((logo, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 transition-all">
                    <img 
                      src={logo} 
                      alt={`Partner ${index + 1}`} 
                      className="h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Academic Collaborations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {partnerColleges.map((college, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="font-medium">{college}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-indigo-500 to-teal-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-8">
                Whether you're a student looking to boost your skills, a company seeking to train your workforce, or an institution interested in partnership opportunities, we'd love to connect.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
