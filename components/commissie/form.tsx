"use client";

import { submitCommissieApplication } from "@/app/commissies/actions";
import { COMMISSIE_FORM_MESSAGES } from "@/config/messages";
import { COMMISSIE_FORM_FIELDS } from "@/content/commissie/form";
import { commissieApplicationSchema } from "@/lib/validation";
import { Commissie } from "@/types/commisie";
import { FormField } from "@/types/form";
import GenericForm from "../form/GenericForm";

interface CommissieApplicationFormProps {
  commissie: Commissie;
}

const CommissieApplicationForm = ({
  commissie,
}: CommissieApplicationFormProps) => {
  const fieldsWithHiddenData: FormField[] = [
    ...COMMISSIE_FORM_FIELDS,
    {
      name: "commissieId",
      type: "hidden",
      value: commissie.id,
      required: true,
    },
    {
      name: "commissieName",
      type: "hidden",
      value: commissie.title,
      required: true,
    },
  ];

  return (
    <GenericForm
      fields={fieldsWithHiddenData}
      validationSchema={commissieApplicationSchema}
      submitAction={submitCommissieApplication}
      onSuccess="redirect"
      successRedirect={`/commissies/${commissie.id}/aanmelden/bedankt`}
      submitButtonText={COMMISSIE_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={COMMISSIE_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default CommissieApplicationForm;
