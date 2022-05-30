import type { iFormConfig } from '@/base-ui/new-form/type'

export const formConfig: iFormConfig = {
  // colLayout: { span: 8 },
  paddingStyle: { padding: '10px 40px' },
  labelWidth: '120px',
  formItemMsg: [
    {
      type: 'input',
      label: '用户名',
      otherOptions: {
        placeholder: '请输入用户名'
      }
    },
    {
      type: 'password',
      label: '密码',
      otherOptions: {
        placeholder: '请输入密码'
      }
    },
    {
      type: 'select',
      label: '喜欢的运动',
      otherOptions: {
        placeholder: '请输入密码'
      },
      options: [
        {
          value: 'bas',
          label: '篮球'
        },
        {
          value: 'bot',
          label: '足球'
        }
      ]
    },
    {
      type: 'datapicker',
      label: '日期',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始日期', //可以驼峰填写
        endPlaceholder: '结束日期'
      }
    }
  ]
}
