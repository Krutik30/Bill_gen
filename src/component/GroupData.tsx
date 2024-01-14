import React, { useReducer } from 'react';
import { WorkObjectType } from './FormFill';
import InputObject from '../formElement/InputObject';
import { FieldValues, UseFormRegister, useFieldArray } from 'react-hook-form';

interface GroupDataPageProps {
    groups: WorkObjectType[];
    currentPage: number;
    register: UseFormRegister<FieldValues>;
    control: any;
    setValue: any;
}

const GroupDataPage: React.FC<GroupDataPageProps> = ({ groups, currentPage, register, control, setValue }) => {
    const currentGroupIndex = currentPage - 2;
    const [, forceUpdate] = useReducer(x => x + 1, 0);


    // const { fields: workObjects, append: appendGroup, remove: removeGroup } = useFieldArray({
    //     control,
    //     name: `groups[${currentGroupIndex}].workObjects`,
    // });

    const currentGroup = groups[currentGroupIndex];

    const handleAddWorkObject = () => {
        const newWorkObject = {
            objectName: '',
            length: 0,
            width: 0,
            height: 0,
        };

        // Update the current group with the new workObject
        const updatedGroups = [...groups];
        updatedGroups[currentGroupIndex].workObjects.push(newWorkObject);

        // Update the form data using setValue
        updatedGroups.forEach((group, index) => {
            setValue(`groups[${index}]`, group);
        });
        forceUpdate()
    };

    return (
        <div>
            <h3>{`Group ${currentGroupIndex + 1}`}</h3>
            {currentGroup.workObjects.map((workObject, workObjectIndex) => (
                <div key={workObjectIndex}>
                    <InputObject register={register} workObjectIndex={workObjectIndex} workObject={workObject} groupIndex={currentGroupIndex} />
                </div>
            ))}
            <button
                type='button'
                className='form-add-button'
                onClick={handleAddWorkObject}
            >
                + Add More
            </button>
        </div>
    );
};

export default GroupDataPage;
