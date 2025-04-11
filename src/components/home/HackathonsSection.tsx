
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const hackathons = [
  {
    id: 1,
    title: 'AI Innovation Challenge',
    date: 'May 15-17, 2025',
    participants: '500+ participants',
    prize: '$10,000 prize pool',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 2,
    title: 'Cloud DevOps Hackathon',
    date: 'June 8-10, 2025',
    participants: '300+ participants',
    prize: '$8,000 prize pool',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

const HackathonsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
              Upcoming Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Hackathons & Placement Programs</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Showcase your skills, collaborate with peers, and connect with top tech companies. Our hackathons and placement programs provide the perfect platform to launch your tech career.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-3">
                  <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium">Regular Events</h4>
                  <p className="text-sm text-muted-foreground">Monthly hackathons & quarterly placement drives</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium">Industry Partners</h4>
                  <p className="text-sm text-muted-foreground">30+ tech companies for direct placements</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium">Exciting Rewards</h4>
                  <p className="text-sm text-muted-foreground">Cash prizes, internships, and job offers</p>
                </div>
              </div>
            </div>
            <Button className="btn-gradient">
              <Link to="/hackathons">View All Events</Link>
            </Button>
          </div>
          
          <div className="space-y-6">
            {hackathons.map((hackathon) => (
              <div key={hackathon.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row hover-card">
                <div className="md:w-2/5 h-48 md:h-auto relative">
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.title} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-indigo-500 hover:bg-indigo-600">
                    Registrations Open
                  </Badge>
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{hackathon.participants}</span>
                      </div>
                      <div className="flex items-center text-indigo-500 dark:text-indigo-400">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{hackathon.prize}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-3 group w-full sm:w-auto">
                    <Link to={`/hackathons/${hackathon.id}`} className="flex items-center justify-center w-full">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
