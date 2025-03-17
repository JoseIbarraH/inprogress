"use client";

import Header from "@/components/Header";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useState } from "react";

const translations = {
  es: {
    title: "TÉRMINOS Y CONDICIONES",
    t1: "La presente establece los Términos y Condiciones que rigen la prestación de los servicios ofrecidos por Orbital Community Colombia S.A.S, agencia de viajes ubicada en Cartagena de Indias, Colombia. Al contratar nuestros servicios, el cliente acepta los siguientes términos.",
    t2: {
      p1: "Orbital Community Colombia S.A.S actúa como intermediaria entre los clientes y los proveedores de servicios turísticos (aerolíneas, hoteles, transportes, operadores turísticos, entre otros), brindando asesoría y gestión de reservas.",
      p2: "La reservación se considera materializada en el momento que se le proporcione al usuario el número de confirmación.",
      p3: "Nuestro servicio está sujeto a las condiciones climáticas y/o a disposiciones de las autoridades marítimas vigentes.",
      p4: "Las cancelaciones y sus costos están sujetos a las políticas de cada proveedor. El cliente podrá solicitar la cancelación hasta 7 días antes de la fecha de la reserva y antes de las 8:30 AM, a través de nuestro canal de atención al cliente: atencioncliente@orbitalcommunitycol.com. Las solicitudes fuera de este plazo no serán reembolsadas.",
      p5: "Los niños mayores de 3 años deben pagar tarifa completa y deben estar acompañados por un adulto.",
      p6: "La puntualidad es fundamental. Si el pasajero no se presenta a la hora establecida para la recogida, se considerará NO SHOW, perdiendo su reserva sin derecho a reembolso.",
      p7: "Nos reservamos el derecho de admisión a cualquier persona cuya conducta afecte la seguridad, el desarrollo normal de la experiencia o el bienestar de otros pasajeros."
    },
    t3: "Al momento de iniciar la reserva, el usuario AUTORIZA el tratamiento de datos personales y el uso de la información de su medio de pago para efectuar el cargo de la reserva. Al realizar el pago, confirma haber recibido la información correspondiente a las políticas de cancelación y haberlas aceptado expresamente.",
    t4: "De conformidad con la Ley 1581 de 2012 sobre Protección de Datos Personales en Colombia, la información suministrada será tratada de manera segura y conforme a la normatividad vigente.",
    t5: "Orbital Community Colombia S.A.S."
  },
  en: {
    title: "TERMS AND CONDITIONS",
    t1: "This document establishes the Terms and Conditions governing the provision of services offered by Orbital Community Colombia S.A.S, a travel agency located in Cartagena de Indias, Colombia. By hiring our services, the client accepts the following terms.",
    t2: {
      p1: "Orbital Community Colombia S.A.S acts as an intermediary between clients and tourism service providers (airlines, hotels, transportation, tour operators, among others), providing advice and reservation management.",
      p2: "The reservation is considered finalized once the user is provided with the confirmation number.",
      p3: "Our service is subject to weather conditions and/or the regulations of the current maritime authorities.",
      p4: "Cancellations and their costs are subject to the policies of each provider. The client may request a cancellation up to 7 days before the reservation date and before 8:30 AM through our customer service channel: atencioncliente@orbitalcommunitycol.com. Requests made outside this period will not be refunded.",
      p5: "Children over the age of 3 years must pay the full fare and must be accompanied by an adult.",
      p6: "Punctuality is essential. If the passenger does not show up at the scheduled pick-up time, it will be considered a NO SHOW, and the reservation will be lost without the right to a refund.",
      p7: "We reserve the right to refuse admission to any person whose behavior affects the safety, the normal course of the experience, or the well-being of other passengers."
    },
    t3: "When initiating the reservation, the user AUTHORIZES the processing of personal data and the use of their payment method information to charge the reservation. By making the payment, the user confirms that they have received and expressly accepted the cancellation policies.",
    t4: "In accordance with Law 1581 of 2012 on Personal Data Protection in Colombia, the provided information will be treated securely and in compliance with current regulations.",
    t5: "Orbital Community Colombia S.A.S."
  }
};

export default function TermsAndConditions() {
	const [lang, setLang] = useState("es");
  
	const t = (key: string): string => {
	  const langTranslations = translations[lang as keyof typeof translations];
	  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  const result = key.split(".").reduce((o: any, i: string) => {
		return o && typeof o === "object" && i in o ? o[i] : key;
	  }, langTranslations);
	  
	  return typeof result === "string" ? result : key;
	};
  
	const getTranslationObject = (key: string): Record<string, string> => {
	  const langTranslations = translations[lang as keyof typeof translations];
	  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  const result = key.split(".").reduce((o: any, i: string) => {
		return o && typeof o === "object" && i in o ? o[i] : {};
	  }, langTranslations);
	  
	  return typeof result === "object" ? result : {};
	};
  
	return (
	  <main className="w-full min-h-screen justify-center items-center flex flex-col bg-white pt-12 pb-12 overflow-y-auto">
		<Header />
		<LanguageSwitcher lang={lang} setLang={setLang} />
		<div className="!mt-5 mb-12 max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
		  <h2 className="text-2xl font-bold text-center text-gray-800 border-b pb-2">{t("title")}</h2>
		  <p className="text-gray-700 text-justify mt-4 leading-relaxed">{t("t1")}</p>
		  <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
			{Object.values(getTranslationObject("t2")).map((item, index) => (
			  <li key={index}>{item}</li>
			))}
		  </ul>
		  <p className="text-gray-700 text-justify mt-4 leading-relaxed">{t("t3")}</p>
		  <p className="text-gray-700 text-justify mt-4 leading-relaxed">{t("t4")}</p>
		  <p className="text-center font-semibold text-gray-800 mt-6">{t("t5")}</p>
		</div>
	  </main>
	);
  }
  