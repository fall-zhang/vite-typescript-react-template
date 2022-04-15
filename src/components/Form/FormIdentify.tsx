type FormType = 'input'|'number'|'select'|'searchSelect'|'image'
type Option = {
  label:string|number,
  value:number|string,
  children?:Option
}
interface FormItem {
  name:string
  label:string
  formType:FormType
  require:boolean
  opions:Option[]
}

export type {
  FormItem
}