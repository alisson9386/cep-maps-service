import { Component } from "react";
import CepService from "../services/CepService";

class Inicial extends Component{
    constructor(props){
        super(props)
        this.state= {
            cep: '',
        }
        this.changeCep = this.changeCepHandler.bind(this);
    }

    changeCepHandler= (event) => {
        this.setState({cep: event.target.value});
    }
    

    buscarCep = () => {

        var lat = '';
        var lng = '';
        var cep = this.state.cep;


        CepService.buscaCep(cep).then((res) =>{
            console.log(res.data);
        })

    }
    render() {
        return (
            <div>
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">CEP</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" value={this.state.cep} onChange={this.changeCepHandler}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.buscarCep}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Inicial;