import { FaHeart, FaHome } from "react-icons/fa";

const WhyAdopt = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="flex flex-col md:flex-row items-center justify-center gap-3 text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
          <FaHeart className="text-pink-500" />
          Why Adopt from PawMart?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Adopting a pet gives a loving animal a second chance at life. 
          PawMart connects local pet owners with adopters to promote 
          rescue and responsible pet care. Instead of buying, you’re saving lives!
        </p>
      </div>
    </section>
  );
};

export default WhyAdopt;
