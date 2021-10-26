import Button from '../../../components/Button';
import { Formik } from 'formik';
import styles from './login.module.css'


export default function Login() {

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
            errors.email = 'Length of password should be at least 8 characters';
        }
      
        return errors;
    };
    return (
        <main className={styles.pageContainer}>
            <h3>Sign in to your account!</h3>
            <section className={styles.authContainer}>
                <Formik initialValues={{ email: '', password: '' }} validate = {validate} onSubmit={handleSubmit}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>

                            <div className="row ">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                <div className={styles.error}>
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="password">Password:</label>
                                <input type="password"  id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                <div className={styles.error}>
                                    {errors.password && touched.password && errors.password}
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