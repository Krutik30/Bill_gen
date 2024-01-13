import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormInput } from './InputField';

const InputObject = ({ register }: {
    register: UseFormRegister<FieldValues>;
}) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <FormInput label="Object Name" name="productName" register={register} />
        </div>
        <div
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <FormInput label="H" name="dimensions.height" type="number" register={register} />
            </div>
            <div>
                <FormInput label="W" name="dimensions.width" type="number" register={register} />
            </div>
            <div>
                <FormInput label="L" name="dimensions.length" type="number" register={register} />
            </div>
        </div>
        {/* <div
            style={{
                width: '45%',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <FormInput label="Total" name="total" type="number" register={register} />
            <FormInput label="Price" name="price" type="number" register={register} />
        </div> */}
    </div>
);

export default InputObject;
