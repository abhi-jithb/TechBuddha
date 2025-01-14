import React from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Layout,
  Database,
  Cloud,
  Smartphone,
  Bot,
  Brain,
  Shield
} from 'lucide-react';

const Roadmap = () => {
  const navigate = useNavigate();

  const stacks = [
    {
      id: 'mern',
      title: 'MERN Stack',
      description: 'MongoDB, Express.js, React, Node.js',
      icon: Code2,
      gradient: 'from-green-500 to-blue-500',
      path: '/roadmap/mern'
    },
    {
      id: 'jamstack',
      title: 'JAMstack',
      description: 'JavaScript, APIs, and Markup',
      icon: Layout,
      gradient: 'from-purple-500 to-pink-500',
      path: '/roadmap/jamstack'
    },
    {
      id: 'data',
      title: 'Data Engineering',
      description: 'Python, SQL, Apache Spark, Airflow',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      path: '/roadmap/data'
    },
    {
      id: 'cloud',
      title: 'Cloud Native',
      description: 'AWS, Docker, Kubernetes, Terraform',
      icon: Cloud,
      gradient: 'from-orange-500 to-red-500',
      path: '/roadmap/cloud'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS, Android',
      icon: Smartphone,
      gradient: 'from-sky-500 to-indigo-500',
      path: '/roadmap/mobile'
    },
    {
      id: 'ai',
      title: 'AI/ML Engineering',
      description: 'Python, TensorFlow, PyTorch, scikit-learn',
      icon: Brain,
      gradient: 'from-violet-500 to-purple-500',
      path: '/roadmap/ai'
    },
    {
      id: 'devops',
      title: 'DevOps',
      description: 'CI/CD, Infrastructure as Code, Monitoring',
      icon: Bot,
      gradient: 'from-emerald-500 to-teal-500',
      path: '/roadmap/devops'
    },
    {
      id: 'security',
      title: 'Security Engineering',
      description: 'Security tools, Pen testing, Compliance',
      icon: Shield,
      gradient: 'from-red-500 to-rose-500',
      path: '/roadmap/security'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Choose Your Preferred Tech Stack
        </h1>
        <p className="text-gray-400 text-center mb-16 text-xl">
          Select a technology stack to view its detailed learning roadmap
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stacks.map((stack) => (
            <Card
              key={stack.id}
              className="p-6 bg-gray-800/90 backdrop-blur border-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(stack.path)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stack.gradient} flex items-center justify-center`}>
                  <stack.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">{stack.title}</h2>
                <p className="text-gray-400">{stack.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;