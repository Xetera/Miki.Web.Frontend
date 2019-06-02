import * as React from "react";

interface TestimonialProps {
    quote: string,
    imageURL: string,
    imageAlt: string,
    name: string
}

export default class TestimonialComponent extends React.Component<TestimonialProps> {
    render() {
        return <div className="column is-4">
            <figure className="testimonial">
                <blockquote className="has-background-light">{this.props.quote}</blockquote>
                <div className="author">
                    <img src={this.props.imageURL} alt={this.props.imageAlt}/>
                    <h5 className="has-text-black">
                        {this.props.name}
                    </h5>
                </div>
            </figure>
        </div>
    }
}