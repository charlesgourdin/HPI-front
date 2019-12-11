import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';

class PostMessage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: null,
            message: null,
        }

    }



    submitForm = (e) =>
    {
        e.preventDefault()


        axios({
            method: 'post',
            //url: 'http://127.0.0.1:3001/api/message',
            url: 'http://192.168.146.94:4000/api/tickets',
            data: this.state
        })
            .then(function (reponse)
            {
                //On traite la suite une fois la réponse obtenue 
                //console.log(reponse);
            })
            .catch(function (erreur)
            {
                //On traite ici les erreurs éventuellement survenues
                console.log(erreur);
            });
        // alert('Merci')
    }





    onChange = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value,
            username: this.props.username
        });
        //console.log(JSON.stringify(this.state));
    }


    render()
    {
        return (
            <div>


                <div>
                    <form onSubmit={this.submitForm}>
                        <br />
                        <InputGroup >
                            <Input
                                type="text"
                                id="message"
                                name="message"
                                onChange={this.onChange}
                                value={this.state.message}

                            />
                            <Button color="primary" size="sm">Envoyer</Button>
                        </InputGroup>
                    </form>
                </div >



            </div>
        )
    }
}

export default PostMessage;