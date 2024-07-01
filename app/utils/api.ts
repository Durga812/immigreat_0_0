//Bearer 5GdDA0f25F5qMA8D73UwPmXDgnzA
export type CaseStatusResponse = {
    case_status?: {
      receiptNumber: string;
      formType: string;
      submittedDate: string;
      modifiedDate: string;
      current_case_status_text_en: string;
      current_case_status_desc_en: string;
      current_case_status_text_es: string;
      current_case_status_desc_es: string;
      hist_case_status: null | string; // Update based on actual possible values
    };
    message?: string;
    error?: string;
  };
  
  export const fetchCaseStatus = async (caseNum: string): Promise<CaseStatusResponse> => {
    const url = `https://api-int.uscis.gov/case-status/${caseNum}`;
    const headers = {
      'Authorization': 'Bearer tvxC8qIgwEpEYyJNJiteXXmF4dK2',
      'Cookie': 'TS014337b4=01e429515683ffa36214ad035b8c6d68121ca40c5e9f9c322e767133e483b5927d6fb77b85dd7e19084fa932321e5a92729052c815'
    };
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: CaseStatusResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching case status:', error.message);
        return { error: error.message };
    } else {
      console.error('Unknown error:', error);
      return { error: 'An unknown error occurred' };
    }
  }
};

  