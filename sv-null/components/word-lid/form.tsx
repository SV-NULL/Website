"use client";

import { submitMembershipApplication } from "@/app/word-lid/actions";
import { WORD_LID_FORM_MESSAGES } from "@/config/messages";
import { FORM_FIELDS } from "@/content/vereniging/word-lid/form";
import { membershipApplicationSchema } from "@/lib/validation";
import GenericForm from "../form/GenericForm";

const formSections = [
  {
    key: "general",
    title: WORD_LID_FORM_MESSAGES.GENERAL_TITLE,
    fields: FORM_FIELDS.GENERAL,
  },
  {
    key: "student",
    title: WORD_LID_FORM_MESSAGES.STUDENT_TITLE,
    fields: FORM_FIELDS.STUDENT,
  },
  {
    key: "contribution",
    title: WORD_LID_FORM_MESSAGES.CONTRIBUTION_TITLE,
    description: WORD_LID_FORM_MESSAGES.CONTRIBUTION_DESCRIPTION,
    fields: FORM_FIELDS.CONTRIBUTION,
  },
];

const WordLidForm = () => {
  return (
    <GenericForm
      sections={formSections}
      validationSchema={membershipApplicationSchema}
      submitAction={submitMembershipApplication}
      onSuccess="redirect"
      successRedirect="/word-lid/bedankt"
      submitButtonText={WORD_LID_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={WORD_LID_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default WordLidForm;
