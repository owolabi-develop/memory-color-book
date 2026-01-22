import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const Help = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How do I reorder a book?',
      answer: 'Go to your order history and select the book you want to recreate. Click reorder and you\'ll return to Rachel with all your previous choices saved. You can edit anything or keep it exactly as it was.'
    },
    {
      id: 2,
      question: 'Can I edit a finished book?',
      answer: 'Once your book is ordered, the design is locked. But you can start a new version anytime using the same photos or different ones. Each book is a fresh creation.'
    },
    {
      id: 3,
      question: 'How long does shipping take?',
      answer: 'Most orders ship within 7 to 10 business days. You\'ll receive tracking information via email so you know exactly when your book arrives.'
    },
    {
      id: 4,
      question: 'What if I need to return something?',
      answer: 'We stand behind every book we make. If there\'s a problem with printing or binding, contact our support team with your order number and photos. We\'ll make it right.'
    },
    {
      id: 5,
      question: 'How are my photos stored?',
      answer: 'Your photos are deleted 30 days after your order is complete. We never share them, sell them, or use them for anything beyond creating your book. Your privacy is protected.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Help
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Find answers and support whenever you need it. We're here to help with orders, shipping, and everything in between.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-12 sm:mb-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-2 border-gray-300 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-400"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-900 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v14m7-7H5"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="bg-gray-50 px-4 sm:px-6 py-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            Need more help?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-2">
            Reach out anytime.
          </p>
          <button className="border-1 border-gray-900 text-gray-900 px-4 sm:px-4 py-2 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;