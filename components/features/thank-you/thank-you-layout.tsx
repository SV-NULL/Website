import Button from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import NextSteps from "./next-steps";

type Props = {
  title?: string;
  subtitle: string;
  steps: string[];
};

const ThankYouLayout = ({ title = "Bedankt!", subtitle, steps }: Props) => {
  return (
    <div className="py-8 px-4 max-w-3xl mx-auto text-white text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl font-bold mb-4 text-green-400">{title}</h1>
        <p className="text-xl text-gray-300 mb-6">{subtitle}</p>

        <NextSteps steps={steps} />

        <div className="space-y-4">
          <Button href="/">Terug naar homepage</Button>

          <div>
            <Link
              href="/contact"
              className="text-yellow-400 hover:text-yellow-300 underline text-sm"
            >
              Vragen? Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouLayout;
