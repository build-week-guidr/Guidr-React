import React from 'react';
import { Route, Redirect } from 'react-router-dom'


export default function(props){
 
 const {component: Component} = props
  return (
  <Route exact path="/home" props={props} render={() =>{
   const token = localStorage.getItem('token')
    
   return token
          ? <Component /> 
          : <Redirect to="/login" />
  }} />
 
  )
}