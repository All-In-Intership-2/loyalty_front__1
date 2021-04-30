import React from "react";
import {Form, useFormik} from "formik";
import "../Login/PAsswordRecovery.scss"
import * as Yup from "yup";
import {TextField} from "@material-ui/core";

const PasswordRecovery = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: () => {
        },

        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),

        })
    })
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
    } = formik;

    return (
        <>
            <div className="password-recovery-container">


                <div className="password-recovery-container">
                    <div className="password-recovery-content">
                        <div className="password-recovery-form">
                            <div className="backStyle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M20.2928 12.8229C20.6922 12.7679 21 12.4205 21 12.0001C21 11.5415 20.6337 11.1698 20.1818 11.1698L5.80007 11.1698L10.9953 5.91866L11.0747 5.8257C11.313 5.50114 11.2876 5.0398 10.9977 4.74441C10.6788 4.41948 10.1608 4.41839 9.84062 4.74198L3.25226 11.4004C3.21304 11.4386 3.17756 11.4806 3.14642 11.526C2.92336 11.8502 2.95478 12.3001 3.24067 12.5889L9.84067 19.2581L9.9326 19.3383C10.2534 19.5787 10.7079 19.551 10.9977 19.2555C11.3166 18.9306 11.3155 18.4049 10.9953 18.0813L5.79877 12.8304L20.1818 12.8304L20.2928 12.8229Z"
                                          fill="#1E1E1E"/>
                                </svg>
                                <p>Վերադառնալ</p>
                            </div>
                            <h2 className="password-recovery-subtitle1">
                                Գաղտնաբառի վերականգնում
                            </h2>
                            <p className="password-recovery-subtitle2">
                                Մուտքագրեք էլ. հասցեն, որով գրանցվել եք
                            </p>
                            <div className="form-group">

                                <TextField
                                    lassName="form-input"
                                    placeholder="Էլ. հասցե"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    touched={touched.email}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                    errorMessage={errors["email"]}
                                />
                            </div>
                            <div className="form-group">
                                <button className="submit-btn" type="submit">
                                    Ուղարկել
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PasswordRecovery;
