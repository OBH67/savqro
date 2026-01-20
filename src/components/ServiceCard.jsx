import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, image, featured, index }) => {
  if (featured && image) {
    return (
      <div
        className={`relative h-80 rounded-sm overflow-hidden image-zoom-container card-clean animate-fade-in-up animation-delay-${index * 100}`}
        data-testid={`service-card-${index}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark-strong flex flex-col justify-end p-8">
          <div className="text-white">
            {Icon && <Icon size={40} className="mb-4 text-secondary" />}
            <h3 className="text-2xl md:text-3xl font-medium mb-3">{title}</h3>
            <p className="text-slate-200 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card-clean p-8 rounded-sm animate-fade-in-up animation-delay-${index * 100}`}
      data-testid={`service-card-${index}`}
    >
      <div className="flex flex-col h-full">
        {Icon && (
          <div className="w-14 h-14 bg-slate-50 rounded-sm flex items-center justify-center mb-6">
            <Icon size={28} className="text-primary" />
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-medium mb-4">{title}</h3>
        <p className="text-base leading-relaxed text-slate-600 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
