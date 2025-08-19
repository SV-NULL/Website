type Props = {
  isSubmitting: boolean;
};

const SubmitButton = ({ isSubmitting }: Props) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black text-lg font-semibold py-3 rounded shadow mt-4 flex items-center justify-center space-x-2 transition-colors"
    >
      {isSubmitting ? (
        <>
          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
          <span>Bezig met aanmelden...</span>
        </>
      ) : (
        <span>Aanmelden</span>
      )}
    </button>
  );
};

export default SubmitButton;
