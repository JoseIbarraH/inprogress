"use client"
import Header from "@/components/Header"
import {useTranslations} from 'next-intl';

export default function TermsAndConditions() {
	const t = useTranslations('Terms')
	return (
		<main className="w-full min-h-screen justify-center items-center flex flex-col bg-white pt-12 pb-12 overflow-y-auto">
			<Header />
			<div className="!mt-5 mb-12 max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
				<h2 className="text-2xl font-bold text-center text-gray-800 border-b pb-2">
					{t("title")}
				</h2>
				<p className="text-gray-700 text-justify mt-4 leading-relaxed">
					{t.rich("t1", {
						empresa: (chunks) => <span className="font-semibold">{chunks}</span>,
					})}
				</p>

				<ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
					<li>
						{t("t2.p1")}
					</li>
					<li>
						{t("t2.p2")}
					</li>
					<li>
						{t("t2.p3")}
					</li>
					<li>
						{t.rich("t2.p4", {
							span1: (chunks) => <span className="font-semibold">{chunks}</span>,
							correo: (chunks) => <span className="text-blue-600">{chunks}</span>,
							span2: (chunks) => <span className="font-semibold">{chunks}</span>,
						})}
					</li>
					<li>
						{t.rich("t2.p5", {
							span: (chunks) => <span className="font-semibold">{chunks}</span>
						})}
					</li>
					<li>
						{t.rich("t2.p6", {
							span1: (chunks) => <span className="font-semibold">{chunks}</span>,
							span2: (chunks) => <span className="font-semibold">{chunks}</span>,
						})}
					</li>
					<li>
						{t("t2.p7")}
					</li>
				</ul>

				<p className="text-gray-700 text-justify mt-4 leading-relaxed">
					{t.rich("t3", {
						span: (chunks) => <span className="font-semibold">{chunks}</span>,
					})}
				</p>

				<p className="text-gray-700 text-justify mt-4 leading-relaxed">
					{t("t4")}
				</p>

				<p className="text-center font-semibold text-gray-800 mt-6">
					{t("t5")}
				</p>
			</div>
		</main>
	);
}
