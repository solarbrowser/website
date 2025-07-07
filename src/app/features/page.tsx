import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Shield, Puzzle, Palette, Zap, Lock, Code, Settings } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Browsing Engine',
      subtitle: 'Intelligence at the Core',
      description: 'Our revolutionary AI engine learns from your browsing patterns to create a truly personalized experience. It predicts your needs, optimizes performance, and manages your digital workspace intelligently.',
      features: [
        'Predictive tab management and organization',
        'Intelligent resource allocation and memory optimization',
        'Smart content preloading based on browsing patterns',
        'Adaptive performance tuning for your hardware',
        'Context-aware search and navigation suggestions'
      ],
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      icon: Shield,
      title: 'Proactive AI Security',
      subtitle: 'Beyond Traditional Protection',
      description: 'Solar\'s AI security system doesn\'t just react to threats – it predicts and prevents them. Using advanced behavioral analysis and machine learning, we provide protection that evolves with the threat landscape.',
      features: [
        'Real-time zero-day threat detection',
        'Behavioral analysis for unknown malware',
        'Proactive phishing and fraud prevention',
        'AI-powered privacy protection',
        'Automatic security policy adaptation'
      ],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Puzzle,
      title: 'Universal Extension Ecosystem',
      subtitle: 'Unlimited Compatibility',
      description: 'Break free from browser limitations. Solar supports extensions from Chrome, Firefox, Safari, and Edge in one unified ecosystem. Developers enjoy unprecedented freedom with our platform-agnostic APIs.',
      features: [
        'Cross-browser extension compatibility',
        'Unified extension management interface',
        'Advanced extension sandboxing for security',
        'Developer-friendly APIs and documentation',
        'Extension performance optimization'
      ],
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Palette,
      title: 'Infinite Customization',
      subtitle: 'Your Personal Canvas',
      description: 'Transform every aspect of your browsing experience. From pixel-perfect theming to deep functional modifications, Solar adapts to your unique workflow and aesthetic preferences.',
      features: [
        'Complete interface customization',
        'Advanced theming engine with real-time preview',
        'Workflow automation and scripting',
        'Custom gesture and keyboard shortcut creation',
        'Modular UI components you can rearrange'
      ],
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized rendering engine with AI-powered resource management'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Zero tracking, local AI processing, encrypted sync'
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Advanced debugging, testing, and development capabilities'
    },
    {
      icon: Settings,
      title: 'Smart Automation',
      description: 'AI-driven workflow automation and intelligent assistance'
    }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Revolutionary
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Discover how Solar&apos;s four core innovations transform web browsing into an intelligent, 
            secure, and infinitely customizable experience.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {features.map((feature, i) => (
            <div key={feature.title} className={`mb-32 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl mb-8`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg font-semibold text-gray-600 mb-6">
                  {feature.subtitle}
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 h-96 flex items-center justify-center`}>
                  <div className="text-center">
                    <feature.icon className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} />
                    <p className="text-gray-600 font-medium">
                      Interactive demo coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              And Much More
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solar is packed with features designed to enhance every aspect of your browsing experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Notice */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Mobile Development
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Some advanced features mentioned will be introduced in a more focused format in Solar&apos;s initial mobile version. 
            Full feature parity is targeted for subsequent updates as we optimize the mobile experience.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
