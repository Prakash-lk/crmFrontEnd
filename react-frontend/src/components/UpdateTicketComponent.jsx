import React, { Component } from 'react'
import TicketService from '../services/TicketService';

class UpdateTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customerId: '',
            subject: '',
            description: '',
            status: '',
            assignedTo: '',
            createdAt: '',
            updatedAt: ''
        }
        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeAssignedToHandler = this.changeAssignedToHandler.bind(this);
        this.changeCreatedAtHandler = this.changeCreatedAtHandler.bind(this);
        this.changeUpdatedAtHandler = this.changeUpdatedAtHandler.bind(this);
        this.updateTicket = this.updateTicket.bind(this);
    }

    componentDidMount(){
        TicketService.getTicketById(this.state.id).then( (res) =>{
            let ticket = res.data;
            this.setState({customerId: ticket.customerId,
                subject: ticket.subject,
                description : ticket.description,
                status : ticket.status,
                assignedTo : ticket.assignedTo,
                createdAt : ticket.createdAt,
                updatedAt : ticket.updatedAt
            });
        });
    }

    updateTicket = (e) => {
        e.preventDefault();
        let ticket = {customerId: this.state.customerId, subject: this.state.subject, description: this.state.description, status: this.state.status, assignedTo: this.state.assignedTo, createdAt: this.state.createdAt, updatedAt: this.state.updatedAt};
        console.log('ticket => ' + JSON.stringify(ticket));
        console.log('id => ' + JSON.stringify(this.state.id));
        TicketService.updateTicket(ticket, this.state.id).then( res => {
            this.props.history.push('/tickets');
        });
    }
    
    changeCustomerIdHandler= (event) => {
        this.setState({customerId: event.target.value});
    }

    changeSubjectHandler= (event) => {
        this.setState({subject: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    changeAssignedToHandler= (event) => {
        this.setState({assignedTo: event.target.value});
    }

    changeCreatedAtHandler= (event) => {
        this.setState({createdAt: event.target.value});
    }

    changeUpdatedAtHandler= (event) => {
        this.setState({updatedAt: event.target.value});
    }

    cancel(){
        this.props.history.push('/tickets');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Ticket</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Id: </label>
                                            <input placeholder="Customer Id" name="customerId" className="form-control" 
                                                value={this.state.customerId} onChange={this.changeCustomerIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Subject: </label>
                                            <input placeholder="Subject" name="subject" className="form-control" 
                                                value={this.state.subject} onChange={this.changeSubjectHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description Address" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Assigned To: </label>
                                            <input placeholder="Assigned To" name="assignedTo" className="form-control" 
                                                value={this.state.assignedTo} onChange={this.changeAssignedToHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Created At: </label>
                                            <input placeholder="Created At" name="createdAt" className="form-control" 
                                                value={this.state.createdAt} onChange={this.changeCreatedAtHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Updated At: </label>
                                            <input placeholder="Updated At" name="updatedAt" className="form-control" 
                                                value={this.state.updatedAt} onChange={this.changeUpdatedAtHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updateTicket}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateTicketComponent
