import React, {Component} from 'react';
import { Button, Card } from 'antd';
import ReactBnbGallery from 'react-bnb-gallery';
import { connect } from "react-redux";


const photos = ['/Ford 1317.jpg', '/FORD 1343.jpg', '/FORD 1348.jpg'];

class ProductItem extends Component {
    state = {
      galleryOpened: false
    };

    toggleGallery = () => {
      this.setState(preState => ({
          galleryOpened: !preState.galleryOpened
      }));
    };

    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                this.props.data.map((item, key) => (
                    <Card key={key} style={{width: 240, margin: 20}}
                          cover={<img style={{width: 240, height: 200}} src={item.img} alt=""/>}
                    >
                        <Card.Meta
                        title={item.title}
                        description={item.content}
                        />
                        <Button onClick={this.toggleGallery}>{ this.props.text[3] }</Button>
                    </Card>
                ))
            }
                <ReactBnbGallery
                    show={this.state.galleryOpened}
                    photos={photos}
                    onClose={this.toggleGallery}/>
                </div>
            )
        }
}

export default connect(
    (state) => ({
        text: state.product.text,
        home: state.main.text
    })
)(ProductItem);