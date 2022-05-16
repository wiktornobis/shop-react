import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './_form.scss';

const schema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please").min(3).max(15),
    lastName: yup.string().required("Last Name should be required please").min(3).max(20),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    streetAddress: yup.string().required(),
    city: yup.string().required(),
    code: yup.string().required(),

});

export default function Form() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <div className="form">
            <h2 className="form__header">1. Delivery Address</h2>
            <div className='form__all'>
                <form className='form__content' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")}
                           className='form__content--input'
                           type='text'
                           placeholder='First name*'/>
                    <p>{errors.firstName?.message}</p>

                    <input {...register("lastName")}
                           className='form__content--input'
                           type='text'
                           placeholder='Last name*'/>
                    <p>{errors.lastName?.message}</p>

                    <input {...register("email")}
                           className='form__content--input'
                           type='email'
                           placeholder='E-mail*'/>
                    <p>{errors.email?.message}</p>

                    <input {...register("phone")}
                           className='form__content--input'
                           type='tel'
                           placeholder='Phone*'/>
                    <p>{errors.phone?.message}</p>

                    <input {...register("streetAddress")}
                           className='form__content--input'
                           type='text'
                           placeholder='Address*'/>
                    <p>{errors.streetAddress?.message}</p>

                    <input {...register("city")}
                           className='form__content--input'
                           type='text'
                           placeholder='City*'/>
                    <p>{errors.city?.message}</p>

                    <input {...register("code")}
                           className='form__content--input'
                           type='text'
                           placeholder='Postal / Zip Code*'/>
                    <p>{errors.code?.message}</p>

                    <input className='form__content--button' type="submit" value='PAY'/>
                </form>
            </div>
        </div>
    );
}
