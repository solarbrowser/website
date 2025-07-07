import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Zap } from 'lucide-react';

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23131213' fill-opacity='0.4'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Coming Soon</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Solar
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary insights, breakthrough technologies, and the future of web browsing. 
            Our blog is currently being crafted with the same precision as Solar Browser.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 max-w-3xl mx-auto shadow-xl">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Revolutionary Content in Development
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're preparing in-depth technical articles, breakthrough announcements, and exclusive insights 
              that match the innovation level of Solar Browser. Quality takes time, and we're ensuring 
              every piece of content meets our highest standards.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
