import React from 'react';

const ProjectCard = ({ image, alt, category, index, onClick }) => {
  return (
    <div
      className={`relative aspect-[4/3] rounded-sm overflow-hidden image-zoom-container cursor-pointer animate-fade-in-up animation-delay-${index * 100}`}
      onClick={onClick}
      data-testid={`project-card-${index}`}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-sm font-medium tracking-widest uppercase">
          {category}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
