type Props = {
  isSubmitting: boolean;
  alternativeText?: string;
  alternativeLoadingText?: string;
};

const SubmitButton = ({
  isSubmitting,
  alternativeText,
  alternativeLoadingText,
}: Props) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold tracking-wide border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 active:bg-transparent active:text-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:shadow-[0_0_24px_rgba(250,204,21,0.25)] text-sm"
    >
      {isSubmitting ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>{alternativeLoadingText ?? "Bezig met aanmelden..."}</span>
        </>
      ) : (
        <span>{alternativeText ?? "Aanmelden"}</span>
      )}
    </button>
  );
};

export default SubmitButton;
