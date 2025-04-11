
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award, Clock, ArrowRight, Filter } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: 'AI Innovation Challenge',
    description: 'Build innovative AI solutions to address real-world problems. Open to all college students and professionals.',
    date: 'May 15-17, 2025',
    location: 'Online & In-person (San Francisco)',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=250',
    participants: '500+ participants',
    prize: '$10,000 prize pool',
    registration: 'Open',
    category: 'AI & ML'
  },
  {
    id: 2,
    title: 'Cloud DevOps Hackathon',
    description: 'Create scalable cloud infrastructure and deployment pipelines. Sponsored by leading cloud providers.',
    date: 'June 8-10, 2025',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=250',
    participants: '300+ participants',
    prize: '$8,000 prize pool',
    registration: 'Open',
    category: 'Cloud & DevOps'
  },
  {
    id: 3,
    title: 'Salesforce Solution Jam',
    description: 'Develop innovative Salesforce solutions to transform business processes and customer experiences.',
    date: 'July 22-24, 2025',
    location: 'Online & In-person (New York)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=250',
    participants: '250+ participants',
    prize: '$5,000 prize pool',
    registration: 'Coming Soon',
    category: 'Salesforce'
  }
];

const pastEvents = [
  {
    id: 4,
    title: 'ServiceNow App Challenge',
    description: 'Created custom ServiceNow applications to streamline enterprise workflows and improve productivity.',
    date: 'March 10-12, 2025',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=400&h=250',
    participants: '200+ participants',
    winners: ['Team Innovate', 'FlowMasters', 'ServicePros'],
    category: 'ServiceNow'
  }
];

const placementStats = {
  companies: 30,
  students: 500,
  avgSalary: '$85,000',
  topCompanies: ['Microsoft', 'Amazon', 'Salesforce', 'IBM', 'Accenture']
};

const categoryOptions = ['All', 'AI & ML', 'Cloud & DevOps', 'Salesforce', 'ServiceNow'];
const statusOptions = ['All', 'Open', 'Coming Soon', 'Closed'];

const Hackathons = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(upcomingEvents);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = upcomingEvents;
    
    if (selectedCategory !== "All") {
      results = results.filter(event => event.category === selectedCategory);
    }
    
    if (selectedStatus !== "All") {
      results = results.filter(event => event.registration === selectedStatus);
    }
    
    setFilteredEvents(results);
  }, [selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hackathons & Placements</h1>
              <p className="text-xl text-muted-foreground">
                Showcase your skills, collaborate with peers, and connect with top tech companies
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Upcoming Hackathons</h2>
                <p className="text-muted-foreground">Register for our upcoming events and challenges</p>
              </div>
              <Button 
                onClick={() => setFiltersVisible(!filtersVisible)} 
                variant="outline" 
                className="mt-4 md:mt-0 flex items-center gap-2"
              >
                <Filter size={18} />
                Filters
              </Button>
            </div>
            
            {filtersVisible && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                  >
                    {categoryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Registration Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                  >
                    {statusOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            
            <div className="space-y-8">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row hover-card">
                    <div className="md:w-2/5 h-60 md:h-auto relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-4 left-4 ${
                        event.registration === 'Open' ? 'bg-indigo-500 hover:bg-indigo-600' : 
                        'bg-gray-500 hover:bg-gray-600'
                      }`}>
                        {event.registration}
                      </Badge>
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col">
                      <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.participants}</span>
                        </div>
                        <div className="flex items-center text-indigo-500 dark:text-indigo-400">
                          <Award className="h-4 w-4 mr-2" />
                          <span>{event.prize}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Button 
                          className={event.registration === 'Open' ? 'btn-gradient' : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'}
                          disabled={event.registration !== 'Open'}
                        >
                          {event.registration === 'Open' ? 'Register Now' : 'Coming Soon'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No events found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filter criteria
                  </p>
                </div>
              )}
            </div>
            
            <div className="mt-16 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Events</h2>
              <div className="space-y-8">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-60 md:h-auto relative grayscale">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-600">
                        Completed
                      </Badge>
                    </div>
                    <div className="p-6 md:w-3/5">
                      <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Winners:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.winners.map((winner, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-100 dark:bg-gray-800">
                              {index === 0 ? '🥇 ' : index === 1 ? '🥈 ' : '🥉 '}{winner}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-indigo-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Placement Success</h2>
                <p className="text-xl mb-8 text-indigo-100">
                  Our training and hackathon programs have helped hundreds of students secure roles at leading tech companies.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-4xl font-bold">{placementStats.companies}+</p>
                    <p className="text-indigo-100">Partner Companies</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">{placementStats.students}+</p>
                    <p className="text-indigo-100">Students Placed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">{placementStats.avgSalary}</p>
                    <p className="text-indigo-100">Average Salary</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">96%</p>
                    <p className="text-indigo-100">Placement Rate</p>
                  </div>
                </div>
                <Button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium group">
                  Learn More About Placements
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Top Hiring Partners</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {placementStats.topCompanies.map((company, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                        <p className="font-medium">{company}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="font-medium mb-4">What Recruiters Say:</h4>
                    <blockquote className="italic text-indigo-100">
                      "TechSpark graduates consistently demonstrate the technical skills and problem-solving ability that we look for in our engineers."
                    </blockquote>
                    <p className="mt-2 font-medium">— Technical Recruiting Lead, Microsoft</p>
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

export default Hackathons;
