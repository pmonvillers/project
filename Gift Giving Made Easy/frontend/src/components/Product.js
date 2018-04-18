import React from 'react';

class Product extends React.Component{
    render(){
           
        return(           
                
            <div className="col-md-3 mx-auto">
                <div className="card">
                <img className="card-img-top mx-auto" src={this.props.picture} alt="Card image cap" style={{width:'auto'}}  />
                <div className="card-body">
                    <div class="card-body_center">
                    <p className="card-text"style={{width:'auto'}} >{(this.props.title).substr(0, 50)}</p>
                    <p><a href={this.props.url} className="btn btn-secondary" target="_blank">Buy</a></p>
                    <a onClick={(e)=>{this.props.similarItemPost(e, this.props.asin)}}  className="btn btn-secondary">Relative Products</a>
                    </div>
                </div>
                </div>
            </div>     
        );
    }
}

export default Product;