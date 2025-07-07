import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Brain, Lock, Eye, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Real-time behavioral analysis identifies and blocks zero-day threats before they can cause harm.',
      details: [
        'Machine learning models trained on millions of threat patterns',
        'Real-time code analysis and sandboxing',
        'Behavioral anomaly detection',
        'Proactive threat intelligence gathering'
      ]
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption protects your data both in transit and at rest.',
      details: [
        'End-to-end encryption for all communications',
        'Local data encryption with user-controlled keys',
        'Secure credential management',
        'Encrypted sync across devices'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'Your browsing data stays private with intelligent tracking prevention.',
      details: [
        'Intelligent tracking prevention',
        'Fingerprint randomization',
        'DNS over HTTPS by default',
        'No data collection or selling'
      ]
    },
    {
      icon: Zap,
      title: 'Real-Time Protection',
      description: 'Instant response to emerging threats with cloud-powered intelligence.',
      details: [
        'Sub-millisecond threat response times',
        'Cloud-powered threat intelligence updates',
        'Automatic security policy updates',
        'Real-time malware scanning'
      ]
    }
  ];

  const comparisonData = [
    { feature: 'Zero-Day Protection', traditional: 'Reactive', solar: 'Proactive AI Prevention' },
    { feature: 'Threat Detection Speed', traditional: 'Minutes to Hours', solar: 'Milliseconds' },
    { feature: 'Privacy Protection', traditional: 'Basic Blocking', solar: 'AI-Powered Intelligence' },
    { feature: 'Update Frequency', traditional: 'Daily/Weekly', solar: 'Real-Time' },
    { feature: 'False Positives', traditional: 'High', solar: 'Ultra Low' },
    { feature: 'Resource Usage', traditional: 'Heavy', solar: 'Optimized' }
  ];

  const threats = [
    { name: 'Phishing Attacks', description: 'AI analyzes page content, URLs, and behavior patterns' },
    { name: 'Malware Downloads', description: 'Real-time file scanning and reputation analysis' },
    { name: 'Zero-Day Exploits', description: 'Behavioral analysis detects unknown attack patterns' },
    { name: 'Data Harvesting', description: 'Intelligent tracking prevention and data leak protection' },
    { name: 'Social Engineering', description: 'Content analysis identifies manipulation attempts' },
    { name: 'Cryptocurrency Mining', description: 'Resource usage monitoring prevents unauthorized mining' }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-600">The Fortress</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Unbreachable
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Security
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Solar's AI-powered security system doesn't just protect – it predicts, prevents, and evolves. 
            Experience browsing with military-grade protection that stays ahead of threats.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multi-Layer Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of Solar is designed with security at its core, creating multiple layers 
              of protection that work together seamlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {securityFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar vs Traditional Browsers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Solar's AI-powered security compares to conventional browser protection.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Security Aspect</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-600">Traditional Browsers</th>
                    <th className="text-center py-4 px-6 font-semibold text-green-600">Solar Browser</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={item.feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{item.traditional}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center space-x-1 text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4" />
                          <span>{item.solar}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solar's AI security engine protects against known and unknown threats 
              with intelligent detection and prevention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <div key={threat.name} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{threat.name}</h3>
                    <p className="text-gray-600 text-sm">{threat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security in DNA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Security in Solar's DNA
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional browsers where security is an add-on, Solar is built from the ground up 
            with security as a fundamental principle. Every line of code, every feature, and every 
            interaction is designed with protection in mind.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">0</div>
              <div className="text-gray-300">Known Vulnerabilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;1ms</div>
              <div className="text-gray-300">Threat Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
