import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import "./style.scss";
import {TextField, Radio} from "@material-ui/core";
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            checkRadio: '',
        },
        onSubmit: () => {
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            checkRadio: Yup.string().required('radio group is required'),
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

    function handleChangeRadio(e) {
        setFieldValue('checkRadio', e.target.id);
    }


    return (
        <div className={"mainContainerForm"}>
            <div className="login-registration-area">
                <div className="login-area">
                    <p className={"styleWelcome"}>Բարի գալուստ Loyalty</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className={"spanStyle"}>Մուտք</span>
                        <span className={"spanStyle"}>Գրանցվել</span>
                        <div>
                            <MailOutlineTwoToneIcon className={"iconStyle"}/>

                            <TextField
                                className={"loginStyle"}
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

                        <p className="error-message">{touched.errorMessage}</p>
                        <div>

                            <LockOutlinedIcon className={"iconStyle"}/>
                            <TextField
                                className={"passStyle"}
                                placeholder="Գաղտնաբառ"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={touched.password && errors.password}
                                helperText={touched.password && errors.password}
                                touched={touched.password}
                                errorMessage={errors["password"]}
                            />
                            <VisibilityOutlinedIcon style={{
                                position: 'absolute',
                                right: '25px',
                            }} className={"iconStyle"}/>

                        </div>

                        <div>
                            <span className={"forgotPassword"}>Մոռացե՞լ եք գաղնաբառը</span>
                            <div className={"mainContainerRadio"}>
                                <Radio type="checkbox"
                                       id="savePasswords"
                                       checked={values.checkRadio === "savePasswords"}
                                       onChange={handleChangeRadio}
                                       className={(touched.checkRadio && errors.checkRadio) ? "radioStyle" : ""}
                                />

                                <label htmlFor="savePasswords">Հիշել մուտքանունը</label>
                            </div>

                        </div>
                        <div className={"sss"} style={{paddingTop: "170px",}}>
                            <button
                                placeholder={"Մուտք"}
                                className={"login-button"}
                                disabled={isSubmitting}
                                type="submit"
                            >

                                <ExitToAppTwoToneIcon className={"styleExit"} style={{
                                    position: 'absolute',
                                    left: '29.68 %',
                                    right: '8.33 %',
                                    top: '8.33 %',
                                    bottom: '8.33 %',
                                    paddingLeft: "16px",

                                }}/>

                                <span className={"buttonLogin"}>Մուտք</span>

                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;