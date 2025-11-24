import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { X, Wallet, CheckCircle, ExternalLink, ChevronRight } from "lucide-react";

interface ConnectWalletProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (wallet: string) => void;
  connectedWallet?: string | null;
}

const ConnectWallet = ({ isOpen, onClose, onConnect, connectedWallet }: ConnectWalletProps) => {
  const [connecting, setConnecting] = useState<string | null>(null);

  const wallets = [
    {
      id: "nami",
      name: "Nami",
      icon: "🔷",
      description: "Browser extension wallet",
      installed: typeof window !== "undefined" && (window as any).cardano?.nami,
    },
    {
      id: "eternl",
      name: "Eternl",
      icon: "🔶",
      description: "Feature-rich Cardano wallet",
      installed: typeof window !== "undefined" && (window as any).cardano?.eternl,
    },
    {
      id: "flint",
      name: "Flint",
      icon: "🔥",
      description: "Modern Cardano wallet",
      installed: typeof window !== "undefined" && (window as any).cardano?.flint,
    },
    {
      id: "gero",
      name: "Gero",
      icon: "💎",
      description: "Secure Cardano wallet",
      installed: typeof window !== "undefined" && (window as any).cardano?.gero,
    },
    {
      id: "typhon",
      name: "Typhon",
      icon: "🌪️",
      description: "Lightweight Cardano wallet",
      installed: typeof window !== "undefined" && (window as any).cardano?.typhon,
    },
  ];

  const handleConnect = async (walletId: string) => {
    setConnecting(walletId);
    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onConnect(walletId);
      setConnecting(null);
      onClose();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setConnecting(null);
    }
  };

  const handleDisconnect = () => {
    onConnect("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-border/60 bg-card/40 backdrop-blur-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground font-bold">
              {connectedWallet ? "Wallet Connected" : "Connect Wallet"}
            </CardTitle>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {connectedWallet ? (
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground">
                      {wallets.find((w) => w.id === connectedWallet)?.name || "Wallet"}
                    </p>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Connected successfully
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Wallet Address</p>
                <p className="font-mono text-sm font-bold text-foreground break-all">
                  addr1qy...xyz1234567890abcdefghijklmnopqrstuvwxyz
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleDisconnect}
              >
                Disconnect Wallet
              </Button>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold text-muted-foreground">
                Connect your Cardano wallet to interact with the treasury explorer
              </p>
              <div className="space-y-2">
                {wallets.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => handleConnect(wallet.id)}
                    disabled={connecting === wallet.id || !wallet.installed}
                    className="w-full p-4 bg-muted/30 hover:bg-muted/50 border border-border rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4 group"
                  >
                    <div className="text-2xl">{wallet.icon}</div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-foreground">{wallet.name}</p>
                        {wallet.installed && (
                          <span className="px-2 py-0.5 bg-green-500/10 text-green-600 border border-green-500/20 rounded text-xs font-semibold">
                            Installed
                          </span>
                        )}
                        {!wallet.installed && (
                          <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-600 border border-yellow-500/20 rounded text-xs font-semibold">
                            Not Installed
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-muted-foreground mt-1">
                        {wallet.description}
                      </p>
                    </div>
                    {connecting === wallet.id ? (
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </button>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground text-center">
                  Don't have a wallet?{" "}
                  <a
                    href="https://cardano.org/ecosystem/wallets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-bold"
                  >
                    Get one here
                    <ExternalLink className="w-3 h-3 inline-block ml-1" />
                  </a>
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectWallet;

