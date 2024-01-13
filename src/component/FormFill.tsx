import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInput } from '../formElement/InputField';

export interface FormData {
    name: string;
    billName: string;
    priceOfFoot: number;
    numberOfRooms: string;
    workDone: string[];
}

export interface FormFillProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSubmit: Function | ((data: FormData) => void);
}

function FormFill({ onSubmit }: FormFillProps) {
    const {
        register,
        handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = useForm<any>();


    const onSubmitHandler: SubmitHandler<FormData> = (data) => {
        onSubmit({ ...data });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>
            <FormInput label="Your Name" name="name" register={register} />
            <FormInput label="Bill Name" name="billName" register={register} />
            {/* <FormInput label='Address' name='address' register={register} type='text-area' height={20} /> */}

                        
            <FormInput label="Price of Foot" name="priceOfFoot" register={register} type="number" />


            <button type="submit" className="form-button">
                Submit
            </button>
        </form>
    );
}

export default FormFill;