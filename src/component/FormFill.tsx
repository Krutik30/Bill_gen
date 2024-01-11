// FormFill.js
import React from 'react';
import { useForm } from 'react-hook-form';

const FormFill = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const handleRoomNumberChange = (value) => {
        const numberOfRooms = parseInt(value, 10) || 0;
        setValue('workDone', []);

        for (let i = 0; i < numberOfRooms; i++) {
            setValue(`workDone[${i}]`, '');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register('name')} />
            </label>

            <label>
                Bill Name:
                <input {...register('billName')} />
            </label>

            <label>
                Price of Foot:
                <input type="number" {...register('priceOfFoot')} />
            </label>

            <label>
                Number of Rooms:
                <input
                    type="number"
                    {...register('numberOfRooms')}
                    onChange={(e) => handleRoomNumberChange(e.target.value)}
                />
            </label>

            {Array.from({ length: parseInt(errors.numberOfRooms?.value, 10) || 0 }).map((_, index) => (
                <label key={index}>
                    Work Done in Foots for Room {index + 1}:
                    <input {...register(`workDone[${index}]`)} />
                </label>
            ))}

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormFill;
