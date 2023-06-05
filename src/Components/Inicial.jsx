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

        

        var cep = this.state.cep;


        CepService.buscaOpenCage(cep).then((res) =>{
            console.log(res.data);
            const { lat, lng } = res.data.results[0].geometry;
            console.log(lat, lng)
        })

    }
    render() {
        return (
            <div className="container">
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">CEP</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.cep} onChange={this.changeCepHandler}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.buscarCep}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Inicial;