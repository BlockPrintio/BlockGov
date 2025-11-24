import { useState } from "react";
import Navbar from "~/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { 
  Wallet, 
  FileText, 
  DollarSign,
  Gift,
  Flame,
  Send,
  Info,
  TrendingUp,
  TrendingDown,
  X,
  Search,
  Filter,
  Bell,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  BarChart3,
  PieChart,
  Calendar,
  ExternalLink,
  QrCode,
  Download,
  Settings,
  Eye,
  EyeOff,
  Activity,
  Zap,
  Target,
  Award,
  Building2,
  Globe,
  Code,
  Link as LinkIcon,
  ChevronRight,
  PlayCircle,
  PauseCircle
} from "lucide-react";

type TabType = "overview" | "applications" | "spends" | "proposals" | "tips" | "bounties" | "transfers";

const TreasuryExplorer = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [showBanner, setShowBanner] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState<"month" | "quarter" | "year">("month");
  const [selectedScenario, setSelectedScenario] = useState<"flat" | "increasing" | "decreasing">("flat");
  const [showFilters, setShowFilters] = useState(false);

  // Mock data matching dotreasury structure
  const treasuryData = {
    totalTreasury: {
      ada: "1,245,678.50",
      usd: "≈ $73.02M",
      trend: "rising" as "rising" | "stable" | "declining",
      lastUpdated: "2 seconds ago",
      breakdown: [
        { icon: "ADA", amount: "≈ 25.84M", currency: "ADA" },
        { icon: "USDT", amount: "≈ 7.26M", currency: "USDT" },
        { icon: "USDC", amount: "≈ 4.06M", currency: "USDC" },
        { icon: "MYTH", amount: "≈ 3M", currency: "MYTH" }
      ]
    },
    treasuryRequesting: {
      confirming: "$0",
      requesting: "≈ $1.24M"
    },
    assets: {
      total: "≈ $46.47M",
      breakdown: [
        { label: "Address #1 > #2 >", items: [
          { icon: "ADA", amount: "DOT ≈ 15.53M" },
          { icon: "USDT", amount: "USDT ≈ 5.76M" },
          { icon: "USDC", amount: "USDC ≈ 3.7M" }
        ]}
      ]
    },
    bounties: {
      count: 20,
      total: "≈ $10.5M",
      breakdown: [
        { icon: "ADA", amount: "DOT ≈ 4.41M" }
      ]
    },
    fellowship: {
      total: "≈ $5.38M",
      breakdown: [
        { label: "Treasury >", icon: "ADA", amount: "DOT ≈ 1.78M" },
        { label: "Salary >", icon: "USDT", amount: "USDT ≈ 1.15M" }
      ]
    },
    ambassador: {
      total: "$0",
      breakdown: [
        { icon: "USDT", amount: "USDT 0.45" }
      ]
    },
    loans: {
      total: "≈ $4.89M"
    },
    hydration: {
      total: "≈ $5.65M"
    },
    mythToken: {
      total: "≈ $119.4K"
    }
  };

  const tabCounts = {
    applications: 11,
    spends: 204,
    proposals: 1036,
    tips: 599,
    bounties: 73,
    transfers: 45
  };

  const tabs: Array<{ id: TabType; label: string; count?: number }> = [
    { id: "overview", label: "Overview" },
    { id: "applications", label: "Applications", count: tabCounts.applications },
    { id: "spends", label: "Spends", count: tabCounts.spends },
    { id: "proposals", label: "Proposals", count: tabCounts.proposals },
    { id: "tips", label: "Tips", count: tabCounts.tips },
    { id: "bounties", label: "Bounties", count: tabCounts.bounties },
    { id: "transfers", label: "Transfers", count: tabCounts.transfers }
  ];

  // Mock data for features
  const projects = [
    {
      id: 1,
      name: "Cardano Developer Education Program",
      category: "Education",
      region: "Global",
      totalFunding: "125,000 ADA",
      rounds: 3,
      status: "active",
      milestones: [
        { name: "Curriculum Development", progress: 100, dueDate: "2024-01-15", completed: true },
        { name: "Platform Launch", progress: 75, dueDate: "2024-03-01", completed: false },
        { name: "First Cohort", progress: 30, dueDate: "2024-04-15", completed: false }
      ],
      github: "https://github.com/example",
      proposalLink: "#",
      smartContract: "addr1qy...xyz"
    },
    {
      id: 2,
      name: "Infrastructure Upgrade Initiative",
      category: "Infrastructure",
      region: "Europe",
      totalFunding: "85,500 ADA",
      rounds: 2,
      status: "active",
      milestones: [
        { name: "Node Optimization", progress: 90, dueDate: "2024-02-20", completed: false },
        { name: "Network Testing", progress: 45, dueDate: "2024-03-15", completed: false }
      ],
      github: "https://github.com/example2",
      proposalLink: "#",
      smartContract: "addr1qz...abc"
    }
  ];

  const outflows = [
    {
      id: 1,
      amount: "125,000 ADA",
      recipient: "addr1qy...xyz",
      category: "Education",
      timestamp: "2024-03-15T10:30:00Z",
      governanceAction: "CIP-1694 Vote #1234",
      team: "Cardano Education Team",
      region: "Global"
    },
    {
      id: 2,
      amount: "85,500 ADA",
      recipient: "addr1qz...abc",
      category: "Infrastructure",
      timestamp: "2024-03-10T14:20:00Z",
      governanceAction: "Proposal #567",
      team: "Infrastructure Group",
      region: "Europe"
    }
  ];

  const inflows = [
    {
      id: 1,
      type: "Stake Pool Distribution",
      epoch: 450,
      amount: "45,230 ADA",
      timestamp: "2024-03-20T00:00:00Z",
      source: "Epoch Rewards"
    },
    {
      id: 2,
      type: "Direct Donation",
      epoch: 450,
      amount: "5,000 ADA",
      timestamp: "2024-03-19T15:30:00Z",
      source: "Community Member"
    },
    {
      id: 3,
      type: "Transaction Fees",
      epoch: 450,
      amount: "12,450 ADA",
      timestamp: "2024-03-19T12:00:00Z",
      source: "Network Activity"
    }
  ];

  const proposals = [
    {
      id: 1,
      title: "Treasury Spending Policy Update",
      type: "CIP-1694",
      status: "voting",
      votes: { aye: 1250, nay: 320, abstain: 45 },
      dRepSignals: [
        { dRep: "drep1...xyz", weight: "15.2%", signal: "aye" },
        { dRep: "drep2...abc", weight: "8.5%", signal: "nay" }
      ],
      treasuryImpact: "High",
      endDate: "2024-04-15"
    }
  ];

  const donations = [
    { id: 1, amount: "1,000 ADA", donor: "addr1q...xyz", timestamp: "2024-03-20T10:00:00Z", anonymous: false },
    { id: 2, amount: "500 ADA", donor: "Anonymous", timestamp: "2024-03-19T15:30:00Z", anonymous: true }
  ];

  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "ADA":
        return <div className="w-4 h-4 rounded bg-primary"></div>;
      case "USDT":
        return <span className="text-green-500 font-bold text-xs">₮</span>;
      case "USDC":
        return <span className="text-blue-500 font-bold text-xs">$</span>;
      case "MYTH":
        return <Flame className="w-4 h-4 text-red-500" />;
      default:
        return <div className="w-4 h-4 rounded bg-muted-foreground"></div>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "rising":
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case "declining":
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Home Link */}
          <div className="mb-4">
            <a href="/" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
          </div>

          {/* Global Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search projects, wallets, proposals, funds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <Card className="mt-4 border-border/60 bg-card/40 backdrop-blur-lg">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">Category</label>
                      <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                        <option>All Categories</option>
                        <option>Education</option>
                        <option>Infrastructure</option>
                        <option>Research</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">Region</label>
                      <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                        <option>All Regions</option>
                        <option>Global</option>
                        <option>Europe</option>
                        <option>Americas</option>
                        <option>Asia</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">Amount Range</label>
                      <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                        <option>All Amounts</option>
                        <option>&lt; 10K ADA</option>
                        <option>10K - 100K ADA</option>
                        <option>&gt; 100K ADA</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">Status</label>
                      <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Completed</option>
                        <option>Pending</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-1 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-bold transition-all relative ${
                    activeTab === tab.id
                      ? "text-foreground border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.id === "applications" && activeTab === tab.id && (
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  )}
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className="ml-1 px-1.5 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Real-Time Treasury Balance */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-foreground">Real-Time Treasury Balance</CardTitle>
                      <CardDescription className="mt-1 font-semibold">
                        Live sync with Cardano Node • Last updated: {treasuryData.totalTreasury.lastUpdated}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(treasuryData.totalTreasury.trend)}
                        <span className="text-sm font-semibold text-muted-foreground capitalize">{treasuryData.totalTreasury.trend}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {treasuryData.totalTreasury.ada} ADA
                      </div>
                      <div className="text-xl text-muted-foreground">
                        {treasuryData.totalTreasury.usd}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {treasuryData.totalTreasury.breakdown.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          {getCurrencyIcon(item.icon)}
                          <span className="text-foreground font-semibold">
                            {item.amount} {item.currency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Treasury Requesting Banner */}
                  {showBanner && (
                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <span className="font-bold">Treasury Requesting:</span>
                        <span>Confirming {treasuryData.treasuryRequesting.confirming}</span>
                        <span>·</span>
                        <span>Requesting {treasuryData.treasuryRequesting.requesting}</span>
                        <span>·</span>
                        <a href="#" className="text-primary hover:underline">Check on SubSquare {'>'}</a>
                      </div>
                      <button
                        onClick={() => setShowBanner(false)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Top Section: Total Treasury and History */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Treasury History Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">Treasury History($) · Last 30d</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedTimeframe("month")}>
                          Month
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSelectedTimeframe("quarter")}>
                          Quarter
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSelectedTimeframe("year")}>
                          Year
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Chart visualization placeholder</p>
                        <p className="text-xs font-semibold text-muted-foreground mt-1">Oct 27 - Nov 24</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Long-Term Runway */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-foreground">Long-Term Runway</CardTitle>
                    <CardDescription className="font-semibold">Scenario-based treasury sustainability forecasting</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">Spending Scenario</label>
                      <div className="flex gap-2">
                        <Button
                          variant={selectedScenario === "flat" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedScenario("flat")}
                        >
                          Flat
                        </Button>
                        <Button
                          variant={selectedScenario === "increasing" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedScenario("increasing")}
                        >
                          Increasing
                        </Button>
                        <Button
                          variant={selectedScenario === "decreasing" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedScenario("decreasing")}
                        >
                          Decreasing
                        </Button>
                      </div>
                    </div>
                    <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Runway visualization</p>
                        <p className="text-xs font-semibold text-muted-foreground mt-1">Projected: 24 months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Runway Status: Healthy</p>
                        <p className="text-xs font-semibold text-muted-foreground">Spending within modeled inflows</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Governance Context Layer */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Governance Context</CardTitle>
                      <CardDescription className="font-semibold">Treasury-related governance actions and CIP-1694 votes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {proposals.map((proposal) => (
                      <div key={proposal.id} className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{proposal.title}</h3>
                            <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                              <span>{proposal.type}</span>
                              <span>•</span>
                              <span>Treasury Impact: {proposal.treasuryImpact}</span>
                              <span>•</span>
                              <span>Ends: {proposal.endDate}</span>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-xs font-medium">
                            {proposal.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Aye</p>
                            <p className="text-lg font-bold text-green-600">{proposal.votes.aye}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Nay</p>
                            <p className="text-lg font-bold text-red-600">{proposal.votes.nay}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Abstain</p>
                            <p className="text-lg font-bold text-muted-foreground">{proposal.votes.abstain}</p>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">dRep Signals:</p>
                          <div className="space-y-1">
                            {proposal.dRepSignals.map((signal, idx) => (
                              <div key={idx} className="flex items-center justify-between text-sm">
                                <span className="text-foreground">{signal.dRep}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-muted-foreground">{signal.weight}</span>
                                  <span className={`px-2 py-0.5 rounded text-xs ${
                                    signal.signal === "aye" ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
                                  }`}>
                                    {signal.signal}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Assets Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-foreground text-base">Assets</CardTitle>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.assets.total}
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="text-muted-foreground">{treasuryData.assets.breakdown[0]?.label}</div>
                      {treasuryData.assets.breakdown[0]?.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {getCurrencyIcon(item.icon)}
                          <span className="text-foreground">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Bounties Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-foreground text-base">
                      Bounties {treasuryData.bounties.count}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.bounties.total}
                    </div>
                    <div className="space-y-1 text-sm">
                      {treasuryData.bounties.breakdown.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {getCurrencyIcon(item.icon)}
                          <span className="text-foreground">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fellowship Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-foreground text-base">Fellowship</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.fellowship.total}
                    </div>
                    <div className="space-y-1 text-sm">
                      {treasuryData.fellowship.breakdown.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {item.label && <span className="text-muted-foreground">{item.label}</span>}
                          {getCurrencyIcon(item.icon)}
                          <span className="text-foreground">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Ambassador Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-foreground text-base">Ambassador</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.ambassador.total}
                    </div>
                    <div className="space-y-1 text-sm">
                      {treasuryData.ambassador.breakdown.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {getCurrencyIcon(item.icon)}
                          <span className="text-foreground">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Loans Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-foreground text-base">Loans</CardTitle>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.loans.total}
                    </div>
                  </CardContent>
                </Card>

                {/* Hydration Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-foreground text-base">Hydration</CardTitle>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.hydration.total}
                    </div>
                  </CardContent>
                </Card>

                {/* Myth Token Card */}
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-foreground text-base">Myth Token</CardTitle>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-foreground">
                      {treasuryData.mythToken.total}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Alerts & Subscriptions */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-foreground">Alerts & Subscriptions</CardTitle>
                      <CardDescription className="font-semibold">Custom alert triggers and notifications</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      Manage Alerts
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium text-foreground">Low Balance Alert</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Notify when treasury balance drops below 1M ADA</p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full">
                          <div className="h-2 bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground">85% remaining</span>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-foreground">Large Transaction Alert</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Notify on transactions &gt; 100K ADA</p>
                      <div className="mt-3">
                        <span className="text-xs font-semibold text-muted-foreground">Last triggered: 2 days ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Applications Tab - Project-Level Explorer */}
          {activeTab === "applications" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Project-Level Explorer</h2>
                  <p className="text-muted-foreground mt-1 font-semibold">Complete project profiles with milestones and analytics</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Data
                </Button>
              </div>

              {projects.map((project) => (
                <Card key={project.id} className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-foreground mb-2">{project.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm font-semibold text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {project.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.region}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {project.totalFunding}
                          </span>
                          <span>{project.rounds} funding rounds</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        project.status === "active" 
                          ? "bg-green-500/10 text-green-600 border-green-500/20"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Milestones */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Milestones & Progress</h3>
                      <div className="space-y-4">
                        {project.milestones.map((milestone, idx) => (
                          <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {milestone.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <Clock className="w-5 h-5 text-yellow-500" />
                                )}
                                <span className="font-medium text-foreground">{milestone.name}</span>
                              </div>
                              <span className="text-sm font-semibold text-muted-foreground">Due: {milestone.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-muted rounded-full">
                                <div
                                  className={`h-2 rounded-full ${
                                    milestone.completed ? "bg-green-500" : "bg-primary"
                                  }`}
                                  style={{ width: `${milestone.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-foreground">{milestone.progress}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links & Smart Contract */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                        <Code className="w-4 h-4" />
                        GitHub Repository
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a href={project.proposalLink} className="flex items-center gap-2 text-primary hover:underline">
                        <FileText className="w-4 h-4" />
                        Governance Proposal
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Wallet className="w-4 h-4" />
                        <span className="text-sm font-semibold">Contract: {project.smartContract}</span>
                        <button className="ml-1">
                          <Eye className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Comparative Analytics */}
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-foreground mb-3">Comparative Analytics</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-center">
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Category Rank</p>
                          <p className="text-lg font-bold text-foreground">#3</p>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-center">
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Performance</p>
                          <p className="text-lg font-bold text-green-600">Above Avg</p>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-center">
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Spending Rate</p>
                          <p className="text-lg font-bold text-foreground">On Track</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Spends Tab - Outflows Explorer */}
          {activeTab === "spends" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Outflows Explorer</h2>
                  <p className="text-muted-foreground mt-1 font-semibold">Complete withdrawal tracking and recipient intelligence</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Analytics
                  </Button>
                </div>
              </div>

              {/* Total Outflows Summary */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Total Outflows</CardTitle>
                  <CardDescription className="font-semibold">All debits from treasury address(es)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Total Spent</p>
                      <p className="text-2xl font-bold text-foreground">2,456,789 ADA</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">This Month</p>
                      <p className="text-2xl font-bold text-foreground">125,450 ADA</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Unique Recipients</p>
                      <p className="text-2xl font-bold text-foreground">45</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Avg per Transaction</p>
                      <p className="text-2xl font-bold text-foreground">54,595 ADA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Withdrawal List */}
              <div className="space-y-4">
                {outflows.map((outflow) => (
                  <Card key={outflow.id} className="border-border/60 bg-card/40 backdrop-blur-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">{outflow.amount}</h3>
                              <div className="flex items-center gap-4 text-sm font-semibold text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Wallet className="w-4 h-4" />
                                  {outflow.recipient}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(outflow.timestamp).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                              {outflow.category}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">Governance Action</p>
                              <p className="text-sm font-medium text-foreground">{outflow.governanceAction}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">Team</p>
                              <p className="text-sm font-medium text-foreground">{outflow.team}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">Region</p>
                              <p className="text-sm font-medium text-foreground flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {outflow.region}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:min-w-[120px]">
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            Track Project
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recipient Intelligence */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Recipient Intelligence</CardTitle>
                  <CardDescription className="font-semibold">Address-level mapping and team clustering</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Top Recipients</h3>
                      <div className="space-y-3">
                        {[
                          { address: "addr1qy...xyz", total: "125,000 ADA", count: 3 },
                          { address: "addr1qz...abc", total: "85,500 ADA", count: 2 },
                          { address: "addr1qr...def", total: "45,000 ADA", count: 1 }
                        ].map((recipient, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                            <div>
                              <p className="font-medium text-foreground">{recipient.address}</p>
                              <p className="text-xs font-semibold text-muted-foreground">{recipient.count} transactions</p>
                            </div>
                            <p className="font-bold text-foreground">{recipient.total}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Regional Distribution</h3>
                      <div className="space-y-3">
                        {[
                          { region: "Global", amount: "45%", value: "1,105,555 ADA" },
                          { region: "Europe", amount: "30%", value: "737,037 ADA" },
                          { region: "Americas", amount: "15%", value: "368,518 ADA" },
                          { region: "Asia", amount: "10%", value: "245,679 ADA" }
                        ].map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-foreground">{item.region}</span>
                              <span className="text-muted-foreground">{item.amount}</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full">
                              <div
                                className="h-2 bg-primary rounded-full"
                                style={{ width: item.amount }}
                              ></div>
                            </div>
                              <p className="text-xs font-semibold text-muted-foreground">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Proposals Tab - Governance Context */}
          {activeTab === "proposals" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Governance Proposals</h2>
                  <p className="text-muted-foreground mt-1 font-semibold">CIP-1694 votes and treasury-related governance actions</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>

              {proposals.map((proposal) => (
                <Card key={proposal.id} className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-foreground mb-2">{proposal.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm font-semibold text-muted-foreground">
                          <span>{proposal.type}</span>
                          <span>•</span>
                          <span>Treasury Impact: {proposal.treasuryImpact}</span>
                          <span>•</span>
                          <span>Ends: {proposal.endDate}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-xs font-medium">
                        {proposal.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-green-500/10 rounded-lg text-center">
                        <p className="text-xs text-muted-foreground mb-1">Aye</p>
                        <p className="text-2xl font-bold text-green-600">{proposal.votes.aye}</p>
                      </div>
                      <div className="p-4 bg-red-500/10 rounded-lg text-center">
                        <p className="text-xs text-muted-foreground mb-1">Nay</p>
                        <p className="text-2xl font-bold text-red-600">{proposal.votes.nay}</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg text-center">
                        <p className="text-xs text-muted-foreground mb-1">Abstain</p>
                        <p className="text-2xl font-bold text-foreground">{proposal.votes.abstain}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-foreground mb-3">dRep Signal Integration</h3>
                      <div className="space-y-2">
                        {proposal.dRepSignals.map((signal, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Users className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{signal.dRep}</p>
                                <p className="text-xs font-semibold text-muted-foreground">Weight: {signal.weight}</p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              signal.signal === "aye" 
                                ? "bg-green-500/10 text-green-600" 
                                : "bg-red-500/10 text-red-600"
                            }`}>
                              {signal.signal.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-foreground mb-2">Withdrawal Justification</h3>
                      <p className="text-sm font-semibold text-muted-foreground">
                        This proposal is linked to governance action #{proposal.id} and affects treasury spending policy.
                        Approval pathway: CIP-1694 voting process.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Tips Tab - Direct Treasury Donations */}
          {activeTab === "tips" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Direct Treasury Donations</h2>
                  <p className="text-muted-foreground mt-1 font-semibold">Contribute directly to the Cardano treasury</p>
                </div>
                <Button variant="gradient" onClick={() => setShowDonationModal(true)} className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Make Donation
                </Button>
              </div>

              {/* Donation Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Total Donations</p>
                    <p className="text-2xl font-bold text-foreground">1,500 ADA</p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">This Month</p>
                    <p className="text-2xl font-bold text-foreground">1,500 ADA</p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Donors</p>
                    <p className="text-2xl font-bold text-foreground">2</p>
                  </CardContent>
                </Card>
              </div>

              {/* Donation History */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Donations</CardTitle>
                  <CardDescription className="font-semibold">Community contributions to the treasury</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donations.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                            <Gift className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{donation.amount}</p>
                            <p className="text-sm font-semibold text-muted-foreground">
                              {donation.anonymous ? "Anonymous" : donation.donor} • {new Date(donation.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        {donation.anonymous ? (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Donation Modal */}
              {showDonationModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <Card className="max-w-md w-full border-border/60 bg-card/40 backdrop-blur-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-foreground">Make a Donation</CardTitle>
                        <button onClick={() => setShowDonationModal(false)}>
                          <X className="w-5 h-5 text-muted-foreground" />
                        </button>
                      </div>
                      <CardDescription className="font-semibold">Contribute to the Cardano treasury</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Amount (ADA)</label>
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="anonymous" className="rounded" />
                        <label htmlFor="anonymous" className="text-sm text-foreground">Donate anonymously</label>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Network Fee</span>
                          <span className="text-foreground">~0.17 ADA</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Total</span>
                          <span className="font-bold text-foreground">
                            {donationAmount ? `${parseFloat(donationAmount) + 0.17} ADA` : "0.17 ADA"}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" onClick={() => setShowDonationModal(false)}>
                          Cancel
                        </Button>
                        <Button variant="gradient" className="flex-1 flex items-center justify-center gap-2">
                          <QrCode className="w-4 h-4" />
                          Connect Wallet
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}

          {/* Transfers Tab - Inflows Explorer */}
          {activeTab === "transfers" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Inflows Explorer</h2>
                  <p className="text-muted-foreground mt-1 font-semibold">Complete inflow categorization and forecasting</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setSelectedTimeframe("month")}>
                    Month
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setSelectedTimeframe("quarter")}>
                    Quarter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setSelectedTimeframe("year")}>
                    Year
                  </Button>
                </div>
              </div>

              {/* Inflow Summary */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Inflow Summary</CardTitle>
                  <CardDescription className="font-semibold">Stake pool distributions, donations, and protocol revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Stake Pool Distribution</p>
                      <p className="text-2xl font-bold text-foreground">45,230 ADA</p>
                      <p className="text-xs text-muted-foreground mt-1">Epoch 450</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Direct Donations</p>
                      <p className="text-2xl font-bold text-foreground">5,000 ADA</p>
                      <p className="text-xs text-muted-foreground mt-1">This month</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Transaction Fees</p>
                      <p className="text-2xl font-bold text-foreground">12,450 ADA</p>
                      <p className="text-xs text-muted-foreground mt-1">Epoch 450</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total This Period</p>
                      <p className="text-2xl font-bold text-foreground">62,680 ADA</p>
                      <p className="text-xs text-muted-foreground mt-1">+5.2% vs last</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-foreground">Monthly Inflow Trends</CardTitle>
                    <CardDescription className="font-semibold">Compare performance across epochs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Chart visualization placeholder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-foreground">Inflow by Category</CardTitle>
                    <CardDescription className="font-semibold">Breakdown of revenue sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Chart visualization placeholder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Fee-to-Treasury Modeling */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Fee-to-Treasury Modeling</CardTitle>
                  <CardDescription className="font-semibold">How transaction fees convert to treasury revenue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Current Fee Rate</p>
                      <p className="text-xl font-bold text-foreground">0.17 ADA</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Treasury Share</p>
                      <p className="text-xl font-bold text-foreground">20%</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Projected Impact</p>
                      <p className="text-xl font-bold text-foreground">+15%</p>
                    </div>
                  </div>
                  <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Fee policy impact simulation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Staking-Based Forecasting */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Staking-Based Inflow Forecasting</CardTitle>
                  <CardDescription className="font-semibold">Predict future treasury inflows based on delegation growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Current Staking Rate</p>
                        <p className="text-2xl font-bold text-foreground">68.5%</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Projected Next Epoch</p>
                        <p className="text-2xl font-bold text-foreground">45,500 ADA</p>
                      </div>
                    </div>
                    <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Forecasting visualization</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Inflows */}
              <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Inflows</CardTitle>
                  <CardDescription className="font-semibold">Latest treasury deposits and contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inflows.map((inflow) => (
                      <div key={inflow.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{inflow.amount}</p>
                            <p className="text-sm font-semibold text-muted-foreground">
                              {inflow.type} • Epoch {inflow.epoch} • {new Date(inflow.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                          {inflow.source}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Bounties Tab */}
          {activeTab === "bounties" && (
            <Card className="border-border/60 bg-card/40 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Bounties</h3>
                  <p className="text-muted-foreground font-semibold">{tabCounts.bounties} active bounties</p>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
};

export default TreasuryExplorer;
