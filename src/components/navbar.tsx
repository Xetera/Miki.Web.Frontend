import * as React from "react";
import { Link } from "gatsby";

interface NavbarState {
    active: boolean
}

export default class NavbarComponent extends React.Component<{}, NavbarState> {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(ev : React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        this.setState({
            active: !this.state.active
        })
    }

    getActive(base) {
        if(this.state.active)
        {
            return base; 
        }
        return base + " is-active";
    }

    render() {
        return <div className="navbar" id="global-nav-bar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <p className="seperated">MIKI</p>
                    </a>
                    <a className={this.getActive("navbar-burger has-text-centered")} 
                            data-target="global-nav-menu" 
                            aria-label="menu" 
                            role="button" 
                            aria-expanded="false" 
                            onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className={this.getActive("navbar-menu")}>
                    <div className="navbar-end">
                        <NavbarItemComponent href="/commands" value="Commands" />
                        <NavbarItemComponent href="/about" value="About" />
                        <NavbarItemComponent href="/donate" value="Donate" />
                        <NavbarItemComponent href="https://blog.miki.ai/" value="Blog" />
                    </div>
                </div>
            </div>
        </div>
    }
}

interface NavbarItemProps {
    href: string,
    value: string
}

class NavbarItemComponent extends React.Component<NavbarItemProps> {
    render() {
        if(this.props.href.startsWith("http"))
        {
            return <a href={this.props.href} className="navbar-item" >
                <p>{this.props.value}</p>
            </a>
        } else {
            return <Link to={this.props.href} className="navbar-item" >
                <p>{this.props.value}</p>
            </Link>
        }
    }
}