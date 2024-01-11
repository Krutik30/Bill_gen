import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface FormData {
    name: string;
    billName: string;
    priceOfFoot: number;
    numberOfRooms: string;
    workDone: string[];
}

export interface FormFillProps {
    onSubmit: (data: FormData) => void;
}

function FormFill({ onSubmit }: FormFillProps) {
    const {
        register,
        handleSubmit,
        setValue,
        // formState: { errors },
    } = useForm<FormData>();

    // State for workDone
    const [workDone, setWorkDone] = useState<string[]>([]);

    const handleRoomNumberChange = (value: string) => {
        const numberOfRooms = parseInt(value, 10) || 0;
        setWorkDone(Array.from({ length: numberOfRooms }, (_, index) => workDone[index] || ''));
    };

    // Update workDone state on input change
    const handleWorkDoneChange = (index: number, value: string) => {
        const updatedWorkDone = [...workDone];
        updatedWorkDone[index] = value;
        setWorkDone(updatedWorkDone);
    };

    const onSubmitHandler: SubmitHandler<FormData> = (data) => {
        onSubmit({ ...data, workDone });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>
            <label className="form-label">Your Name:</label>
            <input {...register('name')} className="form-input" />

            <label className="form-label">Bill Name:</label>
            <input {...register('billName')} className="form-input" />

            <label className="form-label">Price of Foot:</label>
            <input type="number" {...register('priceOfFoot')} className="form-input" />

            <label className="form-label">Number of Rooms:</label>
            <input
                type="number"
                {...register('numberOfRooms')}
                onChange={(e) => {
                    handleRoomNumberChange(e.target.value);
                    setValue('numberOfRooms', e.target.value);
                }}
                className="form-input"
            />

            {Array.from({ length: workDone.length }).map((_, index) => (
                <div key={index}>
                    <label className="form-label">Work Done in Foots for Room {index + 1}:</label>
                    <input
                        value={workDone[index]}
                        onChange={(e) => handleWorkDoneChange(index, e.target.value)}
                        className="form-input"
                    />
                </div>
            ))}

            <button type="submit" className="form-button">
                Submit
            </button>
        </form>
    );
}

export default FormFill;
