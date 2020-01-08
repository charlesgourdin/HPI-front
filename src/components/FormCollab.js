import React, { Component } from 'react';
import SectionContainer from './sectionContainer';
import { MDBContainer, MDBInput } from 'mdbreact';


class FormCollab extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      anonymous: null,
      radio_gender: null
    })
  }

  render() {
    const form_collab_anonymous = {
      position: 'absolute',
      right: '0em',
      marginTop: '-3em',
    };
    const red = {
      backgroundColor: 'red',
    }
  return(
    <>
      <SectionContainer header='A propos de l&#39;appelant' className="mt-2">

        {/* Anonyme : récupéré de la BDD ? */}
        <div 
          class="custom-control custom-checkbox custom-control-inline" 
          style={form_collab_anonymous}
        >
          <input 
            gap 
            class="custom-control-input" 
            id="form-collab_anonymous" 
            type="checkbox" 
            onClick={() => this.setState({anonymous: !this.state.anonymous})}
          />
          <label class="custom-control-label" for="form-collab_anonymous">Anonyme</label>
        </div>  
  
        <div className='form-row pl-4 pl-md-0 text-md-center'>
          <div className='form-col col-md-4'>
            <input 
              gap
              checked={this.state.radio_gender === "m" ? true : false}
              class="custom-control-input" 
              id="form-collab_m" 
              type="radio" 
              onClick={() => this.setState({radio_gender: "m"})}
            />
            <label class="custom-control-label" for="form-collab_m">Homme</label>
          </div>
          <div className='form-col col-md-4'>
            <input 
              // gap 
              checked={this.state.radio_gender === "f" ? true : false}
              class="custom-control-input" 
              id="form-collab_f" 
              type="radio" 
              onClick={()=>this.setState({radio_gender: "f"})}
            />
            <label class="custom-control-label" for="form-collab_f">Femme</label>
          </div>
          <div className='form-col col-md-4'>
            <input 
              gap 
              checked={this.state.radio_gender === "np" ? true : false}
              class="custom-control-input" 
              id="form-collab_np" 
              type="radio" 
              onClick={()=>this.setState({radio_gender: "np"})}
            />
            <label class="custom-control-label" for="form-collab_np">Non précisé</label>
          </div>
        </div>     
        <div className='form-row mt-2'>
          <div className='form-col col-md'>
            <label 
              htmlFor='form-collab_lastname'
            >
              Nom
            </label>
            <input 
              className={this.state.anonymous === true ? 'form-control red lighten-3' : 'form-control'}
              id='form-collab_lastname' 
              type='text' 
            />
          </div>
          <div className='form-col col-md'>
            <label 
              htmlFor='form-collab_firstname'
            >
              Prénom
            </label>
            <input 
              className={this.state.anonymous === true ? 'form-control red lighten-3' : 'form-control'}
              id='form-collab_firstname' 
              type='text' 
            />
          </div>
        </div>
        <div className='form-row mt-2'>
          <div className='form-col col-md'>
            <label 
              htmlFor='form-collab_age'
            >
              Age
            </label>
            <input 
              className={this.state.anonymous === true ? 'form-control red lighten-3' : 'form-control'}
              id='form-collab_age' 
              type='number' 
            />
          </div>
          <div className='form-col col-md'>
            <label 
              htmlFor='form-collab_anc'
            >
              Ancienneté
            </label>
            <input 
              className={this.state.anonymous === true ? 'form-control red lighten-3' : 'form-control'}
              id='form-collab_anc' 
              type='text' 
            />
          </div>
        </div>
      </SectionContainer>
    
    </>
  )}
}

export default FormCollab;
