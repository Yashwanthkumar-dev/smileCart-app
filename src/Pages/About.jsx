import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "10000+", label: "Gifts Delivered" },
    { number: "50+", label: "Cities Covered" },
    { number: "4.9★", label: "Customer Rating" },
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "Premium Quality",
      description: "Only the finest materials for your special gifts",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description: "Every gift is crafted with care and attention",
    },
    {
      icon: "⭐",
      title: "100% Satisfaction",
      description: "Your happiness is our priority",
    },
  ];

  const testimonials = [
    {
      name: "Priya R.",
      text: "Ordered a customized photo frame for my anniversary. The quality was amazing and my husband loved it! ❤️",
      rating: 5,
    },
    {
      name: "Rahul K.",
      text: "Best gift service ever! The personalized mug I ordered came out perfect. Will definitely order again!",
      rating: 5,
    },
    {
      name: "Divya M.",
      text: "Super fast delivery and excellent quality. The team was very responsive on WhatsApp. Highly recommend! 🌟",
      rating: 5,
    },
  ];

  const process = [
    { step: "01", title: "Choose Your Gift", desc: "Browse our collection" },
    { step: "02", title: "Customize It", desc: "Add your personal touch" },
    { step: "03", title: "We Create", desc: "Crafted with care" },
    { step: "04", title: "Delivered!", desc: "Right to your doorstep" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden ">
      <div className="mx-16">
        {/* Background floating blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-delay-2"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-delay-4"></div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold bg-gradient-to-r from-green-600 via-green-400 to-green-300 bg-clip-text text-transparent mb-4 font-poppins">
              About SmileCart
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium font-poppins">
              Where every customised gift begins with a smile 💚
            </p>
          </div>

          {/* Stats Section */}
          <motion.div
          initial = {{y:-100,opacity:0}}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 0.70 }}
           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                id={`stat-${index}`}
               
                className={`bg-white rounded-2xl p-6 shadow-xl text-center  hover:shadow-2xl transition-all duration-500 hover:scale-105 
                  
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-green-600 mb-2 font-poppins">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium font-poppins">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Text */}
            <div
              id="story"
              data-animate
              className={`transition-all duration-700
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800 font-poppins">
                ✨ Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-poppins">
                At SmileCart, we believe that gifts are more than just products
                — they are emotions, memories, and stories waiting to be shared.
                From birthdays and anniversaries to weddings, surprises, and
                everyday moments, we help you turn your ideas into beautifully
                customised gifts that truly speak from the heart.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                What started as a passion for personalised gifting has grown
                into a platform built on creativity, quality, and customer
                happiness. Every order is crafted with care — because it's not
                just a gift, it's a feeling.
              </p>
            </div>

            {/* Images */}
            <div
              id="images"
              data-animate
              className={`grid grid-cols-2 gap-4 transition-all duration-700 
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl h-48 flex items-center justify-center text-white text-6xl shadow-lg hover:scale-105 transition-transform">
                🎁
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl h-48 flex items-center justify-center text-white text-6xl shadow-lg hover:scale-105 transition-transform">
                💝
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl h-48 flex items-center justify-center text-white text-6xl shadow-lg hover:scale-105 transition-transform">
                🎨
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl h-48 flex items-center justify-center text-white text-6xl shadow-lg hover:scale-105 transition-transform">
                ❤️
              </div>
            </div>
          </div>

          {/* What we do */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-poppins">
              🎁 What We Do
            </h2>

            <div className="text-xl text-gray-700 max-w-6xl mx-auto">
              <p className="mb-6 text-center text-2xl font-poppins">
                SmileCart specializes in customized gifts designed just for you.
                Transform ordinary items into extraordinary memories!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-green-600 font-poppins">
                    ✏️ Customize With:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Names & Initials</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Your Favorite Photos</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Special Dates & Anniversaries</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins ">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Personal Messages</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Custom Designs & Artwork</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-green-600 font-poppins">
                    🎉 Perfect For:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Birthdays & Celebrations</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Weddings & Engagements</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Corporate Gifts</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Romantic Surprises</span>
                    </li>
                    <li className="flex items-center gap-3 font-poppins">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Just Because Moments 💚</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins">
              🔄 How It Works
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div
                  key={index}
                  id={`process-${index}`}
                  data-animate
                  className={`relative transition-all duration-500 
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="text-5xl font-bold text-green-600 mb-3 font-poppins">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-poppins">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-green-500">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins">
              🌟 Why Choose SmileCart?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  id={`why-${index}`}
                  data-animate
                  className={`bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-105
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4 font-poppins">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-poppins">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins    ">
              💬 What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  id={`testimonial-${index}`}
                  data-animate
                  className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic font-poppins">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-green-600 font-poppins">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            id="cta"
            data-animate
            className={`bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl transition-all duration-700 
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Ready to Create Something Special?
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-poppins">
              Let's turn your ideas into beautiful customized gifts!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-transparent font-poppins border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all hover:scale-105">
               <Link to="/all-products">Browse Products</Link> 
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default About;
