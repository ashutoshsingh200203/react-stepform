import * as yup from 'yup'

export const schema1 = yup.object().shape({
  firstName: yup.string().trim().required('FirstName is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  lastName: yup.string().trim().required('LastName is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  designation: yup.string().trim().required('Designation is required'),
  email: yup.string().trim().required('Email is required').email('Email must be valid email'),
  address1: yup.string().trim().min(3).max(100).required('Address1 is required'),
  address2: yup.string().trim().max(100).nullable(),
  relation: yup.string().required('Relation is required'),
  state: yup.string().trim().required('State is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  gender: yup.string().trim().required(),
  city: yup.string().trim().required('City is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  phone: yup.string().trim().required('Phone is required').matches( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "Phone number is not valid" ),
  zipcode: yup.string().trim().required('Zipcode is required').matches(/^[0-9]{6,6}$/g , 'Enter valid 6 digit zipcode')
})

export const schema2 = yup.object().shape({
  sscBoard: yup.string().trim().required('Board is Required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  sscYear: yup.number().min(1960).max(2024).required('Year is required'),
  sscPer: yup.number().required('percentage is required'),
  hscBoard: yup.string().trim().required('Board is Required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  hscYear: yup.number().min(1960).max(2024).required('Year is required'),
  hscPer: yup.number().required('percentage is required'),
  bacBoard: yup.string().trim().required('Board is Required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  bacYear: yup.number().min(1960).max(2024).required('Year is required'),
  bacUni: yup.string().trim().required('University is Required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
  bacPer: yup.number().required('percentage is required'),
  masBoard: yup.string().trim().nullable(),
  masYear: yup.number().min(1960).max(2024).nullable(),
  masUni: yup.string().trim().nullable(),
  masPer: yup.number().nullable()
})

export const schema3 = yup.object().shape({
   experience : yup.array().of(
    yup.object().shape({
      name : yup.string().trim().required('Name is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
      desig : yup.string().trim().required('Designation is required'),
    })
   )
})

export const schema4 = yup.object().shape({
  hindi : yup.boolean().nullable(),
  hread : yup.boolean().nullable(),
  hwrite : yup.boolean().nullable(),
  hspeak : yup.boolean().nullable(),
  english : yup.boolean().nullable(),
  eread : yup.boolean().nullable(),
  ewrite : yup.boolean().nullable(),
  espeak : yup.boolean().nullable(),
  gujarati : yup.boolean().nullable(),
  gread : yup.boolean().nullable(),
  gwrite : yup.boolean().nullable(),
  gspeak : yup.boolean().nullable(),
}) 

export const schema5 = yup.object().shape({
  php : yup.boolean().nullable(),
  php_lev : yup.string().trim().nullable(),
  oracle : yup.boolean().nullable(),
  oracle_lev : yup.string().trim().nullable(),
  mysql : yup.boolean().nullable(),
  mysql_lev : yup.string().trim().nullable(),
  laravel : yup.boolean().nullable(),
  laravel_lev : yup.string().trim().nullable()
})

export const schema6 = yup.object().shape({
  reference : yup.array().of(
    yup.object().shape({
      relation : yup.string().trim().required('Relation is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
      name : yup.string().trim().required('Name is required').matches(/^[a-zA-Z]+$/,'Only alphabets are allowed'),
      phone : yup.string().trim().required('Phone is required').matches( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "Phone number is not valid" ),
    })
   )
})

export const schema7 = yup.object().shape({
  ectc : yup.number().positive().required('Expected CTC is required'),
  cctc : yup.number().positive().nullable(),
  notice : yup.number().positive().required('If no fill 0'),
  location : yup.string().trim().required('Select the location'),
  department : yup.string().trim().required('Select the department')
})