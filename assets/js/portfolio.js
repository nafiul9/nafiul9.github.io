import React from "react";
import { BookOpen, Award, Briefcase, Mail, Github, Linkedin, FileText } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Nafiul{"\'"}s Portfolio</h1>
            <div className="space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/publications" className="text-gray-600 hover:text-gray-900">Publications</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Research Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring the intersections of research, innovation, and academic excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Research Focus */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-2" size={24} />
            Research Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interest Area 1</h3>
              <p className="text-gray-600">Brief description of your research interest and its impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interest Area 2</h3>
              <p className="text-gray-600">Brief description of your research interest and its impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interest Area 3</h3>
              <p className="text-gray-600">Brief description of your research interest and its impact.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Mail className="mr-2" size={24} />
            Get in Touch
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex space-x-4">
              <a href="mailto:your.email@domain.com" className="flex items-center text-gray-600 hover:text-gray-900">
                <Mail className="mr-2" size={20} />
                Email
              </a>
              <a href="https://github.com/nafiul9" className="flex items-center text-gray-600 hover:text-gray-900">
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p> 2024 Nafiul{"\'"}s Portfolio. Hosted on GitHub Pages.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
