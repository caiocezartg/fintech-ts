import { CSSProperties } from "react";

type IDateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const labelCSS: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-sm)",
  fontWeight: "600",
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-sm) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap-md)",
};

const inputCSS: CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-sm) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap-md)",
};

const DateInput = ({ label, ...props }: IDateInputProps) => {
  return (
    <div>
      <label style={labelCSS} htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input style={inputCSS} type="date" id={label.toLowerCase()} {...props} />
    </div>
  );
};

export default DateInput;
