describe("InputColor", () => {
  it("calls the on change handler when the input is changed", () => {
    // Arrange
    const onChangeMock = jest.fn();
    render(<KeyPairs label="123" id="123" value="123" onChange={onChangeMock} />)

    // Act
    const input = getByTestId("input-color");
    input.type("asd");

    // Assert
    expect(onChangeMock).toHaveBeenCalledWith("asd");
    expect(onChangeMock).toHaveBeenCalled();
  })
})