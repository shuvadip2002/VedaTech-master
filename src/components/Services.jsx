import React, { useState } from 'react'
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: [
        'React & Next.js Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization',
        'SEO Best Practices'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      price: 'From $2,500',
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'Flutter Applications',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: 'From $3,500',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive user experiences.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Interactive Prototypes',
        'Design Handoff',
        'Usability Audits'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      price: 'From $1,800',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'database-design',
      icon: Database,
      title: 'Database Design',
      description: 'Scalable database architectures and data management solutions for your business.',
      features: [
        'Database Architecture',
        'Data Modeling',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Implementation',
        'Migration Services'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
      price: 'From $1,200',
      rating: 4.7,
      reviews: 73
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and deployment solutions for scalable applications.',
      features: [
        'AWS/Azure/GCP Setup',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Monitoring & Logging',
        'Auto-scaling',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      price: 'From $2,000',
      rating: 4.8,
      reviews: 94
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Training',
        'Incident Response',
        'Compliance Support'
      ],
      technologies: ['OWASP', 'NIST', 'ISO 27001', 'GDPR'],
      price: 'From $3,000',
      rating: 4.9,
      reviews: 112
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We
            <span className="text-gradient"> Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                activeService === index ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-sm text-blue-600 font-medium">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Price & Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-blue-600">
                  {service.price}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">
                    {service.rating} ({service.reviews})
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full btn-primary justify-center group-hover:bg-blue-700 transition-colors duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services