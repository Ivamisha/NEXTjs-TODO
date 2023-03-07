import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from '../store/index'

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
