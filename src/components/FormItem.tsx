import React from 'react'

type Props  = {
  label: string;
  name: string;
  rules: { required: string, message: string }[];
}

const FormItem: React.FC<Props> = ({ label, name, rules }) => (
  <div></div>
)

export default FormItem
