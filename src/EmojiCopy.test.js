import { fireEvent, render, screen } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";

test("clicking on emoji row copies the symbol to clipboard", () => {
  const symbol = "😀";
  const title = "Grinning";

  render(<EmojiResultRow symbol={symbol} title={title} />);

  const emojiRow = screen.getByTestId("Grinning");

  fireEvent.click(emojiRow);

  const clipboardText = window.navigator.clipboard.readText();

  expect(clipboardText).toEqual(symbol);
});
