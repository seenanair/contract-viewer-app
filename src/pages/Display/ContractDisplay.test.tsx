import React from 'react';
import { render, within} from "@testing-library/react";
import { ContractDisplay } from './ContractDisplay';
import { MemoryRouter, Route } from 'react-router-dom';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as Object,
  useParms: () => ({
    id: "dc89ff49-8449-11e7-ac1d-3c52820efd20"
  }),
}));

jest.mock("./ContractParagraphDisplay", () => ()=> 
  <div data-testid="contract-paragraphs"/>
);

jest.mock("../../hooks/useFetch", () => ({
    useFetch : ()=> {return {
        data :{
            "data": {
                        "type":"contracts",
                        "id":"dc89ff49-8449-11e7-ac1d-3c52820efd20",
                        "attributes": {
                            "name": "Contract Name"
                        }
                    },
                    "relationships": {
                        "paragraphs": {
                            "links": {"self": "/contracts/dc89ff49-8449-11e7-ac1d-3c52820efd20/paragraphs"}
                        } 
            }
        }
  }
 }
}));

describe('Display paragraph component', () => {
    test('Loading status', async () => {

      const { getByTestId} = render(
        <MemoryRouter initialEntries={["/contracts/dc89ff49-8449-11e7-ac1d-3c52820efd20"]}>
          <Route path="/contracts/:id">
            <ContractDisplay />
          </Route>
        </MemoryRouter>
      );
     
      const contractDisplay = getByTestId("contract-display");
      const paragraph = await within(contractDisplay).findAllByTestId('contract-paragraphs');
      expect(paragraph.length).toBe(1);
    });
  });


