/* eslint-disable */
import operate from "../operate";

describe("operate", () => {
  it("should add two numbers", () => {
    const res = operate("4", "6", "+");
    expect(res).toMatchSnapshot();
  });

  it("should subtract two numbers", () => {
    const res = operate("5", "2", "-");
    expect(res).toMatchSnapshot();
  });

  it("should multiply two numbers", () => {
    const res = operate("2", "8", "x");
    expect(res).toMatchSnapshot();
  });

  it("should divide two numbers", () => {
    const res = operate("4", "2", "÷");
    expect(res).toMatchSnapshot();
  });

  it("should find modulo of two numbers", () => {
    const res = operate("8", "2", "%");
    expect(res).toMatchSnapshot();
  });

  it("should throw an error for unknown operation", () => {
    expect(() => operate("5", "3", "^")).toThrowError("Unknown operation '^'");
  });

  it('should handle division by zero', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should handle modulo by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

});
