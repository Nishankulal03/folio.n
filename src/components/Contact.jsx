import React, { useState, useRef } from 'react';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, Mail,  MapPin } from 'lucide-react';
import { useToast } from './hooks/use-toast';
import { mockContactInfo } from './mock/mockData';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
        className: "bg-red-400/20 border-red-400 text-red-400"
      });
      return;
    }

    if (formData.message.length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please provide a more detailed message (at least 10 characters).",
        variant: "destructive", 
        className: "bg-red-400/20 border-red-400 text-red-400"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS credentials are configured
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId || 
          publicKey === 'YOUR_PUBLIC_KEY' || 
          serviceId === 'YOUR_SERVICE_ID' || 
          templateId === 'YOUR_TEMPLATE_ID') {
        
        // Fallback to mock submission
        setTimeout(() => {
          toast({
            title: "Demo Mode - Message Received!",
            description: `Thanks ${formData.name}! This is a demo - EmailJS not configured yet.`,
            className: "bg-yellow-400/20 border-yellow-400 text-yellow-400"
          });
          
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        }, 1500);
        return;
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      );

      console.log('EmailJS Success:', result.text);
      
      toast({
        title: "Message Sent Successfully!",
        description: `Thanks ${formData.name}! I'll get back to you soon.`,
        className: "bg-green-400/20 border-green-400 text-green-400"
      });
      
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
        className: "bg-red-400/20 border-red-400 text-red-400"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black neon-glow text-white mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-green-400/5 backdrop-blur-md border border-green-400/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
  <h3 className="text-2xl font-bold text-white mb-6 font-mono">
    Get In Touch
  </h3>
  
  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-green-400/10 backdrop-blur-md border border-green-400/20 rounded-full flex items-center justify-center">
        <Mail className="text-cyan-400" size={20} />
      </div>
      <div>
        <p className="text-gray-400 font-mono text-sm">Email</p>
        <p className="text-green-400 font-mono">{mockContactInfo.email}</p>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-green-400/10 backdrop-blur-md border border-green-400/20 rounded-full flex items-center justify-center">
        <MapPin className="text-cyan-400" size={20} />
      </div>
      <div>
        <p className="text-gray-400 font-mono text-sm">Location</p>
        <p className="text-green-400 font-mono">{mockContactInfo.location}</p>
      </div>
    </div>
  </div>
</div>


            {/* Terminal-style info */}
            <div className="p-6 rounded-lg bg-green-400/5 backdrop-blur-md border border-green-400/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
  <div className="flex items-center mb-4">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
    </div>
    <span className="ml-4 text-gray-400 font-mono text-sm">contact_info.sh</span>
  </div>
  
  <div className="font-mono text-green-400 text-sm space-y-1">
    <div><span className="text-cyan-400">$</span> whoami</div>
    <div className="text-white pl-4">Transforming concepts into code</div>
    <div><span className="text-cyan-400">$</span> curl -s status.json</div>
    <div className="text-white pl-4">{"{"}"available": true, "response_time": "&lt;24h"{"}"}</div>
    <div><span className="text-cyan-400">$</span> echo $COLLABORATION</div>
    <div className="typing-effect block max-w-full text-white pl-4">Always ready for exciting projects!</div>
    

  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-black/50 border-2 border-green-400/30 text-white font-mono focus:border-green-400 focus:ring-green-400/20"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-black/50 border-2 border-green-400/30 text-white font-mono focus:border-green-400 focus:ring-green-400/20"
                  placeholder="Enter your email..."
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  Write Message Here...
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-black/50 border-2 border-green-400/30 text-white font-mono focus:border-green-400 focus:ring-green-400/20 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full retro-button bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400/20 py-3 font-mono uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>&gt; Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </Button>
            </form>

            {/* Terminal decoration */}
            <div className="mt-6 pt-4 border-t border-green-400/30">
              <div className="font-mono text-green-400 text-xs">
                <span className="text-cyan-400">nishan@contact:~$</span> echo "Looking forward to hearing from you!"
                <br />
                <span className="text-white">Looking forward to hearing from you!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;