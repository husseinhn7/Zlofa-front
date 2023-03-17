import React from 'react'
import css from '../components-styles/subElement.module.css'
import { Link } from 'react-router-dom'

const SubElement = (props) => {
  return (
    <Link className={css.list }  to = {props.page} > { props.title }</Link>
  )
}

export default SubElement
