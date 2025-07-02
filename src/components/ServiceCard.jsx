import React from "react";

function ServiceCard({icon, title, description}) {
  return(
    <div className="bg-slate-50 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;