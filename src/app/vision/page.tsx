import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Quote, Target, Lightbulb, Heart, Globe, Users, Zap, Shield } from 'lucide-react';

export default function VisionPage() {
  const principles = [
    {
      icon: Lightbulb,
      title: 'Intelligence First',
      description: 'Every interaction should learn from you, anticipate your needs, and continuously improve your digital experience. AI isn&apos;t an add-on – it&apos;s the foundation.',
      quote: 'Technology should adapt to humans, not the other way around.'
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'Your data belongs to you. Our AI works locally, learning your patterns without compromising your privacy. Security and intelligence can coexist.',
      quote: 'Privacy is not something you should have to fight for.'
    },
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Breaking down the walls between browser ecosystems. One platform, endless possibilities. No more choosing between browsers for features.',
      quote: 'Innovation shouldn&apos;t be locked behind platform walls.'
    },
    {
      icon: Users,
      title: 'Infinite Adaptability',
      description: 'Your browser should be as unique as you are. Complete customization without limitation. Every user&apos;s workflow deserves respect.',
      quote: 'One size fits none. Customization is liberation.'
    }
  ];

  const timeline = [
    {
      year: '2024 Sep',
      title: 'The Vision Born',
      description: 'Solar Browser was started by a group of 16-year-old developers with a dream to revolutionize web browsing.'
    },
    {
      year: '2024 Dec',
      title: 'First Prototype',
      description: 'Initial prototype built and tested among friends and early enthusiasts.'
    },
    {
      year: '2025 Jan',
      title: 'Alpha Testing',
      description: 'Internal testing and refinement with a select group of early adopters. Valuable feedback shapes the user experience.'
    },
    {
      year: '2025 Jul',
      title: 'Google Play Mobile Prototype',
      description: 'First mobile prototype of Solar Browser released on Google Play for early feedback.'
    },
    {
      year: '2025 Oct',
      title: 'Visual Engine Complete',
      description: "Planned milestone: HTML parser, CSS parser, and layout engine for Solar&apos;s visual rendering are completed. Next: JavaScript engine development begins."
    },
    {
      year: '2027 Jan',
      title: 'Solar Full Release Beta',
      description: "Planned: Solar Browser&apos;s full version beta will be launched to the public, marking a new era in browsing. (from the future)"
    },
    {
      year: '2027 Feb',
      title: 'Next-Gen AI Integration',
      description: 'Solar begins integrating next-generation AI models for even more adaptive, context-aware browsing and developer APIs.'
    }
  ];

  const stats = [
    { number: '16', label: 'Age of Developers', description: 'Solar is built by a team of passionate 16-year-old developers.' },
    { number: '0', label: 'Investment', description: 'Developed with zero budget. 100% indie, 100% passion.' },
    { number: '0', label: 'Compromises on Privacy', description: 'We never collect, sell, or compromise your personal data. Ever.' },
    { number: '∞', label: 'Possibilities Ahead', description: 'With AI at the core, the potential for innovation is truly limitless.' }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Our Vision
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manifesto
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Why Solar exists and how we&apos;re reshaping the digital landscape. 
            This is more than technology – it&apos;s a philosophy for the future of human-computer interaction.
          </p>
        </div>
      </section>

      {/* Main Manifesto */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16 mb-24">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Quote className="w-16 h-16 text-gray-300 mb-8" />
              <blockquote className="text-3xl md:text-4xl font-medium text-gray-900 leading-relaxed mb-8">
                "The internet has given us limitless information, but our tools to navigate it remain 
                fundamentally unchanged. We believe it&apos;s time for browsing to evolve – to become as 
                intelligent and adaptive as the minds using it."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="/vertex.jpg"
                  alt="Vertex Corporation Logo"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Vertex Corporation</div>
                  <div className="text-gray-600">Founding Team</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-24 h-24 mx-auto mb-6 text-gray-400" />
                  <p className="text-gray-600 font-medium">
                    Built with passion for innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental beliefs guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {principles.map((principle, index) => (
              <div key={principle.title} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{principle.description}</p>
                <blockquote className="text-gray-800 font-medium italic border-l-4 border-blue-500 pl-4">
                  "{principle.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vision to reality – the milestones that brought Solar Browser to life.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="hidden lg:block lg:w-4 lg:h-4 lg:bg-blue-600 lg:rounded-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:border-4 lg:border-white lg:z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The foundation of trust and innovation that Solar is built upon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-300 mb-4">{stat.label}</div>
                <p className="text-gray-400 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The Future We're Building
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Solar is just the beginning. We envision a world where technology truly serves humanity, 
            where AI enhances rather than replaces human intelligence, and where privacy and innovation 
            work hand in hand. The browser is our starting point, but our vision extends far beyond.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adaptive Technology</h3>
              <p className="text-gray-600">Software that learns and adapts to individual users</p>
            </div>
            <div className="text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy-First AI</h3>
              <p className="text-gray-600">Intelligent systems that respect user privacy</p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Innovation</h3>
              <p className="text-gray-600">Technology that feels natural and intuitive</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
