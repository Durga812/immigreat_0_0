// pages/case_status.tsx
import React, { useState } from 'react';
import "../app/globals.css"
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { fetchCaseStatus, CaseStatusResponse } from '@/app/utils/api';
import { validateCaseNumber } from '@/app/utils/validation';

const CaseStatus = () => {
    const [caseNumber, setCaseNumber] = useState('');
    const [caseStatus, setCaseStatus] = useState<CaseStatusResponse | null>(null);
    const [error, setError] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCaseNumber(event.target.value);
    };
  
    const handleSubmit = async () => {
      if (!validateCaseNumber(caseNumber)) {
        setError('Invalid case number format. Please enter a valid case number.');
        return;
      }
      setError('');
      const result = await fetchCaseStatus(caseNumber);
      setCaseStatus(result);
    };
  
    return (
      <>
        <Navbar />
        <div className="container pt-32 pb-56 md:pb-96 mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            USCIS Case Status
            <div className="h-1 bg-gray-400 w-1/4 mt-2"></div> 
          </h1>
          <div className="mt-8">
            <label htmlFor="caseNumber" className="block text-gray-700 text-sm font-bold mb-2">
              USCIS Case Number
            </label>
            <input
              type="text"
              id="caseNumber"
              value={caseNumber}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full md:w-1/2 lg:w-1/3 bg-gray-100"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              onClick={handleSubmit}
              className="mt-4 bg-[#E49347] text-black font-bold m-6 py-2 px-4 rounded-full hover:bg-orange-500"
            >
              Get Your Status
            </button>
          </div>
          {caseStatus && (
            <div className="mt-8">
              {caseStatus.error ? (
                <div className="text-red-500">
                  <h3 className="font-bold">Error:</h3>
                  <p>{caseStatus.error}</p>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-gray-100">
                  <h3 className="text-lg font-bold">Case Status:</h3>
                  <p><strong>Receipt Number:</strong> {caseStatus.case_status?.receiptNumber}</p>
                  <p><strong>Form Type:</strong> {caseStatus.case_status?.formType}</p>
                  <p><strong>Submitted Date:</strong> {caseStatus.case_status?.submittedDate}</p>
                  <p><strong>Modified Date:</strong> {caseStatus.case_status?.modifiedDate}</p>
                  <p><strong>Status (EN):</strong> {caseStatus.case_status?.current_case_status_text_en}</p>
                  {caseStatus.case_status?.current_case_status_desc_en && (
                    <p><strong>Description (EN):</strong> <span dangerouslySetInnerHTML={{ __html: caseStatus.case_status.current_case_status_desc_en as string }} /></p>
                  )}
                  {/* Uncomment the lines below if you want to display the Spanish status and description */}
                  {/* {caseStatus.case_status?.current_case_status_text_es && (
                    <p><strong>Status (ES):</strong> {caseStatus.case_status.current_case_status_text_es}</p>
                  )}
                  {caseStatus.case_status?.current_case_status_desc_es && (
                    <p><strong>Description (ES):</strong> <span dangerouslySetInnerHTML={{ __html: caseStatus.case_status.current_case_status_desc_es as string }} /></p>
                  )} */}
                </div>
              )}
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  };
  
  export default CaseStatus;