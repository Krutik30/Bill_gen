import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormInput } from './InputField';
interface InputObjectProps {
    register: UseFormRegister<FieldValues>;
    workObjectIndex: number;
    workObject: {
        nameOfGroup: string,
        objectName: string,
        length: number,
        width: number,
        height: number,
    };
}

const InputObject: React.FC<InputObjectProps> = ({ register, workObjectIndex, workObject }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <FormInput defaultValue={workObject.objectName} label={`Object Name`} name={`workObjects[${workObjectIndex}].objectName`} register={register} />
        </div>
        <div
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <FormInput defaultValue={workObject.height} label="H" name={`workObjects[${workObjectIndex}].height`} type="number" register={register} />
            </div>
            <div>
                <FormInput defaultValue={workObject.width} label="W" name={`workObjects[${workObjectIndex}].width`} type="number" register={register} />
            </div>
            <div>
                <FormInput defaultValue={workObject.length} label="L" name={`workObjects[${workObjectIndex}].length`} type="number" register={register} />
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
