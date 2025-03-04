import { Users, MessageSquare, Clock, ShieldCheck, TrendingUp, Layers, Headphones, BrainCircuit, Cloud } from "lucide-react";

import Hero from "../components/Hero";
import ScreenFrame from "../components/ScreenFrame";

import Screenimage from "../assets/images/img-sharedinbox.png";

function Features() {
  return (
    <>
     <Hero />
     

    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8 text-center" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>
Why Choose TeamSync?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-8">
            <Users size={32} className="text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Seamless Collaboration</h3>
              <p className="text-gray-600 mt-2">
                Improve team efficiency with real-time messaging and project tracking.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <MessageSquare size={32} className="text-green-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Instant Communication</h3>
              <p className="text-gray-600 mt-2">
                Keep conversations flowing with our intuitive chat and video call features.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <Clock size={32} className="text-purple-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Time Management</h3>
              <p className="text-gray-600 mt-2">
                Organize your schedule efficiently with smart task and calendar integration.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <ShieldCheck size={32} className="text-red-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Robust Security</h3>
              <p className="text-gray-600 mt-2">
                Keep your data safe with end-to-end encryption and multi-layer authentication.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <TrendingUp size={32} className="text-yellow-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Performance Insights</h3>
              <p className="text-gray-600 mt-2">
                Track team progress with detailed analytics and performance reports.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <Layers size={32} className="text-indigo-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Integration Ready</h3>
              <p className="text-gray-600 mt-2">
                Connect with your favorite tools like Slack, Trello, and Google Drive.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <Headphones size={32} className="text-orange-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Customer Support</h3>
              <p className="text-gray-600 mt-2">
                Get round-the-clock assistance with our dedicated support team available anytime.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <BrainCircuit size={32} className="text-teal-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Assistance</h3>
              <p className="text-gray-600 mt-2">
                Get smart suggestions and automate repetitive tasks with our AI-driven tools.
              </p>
            </div>
          </div>

          {/* New Cloud Sync Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <Cloud size={32} className="text-cyan-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Cloud Sync & Accessibility</h3>
              <p className="text-gray-600 mt-2">
                Access your work from anywhere with real-time cloud synchronization.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <ScreenFrame imageUrl={Screenimage} alt="Demo Image" />
    </>
  );
}

export default Features;
