
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, Check, MapPin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type BookingStep = 'datetime' | 'details';

type DemoFormData = {
  name: string;
  email: string;
  website: string;
  location: string;
  marketingEfforts: string;
  goals: string;
  agreedToTerms: boolean;
};

const BookDemo = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentStep, setCurrentStep] = useState<BookingStep>('datetime');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const isMobile = useIsMobile();
  
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    website: '',
    location: '',
    marketingEfforts: '',
    goals: '',
    agreedToTerms: false,
  });

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 23; // 11 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === endHour && minute > 30) continue;
        
        const formattedHour = hour % 12 || 12;
        const amPm = hour < 12 ? 'AM' : 'PM';
        const formattedMinute = minute.toString().padStart(2, '0');
        
        slots.push(`${formattedHour}:${formattedMinute} ${amPm}`);
      }
    }
    
    return slots;
  };
  
  const handleNextStep = () => {
    if (!selectedDate || !selectedTime) {
      setFormError('Please select both a date and time for your demo.');
      return;
    }
    
    setFormError('');
    setCurrentStep('details');
  };
  
  const handlePreviousStep = () => {
    setCurrentStep('datetime');
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const validateForm = () => {
    const requiredFields = ['name', 'email', 'website', 'location', 'marketingEfforts', 'goals'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof DemoFormData]);
    
    if (emptyFields.length > 0) {
      setFormError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      return false;
    }
    
    if (!formData.agreedToTerms) {
      setFormError('You must agree to the Terms and Privacy Policy to continue.');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 'datetime') {
      handleNextStep();
      return;
    }
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Demo Booked!",
        description: `Your demo is scheduled for ${selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at ${selectedTime}. We've sent a calendar invite to ${formData.email}.`,
        variant: "default",
      });
      
      setSelectedDate(undefined);
      setSelectedTime('');
      setCurrentStep('datetime');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        website: '',
        location: '',
        marketingEfforts: '',
        goals: '',
        agreedToTerms: false,
      });
    }, 1500);
  };
  
  const availableTimeSlots = generateTimeSlots();
  
  const formatTime = (time: string) => {
    // Returns a more readable format
    return time;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-scalex-navy/50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center text-scalex-lightBlue hover:text-white mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="glass-card overflow-hidden animate-fade-in">
          {currentStep === 'datetime' ? (
            <div className="p-6 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Book a Demo</h1>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Select a date and time that works for you. The demo will take approximately 30 minutes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-xl font-semibold flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-scalex-lightBlue" />
                      Select Date
                    </h2>
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className={`border border-white/10 rounded-lg bg-white/5 p-3 pointer-events-auto ${isMobile ? 'scale-90 origin-top -mt-2' : ''}`}
                      disabled={(date) => {
                        // Disable past dates and weekends
                        const now = new Date();
                        now.setHours(0, 0, 0, 0);
                        const day = date.getDay();
                        return date < now || day === 0 || day === 6;
                      }}
                    />
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                  <h2 className="text-xl font-semibold mb-4 sm:mb-6 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-scalex-lightBlue" />
                    Select Time
                  </h2>
                  
                  {selectedDate ? (
                    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${isMobile ? 'max-h-[250px]' : 'max-h-[300px]'} overflow-y-auto pr-2 scrollbar-hide`}>
                      {availableTimeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-2 h-[42px] rounded-lg border text-center transition-all ${
                            selectedTime === time 
                              ? 'bg-scalex-blue/20 border-scalex-blue text-white' 
                              : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10'
                          }`}
                        >
                          {formatTime(time)}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[250px] sm:h-[300px] text-white/60">
                      <p>Please select a date first</p>
                    </div>
                  )}
                </div>
              </div>
              
              {formError && (
                <div className="text-red-500 text-center my-4">{formError}</div>
              )}
              
              <div className="flex justify-center mt-8 mb-8">
                <button 
                  onClick={handleNextStep}
                  disabled={!selectedDate || !selectedTime}
                  className={`font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center min-w-[180px] ${
                    !selectedDate || !selectedTime
                      ? 'bg-scalex-blue/50 text-white/70 cursor-not-allowed'
                      : 'bg-scalex-blue hover:bg-scalex-blue/90 text-white'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-12">
              <div className="text-left mb-8">
                <h1 className="text-3xl font-bold mb-3">Complete Your Booking</h1>
                
                <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="bg-scalex-blue/20 p-2 rounded-full mr-4">
                      <CalendarIcon className="w-5 h-5 text-scalex-lightBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium">ScaleX AI Demo</h3>
                      <p className="text-white/70 text-sm mt-1">
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} • {selectedTime}
                      </p>
                      <div className="flex items-center mt-2 text-white/70 text-sm">
                        <Clock className="w-4 h-4 mr-1" /> 30 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Company Website <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yoursite.com"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      Company Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                      style={{ color: 'white' }}

                    >
                       <option value="" disabled style={{ backgroundColor: '#1e293b', color: 'white' }}>Select a location</option>
  <option value="North America" style={{ backgroundColor: '#1e293b', color: 'white' }}>North America</option>
  <option value="South America" style={{ backgroundColor: '#1e293b', color: 'white' }}>South America</option>
  <option value="Europe" style={{ backgroundColor: '#1e293b', color: 'white' }}>Europe</option>
  <option value="Asia" style={{ backgroundColor: '#1e293b', color: 'white' }}>Asia</option>
  <option value="Africa" style={{ backgroundColor: '#1e293b', color: 'white' }}>Africa</option>
  <option value="Australia" style={{ backgroundColor: '#1e293b', color: 'white' }}>Australia</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="marketingEfforts" className="block text-sm font-medium mb-2">
                      Current Marketing Efforts <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="marketingEfforts"
                      name="marketingEfforts"
                      value={formData.marketingEfforts}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                      style={{ color: 'white' }}
                    >
                       <option value="" disabled style={{ backgroundColor: '#1e293b', color: 'white' }}>Select an option</option>
  <option value="Social Media" style={{ backgroundColor: '#1e293b', color: 'white' }}>Social Media</option>
  <option value="Email Marketing" style={{ backgroundColor: '#1e293b', color: 'white' }}>Email Marketing</option>
  <option value="Content Marketing" style={{ backgroundColor: '#1e293b', color: 'white' }}>Content Marketing</option>
  <option value="PPC/Ads" style={{ backgroundColor: '#1e293b', color: 'white' }}>PPC/Ads</option>
  <option value="SEO" style={{ backgroundColor: '#1e293b', color: 'white' }}>SEO</option>
  <option value="None" style={{ backgroundColor: '#1e293b', color: 'white' }}>None</option>
  <option value="Other" style={{ backgroundColor: '#1e293b', color: 'white' }}>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium mb-2">
                      What would you like to achieve with ScaleX AI? <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="min-h-[100px] bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="agreedToTerms"
                      name="agreedToTerms"
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      className="mr-2 mt-1"
                    />
                    <label htmlFor="agreedToTerms" className="text-sm text-white/80">
                      By proceeding, you agree to our <a href="#" className="text-scalex-lightBlue hover:underline">Terms</a> and <a href="#" className="text-scalex-lightBlue hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                </div>
                
                {formError && (
                  <div className="text-red-500 text-center my-4">{formError}</div>
                )}
                
                <div className="flex justify-between mt-8">
                  <button 
                    type="button"
                    onClick={handlePreviousStep}
                    className="font-medium px-6 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    Back
                  </button>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-scalex-blue hover:bg-scalex-blue/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : 'Confirm'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDemo;