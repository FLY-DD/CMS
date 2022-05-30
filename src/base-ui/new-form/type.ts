type itemType = 'input' | 'password' | 'select' | 'datapicker'

export interface iFormOption {
  type: itemType
  label: string
  options?: any[]
  rule?: any[]
  otherOptions?: {
    type?: string
    placeholder?: string
    startPlaceholder?: string
    endPlaceholder?: string
  }
}

export interface iFormConfig {
  colLayout?: any
  paddingStyle?: any
  formItemMsg: iFormOption[]
  labelWidth?: string
}
//otheroptions存放直接属性上的配置
//其他存放差异配置
