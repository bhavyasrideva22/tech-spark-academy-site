
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Trophy, Filter, Medal, Award } from "lucide-react";

const leaderboardData = [
  {
    id: 1,
    rank: 1,
    name: "Alex Morgan",
    college: "Stanford University",
    score: 985,
    badges: ["Machine Learning Master", "Hackathon Winner"],
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    competitions: [
      { name: "AI Challenge", rank: 1 },
      { name: "Cloud Hackathon", rank: 3 }
    ]
  },
  {
    id: 2,
    rank: 2,
    name: "Priya Patel",
    college: "MIT",
    score: 940,
    badges: ["Cloud Champion"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    competitions: [
      { name: "DevOps Showdown", rank: 1 },
      { name: "AI Challenge", rank: 5 }
    ]
  },
  {
    id: 3,
    rank: 3,
    name: "Jason Kim",
    college: "UC Berkeley",
    score: 925,
    badges: ["DevOps Guru", "Top Contributor"],
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    competitions: [
      { name: "Cloud Hackathon", rank: 2 },
      { name: "ServiceNow Challenge", rank: 2 }
    ]
  },
  {
    id: 4,
    rank: 4,
    name: "Emily Chen",
    college: "Harvard University",
    score: 890,
    badges: ["Data Science Pro"],
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    competitions: [
      { name: "AI Challenge", rank: 2 },
      { name: "Data Science Jam", rank: 1 }
    ]
  },
  {
    id: 5,
    rank: 5,
    name: "Michael Johnson",
    college: "Carnegie Mellon",
    score: 865,
    badges: ["Security Specialist"],
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    competitions: [
      { name: "Cyber Security Hack", rank: 1 },
      { name: "Cloud Hackathon", rank: 6 }
    ]
  },
  {
    id: 6,
    rank: 6,
    name: "Sophia Williams",
    college: "University of Washington",
    score: 840,
    badges: ["Frontend Wizard"],
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    competitions: [
      { name: "Web Dev Challenge", rank: 1 },
      { name: "UI/UX Jam", rank: 2 }
    ]
  },
  {
    id: 7,
    rank: 7,
    name: "Daniel Lee",
    college: "Georgia Tech",
    score: 815,
    badges: ["Algorithm Ace"],
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    competitions: [
      { name: "Coding Competition", rank: 2 },
      { name: "Algorithm Challenge", rank: 1 }
    ]
  },
  {
    id: 8,
    rank: 8,
    name: "Olivia Martinez",
    college: "University of Michigan",
    score: 790,
    badges: ["Blockchain Builder"],
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    competitions: [
      { name: "Blockchain Hackathon", rank: 1 },
      { name: "Crypto Challenge", rank: 3 }
    ]
  }
];

const competitionOptions = ['All Competitions', 'AI Challenge', 'Cloud Hackathon', 'DevOps Showdown', 'ServiceNow Challenge', 'Data Science Jam', 'Cyber Security Hack', 'Web Dev Challenge', 'UI/UX Jam', 'Coding Competition', 'Algorithm Challenge', 'Blockchain Hackathon', 'Crypto Challenge'];

const timeOptions = ['All Time', 'This Month', 'Last 3 Months', 'Last 6 Months'];

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompetition, setSelectedCompetition] = useState("All Competitions");
  const [selectedTime, setSelectedTime] = useState("All Time");
  const [filteredParticipants, setFilteredParticipants] = useState(leaderboardData);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = leaderboardData;
    
    if (searchTerm) {
      results = results.filter(participant => 
        participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.college.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCompetition !== "All Competitions") {
      results = results.filter(participant => 
        participant.competitions.some(comp => comp.name === selectedCompetition)
      );
      
      // Re-rank based on the selected competition
      results.sort((a, b) => {
        const aComp = a.competitions.find(c => c.name === selectedCompetition);
        const bComp = b.competitions.find(c => c.name === selectedCompetition);
        
        if (!aComp) return 1;
        if (!bComp) return -1;
        
        return aComp.rank - bComp.rank;
      });
    }
    
    // Note: Time filtering would typically be implemented with actual dates
    // This is a simplified version for demonstration
    
    setFilteredParticipants(results);
  }, [searchTerm, selectedCompetition, selectedTime]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Leaderboard</h1>
              <p className="text-xl text-muted-foreground">
                Top performers from our hackathons and tech competitions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search participants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <button 
                  onClick={() => setFiltersVisible(!filtersVisible)} 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Filter size={18} />
                  Filters
                </button>
              </div>
              
              {filtersVisible && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-2">Competition</label>
                    <select
                      value={selectedCompetition}
                      onChange={(e) => setSelectedCompetition(e.target.value)}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                    >
                      {competitionOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time Period</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                    >
                      {timeOptions.map(option => (
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
            {filteredParticipants.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {filteredParticipants.slice(0, 3).map((participant) => (
                    <div
                      key={participant.id}
                      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover-card ${
                        participant.rank === 1 ? 'ring-2 ring-indigo-500' : ''
                      }`}
                    >
                      <div className={`h-2 ${
                        participant.rank === 1 ? 'bg-indigo-500' : 
                        participant.rank === 2 ? 'bg-teal-500' : 'bg-coral-500'
                      }`} />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <img 
                              src={participant.avatar} 
                              alt={participant.name} 
                              className="h-16 w-16 rounded-full mr-4 object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-xl">{participant.name}</h3>
                              <p className="text-sm text-muted-foreground">{participant.college}</p>
                            </div>
                          </div>
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            participant.rank === 1 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' : 
                            participant.rank === 2 ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400' : 
                            'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                          }`}>
                            <Trophy className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex flex-wrap gap-2">
                            {participant.badges.map((badge, index) => (
                              <Badge key={index} className={
                                participant.rank === 1 ? 'bg-indigo-500 hover:bg-indigo-600' :
                                participant.rank === 2 ? 'bg-teal-500 hover:bg-teal-600' :
                                'bg-coral-500 hover:bg-coral-600'
                              }>
                                {badge}
                              </Badge>
                            ))}
                          </div>
                          <span className="text-2xl font-bold">{participant.score}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Top Performances:</h4>
                          <div className="space-y-2">
                            {participant.competitions.slice(0, 2).map((comp, index) => (
                              <div key={index} className="flex justify-between items-center text-sm">
                                <span>{comp.name}</span>
                                <Badge variant="outline">Rank #{comp.rank}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold text-lg">Full Rankings</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Rank
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Participant
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            College
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Badges
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Score
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {filteredParticipants.map((participant) => (
                          <tr key={participant.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className={`h-7 w-7 rounded-full flex items-center justify-center text-sm ${
                                  participant.rank === 1 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' : 
                                  participant.rank === 2 ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400' : 
                                  participant.rank === 3 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400' :
                                  'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                }`}>
                                  {participant.rank <= 3 ? (
                                    <Trophy className="h-4 w-4" />
                                  ) : (
                                    participant.rank
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img 
                                  src={participant.avatar} 
                                  alt={participant.name} 
                                  className="h-8 w-8 rounded-full mr-3 object-cover"
                                />
                                <span className="font-medium">{participant.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {participant.college}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-wrap gap-2">
                                {participant.badges.map((badge, index) => (
                                  <Badge key={index} variant="outline" className="bg-gray-100 dark:bg-gray-800 text-xs">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap font-semibold">
                              {participant.score}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="h-24 w-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No participants found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Join Our Next Competition</h2>
                <p className="text-xl mb-8">
                  Want to see your name on the leaderboard? Register for our upcoming hackathons and tech challenges.
                </p>
              </div>
              <div className="inline-flex space-x-4">
                <a 
                  href="/hackathons" 
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-lg transition-colors"
                >
                  View Upcoming Events
                </a>
                <a 
                  href="/courses" 
                  className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-lg transition-colors"
                >
                  Prepare with Our Courses
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
