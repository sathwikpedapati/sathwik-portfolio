import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_ogc697d',    
        'template_adhlpqs',  
        formRef.current!,     
        'XvS_Tl7ws8lnInT7q'   
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white md:px-10 lg:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Chodavaram, Anakapalle</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+918143833945" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +91-8143833945
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:sathwikpedapati02@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    sathwikpedapati02@gmail.com
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-medium text-gray-800 mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/sathwikpedapati" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/sathwik-pedapati" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <strong className="font-bold">Success! </strong>Your message has been sent successfully!
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500" required />
                </div>

                <button type="submit" disabled={isSubmitting}
                        className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium ${
                          isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}>
                  {isSubmitting ? 'Sending...' : <>Send Message <FaPaperPlane className="ml-2" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
