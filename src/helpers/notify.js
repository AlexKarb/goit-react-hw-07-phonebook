import { toast } from 'react-toastify';

export const notify = ({ name = '', type = '' }) => {
  if (type === 'create') {
    return toast(`🦄 create new contact ${name}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (type === 'error') {
    return toast.error(`${name} is already in contacts`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
