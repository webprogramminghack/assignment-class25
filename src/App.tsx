// Update pull request baru 03-03-2025

import { z } from 'zod';
import { AppForm, AppFormProps } from './components/AppForm';
import { Button } from './components/Button';
import styles from './App.module.scss';

const schema = z.object({
  name: z.string().refine((val) => val.trim() !== '', 'Name cannot be empty'),
  email: z.string().email('Invalid email address'),
  message: z
    .string()
    .refine((val) => val.trim() !== '', 'Message cannot be empty'),
});

const App = () => {
  const handleOnSubmit: AppFormProps<typeof schema>['onSubmit'] = (
    data
    // setError
  ) => {
    console.log(data);
  };
  return (
    <div className={styles.contactContainer}>
      <h1>Let&apos;s Get in Touch</h1>
      <p>Feel free to drop a message for any inquiries or collaborations.</p>
      <div className={styles.formContainer}>
        <AppForm
          schema={schema}
          onSubmit={handleOnSubmit}
          options={{ clearOnSubmit: true }}
        >
          <AppForm.Input
            name='name'
            label='Name'
            placeholder='Enter your name'
          />
          <AppForm.Input
            name='email'
            label='Email'
            placeholder='Enter your email'
          />
          <AppForm.TextArea
            name='message'
            label='Message'
            placeholder='Enter your message'
          />
          <Button>Send Message</Button>
        </AppForm>
      </div>
    </div>
  );
};

export default App;
