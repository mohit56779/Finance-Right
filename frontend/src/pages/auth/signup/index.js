import Button from '../../../components/Button';
import { Formik } from 'formik';
import styles from './signup.module.css'

export default function Signup() {

  const handleSubmit = () => {
    console.log('submitted');
  };

  const validate = (values, props) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Length of password should be at least 8 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword = 'Length of password should be at least 8 characters';
    } else if (values.password !== values.confirmPassword){
      errors.confirmPassword = 'Password does not match!';

    }

    return errors;
  };
  return (
    <main className={styles.pageContainer}>
      <h3>Let's get you started!</h3>
      <section className={styles.authContainer}>
        <Formik initialValues={{ email: '', password: '', username: '', confirmPassword: '' }} validate={validate} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>

              <div className="row ">
                <label htmlFor="username">Full Name:</label>
                <input type="text" id="username" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
                <div className={styles.error}>
                  {errors.username && touched.username && errors.username}
                </div>
              </div>

              <div className="row ">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <div className={styles.error}>
                  {errors.email && touched.email && errors.email}
                </div>
              </div>

              <div className="row">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                <div className={styles.error}>
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <div className="row">
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
                <div className={styles.error}>
                  {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                </div>
              </div>

              <div className="row">
                <div className="col text-center pt-3">
                  <Button type="submit" disabled={isSubmitting} className="auth">Log in</Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </main>
  )
}