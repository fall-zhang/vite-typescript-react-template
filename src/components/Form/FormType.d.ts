type FormType = 'input'|'number'|'select'|'searchSelect'|'image'|'slot'
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
  options:Option[]
}

export type {
  FormItem
}