// constants/pageData.ts - COMPLETE FILE

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  src: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  'ecommerce-transformation': {
    id: 'ecommerce-transformation',
    title: 'E-commerce Platform Transformation',
    client: 'RetailCo Inc.',
    industry: 'Retail & E-commerce',
    src: '/assets/blog1.jpg',
    challenge: 'RetailCo was struggling with an outdated e-commerce platform that couldn\'t handle peak traffic during sales events, resulting in lost revenue and poor customer experience.',
    solution: 'We migrated their entire platform to a modern cloud-based architecture using microservices, implemented a robust CDN, and optimized their database queries. The new system includes real-time inventory management and AI-powered product recommendations.',
    results: [
      '300% increase in concurrent user capacity',
      '45% reduction in page load times',
      '60% increase in conversion rates',
      '99.99% uptime during peak seasons',
      '$2M additional revenue in first quarter'
    ],
    technologies: ['Next.js', 'AWS', 'PostgreSQL', 'Redis', 'Stripe'],
    duration: '6 months',
    teamSize: '8 developers'
  },
  'healthcare-data-security': {
    id: 'healthcare-data-security',
    title: 'Healthcare Data Security Overhaul',
    client: 'MediCare Solutions',
    industry: 'Healthcare',
    src: '/assets/blog1.jpg',
    challenge: 'MediCare needed to achieve HIPAA compliance while modernizing their patient data management system. They faced multiple security vulnerabilities and lacked proper audit trails.',
    solution: 'We implemented end-to-end encryption, multi-factor authentication, and comprehensive audit logging. Built a secure API gateway and conducted thorough penetration testing. Provided staff training on security best practices.',
    results: [
      'Achieved full HIPAA compliance',
      'Zero security breaches since implementation',
      '90% reduction in unauthorized access attempts',
      'Complete audit trail for all data access',
      'Staff security awareness increased by 85%'
    ],
    technologies: ['Node.js', 'MongoDB', 'OAuth 2.0', 'AWS KMS', 'Docker'],
    duration: '4 months',
    teamSize: '5 specialists'
  },
  'fintech-mobile-app': {
    id: 'fintech-mobile-app',
    title: 'Mobile Banking Application',
    client: 'FinBank Digital',
    industry: 'Financial Services',
    src: '/assets/blog1.jpg',
    challenge: 'FinBank wanted to launch a mobile-first banking app to compete with digital-only banks. They needed to integrate with legacy systems while providing a modern, intuitive user experience.',
    solution: 'Developed native iOS and Android applications with biometric authentication, real-time notifications, and seamless integration with existing banking infrastructure. Implemented advanced fraud detection and secure transaction processing.',
    results: [
      '500K downloads in first 3 months',
      '4.8/5 star rating on app stores',
      '70% of customers now use mobile app',
      '40% reduction in branch visits',
      '25% increase in customer satisfaction'
    ],
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'Firebase', 'Plaid API'],
    duration: '9 months',
    teamSize: '12 developers'
  },
  'manufacturing-iot': {
    id: 'manufacturing-iot',
    title: 'Smart Manufacturing IoT Platform',
    client: 'IndustrialTech Corp',
    industry: 'Manufacturing',
    src: '/assets/blog1.jpg',
    challenge: 'IndustrialTech needed real-time monitoring of their production lines across multiple facilities. Manual monitoring was inefficient and led to costly downtime.',
    solution: 'Built an IoT platform that collects data from sensors across all production equipment. Implemented predictive maintenance algorithms and real-time dashboards for plant managers. Integrated with existing ERP systems.',
    results: [
      '35% reduction in unplanned downtime',
      '20% increase in production efficiency',
      '$1.5M annual savings in maintenance costs',
      'Real-time visibility across 15 facilities',
      'ROI achieved in 8 months'
    ],
    technologies: ['Python', 'IoT Core', 'TensorFlow', 'InfluxDB', 'Grafana'],
    duration: '7 months',
    teamSize: '6 engineers'
  },
  'education-lms': {
    id: 'education-lms',
    title: 'Learning Management System',
    client: 'EduTech University',
    industry: 'Education',
    src: '/assets/blog1.jpg',
    challenge: 'The university needed a modern LMS to support hybrid learning models, with features for live classes, assignments, and student engagement tracking.',
    solution: 'Created a comprehensive LMS with video conferencing integration, interactive assessments, and analytics dashboard. Included mobile apps for students and faculty with offline content access.',
    results: [
      '95% student adoption rate',
      '50% increase in assignment submission rates',
      '80% reduction in administrative workload',
      'Support for 50K concurrent users',
      'Featured in EdTech innovation awards'
    ],
    technologies: ['React', 'Django', 'WebRTC', 'PostgreSQL', 'S3'],
    duration: '10 months',
    teamSize: '10 developers'
  },
  'logistics-optimization': {
    id: 'logistics-optimization',
    title: 'AI-Powered Logistics Optimization',
    client: 'TransLogix Global',
    industry: 'Logistics & Transportation',
    src: '/assets/blog1.jpg',
    challenge: 'TransLogix was facing inefficiencies in route planning and delivery scheduling, leading to high fuel costs and delivery delays.',
    solution: 'Developed an AI-powered route optimization system that considers traffic, weather, and delivery priorities. Integrated with GPS tracking and provided real-time route adjustments. Built a customer portal for delivery tracking.',
    results: [
      '30% reduction in fuel costs',
      '25% improvement in on-time deliveries',
      '40% increase in daily delivery capacity',
      '90% customer satisfaction rate',
      '$3M annual cost savings'
    ],
    technologies: ['Python', 'TensorFlow', 'Google Maps API', 'React', 'MongoDB'],
    duration: '5 months',
    teamSize: '7 specialists'
  },
  'digital-transformation-strategy': {
    id: 'digital-transformation-strategy',
    title: 'Enterprise Digital Transformation',
    client: 'GlobalCorp Industries',
    industry: 'Manufacturing & Distribution',
    src: '/assets/blog1.jpg',
    challenge: 'GlobalCorp was struggling with legacy systems, siloed data, and inefficient processes across 25 global offices. They needed a comprehensive digital transformation strategy but lacked internal expertise and a clear roadmap.',
    solution: 'We conducted a thorough technology assessment, developed a 3-year digital transformation roadmap, and provided strategic guidance on cloud migration, process automation, and data integration. Established governance frameworks and change management protocols.',
    results: [
      '40% reduction in operational costs',
      'Unified data platform across all locations',
      '60% improvement in process efficiency',
      'Successful migration of 50+ applications to cloud',
      '$5M in annual cost savings identified'
    ],
    technologies: ['Azure', 'Power BI', 'SAP', 'Salesforce', 'Microsoft 365'],
    duration: '12 months',
    teamSize: '6 consultants'
  },
  'technology-vendor-selection': {
    id: 'technology-vendor-selection',
    title: 'ERP System Selection & Implementation',
    client: 'MidMarket Solutions',
    industry: 'Professional Services',
    src: '/assets/blog1.jpg',
    challenge: 'MidMarket needed to replace their aging ERP system but was overwhelmed by vendor options and concerned about implementation risks. Previous attempts had failed, costing them time and money.',
    solution: 'We led a comprehensive vendor selection process, evaluated 12 ERP solutions against their specific requirements, negotiated contracts, and oversaw the implementation. Provided change management support and ensured successful adoption.',
    results: [
      'Selected optimal ERP solution saving $200K annually',
      'On-time, on-budget implementation',
      '95% user adoption within 3 months',
      'Zero critical issues post-launch',
      'Negotiated 30% discount on licensing costs'
    ],
    technologies: ['NetSuite', 'Workday', 'Tableau', 'API Integrations'],
    duration: '8 months',
    teamSize: '4 consultants'
  },
  'it-infrastructure-modernization': {
    id: 'it-infrastructure-modernization',
    title: 'IT Infrastructure Modernization',
    client: 'Heritage Financial Group',
    industry: 'Financial Services',
    src: '/assets/blog1.jpg',
    challenge: 'Heritage Financial was running critical systems on end-of-life hardware with no disaster recovery plan. They faced compliance risks, frequent outages, and inability to scale for growth.',
    solution: 'We designed a hybrid cloud infrastructure strategy, created a phased migration plan, and established disaster recovery protocols. Modernized their network architecture and implemented automated monitoring and security controls.',
    results: [
      '99.99% uptime achieved',
      'Complete disaster recovery capability',
      '50% reduction in infrastructure costs',
      'Passed all regulatory compliance audits',
      'Infrastructure ready for 300% growth'
    ],
    technologies: ['AWS', 'VMware', 'Cisco', 'Veeam', 'Splunk'],
    duration: '10 months',
    teamSize: '5 specialists'
  },
  'it-cost-optimization': {
    id: 'it-cost-optimization',
    title: 'IT Cost Optimization Program',
    client: 'RetailChain Corporation',
    industry: 'Retail',
    src: '/assets/blog1.jpg',
    challenge: 'RetailChain had rapidly growing IT costs with little visibility into spending. They were overpaying for unused licenses, redundant services, and inefficient cloud resources across multiple departments.',
    solution: 'Conducted comprehensive IT spend analysis, identified cost optimization opportunities, renegotiated vendor contracts, and implemented FinOps practices for cloud cost management. Created dashboards for ongoing cost visibility.',
    results: [
      '$2.5M in annual cost savings',
      '35% reduction in software licensing costs',
      '45% reduction in cloud spending',
      'Real-time cost visibility dashboards',
      'Established FinOps culture and practices'
    ],
    technologies: ['CloudHealth', 'Snow License Manager', 'Power BI', 'AWS Cost Explorer'],
    duration: '6 months',
    teamSize: '3 consultants'
  },
  'multi-location-rollout': {
    id: 'multi-location-rollout',
    title: 'Multi-Location Software Rollout',
    client: 'National Restaurant Chain',
    industry: 'Food & Hospitality',
    src: '/assets/blog1.jpg',
    challenge: 'The restaurant chain needed to deploy a new POS system across 200 locations nationwide within a tight 4-month window. Previous rollouts had failed due to poor coordination and inadequate training.',
    solution: 'We created a comprehensive project plan with phased rollout strategy, established clear communication channels, coordinated with vendors, and implemented a train-the-trainer program. Developed risk mitigation strategies and contingency plans for each location.',
    results: [
      'Successfully deployed to all 200 locations on schedule',
      'Zero critical incidents during rollout',
      '98% staff proficiency within 2 weeks',
      'Completed 15% under budget',
      'Customer satisfaction maintained at 4.5+ stars'
    ],
    technologies: ['MS Project', 'Jira', 'Slack', 'Zoom', 'SharePoint'],
    duration: '4 months',
    teamSize: '12 project managers'
  },
  'software-development-recovery': {
    id: 'software-development-recovery',
    title: 'Failed Project Recovery & Delivery',
    client: 'InsureTech Solutions',
    industry: 'Insurance',
    src: '/assets/blog1.jpg',
    challenge: 'InsureTech had a critical insurance platform 8 months overdue, 200% over budget, with demoralized team and frustrated stakeholders. The original vendor had abandoned the project with incomplete code.',
    solution: 'We conducted immediate project assessment, stabilized the team, re-established stakeholder trust, and created a realistic recovery plan. Implemented agile practices, clear milestones, and transparent reporting. Refactored existing code and completed development.',
    results: [
      'Delivered working product in 5 months',
      'Brought project back within revised budget',
      'Restored stakeholder confidence',
      'Team morale increased by 85%',
      'Platform now processes $50M in annual premiums'
    ],
    technologies: ['Jira', 'Confluence', 'Git', 'Jenkins', 'Scrum'],
    duration: '5 months',
    teamSize: '8 team members'
  },
  'construction-tech-implementation': {
    id: 'construction-tech-implementation',
    title: 'Construction Management Platform',
    client: 'BuildRight Construction',
    industry: 'Construction',
    src: '/assets/blog1.jpg',
    challenge: 'BuildRight was managing 50+ concurrent construction projects using spreadsheets and email, leading to miscommunication, budget overruns, and schedule delays. They needed a unified project management solution.',
    solution: 'Led selection and implementation of construction-specific project management software. Managed data migration from legacy systems, customized workflows for their processes, and conducted comprehensive training across field and office teams.',
    results: [
      '40% reduction in project delays',
      '30% improvement in budget accuracy',
      'Real-time visibility across all 50+ projects',
      '75% reduction in administrative time',
      'ROI achieved in 7 months'
    ],
    technologies: ['Procore', 'MS Project', 'Power BI', 'Mobile Apps'],
    duration: '6 months',
    teamSize: '5 project coordinators'
  },
  'product-launch-coordination': {
    id: 'product-launch-coordination',
    title: 'Global Product Launch Management',
    client: 'TechGear Electronics',
    industry: 'Consumer Electronics',
    src: '/assets/blog1.jpg',
    challenge: 'TechGear needed to launch a flagship product simultaneously across 15 countries, coordinating marketing, manufacturing, distribution, and retail partners. Previous launches had inconsistent messaging and supply issues.',
    solution: 'Developed integrated project plan coordinating all departments and external partners. Implemented collaboration tools, established clear decision-making processes, and created detailed launch playbooks for each region. Monitored progress with daily standups and weekly steering committees.',
    results: [
      'Successful synchronized launch in all 15 markets',
      '2M units sold in first month',
      'Zero stockouts in major markets',
      'Consistent brand messaging across all regions',
      'Achieved 120% of sales targets'
    ],
    technologies: ['Asana', 'Miro', 'Tableau', 'MS Teams', 'Smartsheet'],
    duration: '9 months',
    teamSize: '15 coordinators'
  }
};

