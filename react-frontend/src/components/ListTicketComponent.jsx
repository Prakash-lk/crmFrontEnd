import React, { Component } from 'react';
import TicketService from '../services/TicketService';

class ListTicketComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      searchQuery: '',
    };

    this.addTicket = this.addTicket.bind(this);
    this.editTicket = this.editTicket.bind(this);
    this.deleteTicket = this.deleteTicket.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets() {
    TicketService.getTickets()
      .then((res) => {
        this.setState({ tickets: res.data });
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }

  deleteTicket(id) {
    TicketService.deleteTicket(id)
      .then((res) => {
        this.setState((prevState) => ({
          tickets: prevState.tickets.filter((ticket) => ticket.id !== id),
        }));
      })
      .catch((error) => {
        console.error('Error deleting ticket:', error);
      });
  }

  editTicket(id) {
    this.props.history.push(`/add-ticket/${id}`);
  }

  addTicket() {
    this.props.history.push('/add-ticket/_add');
  }

  handleSearch(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { tickets, searchQuery } = this.state;

    const filteredTickets = tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search subject..." value={searchQuery} onChange={this.handleSearch} />
          <button className="add-ticket-button" onClick={this.addTicket}>Add Ticket</button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Customer Id</th>
                <th>Subject</th>
                <th>Description</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket, index) => (
                <tr key={ticket.id}>
                  <td>{index+1}</td>
                  <td>{ticket.customerId}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.description}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.assignedTo}</td>
                  <td>{ticket.createdAt}</td>
                  <td>{ticket.updatedAt}</td>
                  <td>
                    <button onClick={() => this.editTicket(ticket.id)} className="btn btn-info">Update</button>
                    <button style={{ marginLeft: '10px' }} onClick={() => this.deleteTicket(ticket.id)} className="btn btn-danger" >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTicketComponent