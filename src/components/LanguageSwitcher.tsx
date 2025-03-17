// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.replace(segments.join('/'));
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
      {/* Agrega más opciones según los idiomas que soportes */}
    </select>
  );
};

export default LanguageSwitcher;
