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
    groupIndex: number;
}

const InputObject: React.FC<InputObjectProps> = ({ register, workObjectIndex, workObject, groupIndex }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <FormInput defaultValue={workObject.objectName} label={`Object Name`} name={`groups[${groupIndex}].workObjects[${workObjectIndex}].objectName`} register={register} />
        </div>
        <div
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <FormInput defaultValue={workObject.height} label="H" name={`groups[${groupIndex}].workObjects[${workObjectIndex}].height`} type="number" step="any" register={register} />
            </div>
            <div>
                <FormInput defaultValue={workObject.width} label="W" name={`groups[${groupIndex}].workObjects[${workObjectIndex}].width`} type="number" step="any" register={register} />
            </div>
            <div>
                <FormInput defaultValue={workObject.length} label="L" name={`groups[${groupIndex}].workObjects[${workObjectIndex}].length`} type="number" step="any" register={register} />
            </div>
        </div>
    </div>
);

export default InputObject;
