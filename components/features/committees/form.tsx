import { submitCommissieApplication } from "@/app/commissies/actions";
import { COMMITTEE_FORM_FIELDS } from "@/config/forms/committee";
import { COMMITTEE_FORM_MESSAGES } from "@/config/messages";
import { commissieApplicationSchema } from "@/lib/validation";
import { Commissie } from "@/types/commisie";
import { FormField } from "@/types/form";
import Form from "../forms/form";

interface CommitteeApplicationFormProps {
  committee: Commissie;
}

const CommitteeApplicationForm = ({
  committee,
}: CommitteeApplicationFormProps) => {
  const fieldsWithHiddenData: FormField[] = [
    ...COMMITTEE_FORM_FIELDS,
    {
      name: "commissieId",
      type: "hidden",
      value: committee.id,
      required: true,
    },
    {
      name: "commissieName",
      type: "hidden",
      value: committee.title,
      required: true,
    },
  ];

  return (
    <Form
      fields={fieldsWithHiddenData}
      validationSchema={commissieApplicationSchema}
      submitAction={submitCommissieApplication}
      onSuccess="redirect"
      successRedirect={`/commissies/${committee.id}/aanmelden/bedankt`}
      submitButtonText={COMMITTEE_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={COMMITTEE_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default CommitteeApplicationForm;
