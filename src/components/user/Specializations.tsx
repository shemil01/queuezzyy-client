import Image from 'next/image';
import React from 'react';

interface Specializations {
  name: string;
  icon: string;
}

const specialization: Specializations[] = [
  { name: 'Cardiology', icon: '/orthoicon1.png' },
  { name: 'Orthopedics', icon: '/orthoicon1.png' },
  { name: 'Dermatology', icon: '/dermatology-icon.png' },
  { name: 'Pediatrics', icon: '/pediatrics-icon.png' },
  { name: 'Neurology', icon: '/neurology-icon.png' },
  { name: 'Ophthalmology', icon: '/ophthalmology-icon.png' },
  { name: 'Psychiatry', icon: '/psychiatry-icon.png' },
  { name: 'Radiology', icon: '/radiology-icon.png' },
  { name: 'Oncology', icon: '/oncology-icon.png' },
  { name: 'Gynecology', icon: '/gynecology-icon.png' },
  { name: 'Urology', icon: '/urology-icon.png' },
  { name: 'ENT (Ear, Nose, Throat)', icon: '/ent-icon.png' },
  { name: 'Gastroenterology', icon: '/gastroenterology-icon.png' },
  { name: 'Nephrology', icon: '/nephrology-icon.png' },
  { name: 'Endocrinology', icon: '/endocrinology-icon.png' },
  { name: 'Pulmonology', icon: '/pulmonology-icon.png' },
  { name: 'Dentistry', icon: '/dentistry-icon.png' },
  { name: 'Allergy & Immunology', icon: '/allergy-icon.png' },
  { name: 'Anesthesiology', icon: '/anesthesiology-icon.png' },
  { name: 'Rheumatology', icon: '/rheumatology-icon.png' },
  { name: 'Infectious Disease', icon: '/infectious-disease-icon.png' },
  // Add more specializations as needed
];

export const Specializations: React.FC = () => {
  const displayIcons=specialization.slice(0,7)
  return (
    <div className='font-fustat'>
      <div className='flex justify-between p-2'>
        <div className='font-semibold text-black'>Specialization</div>
        <div className='font-medium text-[#0E4698]'>See All</div>
      </div>

      <div className='flex flex-wrap gap-8 p-10'>
        {displayIcons.map((item, index) => (
          <div key={index} className=''>
          <div
            
            className='flex items-center justify-center w-[163px] h-[163px] bg-slate-200 rounded-full '
          >
            <Image
              src={item.icon}
              alt={item.name}
              layout="fixed"   // Ensures fixed dimensions
              width={500}       // Set width to 90px
              height={500}      // Set height to 90px
              className="object-contain"  // Keeps the image contained without stretching
            />
          </div>
          <div className=' flex justify-center mt-4 font-medium'><h1>{item.name}</h1></div>

          </div>
          
        ))}
      </div>
    </div>
  );
};
