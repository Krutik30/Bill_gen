/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import Paging from './Paging';
import AddButtons from './AddButtons';
import MainDetail from './MainDetail';
import { useState } from 'react';
import GroupDataPage from './GroupData';

export interface FormData {
    name: string;
    billName: string;
    priceOfFoot: number;
    address: string;
    phoneNumber: number;
    groups: WorkObjectType[];
}

export interface WorkObjectType {
    groupName: string;
    workObjects: {
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
    } = useForm<FormData>();

    const onSubmitHandler: SubmitHandler<FormData> = (data) => {
        onSubmit({ ...data });
    };

    const { fields: groups, append: appendGroup, remove: removeGroup } = useFieldArray({
        control,
        name: 'groups',
    });

    const handleAddGroup = () => {
        appendGroup({
            groupName: '',
            workObjects: []
        }); 
        console.log(groups)
    };

    const [ pages, setPages ] = useState<{
        selected: number,
        totalPages: number
    }>({
        selected: 1,
        totalPages: 2
    });


    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>

            {
                pages.selected === 1 
                // @ts-expect-error register
                ? <MainDetail register={register} />
                // @ts-expect-error register
                : <GroupDataPage register={register} groups={groups} currentPage={pages.selected} control={control} />
            }
            
            {/* {groups.map((group, groupIndex) => (
                <div key={group.id}>
                    <h3>{`Group ${groupIndex + 1}`}</h3>
                    {workObjects.map((workObject, workObjectIndex) => (
                        <div key={workObject.id + workObjectIndex}>
                            <InputObject register={register} groupIndex={groupIndex} />
                        </div>
                    ))}
                </div>
            ))} */}


            <Paging pages={pages} setPages={setPages} />
            <AddButtons pages={pages} setPages={setPages} onAddGroup={handleAddGroup} />

            <button type="submit" className="form-button">
                Submit
            </button>
        </form>
    );
}

export default FormFill;