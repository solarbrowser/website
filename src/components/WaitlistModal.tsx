'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Generate simple math captcha
  useEffect(() => {
    if (isOpen) {
      const n1 = Math.floor(Math.random() * 10) + 1;
      const n2 = Math.floor(Math.random() * 10) + 1;
      setNum1(n1);
      setNum2(n2);
      setCaptchaValue('');
      setEmail('');
      setStatus('idle');
      setMessage('');
      
      // Check cookie
      const cookieSubmitted = document.cookie.includes('solar_waitlist=true');
      setHasSubmitted(cookieSubmitted);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if already submitted
    if (hasSubmitted) {
      setStatus('error');
      setMessage('You have already joined the waitlist!');
      return;
    }

    // Validate captcha
    const correctAnswer = num1 + num2;
    if (parseInt(captchaValue) !== correctAnswer) {
      setStatus('error');
      setMessage('Incorrect captcha answer. Please try again.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xdkzvrwj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        
        // Set cookie for 365 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 365);
        document.cookie = `solar_waitlist=true; expires=${expiryDate.toUTCString()}; path=/`;
        
        setHasSubmitted(true);
        
        // Show toast and close modal
        setShowToast(true);
        setTimeout(() => {
          onClose();
          setTimeout(() => setShowToast(false), 3000);
        }, 500);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection.');
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl pointer-events-auto relative border ${
                  theme === 'dark'
                    ? 'bg-[#232223] border-white/10'
                    : 'bg-[#E4DED4] border-black/10'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className={`absolute top-4 right-4 transition-colors p-1 ${
                    theme === 'dark'
                      ? 'text-white/50 hover:text-white'
                      : 'text-black/50 hover:text-black'
                  }`}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {hasSubmitted ? (
                  /* Already Submitted State */
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Already Sent!
                    </h3>
                    <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}>
                      You&apos;ve already joined the waitlist. We&apos;ll notify you when Solar is ready!
                    </p>
                  </div>
                ) : (
                  /* Normal Form */
                  <>
                    <div className="text-center mb-6">
                      <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        Join the Waitlist
                      </h3>
                      <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                        Enter your email and be the first to know when Solar is ready to launch. you&apos;ll get notified as soon as we go live!
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={status === 'loading'}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30'
                              : 'bg-[#F0EBE3] border-black/10 text-black placeholder:text-black/30 focus:border-black/30'
                          } focus:outline-none`}
                        />
                      </div>

                      {/* Captcha */}
                      <div>
                        <label htmlFor="captcha" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                          What is {num1} + {num2}?
                        </label>
                        <input
                          type="number"
                          id="captcha"
                          value={captchaValue}
                          onChange={(e) => setCaptchaValue(e.target.value)}
                          required
                          disabled={status === 'loading'}
                          placeholder="Enter the answer"
                          className={`w-full px-4 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30'
                              : 'bg-[#F0EBE3] border-black/10 text-black placeholder:text-black/30 focus:border-black/30'
                          } focus:outline-none`}
                        />
                      </div>

                      {/* Status Message */}
                      {message && status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 rounded-lg text-sm bg-red-500/10 text-red-200 border border-red-500/20"
                        >
                          {message}
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full px-6 py-3 font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                          theme === 'dark'
                            ? 'bg-[#FAF9F7] text-black hover:bg-white/90'
                            : 'bg-black text-white hover:bg-black/90'
                        }`}
                      >
                        {status === 'loading' ? (
                          <>
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Join Waitlist'
                        )}
                      </button>
                    </form>

                    {/* Privacy Note */}
                    <p className={`text-xs text-center mt-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                      We respect your privacy. No spam, ever.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-0 right-0 z-[60] pointer-events-none flex justify-center px-4"
          >
            <div className="bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base max-w-max">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium whitespace-nowrap">Successfully joined the waitlist!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}







