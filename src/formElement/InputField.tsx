import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  type?: 'text' | 'password' | 'checkbox' | 'radio' | 'number' | 'textarea';
  required?: boolean
}

export const FormInput = ({
  label,
  name,
  register,
  type = 'text',
  required=true,
  ...rest
}: FormInputProps) => {
  const commonProps = {
    ...rest,
    className: `
      form-input {
        width: 100%;
        padding: 8px;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      form-label {
        display: block;
        margin-bottom: 4px;
      }
    `,
    id: name as string,
    name: name as string,
    type,
  };

  return (
    <div>
      <label className="form-label" htmlFor={name as string}>
        {label}:
      </label>
      {type === 'textarea' ? (
        <textarea {...register(name)} {...commonProps} />
      ) : (
        <input {...register(name)} {...commonProps} required={required}/>
      )}
    </div>
  );
};
