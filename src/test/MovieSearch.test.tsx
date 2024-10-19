
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { REACT_APP_API_KEY, REACT_APP_BASE_URL } from "../env";
import MovieList from "../components/MovieList";
import { render, screen } from '@testing-library/react';

describe("fetchUsers", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
     
      mock.onGet(REACT_APP_BASE_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        params: { apikey: REACT_APP_API_KEY,
                  s:"ironman",
                  page:1,
                  type:"movie"
         } 
      }).reply(200, {
        Response: "False", Error: "oopsieDaisy"
      });
      // when
      render(<MovieList name='ironman'/>);

      const element = screen.getByText(/oopsieDaisy/i);

      expect(element).toBeInTheDocument();
    });
  });
});