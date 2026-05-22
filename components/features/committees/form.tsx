"use client";

import { submitCommitteeApplication } from "@/app/commissies/actions";
import { COMMITTEE_FORM_FIELDS } from "@/config/forms/committee";
import { COMMITTEE_FORM_MESSAGES } from "@/config/messages";
import { committeeApplicationSchema } from "@/lib/validation";
import { Committee } from "@/types/committee";
import { FormField } from "@/types/form";
import Form from "../forms/form";

interface CommitteeApplicationFormProps {
  committee: Committee;
}

const CommitteeApplicationForm = ({
  committee,
}: CommitteeApplicationFormProps) => {
  const fieldsWithHiddenData: FormField[] = [
    ...COMMITTEE_FORM_FIELDS,
    {
      name: "committeeId",
      type: "hidden",
      value: committee.id,
      required: true,
    },
    {
      name: "committeeName",
      type: "hidden",
      value: committee.title,
      required: true,
    },
  ];

  return (
    <Form
      fields={fieldsWithHiddenData}
      validationSchema={committeeApplicationSchema}
      submitAction={submitCommitteeApplication}
      onSuccess="redirect"
      successRedirect={`/commissies/${committee.id}/aanmelden/bedankt`}
      submitButtonText={COMMITTEE_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={COMMITTEE_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default CommitteeApplicationForm;
