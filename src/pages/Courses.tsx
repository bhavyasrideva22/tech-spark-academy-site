
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Award, Search, Filter } from "lucide-react";

const courses = [
  {
    id: 1,
    title: 'ServiceNow Administration',
    description: 'Learn to configure, customize, and manage ServiceNow instances for enterprise service management.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=200',
    tech: 'ServiceNow',
    level: 'Intermediate',
    duration: '8 weeks',
    certification: true,
    bg: 'bg-indigo-500'
  },
  {
    id: 2,
    title: 'Salesforce Developer',
    description: 'Master Apex programming, Lightning components, and Salesforce integration for custom application development.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300&h=200',
    tech: 'Salesforce',
    level: 'Advanced',
    duration: '10 weeks',
    certification: true,
    bg: 'bg-teal-500'
  },
  {
    id: 3,
    title: 'AWS Cloud Architect',
    description: 'Design and deploy scalable, high-availability systems on Amazon Web Services infrastructure.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=200',
    tech: 'AWS',
    level: 'Advanced',
    duration: '12 weeks',
    certification: true,
    bg: 'bg-coral-500'
  },
  {
    id: 4,
    title: 'Machine Learning Fundamentals',
    description: 'Build a strong foundation in machine learning algorithms, data preprocessing, and model evaluation.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300&h=200',
    tech: 'AI & ML',
    level: 'Beginner',
    duration: '8 weeks',
    certification: true,
    bg: 'bg-indigo-500'
  },
  {
    id: 5,
    title: 'DevOps Engineering',
    description: 'Master CI/CD pipelines, infrastructure as code, and modern DevOps practices with hands-on projects.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=300&h=200',
    tech: 'DevOps',
    level: 'Intermediate',
    duration: '10 weeks',
    certification: true,
    bg: 'bg-teal-500'
  },
  {
    id: 6,
    title: 'Azure Cloud Solutions',
    description: 'Implement and manage cloud solutions using Microsoft Azure services and best practices.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300&h=200',
    tech: 'Azure',
    level: 'Intermediate',
    duration: '10 weeks',
    certification: true,
    bg: 'bg-coral-500'
  }
];

const techOptions = ['All', 'ServiceNow', 'Salesforce', 'AWS', 'Azure', 'AI & ML', 'DevOps'];
const levelOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const durationOptions = ['All', 'Under 8 weeks', '8-10 weeks', 'Over 10 weeks'];

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = courses;
    
    // Search filter
    if (searchTerm) {
      results = results.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Tech filter
    if (selectedTech !== "All") {
      results = results.filter(course => course.tech === selectedTech);
    }
    
    // Level filter
    if (selectedLevel !== "All") {
      results = results.filter(course => course.level === selectedLevel);
    }
    
    // Duration filter
    if (selectedDuration !== "All") {
      if (selectedDuration === "Under 8 weeks") {
        results = results.filter(course => parseInt(course.duration) < 8);
      } else if (selectedDuration === "8-10 weeks") {
        results = results.filter(course => {
          const weeks = parseInt(course.duration);
          return weeks >= 8 && weeks <= 10;
        });
      } else if (selectedDuration === "Over 10 weeks") {
        results = results.filter(course => parseInt(course.duration) > 10);
      }
    }
    
    setFilteredCourses(results);
  }, [searchTerm, selectedTech, selectedLevel, selectedDuration]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Explore Our Courses</h1>
              <p className="text-xl text-muted-foreground">
                Discover specialized training programs in in-demand tech skills
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button 
                  onClick={() => setFiltersVisible(!filtersVisible)} 
                  variant="outline" 
                  className="flex items-center gap-2 md:w-auto"
                >
                  <Filter size={18} />
                  Filters
                </Button>
              </div>
              
              {filtersVisible && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-2">Technology</label>
                    <select
                      value={selectedTech}
                      onChange={(e) => setSelectedTech(e.target.value)}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                    >
                      {techOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Level</label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                    >
                      {levelOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                    >
                      {durationOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden hover-card">
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 ${course.bg} opacity-20`}></div>
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-white text-foreground">
                        {course.tech}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold leading-tight">{course.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        {course.certification && (
                          <div className="flex items-center text-indigo-500 dark:text-indigo-400">
                            <Award className="h-4 w-4 mr-1" />
                            <span>Certification</span>
                          </div>
                        )}
                      </div>
                      <Button className="w-full btn-gradient">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="h-24 w-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
