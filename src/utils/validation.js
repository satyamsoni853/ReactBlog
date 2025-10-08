

/**
 * Validates the form data for the BlogForm.
 * @param {object} formData 
 * @returns {object}
 */
export const validateBlogForm = (formData) => {
  const errors = {};


  if (!formData.title.trim()) {
    errors.title = 'Title is required.';
  } else if (formData.title.trim().length < 5) {
    errors.title = 'Title must be at least 5 characters long.';
  }


  if (!formData.blogger_name.trim()) {
    errors.blogger_name = 'Blogger name is required.';
  }

  if (!formData.category) {
    errors.category = 'Please select a category.';
  }


  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!formData.image_url.trim()) {
    errors.image_url = 'Image URL is required.';
  } else if (!urlRegex.test(formData.image_url.trim())) {
    errors.image_url = 'Please enter a valid URL.';
  }

  if (!formData.description.trim()) {
    errors.description = 'Description is required.';
  } else if (formData.description.trim().length < 20) {
    errors.description = 'Description must be at least 20 characters long.';
  }

  return errors;
};