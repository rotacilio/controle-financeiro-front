import React, { Component } from 'react';

class CreateDespesa extends Component{

  constructor(props){
    super(props);

    this.state = {
      despesa:{
        descricao:'',
        data:'',
        valor:'',
        parcelas:'',
        pagamento:''
      }
    };
  }

  inserirDespesa(e){
    e.preventDefault();
  }
  
  formatDate(e){
    console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <div className="page-header">
          <h3>Inserir Despesa</h3>
        </div>
        <form className="well clearfix" onSubmit={this.inserirDespesa.bind(this)}>
          <div className="form-group">
            <label className="control-label">Descrição:</label>
            <input type="text" className="form-control" placeholder="Insira uma descrição para a despesa" value={this.state.despesa.descricao} />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <label className="control-label">Data da Compra:</label>
                <input type="text" className="form-control" placeholder="Ex.: 01/01/2010" onKeyUp={this.formatDate.bind(this)} value={this.state.despesa.data} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label className="control-label">Valor da Compra (R$):</label>
                <input type="text" className="form-control" placeholder="Ex.: 1.234,56" value={this.state.despesa.valor} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label className="control-label">Qtd. de Parcelas:</label>
                <input type="number" className="form-control" placeholder="Ex.: 6" value={this.state.despesa.parcelas} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">Meio de Pagamento:</label>
            <select className="form-control" value={this.state.despesa.pagamento}>
              <option value="">-- Selecione um Item --</option>
              <option value="1">Opção 1</option>
              <option value="2">Opção 2</option>
              <option value="3">Opção 3</option>
            </select>
          </div>
          <div className="form-group pull-right">
            <button type="submit" className="btn btn-primary">Salvar Despesa</button>
            <button type="button" className="btn btn-default btn-cancelar">Cancelar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateDespesa;