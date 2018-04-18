import React from 'react';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

class DisplayProducts extends React.Component{
    render(){
       
        let productJSX = this.props.product.map(product=>{
            let picture;
            if(product['MediumImage']){
                picture = product['MediumImage'].URL
            } else {
                picture = '/noImage.jpg'
            }
            return <  Product  title = {product.ItemAttributes.Title}
                                 url = {product.DetailPageURL}
                             picture = {picture}  
                                asin = {product.ASIN}
                     similarItemPost = {this.props.similarItemPost}
                                          />
        })
        return(
                 
            <div >              
                <Header newResearch={this.props.newSearch}/>  
                    <div className='container mx-auto'  >
                        <div classname='cards'>
                            <div className='row' >
                                {
                                    !productJSX.length ?
                                    <div className='mx-auto'>
                                    <p>'Sorry No Products Found...'</p>
                                    </div>
                                    :
                                    productJSX
                                }  
                            </div> 
                        </div>
                    </div>
                <Footer/>     
            </div>
        )
    }
}

export default DisplayProducts;