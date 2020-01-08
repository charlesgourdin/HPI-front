import React, { Component } from 'react';
import SectionContainer from './sectionContainer';
// import MDBDatePicker from 'mdbreact';


class FormPsy extends Component {
  // constructor(props) {
  //   super(props)
  // }

  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <>
        <SectionContainer header='A propos de la conversation'>
          <label 
            htmlFor='form-psy_conv'
          >
            Psychologue
          </label>
          <input 
            className='form-control' 
            id='form-psy_conv' 
            type='text' 
            value="Nom, Prénom" // Récupéré avec login/mdp
            disabled
          />
          <label 
            className="mt-2"
            htmlFor='form-psy_date'
          >
            Date de la conversation
          </label>
          {/* <MDBDatePicker cancelLabel="Effacer" getValue={this.getPickerValue} /> */}
          <input // Récupérée su serveur ou saisie ?
            className='form-control' 
            id='form-psy_date' 
            type='date' 
            value="" 
          />
          <div className='form-row mt-2'>
            <div className='form-col col-md'>
              <label 
                htmlFor='form-psy_time'
              >
                Heure
              </label>
              <input 
                className='form-control' 
                id='form-psy_time' 
                type='time' 
              />
            </div>
            <div className='form-col col-md'>
              <label 
                htmlFor='form-psy_length'
              >
                Durée
              </label>
              <input 
                className='form-control' 
                id='form-psy_length' 
                type='time' 
              />
            </div>
          </div>
        </SectionContainer>
      </>
    )
  }
}

export default FormPsy;
