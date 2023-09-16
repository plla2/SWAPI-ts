const validation= (values)=>{
  let errors={}
  if(!values.firstname){
    errors.firstname="성을 입력해주세요."
  }
  if(!values.lastname){
    errors.lastname="이름을 입력해주세요."
  }
  if(!values.email){
    errors.email="이메일을 입력해주세요."
  }else(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email='유효한 이메일을 입력해주세요.'
  }
  if(!values.displayname && values.displayname.length<4){
    errors.displayname="최소 4글자 이상을 입력해주세요."
  }
  if(!values.password){
    errors.password="비밀번호를 입력해주세요."
  }if(values.password.length<6){
    errors.password='6글자 이상 입력해주세요.'
  }if(!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(values.password)){
    errors.password="유효한 비밀번호를 입력해주세요."
  }
}
export default validation;