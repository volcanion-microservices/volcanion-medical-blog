import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

// Custom hook để sử dụng dispatch với đúng kiểu
export const useAppDispatch: () => AppDispatch = useDispatch;
