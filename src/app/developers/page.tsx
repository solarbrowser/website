import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Puzzle, Book, Zap, Users, Download, Github } from 'lucide-react';

export default function DevelopersPage() {
  const ecosystemFeatures = [
    {
      icon: Puzzle,
      title: 'Universal Extension Support',
      description: 'Write once, run everywhere. Solar supports extensions from Chrome, Firefox, Safari, and Edge.',
      details: [
        'Cross-browser API compatibility layer',
        'Automatic extension translation and optimization',
        'Enhanced permissions and security model',
        'Performance monitoring and optimization tools'
      ]
    },
    {
      icon: Code,
      title: 'Advanced Development APIs',
      description: 'Access Solar&apos;s unique capabilities with our comprehensive developer APIs.',
      details: [
        'AI integration APIs for smart extensions',
        'Advanced theming and customization hooks',
        'Performance profiling and analytics',
        'Deep system integration capabilities'
      ]
    },
    {
      icon: Zap,
      title: 'Lightning Fast Development',
      description: 'Hot reload, instant deployment, and real-time debugging make development a breeze.',
      details: [
        'Hot reload for instant testing',
        'Integrated development environment',
        'Real-time performance metrics',
        'Advanced debugging and profiling tools'
      ]
    },
    {
      icon: Users,
      title: 'Thriving Community',
      description: 'Join thousands of developers building the future of web browsing.',
      details: [
        'Active community forums and support',
        'Regular developer events and hackathons',
        'Mentorship programs for new developers',
        'Direct access to Solar team for feedback'
      ]
    }
  ];

  const resources = [
    {
      title: 'Quick Start Guide',
      description: 'Get your first extension running in under 5 minutes',
      icon: Zap,
      link: '#'
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive reference for all Solar APIs',
      icon: Book,
      link: '#'
    },
    {
      title: 'GitHub Repository',
      description: 'Explore our open-source tools and examples',
      icon: Github,
      link: '#'
    },
    {
      title: 'Developer SDK',
      description: 'Everything you need to start building',
      icon: Download,
      link: '#'
    }
  ];

  const codeExample = `// Solar Extension API Example
import { solar } from '@solar-browser/api';

export default class SmartExtension {
  async onActivate() {
    // Access Solar's AI capabilities
    const insights = await solar.ai.analyzeCurrentPage();
    
    // Create intelligent UI enhancements
    const suggestions = await solar.ui.createSmartSuggestions({
      context: insights,
      userPreferences: await solar.user.getPreferences()
    });
    
    // Integrate with Solar's theming system
    solar.theme.onUpdate(this.updateExtensionTheme);
  }
  
  async updateExtensionTheme(theme) {
    // Automatically adapt to user's theme changes
    this.applyTheme(theme);
  }
}`;

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
            <Code className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">For Developers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Build the
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Solar&apos;s universal extension ecosystem breaks down browser barriers. 
            Write once, deploy everywhere, and access capabilities no other browser offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              {/* Removed ArrowRight icon (unused) */}
            </a>
            <a
              href="https://github.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Universal Extension Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build extensions that work across all major browsers while accessing Solar&apos;s unique AI and customization capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {ecosystemFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple. Powerful. Intuitive.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our APIs are designed to be intuitive for beginners yet powerful enough for advanced use cases. 
                Access Solar&apos;s AI, theming system, and unique capabilities with clean, modern JavaScript.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">TypeScript support out of the box</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Hot reload for instant development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Cross-browser compatibility layer</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">extension.js</span>
                </div>
                <pre className="text-gray-300 text-sm overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to start building amazing extensions for Solar Browser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href="https://github.com/solarbrowser"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                  <resource.icon className="w-8 h-8 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center space-x-2 text-purple-600 font-medium">
                  <span>Learn more</span>
                  {/* Removed ArrowRight icon (unused) */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Join the Developer Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Connect with thousands of developers building the future of web browsing. 
            Get support, share ideas, and collaborate on groundbreaking projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Join Community</span>
            </a>
            <a
              href="https://github.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download SDK</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
