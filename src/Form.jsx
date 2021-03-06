import React, { Component } from "react";

class Form extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="well well-sm">
                            <form className="form-horizontal" method="post">
                                <fieldset>
                                    <legend className="text-center header">Contactanos</legend>

                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <div className="col-md-8">
                                            <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                        <div className="col-md-8">
                                            <input id="email" name="email" type="text" placeholder="Email" className="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                        <div className="col-md-8">
                                            <input id="phone" name="phone" type="text" placeholder="Numero de celular" className="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                        <div className="col-md-8">
                                            <textarea class="form-control" id="message" name="message" placeholder="Dejanos un mensaje" rows="7"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-12 text-center">
                                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;