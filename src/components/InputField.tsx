
type InputFieldProps = {
  id: string;
  label: string;
  type: string; 
  placeholder: string;
  onChange: (str:string) => void;
  minlength?: number;
  pattern?: string;
  value: string;

}

export default function InputField({id, label, type, placeholder, onChange, minlength, pattern, value }: InputFieldProps) {
  return (
    <div className="input">
      <label className="label" htmlFor={id}>{label}</label>
      <input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        onChange={(e) => onChange(e.target.value)} 
        minLength={minlength}
        pattern={pattern}
        value={value}
        className="input-item"
        required
        />
    </div>
  )
}
