type IDateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInputProps) => {
  return (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input type="date" id={label.toLowerCase()} {...props} />
    </div>
  );
};

export default DateInput;
