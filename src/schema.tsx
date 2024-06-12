import * as yup from 'yup'

export const schema1 = yup.object().shape({
  // firstName: yup.string().required('FirstName is required'),
  // lastName: yup.string().required('LastName is required'),
  // designation: yup.string().required('Designation is required'),
  // email: yup.string().required('Email is required').email('Email must be valid email'),
  // address1: yup.string().min(10).max(100).required('Address1 is required'),
  // address2: yup.string().max(100),
  // relation: yup.string().required('Relation is required'),
  // state: yup.string().required('State is required'),
  // gender: yup.string().required(),
  // city: yup.string().required('City is required'),
  // phone: yup.string().required('Phone is required').matches( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "Phone number is not valid" ),
  // zipcode: yup.string().required('Zipcode is required').matches(/^[0-9]{6,6}$/g , 'Enter valid 6 digit zipcode')
})

export const schema2 = yup.object().shape({
  // sscBoard: yup.string().required('Board is Required'),
  // sscYear: yup.number().min(1960).max(2025).required('Year is required'),
  // sscPer: yup.number().required('percentage is required'),
  // hscBoard: yup.string().required('Board is Required'),
  // hscYear: yup.number().min(1960).max(2025).required('Year is required'),
  // hscPer: yup.number().required('percentage is required'),
  // bacBoard: yup.string().required('Board is Required'),
  // bacYear: yup.number().min(1960).max(2025).required('Year is required'),
  // bacUni: yup.string().required('University is Required'),
  // bacPer: yup.number().required('percentage is required'),
  // masBoard: yup.string(),
  // masYear: yup.number().min(1960).max(2025),
  // masUni: yup.string(),
  // masPer: yup.number()
})

export const schema3 = yup.object().shape({
   experience : yup.array().of(
    yup.object().shape({
      name : yup.string().required('Name is required'),
      desig : yup.string().required('Designation is required'),
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
  php_lev : yup.string(),
  oracle : yup.boolean(),
  oracle_lev : yup.string(),
  mysql : yup.boolean(),
  mysql_lev : yup.string(),
  laravel : yup.boolean(),
  laravel_lev : yup.string()
})

export const schema6 = yup.object().shape({

  reference : yup.array().of(
    yup.object().shape({
      relation : yup.string().required('Relation is required'),
      name : yup.string().required('Name is required'),
      phone : yup.string().required('Phone is required').matches( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "Phone number is not valid" ),
    })
   )
})

export const schema7 = yup.object().shape({
  ectc : yup.number().positive().required('Expected CTC is required'),
  cctc : yup.number().positive(),
  notice : yup.number().positive().required('If no fill 0'),
  location : yup.string().required('Select the location'),
  department : yup.string().required('Select the department')
})