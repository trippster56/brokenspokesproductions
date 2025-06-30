import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-american-blue font-western mb-6">
            GET IN TOUCH
          </h1>
          <div className="h-1 w-24 bg-bold-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 font-western max-w-3xl mx-auto leading-relaxed">
            Interested in learning more about our work or discussing a potential collaboration? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 border-2 border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-american-blue font-western mb-6">
              SEND A MESSAGE
            </h2>
            <div className="h-1 w-16 bg-bold-red mb-8"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-american-blue font-western mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-american-blue outline-none transition-colors duration-300 font-western"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-american-blue font-western mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-american-blue outline-none transition-colors duration-300 font-western"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-american-blue font-western mb-2">
                  INQUIRY TYPE
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-american-blue outline-none transition-colors duration-300 font-western"
                >
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="media">Media Request</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-american-blue font-western mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-american-blue outline-none transition-colors duration-300 font-western resize-vertical"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-bold-red text-white font-bold font-western text-lg py-4 px-8 hover:bg-red-700 transition-colors duration-300 border-2 border-bold-red hover:border-red-700 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitted ? (
                  <span>MESSAGE SENT!</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 border-l-4 border-bold-red">
              <h2 className="text-3xl font-bold text-american-blue font-western mb-6">
                CONTACT INFO
              </h2>
              <div className="h-1 w-16 bg-bold-red mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-bold-red mt-1" />
                  <div>
                    <h3 className="font-bold text-american-blue font-western mb-1">EMAIL</h3>
                    <p className="text-gray-700 font-western">brokenspokesproductions@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-bold-red mt-1" />
                  <div>
                    <h3 className="font-bold text-american-blue font-western mb-1">PHONE</h3>
                    <p className="text-gray-700 font-western">843-250-7790</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-bold-red mt-1" />
                  <div>
                    <h3 className="font-bold text-american-blue font-western mb-1">LOCATION</h3>
                    <p className="text-gray-700 font-western">Based in the American West</p>
                    <p className="text-gray-700 font-western">Serving storytellers nationwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-bold-red mt-1" />
                  <div>
                    <h3 className="font-bold text-american-blue font-western mb-1">HOURS</h3>
                    <p className="text-gray-700 font-western">Monday - Friday: 8AM - 6PM CST</p>
                    <p className="text-gray-700 font-western">Weekend consultations available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-american-blue p-8 text-white text-center">
              <h3 className="text-2xl font-bold font-western mb-4">QUICK RESPONSE</h3>
              <p className="font-western leading-relaxed">
                We respond to all inquiries within 24 hours. For time-sensitive matters, feel free to call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;