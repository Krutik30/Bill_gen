// App.js
import React, { useState } from 'react';
import FormFill from './component/FormFill';
import PdfModal from './component/PdfDocument';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsPdfModalOpen(true);
  };

  return (
    <div>
      <h1>Form</h1>
      <FormFill onSubmit={handleFormSubmit} />

      <PdfModal
        isOpen={isPdfModalOpen}
        onRequestClose={() => setIsPdfModalOpen(false)}
        formData={formData}
      />
    </div>
  );
};

export default App;
