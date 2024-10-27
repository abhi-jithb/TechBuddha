import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: "/#about", 
  },
  {
    id: "members",
    title: "Members",
    href: "/#members", 
  },
  {
    id: "achievements",
    title: "Achievements",
    href: "/#achievements", 
  },
  {
    id: "projects",
    title: "Projects",
    href: "/#projects", 
  },
  {
    id: "contact",
    title: "Contact Us",
    href: "/#contact", 
  },
];

const services = [
  {
    title: "App Development",
    icon: backend,
    personImage: "/Jacob.jpg", // Add your image path
    name: "Jacob George",
    linkedIn: "https://www.linkedin.com/in/jacobgeorgea/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWQr3PVwDSsqH4n6rshTUWA%3D%3D",
  },
  {
    title: "Medical",
    icon: web,
    personImage: "/dranto.jpeg",
    description:"Physician , Intensivist and Medical Researcher Queensland, Australia.", 
    name: "Dr. Antony Attokaran",
    linkedIn: "",
  },
  {
    title: "Agriculture",
    icon: mobile,
    personImage: "/team/agri-lead.jpg", // Add your image path
    name: "GUIDE",
    linkedIn: "",
  },
  {
    title: "Industrial",
    icon: creator,
    personImage: "/team/industrial-lead.jpg", // Add your image path
    name: "GUIDE",
    linkedIn: "https://linkedin.com/in/emmarichards",
  },
];


