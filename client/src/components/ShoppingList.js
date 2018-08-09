import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  // NOTE This below now comes from the Redux reducer
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Eggs' },
  //     { id: uuid(), name: 'Milk' },
  //     { id: uuid(), name: 'Bread' },
  //     { id: uuid(), name: 'Steak' }
  //   ]
  // }

  componentDidMount() {
    this.props.getItems();
  };

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    // const { items } = this.state;
    // after Redux:
    const { items } = this.props.item;
    return (
      <Container>
        {/*
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={()=> {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name: name }]
                // with ES6, since name: name is the same, can just do this:
                // items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        */}

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({id, name}) => (
                        // NOTE:  classNames  with an 's' here is needed!
                        <CSSTransition key={id} timeout={500} classNames="fade">
                          <ListGroupItem>
                            <Button
                              className="remove-btn"
                              color="danger"
                              size="sm"
                              // onClick={() => {
                              //   this.setState(state => ({
                              //     items: state.items.filter(item => item.id != id)
                              //   }));
                              // }}
                              // cleanup after Redux:
                              onClick={this.onDeleteClick.bind(this, id)}
                            >
                              &times;  {/*This is the "x" symbol */}
                            </Button>
                            &nbsp; {name}
                          </ListGroupItem>
                        </CSSTransition>
                      ))
            }
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

// export default ShoppingList;
// with Redux:

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
