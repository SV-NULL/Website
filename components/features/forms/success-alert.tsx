type Props = {
  message?: string;
  onClose?: () => void;
};

const SuccessAlert = ({
  message = "Bericht succesvol verzonden. We nemen snel contact met je op.",
  onClose,
}: Props) => {
  return (
    <div className="mb-6 p-4 rounded bg-green-700 text-white border border-green-500 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-lg">✅</span>
        <span>{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-white hover:text-green-200 ml-4"
          aria-label="Sluit melding"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SuccessAlert;
