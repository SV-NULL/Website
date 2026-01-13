"use client";

import { submitContactForm } from "@/app/contact/actions";
import { CONTACT_FORM_MESSAGES } from "@/config/messages";
import { FORM_FIELDS } from "@/content/contact/form";
import { contactSchema } from "@/lib/validation";
import GenericForm from "../form/GenericForm";

const ContactForm = () => {
  return (
    <GenericForm
      fields={FORM_FIELDS.GENERAL}
      validationSchema={contactSchema}
      submitAction={submitContactForm}
      onSuccess="show-message"
      successMessage={CONTACT_FORM_MESSAGES.SUCCESS}
      submitButtonText={CONTACT_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={CONTACT_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default ContactForm;
