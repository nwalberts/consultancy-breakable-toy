/* eslint-disable no-undef */
import { cleanUserInput } from "../cleanUserInput";

describe("#cleanUserInput", () => {
  let squidPostRequestBody;

  beforeEach(() => {
    squidPostRequestBody = {
      name: "Casi the Octo-lord",
      species: "Stygian Under-Squid",
      experiencePoints: 9001,
      specialPower: "",
      imageUrl: "",
    };
  });

  it("removes input form properties that have empty string values", () => {
    const cleanedPostBody = cleanUserInput(squidPostRequestBody);

    expect(cleanedPostBody).toEqual({
      name: "Casi the Octo-lord",
      species: "Stygian Under-Squid",
      experiencePoints: 9001,
    });
  });
});
