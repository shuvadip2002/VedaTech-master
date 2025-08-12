import React, { useState, useMemo } from 'react'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Filter,
  ArrowRight,
  Star,
  Users,
  Calendar,
  X,
  CheckCircle
} from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web', label: 'Web Apps', count: 5 },
    { id: 'mobile', label: 'Mobile Apps', count: 4 },
    { id: 'design', label: 'UI/UX Design', count: 3 }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern, scalable e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechCorp Inc.',
      duration: '3 months',
      teamSize: 6,
      rating: 4.9,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & checkout process',
        'Admin dashboard',
        'Payment integration',
        'Order management system'
      ],
      challenges: 'Implementing real-time inventory updates and handling high concurrent user loads.',
      solutions: 'Used Redis for caching and WebSocket for real-time updates, implemented horizontal scaling with load balancers.'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile application for fitness tracking with social features and personalized workout plans.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      client: 'FitLife Studios',
      duration: '4 months',
      teamSize: 4,
      rating: 4.8,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Workout tracking & planning',
        'Progress analytics & charts',
        'Social features & challenges',
        'Nutrition tracking',
        'Wearable device integration',
        'Personalized recommendations'
      ],
      challenges: 'Integrating with multiple wearable devices and optimizing battery usage.',
      solutions: 'Implemented efficient background processing and used device-specific APIs for optimal performance.'
    },
    {
      id: 3,
      title: 'Banking Dashboard',
      category: 'web',
      description: 'Comprehensive banking dashboard with real-time financial data visualization and transaction management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
      client: 'GlobalBank',
      duration: '5 months',
      teamSize: 8,
      rating: 4.9,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Real-time financial data',
        'Interactive charts & graphs',
        'Transaction management',
        'Budget planning tools',
        'Security features',
        'Multi-currency support'
      ],
      challenges: 'Ensuring data security and compliance with banking regulations.',
      solutions: 'Implemented end-to-end encryption, multi-factor authentication, and regular security audits.'
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      category: 'web',
      description: 'Complete restaurant management solution including order processing, inventory, and customer management.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
      client: 'FoodChain Restaurants',
      duration: '3 months',
      teamSize: 5,
      rating: 4.7,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Order management system',
        'Inventory tracking',
        'Staff scheduling',
        'Customer database',
        'Analytics & reporting',
        'Mobile app for staff'
      ],
      challenges: 'Managing real-time order updates across multiple devices and locations.',
      solutions: 'Implemented WebSocket connections and used Redis for real-time data synchronization.'
    },
    {
      id: 5,
      title: 'Travel Planning App',
      category: 'mobile',
      description: 'Intelligent travel planning application with AI-powered recommendations and itinerary management.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Python', 'TensorFlow', 'Google Cloud'],
      client: 'Wanderlust Travel',
      duration: '6 months',
      teamSize: 7,
      rating: 4.8,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'AI travel recommendations',
        'Itinerary planning',
        'Booking integration',
        'Offline maps',
        'Social sharing',
        'Multi-language support'
      ],
      challenges: 'Implementing AI recommendations with limited training data and ensuring offline functionality.',
      solutions: 'Used transfer learning techniques and implemented comprehensive offline data caching.'
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient portal for healthcare providers with appointment scheduling and medical record management.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Java Spring', 'Oracle', 'HL7 FHIR'],
      client: 'MediCare Network',
      duration: '7 months',
      teamSize: 10,
      rating: 4.9,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Patient registration',
        'Appointment scheduling',
        'Medical records',
        'Prescription management',
        'Telemedicine integration',
        'HIPAA compliance'
      ],
      challenges: 'Ensuring HIPAA compliance and integrating with existing hospital systems.',
      solutions: 'Implemented strict access controls, audit logging, and used HL7 FHIR standards for interoperability.'
    }
  ]

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(project => project.category === activeFilter)
  }, [activeFilter, projects])

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Filter className="w-4 h-4" />
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-medium">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize} devs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    View Details
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                    <Github className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 lg:p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Project Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Project Info</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Client:</span>
                      <span className="font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team Size:</span>
                      <span className="font-medium">{selectedProject.teamSize} developers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="font-medium">{selectedProject.rating}/5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Challenges</h4>
                  <p className="text-sm text-gray-600">{selectedProject.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Solutions</h4>
                  <p className="text-sm text-gray-600">{selectedProject.solutions}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1 justify-center">
                  <ExternalLink className="w-4 h-4" />
                  Visit Live Site
                </button>
                <button className="btn-secondary flex-1 justify-center">
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects