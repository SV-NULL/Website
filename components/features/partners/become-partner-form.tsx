"use client";

import { submitBecomePartnerApplication } from "@/app/partner-worden/actions";
import { PARTNER_FORM_FIELDS } from "@/config/forms/partner";
import { BECOME_PARTNER_FORM_MESSAGES } from "@/config/messages";
import { becomePartnerSchema } from "@/lib/validation";
import Form from "../forms/form";

const BecomePartnerForm = () => {
  return (
    <Form
      fields={PARTNER_FORM_FIELDS.GENERAL}
      validationSchema={becomePartnerSchema}
      submitAction={submitBecomePartnerApplication}
      onSuccess="redirect"
      successRedirect="/partner-worden/bedankt"
      submitButtonText={BECOME_PARTNER_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={BECOME_PARTNER_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default BecomePartnerForm;
