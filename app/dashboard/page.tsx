import WalletConnect from '../../components/WalletConnect';
import ImportButton from '../../components/ImportButton';

export const dynamic = 'force-dynamic';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-8">Connect your accounts to generate your Contribution Passport.</p>

      {/* Wallet */}
      <div className="mb-8 p-6 border border-gray-800 rounded">
        <h2 className="text-xl font-bold mb-4">1. Connect Wallet</h2>
        <WalletConnect />
      </div>

      {/* Import */}
      <div className="mb-8 p-6 border border-gray-800 rounded">
        <h2 className="text-xl font-bold mb-4">2. Import Contributions</h2>
        <div className="flex gap-4">
          <ImportButton platform="github" />
          <ImportButton platform="twitter" />
        </div>
        <p className="mt-4 text-sm text-gray-500">More platforms coming soon (Discord, Notion, Governance)</p>
      </div>

      {/* Analyze */}
      <div className="mb-8 p-6 border border-gray-800 rounded">
        <h2 className="text-xl font-bold mb-4">3. Analyze & Generate Passport</h2>
        <button className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded">
          Generate Contribution Passport
        </button>
        <p className="mt-2 text-sm text-gray-500">AI evaluates originality, technical depth, community impact, and more.</p>
      </div>
    </div>
  );
}
