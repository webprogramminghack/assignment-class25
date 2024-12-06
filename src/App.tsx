import { z } from 'zod';
import styles from './App.module.scss';
import { AppForm, AppFormProps } from './components/AppForm';
import { Button } from './components/Button';

const schema = z.object({
  fullName: z
    .string()
    .refine((val) => val.trim() !== '', 'Name cannot be empty'),
  // lastName: z
  //   .string()
  //   .refine((val) => val.trim() !== '', 'Last name cannot be empty'),
  email: z.string().email('Invalid email address'),
  // country: z
  //   .object({
  //     value: z.string(),
  //     label: z.string(),
  //   })
  //   .nullable()
  //   .refine((val) => val !== null, 'Please select a country'),
  message: z
    .string()
    .refine((val) => val.trim() !== '', 'Message cannot be empty'),
});

// const countryOptions: SelectOption[] = [
//   { value: 'usa', label: 'United States' },
//   { value: 'canada', label: 'Canada' },
//   { value: 'uk', label: 'United Kingdom' },
// ];

const App = () => {
  const handleOnSubmit: AppFormProps<typeof schema>['onSubmit'] = (
    data
    // setError
  ) => {
    // pakai setError jika ingin menampilkan error pada field tertentu
    // contohnya jika ada error dari server
    // setError('email', 'Email is already used');
    console.log(data);
  };
  return (
    <div className={styles.center}>
      <h1 className={styles.title}>Let`s Get in Touch</h1>
      <p className={styles.subTitle}>
        Feel free to drop a message for any inquiries or collaborations.
      </p>
      <div className={styles.formContainer}>
        <AppForm
          schema={schema}
          onSubmit={handleOnSubmit}
          options={{ clearOnSubmit: true }}
        >
          <AppForm.Input
            name='fullName'
            label='Name'
            placeholder='Enter your name'
          />
          {/* <AppForm.Input
          name='lastName'
          label='Last Name'
          placeholder='Last Name'
          /> */}
          <AppForm.Input
            name='email'
            label='Email'
            placeholder='Enter your email'
          />
          {/* <AppForm.Select
          name='country'
          label='Country'
          options={countryOptions}
          placeholder='Select a country'
          // defaultValue={countryOptions[0]}
          /> */}
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
