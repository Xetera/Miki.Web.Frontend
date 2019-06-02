import React from "react";
import LandingImage from "../img/landing-image.png";
import { TestimonialComponent } from "./components/testimonial";

const landingImageStyle = {
    borderRadius: "15px"
}

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount(){
        window.addEventListener("load", this.onLoad);
    }

    onLoad() {
        let previousPosition = window.scrollY;
        let header_nav = document.getElementById("global-nav-bar");
        
        header_nav.classList.add("is-dark", "navbar-large", "is-fixed-top", "is-smoother");
        window.onscroll = e => {
            if (window.scrollY > 0 && previousPosition === 0) {
                header_nav.classList.remove("navbar-large");
                header_nav.classList.remove("is-dark");
            } else if (window.scrollY <= 0) {
                header_nav.classList.add("navbar-large");
                header_nav.classList.add("is-dark");
            }
        
            previousPosition = window.scrollY;
        };
    }

    render() {
        return <div>
            <div className="section hero is-fullheight is-textured first">
                <div className="container hero-body">
                    <div className="columns is-vcentered">
                        <div className="column is-5 content">
                            <h1 className="title has-text-white is-spaced">MIKI for Discord</h1>
                            <p className="subtitle has-text-white">Your solution to a great Discord Community!</p>
                            <div className="field is-grouped">
                                <div className="control">
                                    <a className="button is-large is-info" href="/invite?ref=miki_ai">
                                        <span className="icon">
                                            <i className="fab fa-discord"></i>
                                        </span>
                                        Invite
                                    </a>
                                </div>
                                <div className="control">
                                    <a className="button is-large is-white is-outlined" href="https://discord.gg/39Xpj7K">
                                        Support
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-offset-2 is-10 is-hidden-touch is-hidden-desktop-only image">
                            <img className="has-shadow is-smooth" src={LandingImage} style={landingImageStyle} id="landing-img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section has-background-lighter container">
                <div className="has-text-centered">
                    <h2 className="title is-spaced">
                        Why pick Miki?
                    </h2>
                    <p>
                        Miki has already won the hearts of millions of people and continues to do so with her rich set of functions.
                    </p>
                </div>
                <div className="columns section">
                    <div className="column section content">
                        <div className="columns">
                            <div className="column has-text-centered is-2">
                                <i className="fal fa-user fa-3x has-text-primary"></i>
                            </div>
                            <div className="column">
                                <h1>Community</h1>
                                <p>Show off and customize your <b>profile</b> with our extensive background collection. 
                                Unleash your inner completionist by collecting all <b>50+ achievements</b> and badges. 
                                Show your affection through our <b>marriage system</b>, because everyone deserves a little 
                                bit of love!</p>
                            </div>
                        </div>
                    </div>
                    <div className="column section content">
                        <div className="columns">
                            <div className="column has-text-centered is-2">
                                <i className="fal fa-cog fa-3x has-text-primary"></i>
                            </div>
                            <div className="column">
                                <h1>Complete server control</h1>
                                <p>Miki does not play around when it comes to providing utility for your server. 
                                Server owners can incentivize their communities by implementing <b>role rewards</b>, 
                                making roles level-based, purchasable or self-assignable. In addition, Miki provides 
                                a lot of moderation tools such as cleaning up chats and removing unwanted users from your server.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns section">
                    <div className="column section content">
                        <div className="columns">
                            <div className="column has-text-centered is-2">
                                <i className="fal fa-user fa-3x has-text-primary"></i>
                            </div>
                            <div className="column">
                                <h1>Uncover Miki's potential!</h1>
                                <p>Whenever you send messages, you will receive <b>experience points</b> and climb 
                                the <b>leaderboards</b>.In addition, you can earn currency by being active and collecting 
                                daily bonuses. Furthermore, you can push your luck and risk these earnings in gambling games, 
                                such as blackjack, to become the richest person on the leaderboards!</p>
                            </div>
                        </div>
                    </div>
                    <div className="column section content">
                        <div className="columns">
                            <div className="column has-text-centered is-2">
                                <i className="fal fa-cog fa-3x has-text-primary"></i>
                            </div>
                            <div className="column">
                                <h1>Always improving!</h1>
                                <p>Our diverse community is helping us translate Miki into many languages. On top of 
                                    that, with rapid development, <b>new features are being released weekly</b>! Online 
                                    features, such as <b>dashboards, profiles and configuration</b>, are in the works as 
                                    we speak.We are consistently probing the community for more #[b ideas and suggestions] 
                                    as we speak. Got a suggestion? <a href="https://suggestion.miki.ai">Share</a> yours today!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section container title-wrapper has-text-centered">
                <h2 className="title is-2 light-text is-spaced">People love Miki!</h2>
                <h3 className="subtitle is-5">Here are some of our communities actively supporting Miki and her abilities to help your server</h3>
				<div className="section columns content-wrapper">
                    <TestimonialComponent
                        quote="Our server was losing its foundation until Miki came aboard, the community was united with all of its unique features and brought new friendships all-around!"
                        imageURL="https://cdn.miki.ai/web/landing/guilds/guild-kibii.png"
                        imageAlt="Kibii TV"
                        name="bin"/>
                    <TestimonialComponent
                        quote="Miki helps keep the flow of conversations going with her wide variety of fun commands in our server. She's great for small and large servers alike, providing both entertainment and utility!"
                        imageURL="https://cdn.miki.ai/web/landing/guilds/guild-kong.png"
                        imageAlt="Kongregation on Discord"
                        name="itsn0tme"/>
                    <TestimonialComponent
                        quote="With so many customizations and commands, Miki is one of the ultimate utility and fun bots we've seen. And trust me, we've gone through plenty!"
                        imageURL="https://cdn.miki.ai/web/landing/guilds/guild-eso.png"
                        imageAlt="ESO SQUAD"
                        name="SevenFangs"/>
                </div>  
            </div>
            <div className="section hero is-small has-text-centered has-background-primary is-textured">
                <div className="hero-body">
                    <h2 className="has-text-white title">Get started with Miki!</h2>
                    <a className="has-shadow button is-large seperated is-info is-smooth" href="/invite?ref=miki_ai">
                        Invite Miki!
                    </a>
                    <a className="has-shadow button is-large seperated is-white is-outlined is-smooth" href="/commands">
                        Learn more
                    </a>
                </div>
            </div>
            <div className="section content container">
                <h3 className="has-text-centered">
                    Latest news!
                </h3>
                <div className="columns" id="updates">
                </div>
                <div className="has-text-centered">
                    <a className="button is-large is-outlined is-primary">
                        <span className="icon is-large">
                            <i className="fas fa-bell"></i>
                        </span>
                        <span>
                            Subscribe
                        </span>
                    </a>
                </div>
            </div>
            <script type="text/javascript" src="https://blog.miki.ai/public/ghost-sdk.min.js"></script>
        </div>
    }
}
/* TODO
	script(type="text/javascript" src="https://blog.miki.ai/public/ghost-sdk.min.js")
	
	script
		include ../js/home.ts
*/