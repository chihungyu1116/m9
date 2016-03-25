export function mapFormData(attr, reduxForm, form) {
  let initialValues = {};
  // let isNew = true;

  // attr.forEach((key) => {
  //   if(form[key] === null || form[key] === undefined || (form[key] && form[key].length === 0)) {

  //   } else {
  //     isNew = false;
  //   }
  // });

  // console.log('is New? ',isNew)

  // if(isNew) {
  //   return form;
  // }

  attr.forEach((key) => {
    if(reduxForm && reduxForm[key] && reduxForm[key].value) {
      initialValues[key] = reduxForm[key].value
    } else {
      initialValues[key] = form[key];
    }
  });

  return initialValues;
}