import { waitFor } from "@testing-library/react";
import {renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
    let inputURL: string = "https://api.postcodes.io/postcodes/cbb675"

    test("Invalid url", async () => {
      const { result } = renderHook(() =>
        useFetch(inputURL)
      );
      await waitFor(() => expect(result.current.loading).toEqual(false));
      expect(result.current.data).toMatchObject({});
    });

    inputURL = "https://api.postcodes.io/postcodes/CB40GF "
    test("Valid url", async () => {
        const { result } = renderHook(() =>
          useFetch(inputURL)
        );
        await waitFor(() => expect(result.current.data).toHaveProperty("result"));
        expect(result.current.data).toHaveProperty("result");
      });
   
  });
  