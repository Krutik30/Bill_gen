// GroupDataPage.tsx
import React from 'react';
import { WorkObjectType } from './FormFill';
import InputObject from '../formElement/InputObject';
import { FieldValues, UseFormRegister, useFieldArray } from 'react-hook-form';

interface GroupDataPageProps {
    groups: WorkObjectType[];
    currentPage: number;
    register: UseFormRegister<FieldValues>;
    control: any;
}

const GroupDataPage: React.FC<GroupDataPageProps> = ({ groups, currentPage, register, control }) => {
    const currentGroupIndex = currentPage - 2; 

    // const currentGroup = groups[currentGroupIndex];

    const { fields: workObjects, append: appendGroup, remove: removeGroup } = useFieldArray({
        control,
        name: `group[${currentGroupIndex}].workObjects`,
    });


    return (
        <div>
            <h3>{`Group ${currentGroupIndex + 1}`}</h3>
            {workObjects.map((workObject, workObjectIndex) => (
                <div key={workObjectIndex}>
                    <InputObject register={register} workObjectIndex={workObjectIndex} workObject={workObject} />
                </div>
            ))}
            <button
                type='button'
                className='form-add-button'
                onClick={() => {
                    appendGroup({
                        objectName: '', 
                        length: 0,
                        width: 0,
                        height: 0,
                    });
                }}
            >
                + Add More
            </button>
        </div>
    );
};

export default GroupDataPage;
