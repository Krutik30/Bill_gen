import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    name: string;
    register: UseFormRegister<FieldValues>;
    type?: 'text' | 'password' | 'checkbox' | 'radio' | 'number' | 'textarea';
}

export const FormInput = ({
  label,
  name,
  register,
  type = 'text',
  ...rest
}: FormInputProps) => {
  const commonProps = {
    ...rest,
    className: 'form-input',
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
                <input {...register(name)} {...commonProps} />
            )}
        </div>
    );
};

