import Form from "@/components/features/forms/form";
import PageTitle from "@/components/ui/page-title";
import { CONTACT_FORM_FIELDS } from "@/config/forms/contact";
import { CONTACT_FORM_MESSAGES } from "@/config/messages";
import { contactSchema } from "@/lib/validation";
import Link from "next/link";
import { submitContactForm } from "./actions";

export default function ContactPage() {
  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <PageTitle
        title="Contact"
        subtitle="Heb je vragen, suggesties of wil je kennismaken? Laat hieronder je bericht achter. We nemen zo snel mogelijk contact met je op."
      />

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          Algemene Voorwaarden
        </Link>
        .
      </p>

      <Form
        fields={CONTACT_FORM_FIELDS.GENERAL}
        validationSchema={contactSchema}
        submitAction={submitContactForm}
        onSuccess="show-message"
        successMessage={CONTACT_FORM_MESSAGES.SUCCESS}
        submitButtonText={CONTACT_FORM_MESSAGES.SUBMIT_BUTTON}
        submittingText={CONTACT_FORM_MESSAGES.SUBMITTING}
      />
    </div>
  );
}
