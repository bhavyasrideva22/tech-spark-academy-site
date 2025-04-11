
import { CheckCircle, Users, Medal, Calendar, BookOpen, Award } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
    title: 'Industry-Relevant Courses',
    description: 'Curated curriculum focused on in-demand skills and emerging technologies that employers are actively seeking.'
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-500" />,
    title: 'Expert Instructors',
    description: 'Learn directly from industry professionals with years of practical experience in leading tech companies.'
  },
  {
    icon: <Medal className="h-8 w-8 text-indigo-500" />,
    title: 'Placement Assistance',
    description: 'Comprehensive placement support including resume building, interview preparation and company connections.'
  },
  {
    icon: <Calendar className="h-8 w-8 text-indigo-500" />,
    title: 'Live Hackathons',
    description: 'Participate in immersive coding competitions to apply your skills and win exciting prizes and recognition.'
  },
  {
    icon: <Award className="h-8 w-8 text-indigo-500" />,
    title: 'Certification',
    description: 'Earn industry-recognized certifications to validate your skills and enhance your professional credibility.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-indigo-500" />,
    title: 'Hands-on Projects',
    description: 'Build a robust portfolio with real-world projects that demonstrate your practical expertise to employers.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-indigo-50/30 dark:from-background dark:to-indigo-900/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tech education designed to transform beginners into industry-ready professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover-card"
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