const membersData = {
  ananthaKrishnan: {
    id: 'ananthakrishnan',
    name: 'Anantha Krishnan',
    title: 'Member',
    bio: 'Brief bio about Anantha Krishnan...',
    image: '/AnanthaKrishnan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/ananthakrishnan',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  aravind: {
    id: 'aravind',
    name: 'Aravind',
    title: 'Member',
    bio: 'Brief bio about Anantha Krishnan...',
    image: '/aravind.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/muhammedbilalmn/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOHfsjz3oRaikGKR%2F9KtHSA%3D%3D',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  hussain: {
    id: 'hussain',
    name: 'Hussain',
    title: 'Member',
    bio: 'Brief bio about Anantha Krishnan...',
    image: '/hussain.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/hussain-p-s-b4b0a6255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 8.98,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '97%' },
          { id: 2, label: '12th', icon: 'Award', grade: '96%' },
          // { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  alexander: {
    id: 'alexander',
    name: 'Alexander Biju Issac',
    title: 'Member',
    bio: 'Brief bio about ...',
    image: '/alexander.jpeg',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },

  
  adithyavijay: {
    id: 'aditya',
    name: 'Adithya vijay',
    title: 'Member',
    bio: 'Brief bio about Abhijay Prakash...',
    image: '/aditya.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/adithya-vijay-305768245/',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },


  aryansoji: {
    id: 'aryan',
    name: 'Aryan Soji',
    title: 'Member',
    bio: 'Brief bio about Abhijay Prakash...',
    image: '/Aryan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/aryansoji/',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },


abhijayPrakash: {
    id: 'abhijayprakash',
    name: 'Abhijay Prakash',
    title: 'Member',
    bio: 'Brief bio about Abhijay Prakash...',
    image: '/AbhijayPrakash.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/abhijayprakash',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
sakethSPai: {
    id: 'sakethspai',
    name: 'Saketh S. Pai',
    title: 'Member',
    bio: 'Brief bio about Saketh S. Pai...',
    image: '/Saketh.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/sakethspai',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 8,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '92.6%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          // { id: 3, label: 'B.Tech', icon: 'Medal', grade: '8' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
evinJoseph: {
    id: 'evinjoseph',
    name: 'Evin Joseph',
    title: 'Member',
    bio: 'Brief bio about Evin Joseph...',
    image: '/evin.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/evin-joseph-759a29295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
saranya: {
    id: 'saranya',
    name: 'Saranya Ramadasan',
    title: 'Member',
    bio: 'Brief bio about Saranya Ramadasan...',
    image: '/SaranyaRamadasan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/saranya-ramadasan-444870291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  DhananjaynathKJ: {
    id: ' Dhananjaynath K J',
    name: 'Dhananjaynath K J',
    title: 'Member',
    bio: 'Brief bio about Abhijay Prakash...',
    image: '/Dhnan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/dhananjaynath-k-j-50845831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 7.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: ':90 %' },
          { id: 2, label: '12th', icon: 'Award', grade: '92.08%' },
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
amalBiju: {
    id: 'amalbiju',
    name: 'Amal Biju',
    title: 'Member',
    bio: 'Brief bio about Amal Biju...',
    image: '/AmalBiju.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/amalbiju',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
sadhnanSamsudheen: {
    id: 'sadhnansamsudheen',
    name: 'Sadhnan Samsudheen',
    title: 'Member',
    bio: 'Brief bio about Sadhnan Samsudheen...',
    image: '/Sadhnan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/sadhnan-shameem-966343296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Inspirational quote...',
      author: 'Famous Person',
      role: 'Author Role'
    },
    organizations: [
      { id: 1, name: 'Organization Name', logo: '/organizationLogo.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '91.1%' },
          { id: 2, label: '12th', icon: 'Award', grade: '87.6%' },
          // { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },

   rajeevmartin: {
    id: 'rajeevmartin',
    name: 'Rajeev Martin',
    title: 'CFO',
    bio: 'Lorem ipsum dolor sit amet...',
    image: '/Ranjeev.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/rajeev-martin-46525b27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Lorem ipsum dolor sit amet...',
      author: 'Steve Jobs',
      role: 'Co-founder of Apple Inc.'
    },
    organizations: [
      { id: 1, name: 'IEEE', logo: '/IEEE12010.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.1,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '95%' },
          { id: 2, label: '12th', icon: 'Award', grade: '92%' },
          { id: 3, label: 'DIPLOMA', icon: 'Medal', grade: '8.9' },
          { id: 4, label: 'CURRENT', icon: 'Trophy', grade: '9.1' }
        ],
        certificates: [
          { id: 1, title: 'Web Development', issuer: 'Udemy', date: '2024' },
          { id: 2, title: 'Cloud Computing', issuer: 'AWS', date: '2024' },
          { id: 3, title: 'Machine Learning', issuer: 'Coursera', date: '2023' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  agustine: {
    id: 'agustine',
    name: 'Agustine',
    title: 'CEO',
    bio: 'Lorem ipsum dolor sit amet...',
    image: '/Agustine.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/agustine/',
    quote: {
      text: 'Lorem ipsum dolor sit amet...',
      author: 'Steve Jobs',
      role: 'Co-founder of Apple Inc.'
    },
    organizations: [
      { id: 1, name: 'IEEE', logo: '/IEEE12010.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.1,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '95%' },
          { id: 2, label: '12th', icon: 'Award', grade: '92%' },
          { id: 3, label: 'DIPLOMA', icon: 'Medal', grade: '8.9' },
          { id: 4, label: 'CURRENT', icon: 'Trophy', grade: '9.1' }
        ],
        certificates: [
          { id: 1, title: 'Web Development', issuer: 'Udemy', date: '2024' },
          { id: 2, title: 'Cloud Computing', issuer: 'AWS', date: '2024' },
          { id: 3, title: 'Machine Learning', issuer: 'Coursera', date: '2023' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  mithil: {
    id: 'Mithil',
    name: 'Mithil',
    title: 'CTO',
    bio: 'Mithil is the technology lead...',
    image: '/Mithil.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/k-l-mithil-664a8a2a7/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BehKg6HBsRYmHoc6LbO%2FzoQ%3D%3D',
    quote: {
      text: 'Technology is best when it brings people together...',
      author: 'Matt Mullenweg',
      role: 'Co-founder of WordPress'
    },
    organizations: [
      { id: 1, name: 'Tech Guild', logo: '/TechGuild.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.5,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '96%' },
          { id: 2, label: '12th', icon: 'Award', grade: '93%' },
          { id: 3, label: 'B.Tech', icon: 'Medal', grade: '9.5' }
        ],
        certificates: [
          { id: 1, title: 'Full Stack Development', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'AI & ML', issuer: 'Udemy', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  aryansoju: {
    id: 'aryansoju',
    name: 'Aryan Soju',
    title: 'COO',
    bio: 'Aryan Soju is the operational mastermind...',
    image: '/AryanSoju.jpeg',
    quote: {
      text: 'Efficiency is doing things right; effectiveness is doing the right things...',
      author: 'Peter Drucker',
      role: 'Management Consultant'
    },
    organizations: [
      { id: 1, name: 'Operations Club', logo: '/OperationsClub.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 8.8,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '93%' },
          { id: 2, label: '12th', icon: 'Award', grade: '89%' },
          { id: 3, label: 'BBA', icon: 'Medal', grade: '8.8' }
        ],
        certificates: [
          { id: 1, title: 'Operations Management', issuer: 'Coursera', date: '2023' },
          { id: 2, title: 'Supply Chain', issuer: 'LinkedIn Learning', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  },
  visakh: {
    id: 'visakh',
    name: 'Visakh K Vasudevan',
    title: 'Member',
    bio: 'Aryan Soju is the operational mastermind...',
    image: '/Visakh.jpeg',
    linkedinUrl: 'hhttps://www.linkedin.com/in/visakh-k-vasudevan-9a28162b0',
    quote: {
      text: 'Efficiency is doing things right; effectiveness is doing the right things...',
      author: 'Peter Drucker',
      role: 'Management Consultant'
    },
    organizations: [
      { id: 1, name: 'Operations Club', logo: '/OperationsClub.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.02,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '95.8%' },
          { id: 2, label: '12th', icon: 'Award', grade: '89%' },
          // { id: 3, label: 'BBA', icon: 'Medal', grade: '8.8' }
        ],
        certificates: [
          { id: 1, title: 'Operations Management', issuer: 'Coursera', date: '2023' },
          // { id: 2, title: 'Supply Chain', issuer: 'LinkedIn Learning', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
      
    }
  },

  rohit: {
    id: 'rohit',
    name: 'ROHIT KALARIKAL',
    title: 'MEC REPRESENTATIVE',
    bio: 'Aryan Soju is the operational mastermind...',
    image: '/Rohit.png',
    linkedinUrl: 'https://www.linkedin.com/in/rohit-kalarickal-868085255/',
    quote: {
      text: 'Efficiency is doing things right; effectiveness is doing the right things...',
      author: 'Peter Drucker',
      role: 'Management Consultant'
    },
    organizations: [
      { id: 1, name: 'Operations Club', logo: '/OperationsClub.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.02,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '95.8%' },
          { id: 2, label: '12th', icon: 'Award', grade: '89%' },
          // { id: 3, label: 'BBA', icon: 'Medal', grade: '8.8' }
        ],
        certificates: [
          { id: 1, title: 'Operations Management', issuer: 'Coursera', date: '2023' },
          // { id: 2, title: 'Supply Chain', issuer: 'LinkedIn Learning', date: '2024' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
      
    }
  },




  antonyagustine: {
    id: 'antony',
    name: 'Antony',
    title: 'CFO',
    bio: 'Antony oversees financial operations...',
    image: '/Antony.jpeg',
    linkedinUrl:'https://www.linkedin.com/in/rajeev-martin-46525b27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: 'Money is a terrible master but an excellent servant...',
      author: 'P.T. Barnum',
      role: 'Entrepreneur'
    },
    organizations: [
      { id: 1, name: 'Finance Club', logo: '/FinanceClub.png' }
    ],
    achievements: {
      education: {
        currentCGPA: 9.0,
        milestones: [
          { id: 1, label: '10th', icon: 'BookOpen', grade: '90%' },
          { id: 2, label: '12th', icon: 'Award', grade: '87%' },
          { id: 3, label: 'MBA', icon: 'Medal', grade: '9.0' }
        ],
        certificates: [
          { id: 1, title: 'Financial Modeling', issuer: 'Udemy', date: '2024' },
          { id: 2, title: 'Investment Strategies', issuer: 'Coursera', date: '2023' }
        ]
      },
      startups: [
        {
          id: 1,
          title: 'MEDICAL',
          icon: 'Microscope',
          description: 'Healthcare innovations and medical technology solutions',
          videoId: 'dQw4w9WgXcQ',
          details: 'Revolutionizing healthcare through innovative medical technologies...'
        }
      ]
    }
  }
};

const mentors = [
  {
    name: 'Jacob George',
    id: 'jacob',
    title: 'App Development Mentor',
    image: '/mentor-image.jpg',
    path: '/mentors/jacob-george',
    expertise: 'Mobile & Web Apps',
    experience: '8+ years',
    description: 'Specializes in React Native and Flutter development'
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'AI & ML Mentor',
    image: '/sarah-chen.jpg',
    path: '/mentors/sarah-chen',
    expertise: 'Machine Learning',
    experience: '10+ years',
    description: 'Expert in deep learning and computer vision'
  },
  {
    name: 'Michael Roberts',
    title: 'Cloud Architecture Mentor',
    image: '/michael-roberts.jpg',
    path: '/mentors/michael-roberts',
    expertise: 'AWS & Azure',
    experience: '12+ years',
    description: 'Specialized in scalable cloud solutions'
  },
  {
    name: 'Lisa Kumar',
    title: 'UI/UX Design Mentor',
    image: '/lisa-kumar.jpg',
    path: '/mentors/lisa-kumar',
    expertise: 'Product Design',
    experience: '6+ years',
    description: 'Focus on user-centered design principles'
  }
];
const experiences = [
  {
    title: "Ideathon",
    company_name: "",
    iconBg: "#E6DEDD",
    date: "2024",
    images: [
     "Hospexx1.jpeg",
    "Hospexx2.jpeg",
    "Hospexx3.jpeg",
    "Hospexx4.jpeg",
    "Hospexx5.jpeg",
    ],
  },
  {
    title: "HOSPEX DETAILS",
    company_name: "",
    iconBg: "#E6DEDD",
    date: "2024",
    images: [
      "Hospex1.JPG",
      "Hospex2.JPG",
      "Hospex3.JPG",
      "Hospex4.JPG",
      
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects ,membersData ,mentors};
