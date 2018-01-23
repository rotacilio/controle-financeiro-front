import React, { Component } from 'react';
import ListDespesas from './ListDespesas';
import CreateDespesa from './CreateDespesa';

class Despesa extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-lg-6">
          <CreateDespesa />
        </div>
        <div className="col-lg-6">
          <ListDespesas />
        </div>
      </div>
    );
  }
}

export default Despesa;