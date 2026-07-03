import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ALL_SERVICES, CONTACT_DETAILS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService,
}: BookingModalProps) {
  const [deviceName, setDeviceName] = useState('');
  const [serviceName, setServiceName] = useState(preselectedService || ALL_SERVICES[0].name);
  const [customFault, setCustomFault] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [whatsappToUse, setWhatsappToUse] = useState(CONTACT_DETAILS.whatsapp1);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setServiceName(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      return;
    }

    setDeviceName('');
    setCustomFault('');
    setCustomerName('');
    setContactNumber('');
    setWhatsappToUse(CONTACT_DETAILS.whatsapp1);
    setServiceName(preselectedService || ALL_SERVICES[0].name);
    setIsSuccess(false);
  }, [isOpen, preselectedService]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formattedMessage =
      `Hello Best Mobile Repair,\n\n` +
      `I would like to schedule a repair for my device.\n\n` +
      `Name: ${customerName}\n` +
      `Device: ${deviceName}\n` +
      `Service Required: ${serviceName}\n` +
      `Issue Description: ${customFault || 'Not specified'}\n` +
      `My Contact Phone: ${contactNumber}\n\n` +
      `Please let me know when I can bring my device in. Thank you.`;

    const cleanNumber = whatsappToUse.replace(/\s+/g, '');
    const targetPhone = cleanNumber.startsWith('0') ? `94${cleanNumber.slice(1)}` : cleanNumber;
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  }

  function handleDone() {
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900"
            id="modal-backdrop"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
            id="modal-content"
          >
            <div className="flex items-center justify-between bg-primary p-5 text-neutral-950">
              <div>
                <h3 className="font-display text-xl font-extrabold tracking-tight">Schedule Your Repair</h3>
                <p className="mt-0.5 text-xs text-neutral-900/80">
                  Quick booking via WhatsApp to save your waiting time
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-black/5 p-1 text-neutral-950 transition-colors hover:bg-black/15"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4" id="repair-booking-form">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={customerName}
                      onChange={(event) => setCustomerName(event.target.value)}
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                      id="customer-name-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                        Device Model
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. iPhone 13 Pro Max"
                        value={deviceName}
                        onChange={(event) => setDeviceName(event.target.value)}
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        id="device-model-input"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 075 713 4594"
                        value={contactNumber}
                        onChange={(event) => setContactNumber(event.target.value)}
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        id="contact-phone-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      Service Required
                    </label>
                    <select
                      value={serviceName}
                      onChange={(event) => setServiceName(event.target.value)}
                      className="w-full appearance-none rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23a3a3a3%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.25em',
                      }}
                      id="service-dropdown"
                    >
                      {ALL_SERVICES.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      Describe the problem (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Cracked front screen after drop, touch works but lines are visible."
                      value={customFault}
                      onChange={(event) => setCustomFault(event.target.value)}
                      className="w-full resize-none rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                      id="problem-description-input"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      Send to Support Number
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setWhatsappToUse(CONTACT_DETAILS.whatsapp1)}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                          whatsappToUse === CONTACT_DETAILS.whatsapp1
                            ? 'border-primary bg-primary-light font-semibold text-primary shadow-sm dark:text-primary-dark'
                            : 'border-neutral-300 bg-transparent text-neutral-600 dark:border-neutral-700 dark:text-neutral-400'
                        }`}
                        id="support-num-btn-1"
                      >
                        {CONTACT_DETAILS.whatsapp1}
                      </button>
                      <button
                        type="button"
                        onClick={() => setWhatsappToUse(CONTACT_DETAILS.whatsapp2)}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                          whatsappToUse === CONTACT_DETAILS.whatsapp2
                            ? 'border-primary bg-primary-light font-semibold text-primary shadow-sm dark:text-primary-dark'
                            : 'border-neutral-300 bg-transparent text-neutral-600 dark:border-neutral-700 dark:text-neutral-400'
                        }`}
                        id="support-num-btn-2"
                      >
                        {CONTACT_DETAILS.whatsapp2}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-neutral-950 shadow-lg transition-colors hover:bg-primary-hover"
                    id="submit-booking-btn"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Send WhatsApp Request</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </form>
              ) : (
                <div className="px-4 py-8 text-center" id="booking-success-view">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                    Request Ready to Send
                  </h4>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                    WhatsApp has been opened with your repair request. If it did not open automatically,
                    you can message this number manually.
                  </p>
                  <p className="mt-3 font-mono text-lg font-semibold text-neutral-900 dark:text-white">
                    {whatsappToUse}
                  </p>
                  <div className="mx-auto mt-6 flex max-w-xs flex-col gap-2">
                    <button
                      onClick={() => {
                        const cleanNumber = whatsappToUse.replace(/\s+/g, '');
                        const targetPhone = cleanNumber.startsWith('0')
                          ? `94${cleanNumber.slice(1)}`
                          : cleanNumber;
                        window.open(`https://wa.me/${targetPhone}`, '_blank', 'noopener,noreferrer');
                      }}
                      className="cursor-pointer rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
                      id="success-whatsapp-retry"
                    >
                      Retry WhatsApp Redirect
                    </button>
                    <button
                      onClick={handleDone}
                      className="cursor-pointer rounded-lg bg-neutral-100 px-4 py-2.5 font-medium text-neutral-800 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                      id="success-close-modal"
                    >
                      Done and Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
