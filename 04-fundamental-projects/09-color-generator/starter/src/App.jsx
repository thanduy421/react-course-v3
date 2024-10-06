import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#aa7942').all(30));
  const notifySuccess = (message) => (toast.success(message));
  const notifyError = (message) => (toast.error(message));
  const onSubmit = (color) => {
    if (color) {
      try {
        setColors(new Values(color).all(30));
        notifySuccess('Succefully generated')
      } catch (error) {
        notifyError('Could not generate colors. Please check the color value.');
      }
    } else {
      notifyError("Please enter a color value.");
    }
  }

  return (
  <main>
    <Form onSubmit={onSubmit}/>
    <ColorList colors={colors} notifySuccess={notifySuccess}/>
    <ToastContainer position='bottom-center' />
  </main>
  );
};
export default App;
