import React from 'react';
import styles from './Container.module.css';


export default function Container({name,tel,handleChange,handleSubmit,nemeInputId, numberInputId}){

 return(
  <div>
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nemeInputId}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nemeInputId}
          onChange={handleChange}
          className = {styles.formInput}
        />
      </label>
      <label htmlFor={numberInputId}>Number:
        <input 
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          className = {styles.formInput}
          id={{numberInputId}}>
            {tel}
        </input>
      </label>
      <button className={styles.formButton}>Add contact</button>
    </form>
  </div>
 )
}