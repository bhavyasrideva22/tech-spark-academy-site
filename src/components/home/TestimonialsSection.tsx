
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "TechSpark Academy transformed my career path. I went from having basic coding knowledge to securing a ServiceNow Developer role at a Fortune 500 company within three months of completing their program.",
    author: "Sarah Johnson",
    position: "ServiceNow Developer, Accenture",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "The Salesforce Developer program was comprehensive and practical. The instructors were industry experts who provided real-world insights that you can't get from online tutorials. Worth every penny!",
    author: "Michael Chen",
    position: "Salesforce Consultant, Deloitte",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "As a company, we've sent multiple teams through TechSpark's corporate training programs. The customized curriculum addressed our specific needs, and we've seen a significant productivity boost after the training.",
    author: "Priya Sharma",
    position: "CTO, TechInnovate Solutions",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground">
            Success stories from our graduates and corporate partners
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
            <div className="flex justify-end mb-6">
              <div className="flex">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-xl mb-8 italic">
              "{currentTestimonial.content}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.author} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{currentTestimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.position}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrevious}
                  className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-muted-foreground hover:text-foreground hover:border-gray-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-muted-foreground hover:text-foreground hover:border-gray-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
