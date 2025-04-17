
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { CalendarDays, Clock, User, Tag, Search } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of ServiceNow Development in 2025',
    excerpt: 'Explore the latest trends and advancements in ServiceNow development that will shape the industry in 2025 and beyond.',
    category: 'tech-insights',
    categoryName: 'Tech Insights',
    author: 'Sarah Johnson',
    date: 'April 12, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    tags: ['ServiceNow', 'Development', 'Tech Trends']
  },
  {
    id: 2,
    title: 'How AI is Transforming Salesforce Implementation',
    excerpt: 'Artificial intelligence is revolutionizing how companies implement and utilize Salesforce. Learn about the key innovations.',
    category: 'tech-insights',
    categoryName: 'Tech Insights',
    author: 'Michael Chen',
    date: 'April 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
    tags: ['Salesforce', 'AI', 'Implementation']
  },
  {
    id: 3,
    title: 'Success Story: How TechCorp Upskilled 500 Employees in 3 Months',
    excerpt: 'TechCorp partnered with us to upskill their workforce in record time. Discover their journey and the incredible results.',
    category: 'success-stories',
    categoryName: 'Success Stories',
    author: 'James Wilson',
    date: 'April 5, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    tags: ['Corporate Training', 'Upskilling', 'Case Study']
  },
  {
    id: 4,
    title: 'Building Your First Machine Learning Model: A Beginner\'s Guide',
    excerpt: 'Start your AI journey with this comprehensive guide to creating your first machine learning model from scratch.',
    category: 'tutorials',
    categoryName: 'Tutorials',
    author: 'Priya Patel',
    date: 'March 29, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    tags: ['Machine Learning', 'AI', 'Tutorial']
  },
  {
    id: 5,
    title: 'Upcoming Tech Hackathon: Register Now',
    excerpt: 'Join our biggest hackathon yet with prizes worth $50,000 and opportunities to connect with industry leaders.',
    category: 'events',
    categoryName: 'Events',
    author: 'David Thompson',
    date: 'March 25, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    tags: ['Hackathon', 'Competition', 'Networking']
  },
  {
    id: 6,
    title: 'Cloud Migration Strategies for Enterprise Applications',
    excerpt: 'Learn effective strategies for migrating your enterprise applications to the cloud while minimizing downtime and risks.',
    category: 'tech-insights',
    categoryName: 'Tech Insights',
    author: 'Elena Rodriguez',
    date: 'March 20, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    tags: ['Cloud Migration', 'Enterprise', 'Strategy']
  },
];

// Categories for filtering
const categories = [
  { name: 'All Posts', slug: 'all' },
  { name: 'Tech Insights', slug: 'tech-insights' },
  { name: 'Success Stories', slug: 'success-stories' },
  { name: 'Industry News', slug: 'industry-news' },
  { name: 'Tutorials', slug: 'tutorials' },
  { name: 'Events', slug: 'events' }
];

const Blog = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState(category || 'all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  useEffect(() => {
    let result = [...blogPosts];
    
    // Filter by category if not 'all'
    if (activeCategory !== 'all') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(result);
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-8 pb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TechSpark Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights, tutorials, and success stories from the world of technology training
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.slug}
                variant={activeCategory === cat.slug ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(cat.slug)}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-card rounded-xl overflow-hidden shadow-md hover-card">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {post.categoryName}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <User size={14} className="mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <CalendarDays size={14} className="mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-secondary rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="text-primary p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#" aria-disabled="true">Previous</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">Next</PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 p-8 bg-card rounded-xl shadow-md">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground mb-6">Stay updated with our latest articles, tutorials, and tech insights delivered directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="btn-gradient">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
