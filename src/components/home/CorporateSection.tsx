
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const corporateLogos = [
  { name: 'Microsoft', logo: 'https://via.placeholder.com/150x50?text=Microsoft' },
  { name: 'Google', logo: 'https://via.placeholder.com/150x50?text=Google' },
  { name: 'Amazon', logo: 'https://via.placeholder.com/150x50?text=Amazon' },
  { name: 'IBM', logo: 'https://via.placeholder.com/150x50?text=IBM' },
  { name: 'Oracle', logo: 'https://via.placeholder.com/150x50?text=Oracle' }
];

const benefits = [
  'Customized training programs for your team\'s specific needs',
  'Expert instructors with industry experience',
  'Hands-on projects with real-world applications',
  'Pre and post-training assessments to measure impact',
  'Flexible scheduling options including weekends and after-hours',
  'Ongoing support and consultation after program completion'
];

const CorporateSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-indigo-500 to-teal-500 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Corporate Training Programs</h3>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full sm:w-auto btn-gradient">
                  <Link to="/corporate">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
              For Businesses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upskill Your Workforce with Custom Tech Training</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Invest in your team's growth with our specialized corporate training programs. We help organizations build technical capabilities to stay competitive in the rapidly evolving tech landscape.
            </p>
            <div className="mb-8">
              <h4 className="font-medium text-lg mb-4">Trusted by leading companies</h4>
              <div className="flex flex-wrap gap-6 items-center">
                {corporateLogos.map((company, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 transition-all">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline" className="group">
              <Link to="/corporate" className="flex items-center">
                Learn More About Corporate Training
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
