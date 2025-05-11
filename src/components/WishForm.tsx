import React, { useState } from 'react';

interface Wish {
  name: string;
  relationship: string;
  message: string;
  attending: boolean;
}

const WishForm: React.FC = () => {
  const [formData, setFormData] = useState<Wish>({
    name: '',
    relationship: '',
    message: '',
    attending: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Wish>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Wish> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        relationship: '',
        message: '',
        attending: false
      });
    }
  };

  return (
    <section id="wishes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Send Your Wishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your blessings and warm wishes for our new beginning.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">Your wishes mean the world to us.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                Send Another Wish
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="relationship" className="block text-gray-700 font-medium mb-2">
                  Relationship to the Couple
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                >
                  <option value="">Select your relationship</option>
                  <option value="Family">Family</option>
                  <option value="Friend">Friend</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Write your wishes for the couple..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="attending"
                    name="attending"
                    checked={formData.attending}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-rose-500 focus:ring-rose-300 rounded"
                  />
                  <label htmlFor="attending" className="ml-2 text-gray-700">
                    I will be attending the wedding
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
                >
                  Send Wishes
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishForm;