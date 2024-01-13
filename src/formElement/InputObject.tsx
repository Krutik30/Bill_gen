import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormInput } from './InputField';

interface InputObjectProps {
    register: UseFormRegister<FieldValues>;
    groupIndex: number;
}

const InputObject: React.FC<InputObjectProps> = ({ register, groupIndex }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <FormInput label={`Object Name `} name={`workObjects[${groupIndex}].objectName`} register={register} />
        </div>
        <div
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <FormInput label="H" name={`workObjects[${groupIndex}].dimensions.height`} type="number" register={register} />
            </div>
            <div>
                <FormInput label="W" name={`workObjects[${groupIndex}].dimensions.width`} type="number" register={register} />
            </div>
            <div>
                <FormInput label="L" name={`workObjects[${groupIndex}].dimensions.length`} type="number" register={register} />
            </div>
        </div>
        {/* <div
            style={{
                width: '45%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <FormInput label="Total" name={`workObjects[${groupIndex}].total`} type="number" register={register} />
            <FormInput label="Price" name={`workObjects[${groupIndex}].price`} type="number" register={register} />
        </div> */}
    </div>
);

export default InputObject;
