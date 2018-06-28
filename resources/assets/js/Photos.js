require('./bootstrap');
import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';

export default class Photos extends Component {

    constructor(props){
        super(props);
        this.state = {
            photos : [],
            next_page : '/photos',
            loading : false
        }
    }

    componentDidMount(){
        this.getPhotos();
    }

    getPhotos(){
        if(!this.state.loading){
            this.setState({
                loading : true,
            });
            this.registerScrollEvent();
            axios.get(this.state.next_page)
                .then((response) => {
                    const paginator = response.data,
                        photos = paginator.data;

                    if(photos.length){
                        this.setState({
                            photos : [...this.state.photos, ...photos],
                            next_page : paginator.next_page_url,
                            loading: false,
                        });
                    }

                    if(!paginator.next_page_url){
                        this.removeScrollEvent();
                    }
                });
        }
    }

    registerScrollEvent(){

        $(window).on('scroll', function() {
            if($(window).scrollTop() + $(window).height() === $(document).height()) {
                this.getPhotos();
            }
        }.bind(this));

    }

    removeScrollEvent(){
        $(window).off('scroll');
    }

    render() {
        return (
            <div className="photos mr-auto ml-auto col-xs-12 col-sm-12 col-md-8 col-lg-8">
                {this.state.photos.length &&
                    this.state.photos.map((post) =>{
                        return (
                            <div
                                key={post.id}
                                className="photo mb-3">
                                <h3>
                                    Image ID # {post.id}
                                </h3>
                                <img src={post.uri} alt=""/>
                            </div>
                        )
                    })
                }

                <div className="loading-spinner">
                    <ScaleLoader
                        color={'#292929'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}
