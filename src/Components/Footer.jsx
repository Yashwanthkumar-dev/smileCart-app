import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-emerald-900 to-emerald-700 text-white scroll-smooth">
      <div className=" py-8 flex items-center justify-between">
        {/* left side */}
        <div className="mx-24 mt-9">
          <div className=" space-y-8">
            <i className="text-4xl">🎁</i>
            <h1 className="text-3xl font-poppins font-bold  tracking-wide">
              Every Gift Tells a Story
            </h1>
            <p className="w-[570px] font-poppins tracking-wide leading-7  text-[16px] ">
              We believe in the power of personalized gifts to create lasting
              memories. From birthdays to weddings, we're here to make your
              moments special.
            </p>
            <div className="flex items-center text-center pt-5 space-x-10">
              <div>
                <h1 className="font-bold text-3xl font-poppins mb-5">10K +</h1>
                <p className="font-poppins text-[16px] tracking-wide">
                  Happy Customers
                </p>
              </div>

              <div>
                <h1 className="font-bold text-3xl font-poppins  mb-5">500 +</h1>
                <p className="font-poppins text-[16px] tracking-wide">
                  Products
                </p>
              </div>

              <div>
                <h1 className="font-bold text-3xl font-poppins  mb-5">4.9 ★</h1>
                <p className="font-poppins text-[16px] tracking-wide">Rating</p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-fit gap-x-[120px] gap-y-8 text-gray-300 pt-4">
              <div className="flex items-center space-x-4 text-[16px]">
                <i className="rounded-full p-[1px] bg-slate-50/20 text-center">
                  🔒
                </i>
                <p>100% Secure</p>
              </div>
              <div className="flex items-center space-x-4 text-[16px]">
                <i className="rounded-full p-[1px] bg-slate-50/20 text-center">
                  🚚
                </i>
                <p>Fast Shipping</p>
              </div>
              <div className="flex items-center space-x-4 text-[16px]">
                <i className="rounded-full p-[1px] px-[8px] bg-slate-50/20 text-center">
                  ✓
                </i>
                <p>Quality Assured</p>
              </div>
              <div className="flex items-center space-x-4 text-[16px]">
                <i className="rounded-full p-[1px] bg-slate-50/20 text-center">
                  💯
                </i>
                <p>Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
        {/* left side */}

        {/* right side */}
        <div className="mr-24 -mt-40 ">
          <div className="flex items-center gap-x-16">
            <div className="flex flex-col items-center">
              <h1 className="text-[22px] font-medium font-poppins capitalize mb-1 ">
                company
              </h1>
              <ul className="leading-10 ">
                <Link to="/about-us">
                  <li className=" capitalize font-poppins font-light text-white/65 text-[16px]">
                    About us
                  </li>
                </Link>
                <a href="#workflow">
                  <li className="capitalize font-poppins font-light text-white/65 text-[16px]">
                    How it Works
                  </li>
                </a>
                <Link to="/contact">
                  <li className=" capitalize font-poppins font-light text-white/65 text-[16px]">
                    Contact
                  </li>
                </Link>

                <li>
                  <a href="#trending">
                    <li className=" capitalize font-poppins font-light text-white/65 text-[16px]">
                      Trending
                    </li>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[22px] font-medium font-poppins capitalize mb-1 -mt-8">
                Support
              </h1>
              <ul className="leading-10 capitalize">
                <li className="font-poppins font-light text-white/65 text-[16px]">
                  Help Center
                </li>
                <li className="font-poppins font-light text-white/65 text-[16px]">
                  Returns
                </li>
                <li className="font-poppins font-light text-white/65 text-[16px]">
                  FAQs
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* right side */}
      </div>
      <div>
        {/* line  */}
        <div className="border-gray-700/50 border-t-2   h-1 mx-20"></div>
        {/* line  */}
      </div>

      <div className="pb-8 mt-5">
        <p className="text-center font-poppins text-[17px] tracking-wider py-2 text-white/55">
          © 2026 GiftStore. Made with ❤️ in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
