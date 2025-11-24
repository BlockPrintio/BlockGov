import { Play, Heart, MessageCircle, Share, Bookmark } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import Navbar from "~/components/Navbar";

const articles = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      handle: "@sarahc"
    },
    title: "The Future of Decentralized Governance: Lessons from Cardano",
    subtitle: "How blockchain technology is reshaping democratic participation",
    audioLength: "12:45",
    readTime: "8 min read",
    date: "Mar 15",
    engagement: {
      likes: 156,
      comments: 23,
      shares: 18,
      bookmarks: 67
    },
    thumbnail: "/api/placeholder/120/80",
    hasAudio: true
  },
  {
    id: 2,
    author: {
      name: "Dr. Michael Torres",
      avatar: "/api/placeholder/40/40", 
      handle: "@mtorres"
    },
    title: "Smart Contract Voting: Building Trust in Digital Democracy",
    subtitle: "Exploring the technical foundations of blockchain-based voting systems",
    audioLength: "18:30",
    readTime: "12 min read", 
    date: "Mar 14",
    engagement: {
      likes: 203,
      comments: 41,
      shares: 29,
      bookmarks: 89
    },
    thumbnail: "/api/placeholder/120/80",
    hasAudio: true
  },
  {
    id: 3,
    author: {
      name: "Emma Rodriguez",
      avatar: "/api/placeholder/40/40",
      handle: "@emmamr"
    },
    title: "Community Proposals: From Idea to Implementation",
    subtitle: "A step-by-step guide to successful governance proposals",
    videoLength: "25:12",
    readTime: "15 min read",
    date: "Mar 13", 
    engagement: {
      likes: 89,
      comments: 15,
      shares: 12,
      bookmarks: 34
    },
    thumbnail: "/api/placeholder/120/80",
    hasVideo: true
  },
  {
    id: 4,
    author: {
      name: "Alex Kim",
      avatar: "/api/placeholder/40/40",
      handle: "@alexkim"
    },
    title: "Treasury Management in Decentralized Organizations",
    subtitle: "Best practices for managing community funds transparently",
    audioLength: "9:15",
    readTime: "6 min read",
    date: "Mar 12",
    engagement: {
      likes: 127,
      comments: 18,
      shares: 22,
      bookmarks: 45
    },
    thumbnail: "/api/placeholder/120/80",
    hasAudio: true
  },
  {
    id: 5,
    author: {
      name: "Prof. Lisa Wang",
      avatar: "/api/placeholder/40/40",
      handle: "@lwang"
    },
    title: "Governance Token Economics: Incentivizing Participation",
    subtitle: "How to design token systems that encourage meaningful engagement",
    videoLength: "31:45",
    readTime: "20 min read",
    date: "Mar 11",
    engagement: {
      likes: 298,
      comments: 52,
      shares: 38,
      bookmarks: 112
    },
    thumbnail: "/api/placeholder/120/80",
    hasVideo: true
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Stay <span className="bg-gradient-primary bg-clip-text text-transparent">curious.</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest insights, proposals, and discussions shaping the future of decentralized governance.
            </p>
          </div>

          {/* Articles Feed */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card key={article.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Author Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                      <span className="text-white font-semibold text-sm">
                        {article.author.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Author and Date */}
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-foreground">{article.author.name}</span>
                        <span className="text-muted-foreground mx-2">•</span>
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <span className="text-muted-foreground mx-2">•</span>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>

                      {/* Title and Subtitle */}
                      <h2 className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {article.subtitle}
                      </p>

                      {/* Audio/Video Player */}
                      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
                      {(article.hasAudio || article.hasVideo) && (
                        <div className="flex items-center space-x-3 mb-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Play className="w-4 h-4" />
                            <span>Play {article.hasAudio ? 'Audio' : 'Video'}</span>
                            <span className="text-xs">
                              ({article.hasAudio ? article.audioLength : article.videoLength})
                            </span>
                          </Button>
                        </div>
                      )}

                      {/* Engagement */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-1 text-muted-foreground hover:text-red-500 hover:scale-110 transition-all duration-200 group/like">
                            <Heart className="w-4 h-4 group-hover/like:fill-current" />
                            <span className="text-sm font-medium">{article.engagement.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 group/comment">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">{article.engagement.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-muted-foreground hover:text-green-500 hover:scale-110 transition-all duration-200 group/share">
                            <Share className="w-4 h-4" />
                            <span className="text-sm font-medium">{article.engagement.shares}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-muted-foreground hover:text-yellow-500 hover:scale-110 transition-all duration-200 group/bookmark">
                            <Bookmark className="w-4 h-4 group-hover/bookmark:fill-current" />
                            <span className="text-sm font-medium">{article.engagement.bookmarks}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="w-24 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0 overflow-hidden border border-border/30 shadow-sm">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary/30 flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;