export const validateCaseNumber = (caseNum: string): boolean => {
    const regex1 = /^[a-zA-Z]{3}[0-9]{10}$/;
    const regex2 = /^[a-zA-Z]{3}\\*[0-9]{9}$/;
    return regex1.test(caseNum) || regex2.test(caseNum);
  };
  