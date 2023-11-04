export interface DatePickerProps {
  label: string;
}

const DatePicker = ({ label }: DatePickerProps) => {
  return (
    <div>
      <h1 className="text-amber-500">Test Component</h1>
      <h2 className="text-9xl">{label}</h2>
    </div>
  );
};

export default DatePicker;
