
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Award } from "lucide-react";

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
];

const CoursesPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Courses</h2>
            <p className="text-xl text-muted-foreground">
              Start your journey with our top-rated tech programs
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            <Link to="/courses" className="flex items-center">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
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
                  <Link to={`/courses/${course.id}`}>Enroll Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
