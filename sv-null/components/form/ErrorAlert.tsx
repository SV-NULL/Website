type Props = {
  message: string;
};

const ErrorAlert = ({ message }: Props) => {
  return (
    <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
      <div className="flex items-center space-x-2">
        <svg
          className="w-5 h-5 text-red-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-red-400">{message}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
