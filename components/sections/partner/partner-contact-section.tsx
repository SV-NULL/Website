"use client";

import { submitBecomePartnerApplication } from "@/app/partner-worden/actions";
import { useForm } from "@/hooks/use-form";
import { becomePartnerSchema } from "@/lib/validation";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const PACKAGE_OPTIONS = [
  { value: "", label: "Kies een pakket..." },
  { value: "klein", label: "Klein (€400/jaar)" },
  { value: "middel", label: "Middel (€750/jaar)" },
  { value: "groot", label: "Groot (€1100/jaar)" },
  { value: "hoofdsponsor", label: "Hoofdsponsor (€1800/jaar)" },
  { value: "weet-niet", label: "Weet ik nog niet" },
];

const VALID_PACKAGES = ["klein", "middel", "groot", "hoofdsponsor"];

type Props = {
  pakket?: string;
};

const PartnerContactSection = ({ pakket }: Props) => {
  const {
    isSubmitting,
    error,
    success,
    fieldErrors,
    formValues,
    handleSubmit,
    handleInputChange,
    handleInputBlur,
  } = useForm({
    validationSchema: becomePartnerSchema,
    submitAction: submitBecomePartnerApplication,
    onSuccess: "redirect",
    successRedirect: "/partner-worden/bedankt",
  });

  const previousPakket = React.useRef<string | null>(null);

  useEffect(() => {
    if (
      pakket &&
      VALID_PACKAGES.includes(pakket) &&
      pakket !== previousPakket.current
    ) {
      previousPakket.current = pakket;
      handleInputChange("packageInterest", pakket);
    }
  }, [pakket, handleInputChange]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleSubmit(formData);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    handleInputChange(e.target.name, e.target.value);
  };

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    handleInputBlur(e.target.name, e.target.value);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Laten we kennismaken
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vul het formulier in en we nemen binnen 2 werkdagen vrijblijvend
            contact met je op
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
                  Bedankt voor je aanmelding! We nemen snel contact op.
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-0.5"
                    >
                      Jouw naam
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jouw naam *"
                      value={formValues.name || ""}
                      onChange={onChange}
                      onBlur={onBlur}
                      disabled={isSubmitting}
                      className={`form-input ${
                        fieldErrors.name ? "!border-red-500" : ""
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-400">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-400 mb-0.5"
                    >
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Bedrijfsnaam *"
                      value={formValues.companyName || ""}
                      onChange={onChange}
                      onBlur={onBlur}
                      disabled={isSubmitting}
                      className={`form-input ${
                        fieldErrors.companyName ? "!border-red-500" : ""
                      }`}
                    />
                    {fieldErrors.companyName && (
                      <p className="mt-1 text-sm text-red-400">
                        {fieldErrors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-0.5"
                    >
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mailadres *"
                      value={formValues.email || ""}
                      onChange={onChange}
                      onBlur={onBlur}
                      disabled={isSubmitting}
                      className={`form-input ${
                        fieldErrors.email ? "!border-red-500" : ""
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-400 mb-0.5"
                    >
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefoonnummer (optioneel)"
                      value={formValues.phone || ""}
                      onChange={onChange}
                      onBlur={onBlur}
                      disabled={isSubmitting}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="packageInterest"
                    className="block text-sm font-medium text-gray-400 mb-0.5"
                  >
                    Welk pakket spreekt je het meeste aan?
                  </label>
                  <select
                    name="packageInterest"
                    value={formValues.packageInterest || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={isSubmitting}
                    className={`form-input ${
                      fieldErrors.packageInterest ? "!border-red-500" : ""
                    }`}
                  >
                    {PACKAGE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.packageInterest && (
                    <p className="mt-1 text-sm text-red-400">
                      {fieldErrors.packageInterest}
                    </p>
                  )}
                </div>

                <fieldset aria-describedby="meeting-error">
                  <legend className="text-gray-400 text-sm mb-3">
                    Hoe wil je het liefst kennismaken?{" "}
                    <span aria-hidden="true">*</span>
                    <span className="sr-only">(verplicht)</span>
                  </legend>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="meetingPreference"
                        value="digital"
                        checked={formValues.meetingPreference === "digital"}
                        onChange={onChange}
                        disabled={isSubmitting}
                        required
                        className="w-4 h-4 accent-yellow-400"
                      />
                      <span className="text-white group-hover:text-yellow-400 transition-colors">
                        Digitaal koffietje{" "}
                        <span role="img" aria-label="koffie">
                          ☕
                        </span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="meetingPreference"
                        value="info"
                        checked={formValues.meetingPreference === "info"}
                        onChange={onChange}
                        disabled={isSubmitting}
                        required
                        className="w-4 h-4 accent-yellow-400"
                      />
                      <span className="text-white group-hover:text-yellow-400 transition-colors">
                        Stuur eerst maar meer info
                      </span>
                    </label>
                  </div>

                  {fieldErrors.meetingPreference && (
                    <p
                      id="meeting-error"
                      className="mt-2 text-sm text-red-400"
                      role="alert"
                    >
                      {fieldErrors.meetingPreference}
                    </p>
                  )}
                </fieldset>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer py-4 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
                >
                  {isSubmitting ? "Versturen..." : "Let's partner up! 🚀"}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Met het versturen accepteer je onze{" "}
                  <Link
                    href="/privacy-cookies"
                    className="text-yellow-400 hover:underline"
                  >
                    privacyverklaring
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-yellow-400/30">
                <Image
                  src="/images/bestuur/3de-bestuur/timo-de-zwaan.jpg"
                  alt="Timo de Zwaan"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Timo de Zwaan
              </h3>
              <p className="text-yellow-400 text-sm mb-4">Voorzitter</p>
              <p className="text-gray-400 text-sm mb-6">
                Vragen? Stuur een mailtje naar Timo. Hij helpt je graag verder!
              </p>
              <a
                href="mailto:svnull@che.nl"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                svnull@che.nl
              </a>
            </div>

            <div className="bg-gradient-to-br from-yellow-400/10 to-neutral-900 rounded-2xl p-8 border border-yellow-400/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                Liever de PDF doorsturen?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Download hier de flyer om intern te bespreken met je manager.
              </p>
              <a
                href="/images/partner-worden/flyer.png"
                download="Sponsorpakketten-NULL.png"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download flyer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerContactSection;
