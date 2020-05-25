import  React, { Component }  from 'react';
import connect from 'react-redux/es/connect/connect';
import {getUserAction} from '../../actions/actionCreator';

export default function (ComposedComponent) {
    class Authenticate extends Component {
        initUser(){
            if(!this.props.user) {
                this.props.getUserAction();
            }
        }
        renderPage(){
            this.initUser();
            console.log(this.props.user);
            if(this.props.user !== null) {
                if(this.props.user.email) {
                    return <ComposedComponent user={this.props.user} {...this.props}/>
                }
            }
            return null

        }

        render() {
            return (
                <div>
                    { this.renderPage() }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        const { user, error } = state.authReducer;
        return {
            user,
            error
        }
    };
    const mapDispatchToProps = (dispatch) => ({
        getUserAction: () => dispatch(getUserAction()),
    });


    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authenticate);
}
