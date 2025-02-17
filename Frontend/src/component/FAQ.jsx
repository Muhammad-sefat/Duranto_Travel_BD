import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does DurantoTravelBD offer?",
      answer:
        "We provide online bus ticket booking, seat selection, real-time tracking, and comfortable travel options across Bangladesh.",
    },
    {
      question: "How can I book a bus ticket?",
      answer:
        "You can book tickets through our website, mobile app, or by visiting our authorized ticket counters.",
    },
    {
      question: "Can I choose my preferred seat while booking?",
      answer:
        "Yes! Our platform allows you to select your preferred seat while booking your ticket online.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept online payments via bKash, Nagad, Rocket, debit/credit cards, and cash at ticket counters.",
    },
    {
      question: "Is there a refund or cancellation policy?",
      answer:
        "Yes, you can cancel your ticket before the departure time. Refund policies depend on the cancellation time and our terms & conditions.",
    },
    {
      question: "Do you offer tracking for booked buses?",
      answer:
        "Yes, we provide real-time bus tracking through our website and mobile app for a better travel experience.",
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer:
        "Yes, you can modify your journey date or seat selection depending on availability. Contact our support team for assistance.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-lime-100 border-l-4 border-orange-500 rounded-lg"
            >
              <input type="radio" name="faq-accordion" id={`faq-${index}`} />
              <div className="collapse-title text-lg font-semibold text-gray-800">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-lime-50 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-orange-600 text-center mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Contact us and we’ll be happy to assist you!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-800 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
