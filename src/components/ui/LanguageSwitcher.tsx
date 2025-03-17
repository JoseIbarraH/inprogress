import React from "react";

interface LanguageSwitcherProps {
  lang: string;
  setLang: (lang: string) => void;
}

export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-4 py-2 rounded ${lang === "es" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        onClick={() => setLang("es")}
      >
        🇪🇸 Español
      </button>
      <button
        className={`px-4 py-2 rounded ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        onClick={() => setLang("en")}
      >
        🇺🇸 English
      </button>
    </div>
  );
}
