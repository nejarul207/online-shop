'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Clock, MessageSquare, User } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-indigo-600" />,
      title: 'Our Location',
      description: 'Bm Collage Road, Barishal, Bangladesh',
      link: 'https://maps.google.com',
      linkText: 'View on map'
    },
    {
      icon: <Mail className="h-6 w-6 text-indigo-600" />,
      title: 'Email Us',
      description: 'eshop@gmail.com',
      link: 'mailto:support@eshop.com',
      linkText: 'Send an email'
    },
    {
      icon: <Phone className="h-6 w-6 text-indigo-600" />,
      title: 'Call Us',
      description: '+880 1986249491',
      link: 'tel:+15551234567',
      linkText: 'Call now'
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: 'Working Hours',
      description: 'Monday - Friday: 9:00 - 20:00\nSaturday: 10:00 - 16:00\nSunday: Closed',
      link: '',
      linkText: ''
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="flex-grow">
        {/* Hero Section with integrated contact cards */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-8 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-xl md:text-2xl font-bold mb-2">Get in Touch</h1>
              <p className="text-sm md:text-base text-indigo-100 max-w-3xl mx-auto">
                Have questions or need assistance? We'd love to hear from you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mb-24 relative">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-50">
                        {item.icon}
                      </div>
                      <h3 className="ml-3 text-sm sm:text-base font-medium text-gray-900">{item.title}</h3>
                    </div>
                    <div className="mt-3 flex-grow">
                      <p className="text-xs sm:text-sm text-gray-600 break-words leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                    {item.link && (
                      <div className="mt-3">
                        <a 
                          href={item.link} 
                          className="inline-flex items-center text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {item.linkText}
                          <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Contact Form */}
              <div className="md:w-1/2 p-6 sm:p-8">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900">Send us a message</h2>
                  <p className="mt-2 text-gray-600">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                {submitStatus.message && (
                  <div className={`mb-6 p-4 rounded-md ${
                    submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Map Section */}
              <div className="hidden md:block md:w-1/2 bg-gray-100">
                <div className="h-full w-full flex items-center justify-center p-8">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-xs">
                        <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Our Location</h3>
                        <p className="text-sm text-gray-600">
                          123 E-Commerce Street<br />
                          Digital District, 10001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: 'How can I track my order?',
                    answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the courier\'s website.'
                  },
                  {
                    question: 'What is your return policy?',
                    answer: 'We offer a 30-day return policy for most items. Items must be unused, in their original packaging, and with all tags attached. Please contact our support team to initiate a return.'
                  },
                  {
                    question: 'Do you offer international shipping?',
                    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination. You can see the shipping options at checkout.'
                  },
                  {
                    question: 'How can I contact customer support?',
                    answer: 'You can reach our customer support team by filling out the contact form on this page, emailing us at support@eshop.com, or calling us at +1 (555) 123-4567. We typically respond within 24 hours.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button className="w-full px-6 py-4 text-left focus:outline-none">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* This empty div will push the footer down */}
      <div className="h-16"></div>
    </div>
  );
}