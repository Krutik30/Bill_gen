import { useState } from 'react';
import FormFill from './FormFill';
import PdfModal from './PdfDocument';


export default function MakeBill() {
    const [formData, setFormData] = useState<FormData>();
    const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

    const handleFormSubmit = (data: FormData) => {
        setFormData(data);
        setIsPdfModalOpen(true);
    };

  return (
    <div>
          <div style={{ padding: 1, height: '100vh', width: '100vw' }}>
              <FormFill onSubmit={handleFormSubmit} />
          </div>

          <PdfModal
              isOpen={isPdfModalOpen}
              onRequestClose={() => setIsPdfModalOpen(false)}
              formData={formData}
          />
    </div>
  )
}
