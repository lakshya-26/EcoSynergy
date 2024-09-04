"use client";
import React, { useState } from 'react';
import Spinner from '@/components/Spinner';
import { WithAuthentication } from '@/hoc/withAutentication';
import EnergyPage from '@/components/forms/EnergyPage/EnergyPage';
import { logEnergyData, logMyEnergyRequest } from '@/utils/EnergyApi'; // Assuming this is the API function to submit energy data

const EnergyLogPage = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (formData: logMyEnergyRequest) => {
    setIsSaving(true);
    setError(null);

    try {
      await logEnergyData(formData);
      // Handle success, maybe redirect or show a success message
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      {isSaving ? <Spinner /> : (
        <EnergyPage isLoading={isSaving} onSubmit={handleSubmit} />
      )}
      {error && <span>{error}</span>}
    </div>
  );
};

export default WithAuthentication(EnergyLogPage);
