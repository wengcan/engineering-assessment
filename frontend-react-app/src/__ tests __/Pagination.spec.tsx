import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Pagination from '../components/Pagination';


const onPageChangeMock = jest.fn();

describe('pagination in first page',()=>{

    test('renders without crashing', async () => {
        render(
            <Pagination currentPage={0} totalPages={10} onPageChange={onPageChangeMock} />
        );
        await screen.findAllByTestId("prev-btn")
        expect(screen.getByTestId("prev-btn")).toHaveTextContent('Previous')
    });
    test('previous button disabled in first page', async () => { 
        render(
            <Pagination currentPage={0} totalPages={10} onPageChange={onPageChangeMock} />
        );
        await screen.findAllByTestId("prev-btn")
        expect(screen.getByTestId("prev-btn")).toHaveAttribute('disabled')
    });
})
