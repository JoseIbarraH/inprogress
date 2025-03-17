"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, ChangeEvent } from "react";

export default function LocaleSwitcher() {
    const [locale, setLocale] = useState<string>("en"); // Estado inicial
    const router = useRouter();

    useEffect(() => {
        const cookieLocale = document.cookie
            .split("; ")
            .find((row) => row.startsWith("MYORBITALAPP_LOCALE="))
            ?.split("=")[1];

        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            document.cookie = `MYORBITALAPP_LOCALE=${browserLocale}; path=/`;
            setLocale(browserLocale);
            router.refresh();
        }
    }, [router]);

    const changeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        setLocale(newLocale);
        document.cookie = `MYORBITALAPP_LOCALE=${newLocale};`;
        router.refresh();
    };

    return (
        <label className="border-2 rounded">
            <p className="sr-only">Change language</p>
            <select value={locale} onChange={changeLocale}>
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </label>
    );
}


