"use client";

import { submitBecomePartnerApplication } from "@/app/partner-worden/actions";
import { PARTNER_WORDEN_FORM_MESSAGES } from "@/config/messages";
import { FORM_FIELDS } from "@/content/partners/partner-worden/form";
import { becomePartnerSchema } from "@/lib/validation";
import GenericForm from "../form/GenericForm";

const PartnerWordenForm = () => {
  return (
    <GenericForm
      fields={FORM_FIELDS.GENERAL}
      validationSchema={becomePartnerSchema}
      submitAction={submitBecomePartnerApplication}
      onSuccess="redirect"
      successRedirect="/partner-worden/bedankt"
      submitButtonText={PARTNER_WORDEN_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={PARTNER_WORDEN_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default PartnerWordenForm;
