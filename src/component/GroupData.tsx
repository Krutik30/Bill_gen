// GroupDataPage.tsx
import React from 'react';
import { WorkObjectType } from './FormFill';
import InputObject from '../formElement/InputObject';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface GroupDataPageProps {
    groups: WorkObjectType[];
    currentPage: number;
    register: UseFormRegister<FieldValues>;
}

const GroupDataPage: React.FC<GroupDataPageProps> = ({ groups, currentPage, register }) => {
    const currentGroupIndex = currentPage - 2; 

    const currentGroup = groups[currentGroupIndex];

    return (
        <div>
            <h3>{`Group ${currentGroupIndex + 1}`}</h3>
            {currentGroup.workObject.map((workObject, workObjectIndex) => (
                <div key={workObjectIndex}>
                    <InputObject register={register}  />
                </div>
            ))}
        </div>
    );
};

export default GroupDataPage;
