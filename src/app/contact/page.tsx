'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const isQuoteRequest = searchParams.get('quote') === 'true';
  const preselectedCategory = searchParams.get('category') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: isQuoteRequest ? 'Request for Quotation' : '',
    message: '',
    messageType: isQuoteRequest ? 'quote' : 'general'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim() && formData.messageType === 'quote') {
      newErrors.company = 'Company name is required for quotes';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          messageType: 'general'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-dark">
      {/* Hero Section */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src={isQuoteRequest ? '/images/pexels-pixabay-248152.jpg' : '/bg/aerial-drone-panorama-view-nature-moldova-sunset-village-wide-fields-valleys.jpg'}
          alt={isQuoteRequest ? 'Request a Quote' : 'Contact Us'}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4">
              <span className="text-white text-sm font-medium uppercase tracking-wider">{isQuoteRequest ? 'Get a Quote' : 'Get in Touch'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isQuoteRequest ? 'Request a Quote' : 'Contact Us'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {isQuoteRequest
                ? 'Tell us about your requirements and our team will provide a competitive quotation within 24-48 hours.'
                : 'Partner with Mbonyange Africa. Reach out for procurement inquiries, technical consultation, or general questions.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary/50 transition-all group shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-400 text-sm mb-2">General Inquiries:</p>
                      <a href="mailto:info@mbonyange.com" className="text-primary font-medium hover:underline text-sm">
                        info@mbonyange.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary/50 transition-all group shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-400 text-sm mb-2">Mobile:</p>
                      <a href="tel:+256704288436" className="text-primary font-medium hover:underline text-sm block">
                        +256 704 288436
                      </a>
                      <p className="text-gray-400 text-sm mt-3 mb-2">Landline:</p>
                      <a href="tel:+256392846812" className="text-primary font-medium hover:underline text-sm block">
                        +256 392 846812
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary/50 transition-all group shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Our Location</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Mbonyange Africa Limited<br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Operating Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Operating Hours</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday:</span>
                    <span className="text-primary font-medium">Closed</span>
                  </li>
                </ul>
              </motion.div>

              {/* Quick Response Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="font-bold">Quick Response</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  We typically respond to quote requests within <span className="text-white font-medium">24-48 business hours</span>.
                  For urgent inquiries, please call us directly.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card-bg p-8 md:p-10 rounded-3xl border border-border-color shadow-xl"
              >
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      {isQuoteRequest ? 'Quote Request Received!' : 'Message Sent!'}
                    </h2>
                    <p className="text-gray-400 max-w-sm mx-auto mb-8">
                      Your request has been received. Our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-primary font-bold hover:underline inline-flex items-center gap-2"
                    >
                      Send another message
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Message Type Selector */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { value: 'quote', label: 'Request Quote', icon: <Mail size={16} /> },
                        { value: 'general', label: 'General Inquiry', icon: <MessageSquare size={16} /> },
                        { value: 'technical', label: 'Technical Support', icon: <Phone size={16} /> }
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, messageType: type.value }))}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                            formData.messageType === type.value
                              ? 'bg-primary text-white'
                              : 'bg-dark border border-border-color text-gray-400 hover:border-primary/50'
                          }`}
                        >
                          {type.icon}
                          <span className="hidden sm:inline">{type.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-dark placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                            errors.name ? 'border-red-500' : 'border-border-color'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-dark placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                            errors.email ? 'border-red-500' : 'border-border-color'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company & Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                          Company / Organization {formData.messageType === 'quote' && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-dark placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                            errors.company ? 'border-red-500' : 'border-border-color'
                          }`}
                        />
                        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+256 700 000 000"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={isQuoteRequest ? 'Request for Quotation' : 'Your subject'}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>

                    {/* Product/Category Interest (for quotes) */}
                    {isQuoteRequest && preselectedCategory && (
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                          Product Category of Interest
                        </label>
                        <div className="px-4 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary font-medium">
                          {preselectedCategory}
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder={
                          isQuoteRequest
                            ? 'Please describe your requirements in detail. Include product names, quantities, specifications, and delivery location...'
                            : 'How can we help you?'
                        }
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-dark placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-border-color'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    {/* Submit Error */}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                        There was an error sending your message. Please try again or contact us directly via email.
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-gray-500">
                        <span className="text-red-500">*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-light hover:shadow-xl transition-all flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>{isQuoteRequest ? 'Request Quote' : 'Send Message'}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center pt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                      Your information will only be used to respond to your inquiry.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 border-t border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d32.6290!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f4e0e0e0f%3A0x0!2sNational%20ICT%20Hub%2C%20Nakawa%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(20%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mbonyange Africa Limited Location"
          className="absolute inset-0"
        />
        {/* Logo overlay card */}
        <div className="absolute top-6 left-6 z-10 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center space-x-3 max-w-xs">
          <img src="/images/logo-tbg.png" alt="Mbonyange Africa Limited" className="h-12 w-auto object-contain" />
          <div>
            <p className="font-bold text-dark text-sm">Mbonyange Africa Limited</p>
            <p className="text-gray-500 text-xs">National ICT Hub, Nakawa</p>
            <p className="text-gray-500 text-xs">Kampala, Uganda</p>
            <a
              href="https://maps.google.com/?q=National+ICT+Hub+Nakawa+Kampala+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-xs font-semibold hover:underline mt-1 inline-block"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-primary animate-pulse">Loading contact form...</div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
