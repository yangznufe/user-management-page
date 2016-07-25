/**
 * Profile page container
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

// Libraries
import { connect } from 'react-redux';
// Self-defined
import UserPage from '../../../components/content/pages/UserPage';

const mapStateToProps = (state, ownProps) => {
    const { basePath } = state;
    const { user } = state.user;
    const { users } = state.users;

    const viewUserId = ownProps.params.userId;
    let userExists = true;
    let viewUser = users.find((eachUser) => {
        return eachUser._id === viewUserId;
    });

    if (!viewUser) {
        viewUser = {};
        userExists = false;
    }

    return {
        basePath,
        currentUser: user,
        userId: viewUserId,
        user: viewUser,
        users: users,
        userExists
    };
};

export default connect(mapStateToProps)(UserPage);
