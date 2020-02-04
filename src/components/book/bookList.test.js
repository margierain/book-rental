import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import BookList from './index'
import { act } from "react-dom/test-utils";

jest.mock('axios')

describe('BookList component', () => {
    const contextValues = [{
        id: 1,
        type:"novel",
        duration: 1,
        bookNum: 1
    }];
    jest
        .spyOn(React, 'useContext')
        .mockImplementation(() => contextValues);

    test('loads and displays books', async () => {
        const url = 'https://api.myjson.com/bins/1f5h3i'
        await act(
          async () => {
            render(<BookList url={url} />);
            axiosMock.get.mockResolvedValueOnce({
                data: {
                    "books": [
                        {
                            "id": 1,
                            "type": "novel"
                        },
                        {
                            "id": 2,
                            "type": "regular"
                        },
                        {
                            "id": 3,
                            "type": "fiction"
                        }
                    ]
                },
            })
        });

      expect(axiosMock.get).toHaveBeenCalledTimes(1)
      expect(axiosMock.get).toHaveBeenCalledWith(url)
    })
});
