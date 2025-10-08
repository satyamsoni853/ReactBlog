export const validateBlogForm = (formData) => {
    const errors = {};
    const urlPattern = new RegExp('^(https?|ftp)://[^\\s/$.?#].[^\\s]*$', 'i');

    if (!formData.title || formData.title.trim().length < 3) {
        errors.title = "Title is required and must be at least 3 characters long.";
    }
    if (!formData.bloggername || formData.bloggername.trim().length < 3) {
        errors.bloggername = "Blogger name is required and must be at least 3 characters long.";
    }
    if (!formData.category || formData.category.trim() === '') {
        errors.category = "Category is required.";
    }
    if (!formData.imageurl || !urlPattern.test(formData.imageurl)) {
        errors.imageurl = "A valid image URL is required.";
    }
    if (!formData.description || formData.description.trim().length < 10) {
        errors.description = "Description is required and must be at least 10 characters long.";
    }

    return errors;
};