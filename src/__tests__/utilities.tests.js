import { draw } from "../utilities";
// import * as c from "./../../actions/ActionTypes";

describe("draw", () => {
  // test("should draw 1", () => {
  //   const discardPile = ["a", "b", "c", "d", "e"];
  //   // const hand = ["g", "h", "i", "j"];
  //   const drawPile = ["f"];
  //   const [expectedHand, expectedDrawpile, expectedDiscardPile] = draw(
  //     drawPile,
  //     discardPile,
  //     1
  //   );
  //   expect(expectedHand.length).toEqual(1);
  //   expect(expectedDrawpile.length).toEqual(0);
  //   expect(expectedDiscardPile.length).toEqual(5);
  // });
  test("should draw 2 and reshuffle discard pile", () => {
    const discardPile = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    // const hand = [];
    const drawPile = [];
    const [expectedHand, expectedDrawpile, expectedDiscardPile] = draw(
      drawPile,
      discardPile,
      5
    );
    expect(expectedHand.length).toEqual(5);
    expect(expectedDrawpile.length).toEqual(5);
    expect(expectedDiscardPile.length).toEqual(0);
  });
  // test("should equal one of the previous elements in the draw pile", () => {
  //   const discardPile = ["f"];
  //   // const hand = ["g", "h", "i", "j"];
  //   const drawPile = ["a", "b", "c", "d", "e"];
  //   const [expectedHand, expectedDrawpile, expectedDiscardPile] = draw(
  //     drawPile,
  //     discardPile,
  //     1
  //   );
  //   expect(expectedHand[0] === "a" || expectedHand[0] === "b" || expectedHand[0] === "c" || expectedHand[0] === "d" || expectedHand[0] === "e").toBeTruthy();
  //   // expect(expectedDrawpile.length).toEqual(4);
  //   // expect(expectedDiscardPile.length).toEqual(0);
  // });

  // test("Should successfully add new ticket data to mainTicketList", () => {
  //   const { names, location, issue, id } = ticketData;
  //   action = {
  //     type: c.ADD_TICKET,
  //     names: names,
  //     location: location,
  //     issue: issue,
  //     id: id,
  //   };
  //   expect(ticketListReducer({}, action)).toEqual({
  //     [id]: {
  //       names: names,
  //       location: location,
  //       issue: issue,
  //       id: id,
  //     },
  //   });
  // });
});
