import type { iFormConfig } from '@/base-ui/new-form/type'

export const formConfig: iFormConfig = {
  // colLayout: { span: 8 },
  paddingStyle: { padding: '10px 40px' },
  labelWidth: '120px',
  formItemMsg: [
    {
      type: 'input',
      val: 'id',
      label: '用户名',
      otherOptions: {
        placeholder: '请输入用户名'
      }
    },
    {
      type: 'password',
      val: 'password',
      label: '密码',
      otherOptions: {
        placeholder: '请输入密码'
      }
    },
    {
      type: 'select',
      val: 'sport',
      label: '喜欢的运动',
      otherOptions: {
        placeholder: '请选择运动'
      },
      //select中value是实际展示的值 label是标签
      options: [
        {
          value: '篮球',
          label: '篮球'
        },
        {
          value: '足球',
          label: '足球'
        },
        {
          value: '网球',
          label: '网球'
        }
      ]
    },
    {
      type: 'datapicker',
      val: 'date',
      label: '日期',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始日期', //可以驼峰填写
        endPlaceholder: '结束日期'
      }
    }
  ]
}
