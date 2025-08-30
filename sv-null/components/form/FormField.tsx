type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value: string;
  error?: string;
  suffix?: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
  children?: React.ReactNode;
  as?: "input" | "select" | "textarea";
  rows?: number;
  className?: string;
};

const FormField = ({
  name,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  value,
  error,
  suffix,
  onChange,
  onBlur,
  children,
  as = "input",
  rows,
  className = "",
}: Props) => {
  const baseClassName = `form-input disabled:opacity-50 disabled:cursor-not-allowed ${
    error ? "border-red-500" : ""
  } ${className}`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    onChange(name, e.target.value);
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    onBlur(name, e.target.value);
  };

  const commonProps = {
    name,
    required,
    disabled,
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    className: baseClassName,
  };

  return (
    <div>
      <div className={suffix ? "relative" : ""}>
        {as === "input" && (
          <input
            {...commonProps}
            type={type}
            placeholder={placeholder}
            className={suffix ? `${baseClassName} pr-32` : baseClassName}
          />
        )}
        {as === "select" && (
          <select {...commonProps}>
            {placeholder && <option value="">{placeholder}</option>}
            {children}
          </select>
        )}
        {as === "textarea" && (
          <textarea
            {...commonProps}
            placeholder={placeholder}
            rows={rows}
            className={`${baseClassName} w-full`}
          />
        )}
        {suffix && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
