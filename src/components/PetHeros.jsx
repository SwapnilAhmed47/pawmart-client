import { FaPaw } from "react-icons/fa";

const petHeroes = [
  {
    name: "Alice Johnson",
    role: "Rescuer & Caregiver",
    image: "https://images.unsplash.com/photo-1603312912070-6a82423dc7b0?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "David Smith",
    role: "Adopter",
    image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Sophie Lee",
    role: "Pet Volunteer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Michael Brown",
    role: "Animal Lover",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=500&q=80"
  }
];

const PetHeroes = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-3 text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 justify-center">
          <FaPaw className="text-pink-500" />
          Meet Our Pet Heroes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {petHeroes.map((hero, index) => (
            <div key={index} className="card bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 shadow-lg rounded-2xl overflow-hidden text-center p-4">
              <img src={hero.image} alt={hero.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-pink-200" />
              <h3 className="text-lg font-bold">{hero.name}</h3>
              <p className="text-gray-500 text-sm">{hero.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