export const pageData: Record<string, any> = {
  'cloud-solutions': {
    title: 'Cloud Solutions',
    category: 'service',
    description: 'Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration from anywhere.',
    content: `
      <h2>Transform Your Business with Cloud Technology</h2>
      <p>Our cloud solutions provide the flexibility and scalability your business needs to grow. Whether you're looking to migrate existing infrastructure or build new cloud-native applications, we have the expertise to guide you.</p>
      
      <h3>Why Choose Cloud Solutions?</h3>
      <ul>
        <li>Scale resources up or down based on demand</li>
        <li>Reduce infrastructure costs significantly</li>
        <li>Access your data from anywhere, anytime</li>
        <li>Ensure business continuity with reliable backups</li>
      </ul>
      
      <h3>Our Cloud Services Include</h3>
      <p>We offer comprehensive cloud migration, management, and optimization services across all major cloud platforms.</p>
    `,
    features: ['Cloud Migration', 'Infrastructure Setup', 'Security & Compliance', 'Cost Optimization', '24/7 Support'],
    cta: 'Start Your Cloud Journey',
    showCaseStudies: true,
    relatedCaseStudies: ['ecommerce-transformation', 'manufacturing-iot']
  },
  
  'cybersecurity': {
    title: 'Cybersecurity',
    category: 'service',
    description: 'Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access, ensuring peace of mind.',
    content: `
      <h2>Comprehensive Cybersecurity Protection</h2>
      <p>In today's digital landscape, cybersecurity is not optional. Our advanced security solutions protect your business from evolving threats while ensuring compliance with industry regulations.</p>
      
      <h3>Multi-Layer Security Approach</h3>
      <p>We implement defense-in-depth strategies that protect your network, applications, and data from both external and internal threats.</p>
      
      <h3>Key Security Services</h3>
      <ul>
        <li>Threat detection and response</li>
        <li>Vulnerability assessments</li>
        <li>Security awareness training</li>
        <li>Incident response planning</li>
      </ul>
    `,
    features: ['Network Security', 'Data Encryption', 'Threat Monitoring', 'Compliance Management', 'Security Audits'],
    cta: 'Secure Your Business',
    showCaseStudies: true,
    relatedCaseStudies: ['healthcare-data-security', 'fintech-mobile-app']
  },
  
  'custom-software-development': {
    title: 'Custom Software Development',
    category: 'service',
    description: 'Develop custom software solutions that enhance efficiency and align perfectly with your business processes and goals.',
    content: `
      <h2>Software Built for Your Unique Needs</h2>
      <p>Off-the-shelf software can't always meet your specific requirements. Our custom development services create tailored solutions that perfectly align with your business processes and objectives.</p>
      
      <h3>Our Development Process</h3>
      <p>We follow an agile methodology that ensures transparency, flexibility, and continuous delivery of value throughout the development lifecycle.</p>
      
      <h3>What We Build</h3>
      <ul>
        <li>Enterprise web applications</li>
        <li>Mobile apps (iOS & Android)</li>
        <li>API integrations</li>
        <li>Legacy system modernization</li>
      </ul>
    `,
    features: ['Full-Stack Development', 'UI/UX Design', 'API Development', 'Quality Assurance', 'Ongoing Maintenance'],
    cta: 'Build Your Solution',
    showCaseStudies: true,
    relatedCaseStudies: ['fintech-mobile-app', 'education-lms', 'logistics-optimization']
  },
  
  'it-consulting': {
    title: 'IT Consulting',
    category: 'service',
    description: 'Leverage our expertise to make strategic IT decisions that drive growth and optimize your technology investments.',
    content: `
      <h2>Strategic IT Guidance for Business Growth</h2>
      <p>Navigate the complex technology landscape with confidence. Our IT consulting services help you make informed decisions that align technology with your business goals.</p>
      
      <h3>Areas of Expertise</h3>
      <p>From digital transformation to technology roadmaps, we provide strategic guidance across all aspects of IT.</p>
      
      <h3>Consulting Services</h3>
      <ul>
        <li>IT strategy and planning</li>
        <li>Digital transformation</li>
        <li>Technology assessment</li>
        <li>Vendor selection and management</li>
      </ul>
    `,
    features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Cost Optimization', 'Change Management'],
    cta: 'Schedule a Consultation',
    showCaseStudies: true,
    relatedCaseStudies: ['digital-transformation-strategy', 'technology-vendor-selection', 'it-infrastructure-modernization', 'it-cost-optimization']
  },
  
  'data-analytics': {
    title: 'Data Analytics',
    category: 'service',
    description: 'Turn raw data into actionable insights with advanced analytics that inform smarter business decisions.',
    content: `
      <h2>Transform Data into Business Intelligence</h2>
      <p>Your data holds valuable insights. Our analytics solutions help you uncover patterns, trends, and opportunities that drive better decision-making and competitive advantage.</p>
      
      <h3>Data-Driven Decision Making</h3>
      <p>We help you collect, analyze, and visualize data in ways that are meaningful and actionable for your business.</p>
      
      <h3>Analytics Capabilities</h3>
      <ul>
        <li>Business intelligence dashboards</li>
        <li>Predictive analytics</li>
        <li>Data warehousing</li>
        <li>Real-time reporting</li>
      </ul>
    `,
    features: ['Data Visualization', 'Predictive Modeling', 'Business Intelligence', 'ETL Pipelines', 'Custom Reports'],
    cta: 'Unlock Your Data',
    showCaseStudies: true,
    relatedCaseStudies: ['manufacturing-iot', 'logistics-optimization']
  },
  
  'project-management': {
    title: 'Project Management',
    category: 'service',
    description: 'Optimize your business connectivity with reliable, high-speed network infrastructure solutions designed to keep your operations seamless and resilient.',
    content: `
      <h2>Expert Project Management Services</h2>
      <p>Successful projects require careful planning, execution, and monitoring. Our project management services ensure your initiatives are delivered on time, within budget, and to specification.</p>
      
      <h3>Proven Project Methodology</h3>
      <p>We use industry-standard frameworks like Agile, Scrum, and Waterfall, adapting our approach to fit your project's unique requirements.</p>
      
      <h3>What We Deliver</h3>
      <ul>
        <li>Clear project roadmaps</li>
        <li>Risk management</li>
        <li>Stakeholder communication</li>
        <li>Quality assurance</li>
      </ul>
    `,
    features: ['Planning & Strategy', 'Resource Management', 'Risk Mitigation', 'Progress Tracking', 'Quality Control'],
    cta: 'Get a Project Consultation',
    showCaseStudies: true,
    relatedCaseStudies: ['multi-location-rollout', 'software-development-recovery', 'construction-tech-implementation', 'product-launch-coordination']
  },
  
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    category: 'portfolio',
    description: 'Full-featured online store...',
    content: '<p>Portfolio project details...</p>',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    link: 'https://example.com'
  },
  
  'about-us': {
    title: 'About Us',
    category: 'company',
    description: 'Learn about our company...',
    content: '<p>About us content...</p>',
    team: ['John', 'Jane', 'Bob']
  },
  
  'contact': {
    title: 'Contact Us',
    category: 'company',
    description: 'Get in touch with our team...',
    content: '<p>Contact form and details...</p>',
    email: 'contact@neoibnqayyim.com'
  }
};

export function getRelatedPages(currentSlug: string, category: string) {
  return Object.entries(pageData)
    .filter(([slug, data]) => data.category === category && slug !== currentSlug)
    .slice(0, 3);
}

export function getBreadcrumbs(category: string, title: string) {
  const base = [
    { name: 'Home', path: '/' }
  ];
  
  if (category === 'service') {
    base.push({ name: 'Service', path: '/service' });
  } else if (category === 'portfolio') {
    base.push({ name: 'Portfolio', path: '/portfolio' });
  }
  
  base.push({ name: title, path: '#' });
  return base;
}

export function getCaseStudiesByIds(ids: string[]): CaseStudy[] {
  return ids.map(id => caseStudies[id]).filter(Boolean);
}