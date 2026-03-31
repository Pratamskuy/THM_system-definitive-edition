import Swal from 'sweetalert2';

const defaultOptions = {
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  customClass: {
    popup: 'swal2-custom-popup',
  },
};

export const showSuccess = (text, title = 'Success') => {
  return Swal.fire({
    title,
    text,
    icon: 'success',
    ...defaultOptions,
  });
};

export const showError = (text, title = 'Error') => {
  return Swal.fire({
    title,
    text,
    icon: 'error',
    ...defaultOptions,
  });
};

export const showWarning = (text, title = 'Warning') => {
  return Swal.fire({
    title,
    text,
    icon: 'warning',
    ...defaultOptions,
  });
};

export const showInfo = (text, title = 'Info') => {
  return Swal.fire({
    title,
    text,
    icon: 'info',
    ...defaultOptions,
  });
};

export const showConfirm = async ({
  title = 'Are you sure?',
  text = '',
  confirmButtonText = 'Yes',
  cancelButtonText = 'No',
  icon = 'question',
} = {}) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true,
    ...defaultOptions,
  });
  return result.isConfirmed;
};

export const showPrompt = async ({
  title = 'Input required',
  text = '',
  inputLabel = '',
  inputPlaceholder = '',
  inputValue = '',
} = {}) => {
  const result = await Swal.fire({
    title,
    text,
    input: 'text',
    inputLabel,
    inputPlaceholder,
    inputValue,
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    ...defaultOptions,
  });
  if (result.isConfirmed) {
    return result.value ?? '';
  }
  return null;
};
