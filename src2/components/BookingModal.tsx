import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ALL_SERVICES, CONTACT_DETAILS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [deviceName, setDeviceName] = useState('');
  const [serviceName, setServiceName] = useState(preselectedService || ALL_SERVICES[0].name);
  const [customFault, setCustomFault] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [whatsappToUse, setWhatsappToUse] = useState(CONTACT_DETAILS.whatsapp1);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setServiceName(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp message
    const formattedMessage = `Hello Best Mobile Repair! 📱✨\n\n` +
      `I would like to schedule a repair for my device.\n\n` +
      `👤 *Name:* ${customerName}\n` +
      `📱 *Device:* ${deviceName}\n` +
      `🔧 *Service Required:* ${serviceName}\n` +
      `📝 *Issue Description:* ${customFault || 'Not specified'}\n` +
      `📞 *My Contact Phone:* ${contactNumber}\n\n` +
      `Please let me know when I can bring my device in. Thanks!`;

    // Clean number for international format (assuming Sri Lanka country code +94)
    const cleanNum = whatsappToUse.replace(/\s+/g, '');
    const targetPhone = cleanNum.startsWith('0') 
      ? `94${cleanNum.substring(1)}` 
      : cleanNum;

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSuccess(true);
  };

  const handleReset = () => {
    setDeviceName('');
    setCustomFault('');
    setCustomerName('');
    setContactNumber('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl z-10"
            id="modal-content"
          >
            {/* Header */}
            <div className="bg-primary p-5 text-neutral-950 flex justify-between items-center relative">
              <div>
                <h3 className="font-display text-xl font-extrabold tracking-tight">Schedule Your Repair</h3>
                <p className="text-neutral-900/80 text-xs mt-0.5">Quick booking via WhatsApp to save your waiting time</p>
              </div>
              <button 
                onClick={onClose}
                className="p-1 rounded-full bg-black/5 hover:bg-black/15 text-neutral-950 transition-colors"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4" id="repair-booking-form">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
                      id="customer-name-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                        Device Model
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. iPhone 13 Pro Max"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
                        id="device-model-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 075 713 4594"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
                        id="contact-phone-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                      Service Required
                    </label>
                    <select
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23a3a3a3\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25em' }}
                      id="service-dropdown"
                    >
                      {ALL_SERVICES.map((srv) => (
                        <option key={srv.name} value={srv.name} className="dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
                          {srv.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                      Describe the problem (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Cracked front screen after drop, touch works but lines visible."
                      value={customFault}
                      onChange={(e) => setCustomFault(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      id="problem-description-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                      Send to Tech Desk Support Number
                    </label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => setWhatsappToUse(CONTACT_DETAILS.whatsapp1)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                          whatsappToUse === CONTACT_DETAILS.whatsapp1
                            ? 'border-primary bg-primary-light text-primary dark:text-primary-dark font-semibold shadow-sm'
                            : 'border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-600 dark:text-neutral-400'
                        }`}
                        id="support-num-btn-1"
                      >
                        {CONTACT_DETAILS.whatsapp1} (WhatsApp)
                      </button>
                      <button
                        type="button"
                        onClick={() => setWhatsappToUse(CONTACT_DETAILS.whatsapp2)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                          whatsappToUse === CONTACT_DETAILS.whatsapp2
                            ? 'border-primary bg-primary-light text-primary dark:text-primary-dark font-semibold shadow-sm'
                            : 'border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-600 dark:text-neutral-400'
                        }`}
                        id="support-num-btn-2"
                      >
                        {CONTACT_DETAILS.whatsapp2} (Phone support)
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-neutral-950 font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-cyan-500/10"
                    id="submit-booking-btn"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send WhatsApp Request</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 px-4" id="booking-success-view">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-neutral-900 dark:text-white">Request Ready to Send!</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-sm mx-auto">
                    We've opened WhatsApp to send your repair request. If it didn't open automatically, you can also manually message us on:
                  </p>
                  <p className="font-mono font-semibold text-lg text-neutral-900 dark:text-white mt-3">
                    {whatsappToUse}
                  </p>
                  <div className="flex flex-col gap-2 mt-6 max-w-xs mx-auto">
                    <button
                      onClick={() => window.open(`https://wa.me/${whatsappToUse.replace(/\s+/g, '').startsWith('0') ? '94' + whatsappToUse.replace(/\s+/g, '').substring(1) : whatsappToUse.replace(/\s+/g, '')}`)}
                      className="py-2.5 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors cursor-pointer"
                      id="success-whatsapp-retry"
                    >
                      Retry WhatsApp Redirect
                    </button>
                    <button
                      onClick={handleReset}
                      className="py-2.5 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium transition-colors cursor-pointer"
                      id="success-close-modal"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
