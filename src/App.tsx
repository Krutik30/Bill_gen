// App.js
import React, { useState } from 'react';
import FormFill from './component/FormFill';
import PdfModal from './component/PdfDocument';

const App = () => {
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
  );
};

export default App;
