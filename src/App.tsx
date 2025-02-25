import { z } from 'zod';
import style from './App.module.scss';
import { AppForm, AppFormProps } from './components/AppForm';
import { Button } from './components/Button';

const schema = z.object({
  name: z.string().refine(val => val.trim() !== '', {
    message: 'Name cannot be empty',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  message: z.string().refine(val => val.trim() !== '', {
    message: 'Message cannot be empty',
  }),
});

const App = () => {
  const handleOnSubmit: AppFormProps<typeof schema>['onSubmit'] = (
    data,
    // setError
  ) => {
    // pakai setError jika ingin menampilkan error pada field tertentu
    // contohnya jika ada error dari server
    // setError('email', 'Email is already used');
    console.log(data);
  };
  return (
    <div className={style.formContainer}>
      <p className={style.title}>Let&apos;s Get in Touch</p>
      <p className={style.subTitle}>Feel free to drop a message for any inquiries or collaborations.</p>
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
          placeholder='Leave us a message..'
        />
        <Button>Send Message</Button>
      </AppForm>
    </div>
  );
};

export default App;
