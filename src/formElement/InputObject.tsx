import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormInput } from './InputField';

interface InputObjectProps {
    register: UseFormRegister<FieldValues>;
    workObjectIndex: number
}

const InputObject: React.FC<InputObjectProps> = ({ register, workObjectIndex }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <FormInput label={`Object Name`} name={`workObjects[${workObjectIndex}].objectName`} register={register} />
        </div>
        <div
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <FormInput label="H" name={`workObjects[${workObjectIndex}].height`} type="number" register={register} />
            </div>
            <div>
                <FormInput label="W" name={`workObjects[${workObjectIndex}].width`} type="number" register={register} />
            </div>
            <div>
                <FormInput label="L" name={`workObjects[${workObjectIndex}].length`} type="number" register={register} />
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
