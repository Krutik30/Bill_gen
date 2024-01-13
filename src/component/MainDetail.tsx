import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormInput } from "../formElement/InputField";

export default function MainDetail({register}: {
    register: UseFormRegister<FieldValues>;
}) {
  return (
    <div>
          <FormInput label="Your Name" name="name" register={register} />
          <FormInput label="Bill Name" name="billName" register={register} />
          {/* @ts-expect-error row */}
          <FormInput label="Address" name="address" register={register} type="textarea" rows="5" />
          <FormInput label="Price of Foot" name="priceOfFoot" register={register} type="number" />
          <FormInput label="Phone Number" name="phoneNumber" register={register} type="number" />
    </div>
  )
}
