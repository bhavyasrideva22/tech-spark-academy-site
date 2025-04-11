
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const topPerformers = [
  {
    rank: 1,
    name: 'Alex Morgan',
    college: 'Stanford University',
    score: 985,
    badge: 'Machine Learning Master',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    rank: 2,
    name: 'Priya Patel',
    college: 'MIT',
    score: 940,
    badge: 'Cloud Champion',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    rank: 3,
    name: 'Jason Kim',
    college: 'UC Berkeley',
    score: 925,
    badge: 'DevOps Guru',
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg'
  }
];

const LeaderboardPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
            Top Performers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leaderboard Champions</h2>
          <p className="text-xl text-muted-foreground">
            Celebrating excellence in our tech competitions and hackathons
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPerformers.map((performer) => (
              <div 
                key={performer.rank} 
                className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm ${
                  performer.rank === 1 ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                <div className={`h-2 ${
                  performer.rank === 1 ? 'bg-indigo-500' : 
                  performer.rank === 2 ? 'bg-teal-500' : 'bg-coral-500'
                }`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={performer.avatar} 
                        alt={performer.name} 
                        className="h-12 w-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{performer.name}</h4>
                        <p className="text-sm text-muted-foreground">{performer.college}</p>
                      </div>
                    </div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      performer.rank === 1 ? 'bg-yellow-100 text-yellow-700' : 
                      performer.rank === 2 ? 'bg-gray-100 text-gray-700' : 
                      'bg-amber-100 text-amber-700'
                    }`}>
                      <Trophy className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Badge className={
                      performer.rank === 1 ? 'bg-indigo-500 hover:bg-indigo-600' :
                      performer.rank === 2 ? 'bg-teal-500 hover:bg-teal-600' :
                      'bg-coral-500 hover:bg-coral-600'
                    }>
                      {performer.badge}
                    </Badge>
                    <span className="text-lg font-bold">{performer.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button className="group">
            <Link to="/leaderboard" className="flex items-center">
              View Full Leaderboard
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
