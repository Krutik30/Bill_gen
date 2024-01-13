import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { FormInput } from '../formElement/InputField';
import Paging from './Paging';
import AddButtons from './AddButtons';
import { useState } from 'react';
import InputObject from '../formElement/InputObject';

export interface FormData {
    name: string;
    billName: string;
    priceOfFoot: number;
    address: string;
    phoneNumber: number;
    groups: string[];
    workObject: {
        nameOfGroup: string,
        objectName: string,
        length: number,
        width: number,
        height: number,
    }[];
}

export interface FormFillProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSubmit: Function | ((data: FormData) => void);
}

function FormFill({ onSubmit }: FormFillProps) {
    const {
        register,
        handleSubmit,
        control,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = useForm<any>();


    const onSubmitHandler: SubmitHandler<FormData> = (data) => {
        onSubmit({ ...data });
    };

    const { fields: groups, append: appendGroup, remove: removeGroup } = useFieldArray({
        control,
        name: 'groups',
    });

    const { fields: workObjects, append: appendWorkObject, remove: removeWorkObject } = useFieldArray({
        control,
        name: 'workObjects',
    });

    const handleAddGroup = () => {
        appendGroup({}); // Append an empty object to the 'groups' array
    };

    const handleAddWorkObject = (groupIndex: number) => {
        appendWorkObject({ nameOfGroup: `Group ${groupIndex + 1}`, objectName: '', length: 0, width: 0, height: 0 }, {
            shouldFocus: true,
        });
    };


    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>
            <FormInput label="Your Name" name="name" register={register} />
            <FormInput label="Bill Name" name="billName" register={register} />
            {/* @ts-expect-error row */}
            <FormInput label="Address" name="address" register={register} type="textarea" rows="5" />            
            <FormInput label="Price of Foot" name="priceOfFoot" register={register} type="number" />
            <FormInput label="Phone Number" name="phoneNumber" register={register} type="number" />

            {groups.map((group, groupIndex) => (
                <div key={group.id}>
                    <h3>{`Group ${groupIndex + 1}`}</h3>
                    {/* Render workObjects for each group dynamically */}
                    {workObjects.map((workObject, workObjectIndex) => (
                        <div key={workObject.id}>
                            <FormInput
                                label={`Object Name ${workObjectIndex + 1}`}
                                name={`workObjects[${workObjectIndex}].objectName`}
                                register={register}
                            />
                            <FormInput
                                label="Length"
                                name={`workObjects[${workObjectIndex}].length`}
                                register={register}
                                type="number"
                            />
                            <FormInput
                                label="Width"
                                name={`workObjects[${workObjectIndex}].width`}
                                register={register}
                                type="number"
                            />
                            <FormInput
                                label="Height"
                                name={`workObjects[${workObjectIndex}].height`}
                                register={register}
                                type="number"
                            />
                            <button type="button" onClick={() => removeWorkObject(workObjectIndex)}>
                                Remove Object
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={() => handleAddWorkObject(groupIndex)}>
                        + Add Object
                    </button>
                    <button type="button" onClick={() => removeGroup(groupIndex)}>
                        Remove Group
                    </button>
                </div>
            ))}


            <Paging />
            <AddButtons onAddGroup={handleAddGroup} />

            <button type="submit" className="form-button">
                Submit
            </button>
        </form>
    );
}

export default FormFill;