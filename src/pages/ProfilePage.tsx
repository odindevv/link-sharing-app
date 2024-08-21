import { useState } from 'react';
import { NavBar } from '../components/profile/NavBar';
import { LinksSection } from '../components/profile/LinksSection';
import { DetailsSection } from '../components/profile/DetailsSection';

type Section = 'Links' | 'Details' | 'Preview';

export function ProfilePage() {
  const [section, setSection] = useState<Section>('Links');

  const handleSection = (newSection: Section) => {
    setSection(newSection);
  };
  return (
    <div className='bg-slate-200/60 py-4 md:p-4 min-h-screen'>
      <NavBar
        section={section}
        setSection={handleSection}
      />
      {section === 'Links' ? <LinksSection /> : <DetailsSection />}
    </div>
  );
}
