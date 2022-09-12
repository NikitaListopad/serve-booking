import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from '../store/actions';
import {RootState} from "../store/reducers";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(Actions, dispatch);
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;