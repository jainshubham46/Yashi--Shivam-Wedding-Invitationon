import React, { useState } from 'react';

interface RSVPData {
  fullName: string;
  email: string;
  phone: string;
  attending: string;
  guestCount: string;
  dietaryRestrictions: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPData>({
    fullName: '',
    email: '',
    phone: '',
    attending: '',
    guestCount: '0',
    dietaryRestrictions: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<RSVPData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RSVPData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.attending) {
      newErrors.attending = 'Please select whether you are attending';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log('RSVP submitted:', formData);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        attending: '',
        guestCount: '0',
        dietaryRestrictions: ''
      });
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">RSVP</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please let us know if you'll be joining us to celebrate our special day.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-rose-100">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You for Your Response!</h3>
              <p className="text-gray-600 mb-2">
                {formData.attending === 'yes' 
                  ? "We're excited to celebrate with you!" 
                  : "We'll miss you, but understand."}
              </p>
              <p className="text-gray-500 text-sm mb-6">A confirmation has been sent to your email.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                Update Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="attending" className="block text-gray-700 font-medium mb-2">
                  Will you be attending?*
                </label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.attending ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I will attend</option>
                  <option value="no">Sorry, I cannot attend</option>
                </select>
                {errors.attending && (
                  <p className="text-red-500 text-sm mt-1">{errors.attending}</p>
                )}
              </div>
              
              {formData.attending === 'yes' && (
                <>
                  <div className="mb-6">
                    <label htmlFor="guestCount" className="block text-gray-700 font-medium mb-2">
                      Number of Guests (including yourself)
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="dietaryRestrictions" className="block text-gray-700 font-medium mb-2">
                      Dietary Restrictions
                    </label>
                    <textarea
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      placeholder="Please specify any dietary restrictions or allergies"
                      rows={3}
                    />
                  </div>
                </>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
                >
                  Submit RSVP
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;