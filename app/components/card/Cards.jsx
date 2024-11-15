// components/PropertyCard.js
import { FiHeart, FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-full  border rounded-lg ">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden  rounded-t-lg">
        <img
          src={property.href}
          alt={property.title}
          className="object-cover w-full h-full"
        />

        <div className="absolute top-0 flex flex-col justify-end items-end left-0 bg-black bg-opacity-50 text-white w-full h-full px-2 py-1 rounded">
          <span> Delivery In </span>
          <span className="font-bold">{property.deliveryYear}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className=" p-4">
        <h3 className="text-lg text-start font-semibold">{property.title}</h3>
        <p className="text-sm text-start text-gray-500 mt-2">
          {property.location}
        </p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <span>{property.bedrooms} Beds</span>
          <span>·</span>
          <span>{property.bathrooms} Baths</span>
          <span>·</span>
          <span>{property.size} m²</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-gray-500 ">
              {property.monthlyPayment} Monthly / {property.years} Years
            </p>
            <p className="text-xl font-semibold mt-2">{property.price} EGP</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-xl text-green-500 bg-gray-100 rounded-full">
              <BsWhatsapp />
            </button>
            <button className="p-2 text-xl text-blue-500 bg-gray-100 rounded-full">
              <FiPhone style={{ color: "rgb(30, 65, 100)" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
