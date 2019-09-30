import { AppState } from "../data/state";
import { Dispatch } from "redux";
import { Action, setVisibilityFilter } from "../actions/actions";
import Link from "../components/Link";
import { connect } from "react-redux";
import { VisibilityFilter } from "../data/visibilityFilter";

type FilterLinkProps = {
    filter: VisibilityFilter
}

function mapStateToProps (state: AppState, ownProps: FilterLinkProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

function mapDispatchToProps (dispatch: Dispatch<Action>, ownProps: FilterLinkProps) {
    return {
        onClick: () => {
            return dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink