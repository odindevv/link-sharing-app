import { useState } from 'react';

interface FormValues {
  [key: string]: any;
}

interface UseFormProps {
  initialState: FormValues;
}

export function useForm({ initialState }: UseFormProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const reset = (newFormReset: FormValues = initialState) => {
    setFormValues(newFormReset);
  };

  return [formValues, handleInputChange, reset] as const;
}
