type Props = {
  name: string;
  label?: string;
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
  description?: string;
};

const FormField = ({
  name,
  label,
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
  description,
}: Props) => {
  const baseClassName = `form-input disabled:opacity-50 disabled:cursor-not-allowed ${
    error ? "border-red-500 focus:ring-red-400/50 focus:border-red-400/50" : ""
  } ${className}`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    onChange(name, e.target.value);
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    onBlur(name, e.target.value);
  };

  const commonProps = {
    id: name,
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
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          {label}
          {required && <span className="text-yellow-400 ml-1">*</span>}
        </label>
      )}
      <div className={suffix ? "relative" : ""}>
        {as === "input" && (
          <input
            {...commonProps}
            type={type}
            placeholder={placeholder}
            className={suffix ? `${baseClassName} pr-36` : baseClassName}
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
            className={`${baseClassName} w-full resize-none`}
          />
        )}
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-red-400 text-sm mt-1.5">{error}</p>}
      {description && (
        <p className="text-gray-500 text-sm mt-1.5">{description}</p>
      )}
    </div>
  );
};

export default FormField;
