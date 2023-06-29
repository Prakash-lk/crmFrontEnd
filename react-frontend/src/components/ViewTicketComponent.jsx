// import React, { Component } from 'react'
// import TicketService from '../services/TicketService'

// class ViewTicketComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             ticket: {}
//         }
//     }

//     componentDidMount(){
//         TicketService.getTicketById(this.state.id).then( res => {
//             this.setState({ticket: res.data});
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View Ticket Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Ticket Customer Id: </label>
//                             <div> { this.state.ticket.customerId }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Ticket Subject: </label>
//                             <div> { this.state.ticket.subject }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Ticket Description ID: </label>
//                             <div> { this.state.ticket.description }</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewTicketComponent
