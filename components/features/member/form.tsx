"use client";

import { submitMembershipApplication } from "@/app/word-lid/actions";
import { Discount } from "@/config/discounts";
import { FORM_FIELDS } from "@/config/forms/form";
import { BECOME_MEMBER_FORM_MESSAGES } from "@/config/messages";
import { membershipApplicationSchema } from "@/lib/validation";
import Form from "../forms/form";

interface Props {
  discount?: Discount | null;
}

const BecomeMemberForm = ({ discount }: Props) => {
  const contributionDescription = discount
    ? `Lid worden van NULL kost €15 per schooljaar of €40 voor je hele studie. Je hebt een kortingsactie actief: ${discount.amount}. De korting wordt verrekend in het betaalverzoek dat je na inschrijving ontvangt.`
    : BECOME_MEMBER_FORM_MESSAGES.CONTRIBUTION_DESCRIPTION;

  const contributionFields = discount
    ? [
        {
          name: "contribution",
          as: "select" as const,
          placeholder: "Kies je contributie",
          required: true,
          options: [
            { value: "15", label: "€15 – per schooljaar (prijs vóór korting)" },
            {
              value: "40",
              label: "€40 – voor hele studie (prijs vóór korting)",
            },
          ],
        },
        FORM_FIELDS.CONTRIBUTION[1], // Comments field
      ]
    : FORM_FIELDS.CONTRIBUTION;

  const formSections = [
    {
      key: "general",
      title: BECOME_MEMBER_FORM_MESSAGES.GENERAL_TITLE,
      fields: FORM_FIELDS.GENERAL,
    },
    {
      key: "student",
      title: BECOME_MEMBER_FORM_MESSAGES.STUDENT_TITLE,
      fields: FORM_FIELDS.STUDENT,
    },
    {
      key: "contribution",
      title: BECOME_MEMBER_FORM_MESSAGES.CONTRIBUTION_TITLE,
      description: contributionDescription,
      extraContent: discount ? (
        <div className="p-4 bg-yellow-900 border border-yellow-600 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-100">
            <span className="text-xl">💡</span>
            <p className="font-medium">
              Let op: De prijzen hieronder zijn nog zonder korting. Jouw korting{" "}
              <strong>({discount.amount})</strong> wordt automatisch verrekend
              in het betaalverzoek.
            </p>
          </div>
        </div>
      ) : undefined,
      fields: contributionFields,
    },
  ];

  const submitWithDiscount = async (formData: FormData) => {
    if (discount) {
      formData.append("discountId", discount.id);
      formData.append("discountName", discount.name);
      formData.append("discountAmount", discount.amount);
    }
    return await submitMembershipApplication(formData);
  };

  return (
    <Form
      sections={formSections}
      validationSchema={membershipApplicationSchema}
      submitAction={submitWithDiscount}
      onSuccess="redirect"
      successRedirect="/word-lid/bedankt"
      submitButtonText={BECOME_MEMBER_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={BECOME_MEMBER_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default BecomeMemberForm;
