// formSubmit.js
export const submitForm = (formData) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxDJaQ4gfwWW8FBGdOBlhYXCRvP6Whw2JcWtEf5pakNsr5sU-bjyN0skhMtiOT-AEP_/exec';
  
    return fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(`Form submission error: ${error.message}`);
      });
  };
  