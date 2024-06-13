import * as yup from 'yup'

export const schema1 = yup.object().shape({
  firstName: yup.string().trim().required('FirstName is required'),
  lastName: yup.string().trim().required('LastName is required'),
  designation: yup.string().trim().required('Designation is required'),
  email: yup.string().trim().required('Email is required').email('Email must be valid email'),
  address1: yup.string().trim().min(10).max(100).required('Address1 is required'),
  address2: yup.string().trim().max(100),
  relation: yup.string().trim().required('Relation is required'),
  state: yup.string().trim().required('State is required'),
  gender: yup.string().trim().required(),
  city: yup.string().trim().required('City is required'),
  phone: yup.string().trim().required('Phone is required').matches( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "Phone number is not valid" ),
  zipcode: yup.string().trim().required('Zipcode is required').matches(/^[0-9]{6,6}$/g , 'Enter valid 6 digit zipcode')
})

export const schema2 = yup.object().shape({
  sscBoard: yup.string().trim().required('Board is Required'),
  sscYear: yup.number().min(1960).max(2024).required('Year is required'),
  sscPer: yup.number().required('percentage is required'),
  hscBoard: yup.string().trim().required('Board is Required'),
  hscYear: yup.number().min(1960).max(2024).required('Year is required'),
  hscPer: yup.number().required('percentage is required'),
  bacBoard: yup.string().trim().required('Board is Required'),
  bacYear: yup.number().min(1960).max(2024).required('Year is required'),
  bacUni: yup.string().trim().required('University is Required'),
  bacPer: yup.number().required('percentage is required'),
  masBoard: yup.string().trim(),
  masYear: yup.number().min(1960).max(2024),
  masUni: yup.string().trim(),
  masPer: yup.number()
})

export const schema3 = yup.object().shape({
   experience : yup.array().of(
    yup.object().shape({
      name : yup.string().trim().required('Name is required'),
      desig : yup.string().trim().required('Designation is required'),
    })
   )
})

export const schema4 = yup.object().shape({
  hindi : yup.boolean(),
  hread : yup.boolean(),
  hwrite : yup.boolean(),
  hspeak : yup.boolean(),
  english : yup.boolean(),
  eread : yup.boolean(),
  ewrite : yup.boolean(),
  espeak : yup.boolean(),
  gujarati : yup.boolean(),
  gread : yup.boolean(),
  gwrite : yup.boolean(),
  gspeak : yup.boolean(),
}) 

export const schema5 = yup.object().shape({
  php : yup.boolean(),
  php_lev : yup.string().trim(),
  oracle : yup.boolean(),
  oracle_lev : yup.string().trim(),
  mysql : yup.boolean(),
  mysql_lev : yup.string().trim(),
  laravel : yup.boolean(),
  laravel_lev : yup.string().trim()
})

export const schema6 = yup.object().shape({

  reference : yup.array().of(
    yup.object().shape({
      relation : yup.string().trim().required('Relation is required'),
      name : yup.string().trim().required('Name is required'),
      phone : yup.string().trim().required('Phone is required').matches( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "Phone number is not valid" ),
    })
   )
})

export const schema7 = yup.object().shape({
  ectc : yup.number().positive().required('Expected CTC is required'),
  cctc : yup.number().positive(),
  notice : yup.number().positive().required('If no fill 0'),
  location : yup.string().trim().required('Select the location'),
  department : yup.string().trim().required('Select the department')
})