import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { CheckCircle, Leaf, Calculator, FileText, Globe, Zap, Users, TrendingUp } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './App.css'
import heroImage from './assets/tree_planting_hero.jpg'
import carbonImage from './assets/carbon_footprint.png'
import sampleReport1 from './assets/sample_report_1.png'
import sampleReport2 from './assets/sample_report_2.png'

function App() {

  const features = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Instant CO₂e Calculation",
      description: "Generate comprehensive carbon footprint reports in minutes, not months"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Structured Reports",
      description: "Professional reports with executive summaries and detailed breakdowns"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Southeast Asia Optimized",
      description: "Localized emission factors for Indonesia, Thailand, Singapore, and Malaysia"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ChatGPT Integration",
      description: "Natural conversation interface - no new apps or complex systems to learn"
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Affordable Alternative",
      description: "Fraction of the cost of traditional ESG consultants",
      stat: "90% Cost Reduction"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "SME Focused",
      description: "Designed specifically for small and medium enterprises",
      stat: "64M SMEs in SEA"
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "GHG Protocol Compliant",
      description: "Based on internationally recognized standards",
      stat: "100% Compliant"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">SustainaGPT</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://forms.gle/UE51DjS2VLE27eeB9', '_blank')}
            >
              Join Waitlist
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Democratizing 
                <span className="text-green-600"> Carbon Accounting</span> for SMEs
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SustainaGPT is an AI sustainability consultant that makes carbon footprint calculation 
                instant, affordable, and accessible for small and medium enterprises across Southeast Asia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                  onClick={() => window.open('https://forms.gle/UE51DjS2VLE27eeB9', '_blank')}
                >
                  Join Our Waitlist
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Beta launching August 2025
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="Tree Planting Sustainability" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">90%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SustainaGPT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for SMEs in Southeast Asia, SustainaGPT combines AI technology 
              with sustainability expertise to make carbon accounting accessible to everyone.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={carbonImage} 
                alt="Carbon Footprint Calculation" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Making Sustainability Accessible
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {benefit.description}
                      </p>
                      <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {benefit.stat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Reports Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See SustainaGPT in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a preview of the comprehensive carbon footprint reports that SustainaGPT generates. 
              From data inputs to detailed emissions analysis, see how easy sustainability reporting can be.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Inputs</h3>
              <p className="text-gray-600 mb-6">
                Simple data collection covering energy consumption, water usage, waste generation, and business travel.
              </p>
              <img 
                src={sampleReport1} 
                alt="Sample Report - Data Inputs" 
                className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Emissions Results</h3>
              <p className="text-gray-600 mb-6">
                Detailed breakdown of CO₂e emissions by scope and source category with actionable insights.
              </p>
              <img 
                src={sampleReport2} 
                alt="Sample Report - Results" 
                className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of SMEs across Southeast Asia who are already preparing 
              to measure and reduce their carbon footprint with SustainaGPT.
            </p>
            
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => window.open('https://forms.gle/UE51DjS2VLE27eeB9', '_blank')}
            >
              Join Our Waitlist
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              Be the first to know when we launch. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-bold text-gray-900">SustainaGPT</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Democratizing carbon accounting for SMEs across Southeast Asia through 
                AI-powered sustainability consulting.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 SustainaGPT. All rights reserved.
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>hanif@aiforproductivity.id</li>
                <li>Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

